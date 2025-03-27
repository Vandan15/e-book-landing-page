import { isEmpty } from "lodash";
import crypto from "crypto";

type HashInput = {
  amount: string;
  txnId: string;
  productInfo: string;
  firstName: string;
  email: string;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const checkIfKeysAreEmpty = (obj: Record<string, any>) => {
  return Object.keys(obj).some((key) => isEmpty(obj[key]));
};

export const generateHash = (obj: HashInput) => {
  const { amount, productInfo, firstName, email, txnId } = obj;
  const key = process.env.NEXT_PUBLIC_PAYU_MERCHANT_KEY;
  const salt = process.env.NEXT_PUBLIC_PAYU_SALT;
  const input = `${key}|${txnId}|${amount}|${productInfo}|${firstName}|${email}|||||||||||${salt}`;
  console.log(input);
  return crypto.createHash("sha512").update(input).digest("hex");
};
