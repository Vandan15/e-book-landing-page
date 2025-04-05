"use client";

import { pushDataLayerEvent } from "@/utils/analytics";
import React from "react";

export default function PayUCheckoutButton({
  btnText,
  btnIcon,
}: {
  btnText: string;
  btnIcon?: React.ReactNode;
}) {
  const openCheckout = () => {
    pushDataLayerEvent({
      event: "cta_click",
      button_text: btnText,
      button_location: "landing_page",
    });
    window.open(process.env.NEXT_PUBLIC_PAYU_PURCHASE_URL, "_self");
  };

  return (
    <button
      className="mb-1 flex items-center gap-2 rounded-md bg-primary px-[16px] py-[8px] text-[18px] font-bold text-white transition-all duration-500 ease-out hover:bg-white hover:text-primary md:text-[20px]"
      onClick={openCheckout}
    >
      {btnText}
      {btnIcon}
    </button>
  );
}
