import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

async function streamToString(stream: ReadableStream) {
  const reader = stream.getReader();
  const chunks = [];

  let done = false;
  while (!done) {
    const { value, done: readerDone } = await reader.read();
    if (value) {
      chunks.push(new TextDecoder().decode(value));
    }
    done = readerDone;
  }

  return chunks.join("");
}

export async function POST(req: NextRequest) {
  try {
    const urlEncodedString = await streamToString(req.body as ReadableStream);
    const jsonObject = Object.fromEntries(
      new URLSearchParams(urlEncodedString)
    );

    const { email, txnid } = jsonObject;
    if (email && txnid) {
      // Acknowledge webhook immediately, immediate body will be sent in queue
      setImmediate(async () => {
        try {
          if (email) {
            const excelData = {
              email,
              referenceId: txnid,
            };

            // Send data to Google Sheets
            await fetch(
              "https://script.google.com/macros/s/AKfycbz93XvEn-3JfIEBSQeNmZAz8aU1nBITVvuuLxhRRGhikNDuH3x0_qx1fnRRwm50VJ1akA/exec",
              {
                method: "POST",
                headers: {
                  "Content-Type": "text/plain",
                },
                body: JSON.stringify({ ...excelData, status: "COMPLETED" }),
              }
            );
          }
        } catch (e) {
          console.error("Error processing webhook data:", e);
        }
      });

      // Respond to Paddle immediately
      return NextResponse.json({ statusCode: "ok", message: "Received" });
    }

    return NextResponse.json({
      statusCode: "error",
      message: "Error while responding to webhook",
    });
  } catch (error) {
    return NextResponse.json({
      statusCode: "error",
      message: error,
    });
  }
}
