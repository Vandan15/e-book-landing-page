"use client";
import React from "react";
import CommonLayout from "../components/CommonLayout";

export default function PrivacyPolicy() {
  return (
    <CommonLayout>
      <div className="min-h-screen bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-12 text-center text-4xl font-bold text-gray-900">
            Privacy Policy
          </h1>

          <div className="rounded-lg bg-white p-8 shadow-lg">
            <p className="mb-8 text-sm text-gray-600">
              Effective Date: 22 February, 2021
            </p>

            <p className="mb-8 text-gray-700">
              At ClickToClient.pro, your privacy is our priority. This Privacy
              Policy outlines how we collect, use, disclose, and safeguard your
              information when you visit our website. By using our website, you
              consent to the practices described in this policy.
            </p>

            <div className="space-y-8">
              <section>
                <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                  1. Information We Collect
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="mb-2 text-xl font-medium text-gray-900">
                      a. Personal Information
                    </h3>
                    <p className="mb-2 text-gray-700">
                      When you interact with our website, we may collect
                      personal details such as:
                    </p>
                    <ul className="list-disc pl-6 text-gray-700">
                      <li>Name</li>
                      <li>Email address</li>
                      <li>Phone number</li>
                      <li>Payment details (if applicable)</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="mb-2 text-xl font-medium text-gray-900">
                      b. Non-Personal Information
                    </h3>
                    <p className="mb-2 text-gray-700">
                      We may also collect non-identifiable information such as:
                    </p>
                    <ul className="list-disc pl-6 text-gray-700">
                      <li>Browser type</li>
                      <li>Device information</li>
                      <li>IP address</li>
                      <li>Pages viewed on our site</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="mb-2 text-xl font-medium text-gray-900">
                      c. Cookies and Tracking Technologies
                    </h3>
                    <p className="text-gray-700">
                      We use cookies and similar technologies to enhance user
                      experience, track site performance, and deliver
                      personalized content.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                  2. How We Use Your Information
                </h2>
                <p className="mb-2 text-gray-700">
                  We use the information we collect for purposes such as:
                </p>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>Providing and improving our services</li>
                  <li>Responding to inquiries and customer support requests</li>
                  <li>
                    Sending updates, promotions, and marketing materials (with
                    consent)
                  </li>
                  <li>Analyzing website usage to improve functionality</li>
                </ul>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                  3. Sharing Your Information
                </h2>
                <p className="mb-4 text-gray-700">
                  We do not sell or rent your personal information to third
                  parties. However, we may share your information in the
                  following cases:
                </p>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>
                    Service Providers: To trusted third parties who assist in
                    operating our website or providing services.
                  </li>
                  <li>
                    Legal Obligations: If required by law, or to protect our
                    rights, safety, or property.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                  4. Your Rights
                </h2>
                <p className="mb-2 text-gray-700">You have the right to:</p>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>Access the personal information we hold about you.</li>
                  <li>
                    Request corrections to your data if inaccurate or
                    incomplete.
                  </li>
                  <li>{`Opt out of receiving marketing emails by clicking "unsubscribe" in any promotional email.`}</li>
                  <li>
                    Request deletion of your data, subject to legal and
                    contractual obligations.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                  5. Data Security
                </h2>
                <p className="text-gray-700">
                  We implement robust measures to protect your data, including
                  encryption, firewalls, and secure servers. However, no method
                  of transmission over the Internet is 100% secure, and we
                  cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                  6. Third-Party Links
                </h2>
                <p className="text-gray-700">
                  Our website may contain links to external websites. We are not
                  responsible for the privacy practices or content of these
                  third-party sites.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                  7. Cookies Policy
                </h2>
                <p className="mb-2 text-gray-700">We use cookies to:</p>
                <ul className="mb-4 list-disc pl-6 text-gray-700">
                  <li>Enhance site navigation and functionality.</li>
                  <li>Analyze website traffic and usage trends.</li>
                  <li>Deliver targeted advertisements.</li>
                </ul>
                <p className="text-gray-700">
                  You can manage or disable cookies in your browser settings.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                  {`8. Children's Privacy`}
                </h2>
                <p className="text-gray-700">
                  Our website is not intended for use by children under the age
                  of 13. We do not knowingly collect personal information from
                  children.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                  9. Updates to This Privacy Policy
                </h2>
                <p className="text-gray-700">
                  {`We may update this Privacy Policy periodically to reflect
                  changes in our practices or legal requirements. Changes will
                  be posted on this page with an updated "Effective Date."`}
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                  10. Contact Us
                </h2>
                <p className="text-gray-700">
                  For questions or concerns regarding this Privacy Policy,
                  please contact us at:
                  <br />
                  Email: conversionshastra@gmail.com
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </CommonLayout>
  );
}
