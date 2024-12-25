"use client";
import { pushDataLayerEvent } from "@/utils/analytics";
import { CaretCircleLeft, X } from "@phosphor-icons/react";
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

  const handleContinueButtonClick = () => {
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

  const handlePaymentFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999] flex h-screen w-screen items-center justify-center bg-black bg-opacity-70 p-[42px] text-black max-sm:p-[20px]">
      <div className="w-[700px] rounded-md bg-white p-[35px]">
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
            <form autoComplete="on" className="mt-[12px] space-y-[24px]">
              <div className="flex gap-[24px]">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full rounded border border-gray-500 p-2"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full rounded border border-gray-500 p-2"
                />
              </div>
              <div className="flex flex-col">
                <input
                  type="email"
                  name="email"
                  placeholder="e.g. abc@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full rounded border border-gray-500 p-2"
                />
                <p className="text-[16px] italic text-gray-600">
                  Your e-book will be sent to this email.
                </p>
              </div>
            </form>
            <div className="flex justify-end">
              <button
                onClick={handleContinueButtonClick}
                className="mt-[12px] rounded-md bg-primary px-[30px] py-[12px] font-bold text-white transition-all duration-500 hover:bg-bgDark hover:text-white"
              >
                Continue (1/2)
              </button>
            </div>
          </div>
        ) : (
          // Step - 2

          <form onSubmit={handlePaymentFormSubmit}>
            {/* Modal Header */}
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-[12px]">
                <CaretCircleLeft
                  size={32}
                  color="#000000"
                  onClick={() => setStep(1)}
                  className="cursor-pointer"
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
                className="w-full rounded border border-gray-500 p-2"
              />
            </div>
            <p className="mt-[4px] text-[16px] italic">
              Pay on the given QR Code and Enter the UPI Transaction ID in the
              field provided to confirm your payment.{" "}
              <Link href="/contact-us" className="underline underline-offset-4">
                Contact us
              </Link>
            </p>
            <div className="flex justify-end">
              <button
                type="submit"
                className="mt-[12px] rounded-md bg-primary px-[30px] py-[12px] font-bold text-white transition-all duration-500 hover:bg-bgDark hover:text-white"
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
