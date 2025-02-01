"use client";

import { Warning } from "@phosphor-icons/react";
import PurchaseModal from "./PurchaseModal";
import { useState } from "react";

const Section2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="flex w-full flex-col items-center justify-center bg-bgLight">
      <div className="flex w-full max-w-[1636px] justify-between gap-[32px] px-[160px] py-[42px] max-xl:px-[60px] max-lg:flex-col-reverse max-sm:px-[30px]">
        {/* Left */}
        {/* <div className="flex items-center justify-center">
          <Image
            src={"/book.png"}
            alt="book.png"
            height={600}
            width={540}
            className="max-lg:w-screen"
          />
        </div> */}

        {/* Right */}
        <div className="flex items-center justify-center max-lg:justify-start">
          <div className="flex flex-col text-white max-lg:max-w-full">
            <h1 className="relative mt-[8px] text-[28px] font-extrabold md:text-[32px]">
              Immediately Buy This e-book If You are Struggling With the Below
              Lead Related Issues…
              <div className="absolute left-[86px] top-[40px] h-[4px] w-[180px] -translate-x-1/2 bg-primary md:left-[100px] md:top-[46px] md:w-[200px]"></div>
            </h1>
            {/* <h4 className="mt-[26px] max-w-[500px] text-[18px] text-muted">
              This lovely, well-written book is concerned with creating
              typography and is essential for professionals.
            </h4> */}

            {/* List */}
            <div className="mt-[36px] flex flex-col gap-[24px] px-[24px] max-sm:px-[12px] lg:flex-row">
              <div className="flex flex-col gap-[16px]">
                <div className="flex items-center justify-start gap-[16px]">
                  <div className="min-w-[42px]">
                    <Warning
                      className="flex items-center justify-center text-[42px] max-lg:text-[42px]"
                      color="#FFA500"
                      size={38}
                    />
                  </div>
                  <div className="flex flex-col gap-[12px]">
                    <h5 className="text-[18px] font-semibold">
                      Duplicate Leads
                    </h5>
                  </div>
                </div>
                <div className="flex items-center justify-start gap-[16px]">
                  <div className="min-w-[42px]">
                    <Warning
                      className="flex items-center justify-center text-[42px] max-lg:text-[42px]"
                      color="#FFA500"
                      size={38}
                    />
                  </div>
                  <div className="flex flex-col gap-[12px]">
                    <h5 className="text-[18px] font-semibold">
                      Leads Are Filling Fake Details
                    </h5>
                  </div>
                </div>
                <div className="flex items-center justify-start gap-[16px]">
                  <div className="min-w-[42px]">
                    <Warning
                      className="flex items-center justify-center text-[42px] max-lg:text-[42px]"
                      color="#FFA500"
                      size={38}
                    />
                  </div>
                  <div className="flex flex-col gap-[12px]">
                    <h5 className="text-[18px] font-semibold">
                      Lead Cost Is Too High
                    </h5>
                  </div>
                </div>
                <div className="flex items-center justify-start gap-[16px]">
                  <div className="min-w-[42px]">
                    <Warning
                      className="flex items-center justify-center text-[42px] max-lg:text-[42px]"
                      color="#FFA500"
                      size={38}
                    />
                  </div>
                  <div className="flex flex-col gap-[12px]">
                    <h5 className="text-[18px] font-semibold">
                      Getting Quality Leads, But Quality Is Not Consistent
                    </h5>
                  </div>
                </div>
                <div className="flex items-center justify-start gap-[16px]">
                  <div className="min-w-[42px]">
                    <Warning
                      className="flex items-center justify-center text-[42px] max-lg:text-[42px]"
                      color="#FFA500"
                      size={38}
                    />
                  </div>
                  <div className="flex flex-col gap-[12px]">
                    <h5 className="text-[18px] font-semibold">
                      Leads Have No Buying Intent
                    </h5>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[16px]">
                <div className="flex items-center justify-start gap-[16px]">
                  <div className="min-w-[42px]">
                    <Warning
                      className="flex items-center justify-center text-[42px] max-lg:text-[42px]"
                      color="#FFA500"
                      size={38}
                    />
                  </div>
                  <div className="flex flex-col gap-[12px]">
                    <h5 className="text-[18px] font-semibold">
                      Leads Have No Buying Intent
                    </h5>
                  </div>
                </div>
                <div className="flex items-center justify-start gap-[16px]">
                  <div className="min-w-[42px]">
                    <Warning
                      className="flex items-center justify-center text-[42px] max-lg:text-[42px]"
                      color="#FFA500"
                      size={38}
                    />
                  </div>
                  <div className="flex flex-col gap-[12px]">
                    <h5 className="text-[18px] font-semibold">
                      Leads Are Not Picking Calls or Replying to Messages
                    </h5>
                  </div>
                </div>
                <div className="flex items-center justify-start gap-[16px]">
                  <div className="min-w-[42px]">
                    <Warning
                      className="flex items-center justify-center text-[42px] max-lg:text-[42px]"
                      color="#FFA500"
                      size={38}
                    />
                  </div>
                  <div className="flex flex-col gap-[12px]">
                    <h5 className="text-[18px] font-semibold">
                      Leads Express Interest in the Future, But NOT NOW
                    </h5>
                  </div>
                </div>
                <div className="flex items-center justify-start gap-[16px]">
                  <div className="min-w-[42px]">
                    <Warning
                      className="flex items-center justify-center text-[42px] max-lg:text-[42px]"
                      color="#FFA500"
                      size={38}
                    />
                  </div>
                  <div className="flex flex-col gap-[12px]">
                    <h5 className="text-[18px] font-semibold">
                      Getting Leads From Outside Your Desired Geographic
                      Location
                    </h5>
                  </div>
                </div>
                <div className="flex items-center justify-start gap-[16px]">
                  <div className="min-w-[42px]">
                    <Warning
                      className="flex items-center justify-center text-[42px] max-lg:text-[42px]"
                      color="#FFA500"
                      size={38}
                    />
                  </div>
                  <div className="flex flex-col gap-[12px]">
                    <h5 className="text-[18px] font-semibold">
                      Leads Are Saying “I Didn’t Fill Out the Form”
                    </h5>
                  </div>
                </div>
              </div>
            </div>

            {/* Btn */}
            {/* <div className="mt-[36px]">
              <button className="flex items-center justify-center gap-[12px] rounded-sm bg-white px-[24px] py-[16px] font-bold text-primary transition-all duration-500 hover:bg-primary hover:text-white"
              onClick={() => setIsOpen(true)}>
                <Check className="!hover:text-white" size={24} weight="bold" />
                Buy it for Just <span className="text-2xl">Rs 199/-</span>
              </button>
            </div> */}
          </div>
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

export default Section2;
