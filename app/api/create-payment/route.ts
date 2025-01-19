import { ChecksumPayloadTypes } from "@/utils/common.types";
import { generatePhonePeSignature, streamToString } from "@/utils/function";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const rawBody = await streamToString(req.body as ReadableStream);
    const parsedBody = JSON.parse(rawBody);
    const { amount, orderId } = parsedBody;

    if (!amount || !orderId) {
      return NextResponse.json({
        statusCode: "error",
        message: "amount and orderId is required",
      });
    }

    const payload: ChecksumPayloadTypes = {
      merchantId: "M22VFWG2CUGXP",
      merchantTransactionId: orderId,
      merchantUserId: "M22VFWG2CUGXP",
      amount: amount * 100,
      redirectUrl: "https://webhook.site/redirect-url",
      redirectMode: "POST",
      callbackUrl: "https://webhook.site/callback-url",
      mobileNumber: "9999999999",
      paymentInstrument: {
        type: "PAY_PAGE",
      },
    };

    // const payload = {
    //   merchantId: "PGTESTPAYUAT",
    //   merchantTransactionId: "MT7850590068188104",
    //   merchantUserId: "MUID123",
    //   amount: 10000,
    //   redirectUrl: "https://webhook.site/redirect-url",
    //   redirectMode: "REDIRECT",
    //   callbackUrl: "https://webhook.site/callback-url",
    //   mobileNumber: "9999999999",
    //   paymentInstrument: {
    //     type: "PAY_PAGE",
    //   },
    // };

    const checksum = generatePhonePeSignature({
      payload,
      saltKey: "0048db1a-f666-489c-bf30-70e8786eb4d3", // API key
      saltIndex: "1",
    });

    // const checksum =
    //   "d7a8e4458caa6fcd781166bbdc85fec76740c18cb9baa9a4c48cf2387d554180###1";

    console.log(checksum);

    const response = await fetch(
      "https://api.phonepe.com/apis/hermes/pg/v1/pay",
      // "https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-VERIFY": checksum,
        },
        body: JSON.stringify(payload),
      }
    );

    const jsonData = await response.json();
    console.log(jsonData);

    if (!jsonData.success) {
      throw jsonData;
    } else {
      return NextResponse.json({
        statusCode: "success",
        data: jsonData,
      });
    }
  } catch (error) {
    return NextResponse.json({
      statusCode: "error",
      message: error,
    });
  }
}
