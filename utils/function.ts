import { isEmpty } from "lodash";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const checkIfKeysAreEmpty = (obj: Record<string, any>) => {
  return Object.keys(obj).some((key) => isEmpty(obj[key]));
};
