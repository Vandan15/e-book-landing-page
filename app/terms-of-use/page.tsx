"use client";
import React from "react";
import CommonLayout from "../components/CommonLayout";

export default function TermsOfUse() {
  return (
    <CommonLayout>
      <div className="min-h-screen bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-12 text-center text-4xl font-bold text-gray-900">
            Terms of Use
          </h1>

          <div className="rounded-lg bg-white p-8 shadow-lg">
            <p className="mb-8 text-sm text-gray-600">
              Effective Date: 22 February, 2021
            </p>

            <p className="mb-8 text-gray-700">
              Welcome to ClickToClient.pro. By accessing or using our website,
              you agree to comply with and be bound by these Terms of Use.
              Please read them carefully before using our services.
            </p>

            <div className="space-y-8">
              <section>
                <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                  1. Acceptance of Terms
                </h2>
                <p className="text-gray-700">
                  By accessing or using ClickToClient.pro, you agree to be bound
                  by these Terms of Use and all applicable laws and regulations.
                  If you do not agree, please do not use our website.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                  2. Modification of Terms
                </h2>
                <p className="text-gray-700">
                  We reserve the right to change these Terms of Use at any time
                  without prior notice. It is your responsibility to review
                  these terms periodically. Your continued use of the site after
                  any changes constitutes acceptance of the updated terms.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                  3. Use of the Website
                </h2>
                <p className="mb-4 text-gray-700">
                  You agree to use the website for lawful purposes only. You may
                  not:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-gray-700">
                  <li>
                    Attempt to gain unauthorized access to our systems or
                    networks.
                  </li>
                  <li>
                    Use the website in any way that violates applicable laws or
                    regulations.
                  </li>
                  <li>
                    Reproduce, duplicate, copy, or sell any part of our website
                    or its content for commercial purposes without permission.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                  4. User Accounts
                </h2>
                <p className="text-gray-700">
                  If you create an account on ClickToClient.pro, you are
                  responsible for maintaining its confidentiality and for all
                  activities under your account. Notify us immediately of any
                  unauthorized use.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                  5. Intellectual Property Rights
                </h2>
                <p className="text-gray-700">
                  All content on this website, including text, graphics, logos,
                  and software, is the property of ClickToClient.pro or its
                  licensors and is protected by copyright, trademark, and other
                  intellectual property laws. Unauthorized use may result in
                  legal action.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                  6. Third-Party Links
                </h2>
                <p className="text-gray-700">
                  Our website may contain links to third-party websites. These
                  links are provided for convenience and do not signify
                  endorsement. We are not responsible for the content or
                  practices of these external sites.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                  7. Disclaimer of Warranties
                </h2>
                <p className="mb-4 text-gray-700">
                  {`ClickToClient.pro provides the website and services "as is"
                  without any warranties of any kind, express or implied. We do
                  not guarantee:`}
                </p>
                <ul className="list-disc space-y-2 pl-6 text-gray-700">
                  <li>The website should be error-free or uninterrupted.</li>
                  <li>
                    That the information on the website is accurate, complete,
                    or up-to-date.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                  8. Limitation of Liability
                </h2>
                <p className="text-gray-700">
                  To the fullest extent permitted by law, ClickToClient.pro
                  shall not be liable for any indirect, incidental, special,
                  consequential, or punitive damages arising from your website
                  use.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                  9. Indemnification
                </h2>
                <p className="text-gray-700">
                  You agree to indemnify and hold harmless ClickToClient.pro,
                  its affiliates, and their respective officers, employees, and
                  agents from any claims, damages, losses, or expenses resulting
                  from your violation of these Terms of Use.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                  10. Termination
                </h2>
                <p className="text-gray-700">
                  We reserve the right to suspend or terminate your access to
                  the website at any time without prior notice for any violation
                  of these Terms of Use.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                  11. Governing Law
                </h2>
                <p className="text-gray-700">
                  These Terms of Use are governed by and construed following the
                  laws of India. Any disputes will be resolved in the courts of
                  India.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                  12. Contact Us
                </h2>
                <p className="text-gray-700">
                  If you have any questions or concerns about these Terms of
                  Use, please contact us at:
                  <br />
                  Email:{" "}
                  <a
                    href="mailto:conversionshastra@gmail.com"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    conversionshastra@gmail.com
                  </a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </CommonLayout>
  );
}
