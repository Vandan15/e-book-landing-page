"use client";

import { pushDataLayerEvent } from "@/utils/analytics";
import {
  CheckoutEventNames,
  Environments,
  initializePaddle,
  Paddle,
} from "@paddle/paddle-js";
import React, { useEffect, useState } from "react";

export default function PhonePayCheckoutButton({
  btnText,
  btnIcon,
}: {
  btnText: string;
  btnIcon?: React.ReactNode;
}) {
  const [paddle, setPaddle] = useState<Paddle>();

  useEffect(() => {
    initializePaddle({
      environment: process.env.NEXT_PUBLIC_PADDLE_ENV as Environments,
      token: process.env.NEXT_PUBLIC_PADDLE_TOKEN!,
      eventCallback: (event) => {
        if (event.name === CheckoutEventNames.CHECKOUT_COMPLETED) {
          pushDataLayerEvent({
            event: "purchase",
            button_text: "Confirm",
            button_location: "paddle_checkout",
            ecommerce: {
              currency: "INR",
              value: 199,
            },
          });
        }
        //  when user info is added in paddle checkout form
        if (event.name === CheckoutEventNames.CHECKOUT_CUSTOMER_CREATED) {
          pushDataLayerEvent({
            event: "user_info_added",
            button_text: "Continue",
            button_location: "inside_purchase_modal",
            ecommerce: {
              currency: "INR",
              value: 199,
            },
          });
        }
      },
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
    //pri_01jgr0702fm2nvj74j7n57wzvp - Sandbox
    //pri_01jgqw5scw2t7jxz0tzhe2vm0p - lIVE
    paddle?.Checkout.open({
      items: [{ priceId: "pri_01jgqw5scw2t7jxz0tzhe2vm0p", quantity: 1 }],
    });
  };

  return (
    <button
      className="mb-1 flex items-center gap-2 rounded-md bg-primary px-[16px] py-[8px] text-[18px] font-bold text-white transition-all duration-500 hover:bg-white hover:text-primary md:text-[20px]"
      onClick={openCheckout}
    >
      {btnText}
      {btnIcon}
    </button>
  );
}
