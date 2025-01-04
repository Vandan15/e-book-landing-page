import { Environment, Paddle } from "@paddle/paddle-node-sdk";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const paddle = new Paddle(process.env.PADDLE_SECRET_KEY!, {
  environment: process.env.NEXT_PUBLIC_PADDLE_ENV as Environment, // or Environment.sandbox for accessing sandbox API
});

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
    const rawBody = await streamToString(req.body as ReadableStream);
    const parsedBody = JSON.parse(rawBody);

    const { customer_id } = parsedBody?.data;
    if (customer_id) {
      // Acknowledge webhook immediately, immediate body will be sent in queue
      setImmediate(async () => {
        try {
          const customerInfo = await paddle.customers.get(customer_id);
          const { email, id } = customerInfo;

          if (email) {
            const excelData = {
              email,
              referenceId: id,
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
      message: "No customer ID",
    });
  } catch (error) {
    return NextResponse.json({
      statusCode: "error",
      message: error,
    });
  }
}
