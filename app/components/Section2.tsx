"use client";

import {
  Certificate,
  Check,
  Headset,
  RocketLaunch,
} from "@phosphor-icons/react/";
import Image from "next/image";

const Section2 = () => {
  return (
    <section className="flex w-full flex-col items-center justify-center bg-bgLight">
      <div className="flex w-full max-w-[1636px] justify-between gap-[32px] px-[160px] py-[42px] max-xl:px-[60px] max-lg:flex-col-reverse max-sm:px-[30px]">
        {/* Left */}
        <div className="flex items-center justify-center">
          <Image
            src={"/book.png"}
            alt="book.png"
            height={600}
            width={540}
            className="max-lg:w-screen"
          />
        </div>

        {/* Right */}
        <div className="flex items-center justify-center max-lg:justify-start">
          <div className="flex max-w-[600px] flex-col text-white max-lg:max-w-full">
            <h3 className="text-[16px] text-muted">
              50% discount on early purchase
            </h3>
            <h1 className="mt-[8px] text-[46px] font-extrabold leading-[58px] max-sm:text-[38px]">
              Everything in your hand using mobile or tablet
            </h1>
            <h4 className="mt-[26px] max-w-[500px] text-[18px] text-muted">
              This lovely, well-written book is concerned with creating
              typography and is essential for professionals.
            </h4>

            {/* List */}
            <div className="mt-[36px] flex flex-col gap-[24px] px-[24px] max-sm:px-[12px]">
              <div className="flex items-start justify-start gap-[32px] max-lg:gap-[24px]">
                <div className="min-w-[42px]">
                  <Certificate
                    className="flex items-center justify-center text-[42px] max-lg:text-[42px]"
                    color="#ff4343"
                  />
                </div>
                <div className="flex flex-col gap-[12px]">
                  <h5 className="text-[18px] font-semibold">
                    10+ award achieved
                  </h5>
                  <p className="text-[16px] text-muted">
                    Debitis ab ipsum a autem sit ducimus voluptatem, quos.
                    Consequatur non eum facilis, ex repellendus, vitae debitis.
                  </p>
                </div>
              </div>
              <div className="flex items-start justify-start gap-[32px] max-lg:gap-[24px]">
                <div className="min-w-[42px]">
                  <Headset
                    className="flex items-center justify-center text-[42px] max-lg:text-[42px]"
                    color="#ff4343"
                  />
                </div>
                <div className="flex flex-col gap-[12px]">
                  <h5 className="text-[18px] font-semibold">
                    Read On Any Device
                  </h5>
                  <p className="text-[16px] text-muted">
                    Debitis ab ipsum a autem sit ducimus voluptatem, quos.
                    Consequatur non eum facilis, ex repellendus, vitae debitis.
                  </p>
                </div>
              </div>
              <div className="flex items-start justify-start gap-[32px] max-lg:gap-[24px]">
                <div className="min-w-[42px]">
                  <RocketLaunch
                    className="flex items-center justify-center text-[42px] max-lg:text-[42px]"
                    color="#ff4343"
                  />
                </div>
                <div className="flex flex-col gap-[12px]">
                  <h5 className="text-[18px] font-semibold">Marketing Goals</h5>
                  <p className="text-[16px] text-muted">
                    Debitis ab ipsum a autem sit ducimus voluptatem, quos.
                    Consequatur non eum facilis, ex repellendus, vitae debitis.
                  </p>
                </div>
              </div>
            </div>

            {/* Btn */}
            <div className="mt-[36px]">
              <button className="flex items-center justify-center gap-[12px] rounded-sm bg-white px-[24px] py-[16px] font-bold text-primary transition-all duration-500 hover:bg-primary hover:text-white">
                <Check className="!hover:text-white" size={24} weight="bold" />{" "}
                More About Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
