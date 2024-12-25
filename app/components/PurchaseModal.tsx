"use client";
import { pushDataLayerEvent } from "@/utils/analytics";
import { ROUTES } from "@/utils/constants";
import { checkIfKeysAreEmpty } from "@/utils/function";
import { CaretCircleLeft, X } from "@phosphor-icons/react";
import { omit } from "lodash";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const PurchaseModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    referenceId: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePersonalInfoFormSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    pushDataLayerEvent({
      event: "user_info_added",
      button_text: "Continue",
      button_location: "inside_purchase_modal",
      ecommerce: {
        currency: "INR",
        value: 199,
      },
    });
    setStep(2);
  };

  const handlePaymentFormSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    try {
      // Make the fetch request
      setIsLoading(true);
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbz93XvEn-3JfIEBSQeNmZAz8aU1nBITVvuuLxhRRGhikNDuH3x0_qx1fnRRwm50VJ1akA/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "text/plain", // Send data as JSON
          },
          body: JSON.stringify(formData),
        }
      );

      // Handle the response
      if (response.ok) {
        await response.text();
        pushDataLayerEvent({
          event: "purchase",
          button_text: "Confirm",
          button_location: "inside_purchase_modal",
          ecommerce: {
            currency: "INR",
            value: 199,
          },
        });
        onClose();
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999] flex h-screen w-screen items-center justify-center bg-black bg-opacity-70 p-[42px] text-black max-sm:p-[20px]">
      <div className="w-[700px] rounded-md bg-white p-[16px] md:p-[24px]">
        {/* Step - 1 */}
        {step === 1 ? (
          <div>
            {/* Modal Header */}
            <div className="flex items-start justify-between">
              <h2 className="mb-4 text-[18px] font-bold text-black">
                Step 1 : Fill in the Details
              </h2>
              <button onClick={onClose}>
                <X size={24} weight="bold" color="#000000" />
              </button>
            </div>

            {/* Form */}
            <form
              autoComplete="on"
              name="personal-info-form"
              className="mt-[12px] space-y-[24px]"
              onSubmit={handlePersonalInfoFormSubmit}
            >
              <div className="flex flex-col gap-[24px] md:flex-row">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full rounded border border-gray-500 p-2 outline-primary focus:outline-2"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full rounded border border-gray-500 p-2 outline-primary focus:outline-2"
                />
              </div>
              <div className="flex flex-col">
                <input
                  type="email"
                  name="email"
                  placeholder="e.g. abc@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full rounded border border-gray-500 p-2 outline-primary focus:outline-2"
                />
                <p className="text-[16px] italic text-gray-600">
                  Your e-book will be sent to this email.
                </p>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="rounded-md bg-primary px-[30px] py-[12px] font-bold text-white transition-all duration-500 hover:bg-bgDark hover:text-white disabled:opacity-50"
                  disabled={checkIfKeysAreEmpty(
                    omit(formData, ["referenceId"])
                  )}
                >
                  Continue (1/2)
                </button>
              </div>
            </form>
          </div>
        ) : (
          // Step - 2

          <form onSubmit={handlePaymentFormSubmit} name="payment-form">
            {/* Modal Header */}
            <div className="flex items-start justify-between">
              <div className="flex flex-col items-start gap-[12px] sm:flex-row sm:items-center">
                <CaretCircleLeft
                  size={32}
                  color="#000000"
                  onClick={() => setStep(1)}
                  className="flex-shrink-0 cursor-pointer"
                />
                <div>
                  <h2 className="text-[18px] font-bold text-black">
                    Step 2: Payment Details
                  </h2>
                  <p className="text-gray-600">
                    Your e-book will be sent to your email address.
                  </p>
                </div>
              </div>
              <button
                onClick={() => {
                  onClose();
                  setStep(1);
                }}
              >
                <X size={24} weight="bold" color="#000000" />
              </button>
            </div>
            <div className="flex flex-col items-center justify-center">
              <Image src={"/QR.png"} alt="QR" height={300} width={300} />
              <input
                type="text"
                name="referenceId"
                placeholder="Enter UPI Transaction ID"
                value={formData.referenceId}
                onChange={handleInputChange}
                className="w-full rounded border border-gray-500 p-2 outline-primary focus:outline-2"
              />
            </div>
            <p className="mt-[4px] text-[16px] italic">
              Pay on the given QR Code and Enter the UPI Transaction ID in the
              field provided to confirm your payment.{" "}
              <Link
                href={{
                  pathname: ROUTES.contact,
                }}
                className="underline underline-offset-4"
              >
                Contact us
              </Link>
            </p>
            <div className="flex justify-end">
              <button
                type="submit"
                className="mt-[12px] rounded-md bg-primary px-[30px] py-[12px] font-bold text-white transition-all duration-500 hover:bg-bgDark hover:text-white disabled:opacity-50"
                disabled={
                  checkIfKeysAreEmpty({
                    referenceId: formData.referenceId,
                  }) || isLoading
                }
              >
                Confirm
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default PurchaseModal;
