"use client";

import Image from "next/image";
import { Check } from "@phosphor-icons/react";
import PaddleButtonCheckout from "./PaddleButtonCheckout";
import CoverImg from "../assets/book-cover.png";

const Landing = () => {
  return (
    <section className="flex w-full flex-col items-center justify-center bg-bgDark">
      <div className="flex w-full max-w-[1636px] justify-between gap-[32px] px-[160px] py-[42px] max-xl:px-[60px] max-lg:flex-col max-sm:px-[30px]">
        {/* Left */}
        <div className="flex items-center justify-center max-lg:justify-start">
          <div className="flex max-w-[600px] flex-col gap-[24px] text-white max-lg:max-w-full">
            <h3 className="text-[16px]">
              Struggling with Low-Quality Leads? OR Getting High-Quality Leads
              at Very High Cost?
            </h3>
            <h1 className="text-[56px] font-extrabold leading-[58px] max-sm:text-[38px]">
              This e-book is your ALL-IN-ONE solution
            </h1>

            {/* List */}
            <div className="flex flex-col gap-[12px] text-[18px] font-semibold text-muted">
              <div className="flex items-start justify-start gap-[12px]">
                <div className="flex min-w-[32px] items-center justify-center">
                  <Check
                    className="text-[28px] max-sm:text-[24px]"
                    weight="bold"
                    color="#ff4343"
                  />
                </div>
                <p className="text-[16px] md:text-[18px]">
                  With over 5 years of experience in the lead generation
                  ecosystem, we have made an e-book to help you generate
                  high-quality leads that your business needs.
                </p>
              </div>
              <div className="flex items-start justify-start gap-[12px]">
                <div className="flex min-w-[32px] items-center justify-center">
                  <Check
                    className="text-[28px] max-sm:text-[24px]"
                    weight="bold"
                    color="#ff4343"
                  />
                </div>
                <p className="text-[16px] md:text-[18px]">
                  It includes proven strategies trusted by top lead generation
                  agencies to acquire HIGH-QUALITY leads at AFFORDABLE COSTS.
                </p>
              </div>
            </div>

            {/* Btn */}
            <div>
              <PaddleButtonCheckout btnText="Get Your E-book Now (199/-)" />
              <p className="text-[14px] italic">43% OFF (Including GST.)</p>
            </div>

            {/* <PurchaseModal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
            /> */}
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center justify-center">
          <Image
            src={CoverImg}
            alt="book-cover"
            height={600}
            width={445}
            className="max-lg:w-screen"
          />
        </div>
      </div>
    </section>
  );
};

export default Landing;
