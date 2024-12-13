"use client";

import { Check } from "@phosphor-icons/react/";

const ThingsYouWillLearn = () => {
  return (
    <section className="flex w-full flex-col items-center justify-center bg-bgDark">
      <div className="flex w-full max-w-[1636px] flex-col items-center justify-center gap-[32px] px-[160px] py-[42px] max-xl:px-[60px] max-lg:flex-col max-sm:px-[30px]">
        <h1 className="relative w-full text-center text-[46px] font-extrabold text-white max-sm:text-[38px]">
          {` Thing's you will learn`}
          <div className="absolute -bottom-[5%] left-1/2 h-[4px] w-[50px] -translate-x-1/2 bg-primary"></div>
        </h1>
        <p className="w-full max-w-[550px] text-center text-muted">
          This book is concerned with creating typography and is essential for
          professionals who regularly work for clients.
        </p>

        {/* Cards */}
        <div className="mt-[24px] flex w-full flex-wrap items-center justify-center gap-[32px] max-lg:flex-col">
          <Card
            heading="How to improve yourself"
            para="Well-written book is concerned with creating typography and is essential for professionals who regularly"
          />
          <Card
            heading="10 tips to improve yourself"
            para="Well-written book is concerned with creating typography and is essential for professionals who regularly"
          />
          <Card
            heading="Utilize time productively"
            para="Well-written book is concerned with creating typography and is essential for professionals who regularly"
          />
          <Card
            heading="Powerful tips & tricks"
            para="Well-written book is concerned with creating typography and is essential for professionals who regularly"
          />
          <Card
            heading="How to think creatively"
            para="Well-written book is concerned with creating typography and is essential for professionals who regularly"
          />
          <Card
            heading="Grow your personality"
            para="Well-written book is concerned with creating typography and is essential for professionals who regularly"
          />
        </div>
      </div>
    </section>
  );
};

const Card = ({ heading, para }: { heading: string; para: string }) => {
  return (
    <div className="group flex w-[calc(50%-32px)] cursor-default items-start justify-start gap-[24px] rounded-lg bg-white bg-opacity-[0.05] p-[32px] hover:bg-opacity-[0.1] max-lg:w-full">
      <div className="flex min-h-[50px] min-w-[50px] items-center justify-center rounded-full bg-primary group-hover:bg-bgDark">
        <Check
          size={22}
          className="text-white group-hover:text-primary"
          weight="bold"
        />
      </div>
      <div className="flex flex-col gap-[12px]">
        <h4 className="text-[22px] font-semibold text-white">{heading}</h4>
        <h5 className="text-[16px] text-muted">{para}</h5>
      </div>
    </div>
  );
};

export default ThingsYouWillLearn;
