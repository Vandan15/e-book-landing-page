"use client";

import { ArrowRight } from "@phosphor-icons/react";
import PurchaseModal from "./PurchaseModal";
import { useState } from "react";

const Subscribe = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="flex w-full flex-col items-center justify-center bg-bgLight">
      <div className="flex w-full max-w-[1636px] flex-col items-center justify-center gap-[32px] px-[160px] py-[42px] max-xl:px-[60px] max-lg:flex-col max-sm:px-[30px]">
        <div className="flex w-full flex-col items-center justify-center rounded-md bg-white bg-opacity-[0.05] px-[30px] py-[70px]">
          <h5 className="mb-[16px] text-[32px] text-white">
            Start Generating Quality Leads Today
          </h5>
          {/* <h2 className="text-center text-[46px] font-black text-white max-sm:text-[36px]">
            Get a free chapter of this book
          </h2> */}
          {/* <form
            action=""
            className="mt-[24px] flex w-full flex-col items-center justify-center gap-[18px]"
          > */}
          {/* <input
              type="text"
              placeholder="Email Address"
              className="h-[60px] w-full max-w-[700px] rounded-sm px-[12px] text-[18px] outline-none"
            /> */}
          <button
            className="flex h-[50px] max-w-max items-center justify-center gap-[12px] rounded-sm bg-primary px-4 text-[18px] font-bold text-white transition-all duration-500 hover:bg-[#007bff]"
            onClick={() => setIsOpen(true)}
          >
            Claim Your Copy for Just ₹199 <ArrowRight />
          </button>
          {/* </form> */}
          <p className="mt-[8px] text-center text-[14px] text-white">
            *eBook includes PDF version
          </p>
        </div>
      </div>
      <PurchaseModal
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      />
    </section>
  );
};

export default Subscribe;
