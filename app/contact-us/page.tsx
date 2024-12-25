"use client";
import { useState } from "react";
import CommonLayout from "../components/CommonLayout";
import { Envelope } from "@phosphor-icons/react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    message: "",
  });
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.firstName.trim() || !formData.message.trim()) {
      setStatus({
        type: "error",
        message: "Please fill in all required fields",
      });
      return;
    }

    // Here you would typically send the data to your backend
    // For now, we'll just show a success message
    setStatus({
      type: "success",
      message: "Thank you for your message! We'll get back to you soon.",
    });
    setFormData({ firstName: "", lastName: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <CommonLayout>
      <div className="min-h-screen px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h1 className="mb-8 bg-gradient-to-r bg-clip-text text-center text-4xl font-bold text-transparent text-white">
            Contact Us
          </h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="firstName"
                className="block text-[18px] font-medium text-white"
              >
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-white shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                required
                placeholder="e.g. John"
              />
            </div>

            <div>
              <label
                htmlFor="lastName"
                className="block text-[18px] font-medium text-white"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-white shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="e.g. Doe"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-[18px] font-medium text-white"
              >
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="mt-1 block w-full resize-none rounded-md border border-gray-300 bg-transparent px-3 py-2 text-white shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                required
                placeholder="e.g. I just love this book!"
              />
            </div>

            {status.message && (
              <div
                className={`rounded-md p-4 ${
                  status.type === "success"
                    ? "bg-green-50 text-green-700"
                    : "bg-red-50 text-red-700"
                }`}
              >
                {status.message}
              </div>
            )}

            <div>
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-md border border-transparent bg-primary px-4 py-2 text-[18px] font-medium text-white shadow-sm hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                <Envelope />
                Send Email
              </button>
            </div>
          </form>
        </div>
      </div>
    </CommonLayout>
  );
};

export default ContactUs;
