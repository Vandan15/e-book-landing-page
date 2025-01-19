import { isEmpty } from "lodash";
import crypto from "crypto";
import { ChecksumPayloadTypes } from "./common.types";

type SignatureTypes = {
  payload: ChecksumPayloadTypes;
  saltKey: string;
  saltIndex: string;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const checkIfKeysAreEmpty = (obj: Record<string, any>) => {
  return Object.keys(obj).some((key) => isEmpty(obj[key]));
};

export const streamToString = async (stream: ReadableStream) => {
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
};

export const generatePhonePeSignature = ({
  payload,
  saltKey,
  saltIndex,
}: SignatureTypes) => {
  const payloadString = JSON.stringify(payload);

  // console.log(encodedPayload);
  const dataToHash = `${payloadString}/pg/v1/pay${saltKey}`;

  // Generate SHA256 hash and encode it in base64
  const checksum = crypto
    .createHash("sha256")
    .update(dataToHash)
    .digest("base64");

  // Append the salt index
  const xVerify = `${checksum}###${saltIndex}`;

  return xVerify;
};
