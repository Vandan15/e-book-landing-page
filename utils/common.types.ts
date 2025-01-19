type PaymentInstrument = {
  type: "PAY_PAGE";
};

export type ChecksumPayloadTypes = {
  merchantId: string; // Merchant ID provided by PhonePe
  merchantTransactionId: string; // Unique transaction ID
  merchantUserId: string; // Merchant user ID
  amount: number; // Amount in paise
  redirectUrl: string; // URL to redirect after payment
  redirectMode: string; // Redirect mode ("POST" or "GET")
  callbackUrl: string; // Callback URL for payment status
  mobileNumber?: string; // User's mobile number
  paymentInstrument: PaymentInstrument; // Details of the payment instrument
};
