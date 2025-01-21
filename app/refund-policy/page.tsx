"use client";
import React from "react";
import CommonLayout from "../components/CommonLayout";

export default function RefundPolicy() {
  return (
    <CommonLayout>
      <div className="min-h-screen bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-12 text-center text-4xl font-bold text-gray-900">
            Refund Policy
          </h1>

          <div className="rounded-lg bg-white p-8 shadow-lg">
            <p className="mb-8 text-sm text-gray-600">
              Last Updated: December 28, 2023
            </p>

            <div className="space-y-8">
              <section>
                <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                  1. Digital Product Refund Policy
                </h2>
                <p className="text-gray-700">
                  Due to the digital nature of our e-book products, we generally
                  do not offer refunds once the product has been delivered.
                  However, we may consider refunds in specific circumstances:
                </p>
                <ul className="mt-4 list-disc pl-6 text-gray-700">
                  <li>Technical issues preventing access to the e-book</li>
                  <li>Duplicate purchases</li>
                  <li>Product not as described</li>
                </ul>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                  2. Refund Request Process
                </h2>
                <p className="text-gray-700">
                  If you believe you qualify for a refund:
                </p>
                <ul className="mt-4 list-disc pl-6 text-gray-700">
                  <li>Contact our support team within 7 days of purchase</li>
                  <li>Provide your order number and reason for the refund</li>
                  <li>
                    Our team will review your request within 48 hours if
                    applicable
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                  3. Refund Processing
                </h2>
                <p className="text-gray-700">
                  If your refund request is approved:
                </p>
                <ul className="mt-4 list-disc pl-6 text-gray-700">
                  <li>
                    Refunds will be processed to the original payment method
                  </li>
                  <li>Processing time may take 5-10 business days</li>
                  <li>
                    You will receive an email confirmation once the refund is
                    processed
                  </li>
                  <li>
                    Processing and crediting will be done within 5-10 business
                    days
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                  4. Contact Us
                </h2>
                <p className="text-gray-700">
                  If you have any questions about our refund policy, please
                  contact our support team at{" "}
                  {/* <a href="mailto:conversionshastra@gmail.com">
                    conversionshastra@gmail.com
                  </a> */}
                </p>
                <ul className="mt-4 list-disc pl-6 text-gray-700">
                  <li>
                    Email:{" "}
                    <a href="mailto:vandankhamkar1@gmail.com">
                      vandankhamkar1@gmail.com
                    </a>
                  </li>
                  <li>Phone: +91 8128770872</li>
                  <li>
                    Address: B6 Pushpakunj Smrutikunj Society, Jalalpore Road,
                    Dhamdhamiya Pool, 396445 - Navsari, Gujarat, India
                  </li>
                  <li>Managed by: VANDAN NITINKUMAR KHAMKAR</li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </CommonLayout>
  );
}
