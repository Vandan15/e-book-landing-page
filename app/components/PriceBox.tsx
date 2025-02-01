import React from "react";
import PayUCheckoutButton from "./PayUCheckoutButton";
import { CaretCircleRight } from "@phosphor-icons/react";

export default function PriceBox() {
  return (
    <div className="price-box-wrapper relative mt-6">
      <div className="flex flex-col items-center justify-center gap-[24px]">
        <div className="flex flex-col items-center">
          <h3 className="text-4xl font-extrabold italic text-white">₹199/-</h3>
          <p className="text-[16px] italic text-white">
            43% OFF (Including GST.)
          </p>
        </div>
        <div>
          <PayUCheckoutButton
            btnText="Claim Your E-book Now"
            btnIcon={<CaretCircleRight size={24} />}
          />
        </div>
      </div>
      <div className="absolute -top-[30px] right-[20px] rounded-tl-md rounded-tr-md bg-gradient-to-r from-[#41A45F] to-[#27693B] px-2 py-1 text-[14px] font-bold uppercase text-white">
        Limited Offer
      </div>
    </div>
  );
}
