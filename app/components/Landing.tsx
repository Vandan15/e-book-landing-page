"use client";

import Image from "next/image";
import { Check } from "@phosphor-icons/react";
import CoverImg from "../assets/book-cover.png";
import PriceBox from "./PriceBox";
import { generateHash } from "@/utils/function";

const Landing = () => {
  const handlePay = () => {
    const txnId = `txn_${new Date().getTime()}`;

    const hash = generateHash({
      txnId,
      amount: "10.00",
      productInfo: "Iphone",
      firstName: "John",
      email: "john@gmail.com",
    });
    fetch("https://test.payu.in/_payment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        key: process.env.NEXT_PUBLIC_PAYU_MERCHANT_KEY,
        txnid: txnId,
        amount: "10.00",
        productinfo: "Iphone",
        firstname: "John",
        email: "john@gmail.com",
        phone: "8128770872",
        surl: "https://test.com",
        furl: "https://test.com",
        hash,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <section className="flex w-full flex-col items-center justify-center bg-bgDark">
      <button onClick={handlePay} className="text-white">
        Pay Now
      </button>
      <div className="flex w-full max-w-[1636px] justify-between gap-[32px] px-[160px] py-[42px] max-xl:px-[60px] max-lg:flex-col max-sm:px-[30px]">
        {/* Left */}
        <div className="flex items-center justify-center max-lg:justify-start">
          <div className="flex max-w-[600px] flex-col gap-[24px] text-white max-lg:max-w-full">
            <h3 className="text-[16px]">
              Struggling with Low-Quality leads? OR Are You Paying More For High
              Quality Leads?
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
                  With 5+ years of experience in lead generation, we created an
                  e-book to help you acquire high-quality leads.
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
                  With 5+ years of experience in lead generation, we created an
                  e-book to help you acquire high-quality leads.
                </p>
              </div>
            </div>

            {/* Btn */}
            {/* <div className="hidden lg:block">
              <PayUCheckoutButton btnText="Get Your E-book Now (199/-)" />
              <p className="text-[14px] italic">43% OFF (Including GST.)</p>
            </div> */}
            <div className="hidden w-full lg:block">
              <PriceBox />
            </div>

            {/* <PurchaseModal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
            /> */}
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col items-center justify-center gap-8">
          <Image
            src={CoverImg}
            alt="book-cover"
            height={600}
            width={445}
            className="rounded-lg max-lg:w-screen"
          />
          <div className="block w-full lg:hidden">
            {/* <PayUCheckoutButton btnText="Get Your E-book Now (199/-)" />
            <p className="text-center text-[14px] italic text-white">
              43% OFF (Including GST.)
            </p> */}
            <PriceBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
