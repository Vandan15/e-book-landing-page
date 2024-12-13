"use client";
import { X } from "@phosphor-icons/react";
import Image from "next/image";
import React, { useState } from "react";

const Modal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    countryCode: "",
    contactNumber: "",
    city: "",
    state: "",
    country: "",
    industry: "",
    problem: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
            <form action="" className="mt-[12px] space-y-[12px]">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full rounded border p-2"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full rounded border p-2"
              />
              <div className="flex gap-2">
                <input
                  type="text"
                  name="countryCode"
                  placeholder="Country Code"
                  value={formData.countryCode}
                  onChange={handleInputChange}
                  className="w-1/3 rounded border p-2"
                />
                <input
                  type="text"
                  name="contactNumber"
                  placeholder="Contact Number"
                  value={formData.contactNumber}
                  onChange={handleInputChange}
                  className="w-2/3 rounded border p-2"
                />
              </div>
              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleInputChange}
                className="w-full rounded border p-2"
              />
              <input
                type="text"
                name="state"
                placeholder="State"
                value={formData.state}
                onChange={handleInputChange}
                className="w-full rounded border p-2"
              />
              <select
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                className="w-full rounded border p-2"
              >
                <option value="">Select Country</option>
                <option value="USA">USA</option>
                <option value="India">India</option>
                <option value="UK">UK</option>
              </select>
              <input
                type="text"
                name="industry"
                placeholder="Industry"
                value={formData.industry}
                onChange={handleInputChange}
                className="w-full rounded border p-2"
              />
              <textarea
                name="problem"
                placeholder="What problem are you facing?"
                value={formData.problem}
                onChange={handleInputChange}
                className="w-full rounded border p-2"
              />
            </form>
            <button
              onClick={() => setStep(2)}
              className="mt-[12px] rounded-md bg-primary px-[30px] py-[12px] font-bold text-white transition-all duration-500 hover:bg-bgDark hover:text-white"
            >
              Next Step
            </button>
          </div>
        ) : (
          // Step - 2

          <div>
            {/* Modal Header */}
            <div className="flex items-start justify-between">
              <h2 className="mb-4 text-[18px] font-bold text-black">
                Step 2: Your Details
              </h2>
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
              <h4 className="text-center text-[22px] font-bold text-black">
                Refrence Id : BJN415djbwbd{" "}
              </h4>
            </div>
            <button
              onClick={() => {
                onClose();
                setStep(1);
              }}
              className="mt-[12px] rounded-md bg-primary px-[30px] py-[12px] font-bold text-white transition-all duration-500 hover:bg-bgDark hover:text-white"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
