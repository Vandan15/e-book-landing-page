"use client";

import { pushDataLayerEvent } from "@/utils/analytics";
import { Environments, initializePaddle, Paddle } from "@paddle/paddle-js";
import React, { useEffect, useState } from "react";

export default function PaddleButtonCheckout({ btnText }: { btnText: string }) {
  const [paddle, setPaddle] = useState<Paddle>();

  useEffect(() => {
    initializePaddle({
      environment: process.env.NEXT_PUBLIC_PADDLE_ENV as Environments,
      token: process.env.NEXT_PUBLIC_PADDLE_TOKEN!,
    }).then((paddleInstance: Paddle | undefined) => {
      if (paddleInstance) {
        setPaddle(paddleInstance);
      }
    });
  }, []);

  const openCheckout = () => {
    pushDataLayerEvent({
      event: "cta_click",
      button_text: btnText,
      button_location: "landing_page",
    });
    paddle?.Checkout.open({
      items: [{ priceId: "pri_01jgqw5scw2t7jxz0tzhe2vm0p", quantity: 1 }],
    });
  };

  return (
    <button
      className="mb-1 rounded-md bg-primary px-[16px] py-[8px] text-[18px] font-bold transition-all duration-500 hover:bg-white hover:text-primary md:text-[20px]"
      onClick={openCheckout}
    >
      {btnText}
    </button>
  );
}
