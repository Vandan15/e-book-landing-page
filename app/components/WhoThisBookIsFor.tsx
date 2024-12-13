"use client";

// import { Icon } from "@phosphor-icons/react";

import { Certificate, Kanban, Headset } from "@phosphor-icons/react/";

const WhoThisBookIsFor = () => {
  return (
    <section className="flex w-full flex-col items-center justify-center bg-bgLight">
      <div className="flex w-full max-w-[1636px] flex-col items-center justify-center gap-[32px] px-[160px] py-[42px] max-xl:px-[60px] max-lg:flex-col max-sm:px-[30px]">
        <h1 className="relative w-full text-center text-[46px] font-extrabold text-white max-sm:text-[38px]">
          {` Who This Book Is For`}
          <div className="absolute -bottom-[5%] left-1/2 h-[4px] w-[50px] -translate-x-1/2 bg-primary"></div>
        </h1>
        <p className="w-full max-w-[550px] text-center text-muted">
          This book is concerned with creating typography and is essential for
          professionals who regularly work for clients.
        </p>

        {/* Cards */}
        <div className="mt-[24px] flex w-full flex-wrap items-center justify-center gap-[32px] max-lg:flex-col">
          <Card
            Icon={Certificate}
            heading="Entrepreneurs"
            para="Behind the word mountains, far from the countries"
          />
          <Card
            Icon={Kanban}
            heading="Project Managers"
            para="Behind the word mountains, far from the countries"
          />
          <Card
            Icon={Headset}
            heading="Students"
            para="Behind the word mountains, far from the countries"
          />
        </div>
      </div>
    </section>
  );
};

const Card = ({
  heading,
  para,
  Icon,
}: {
  heading: string;
  para: string;
  Icon: React.ElementType;
}) => {
  return (
    <div className="group flex w-[calc(33%-32px)] flex-col items-center justify-start gap-[24px] rounded-lg bg-white bg-opacity-[0.05] p-[32px] hover:bg-opacity-[0.1] max-lg:w-full">
      <Icon size={48} className="text-primary" />
      <div className="flex flex-col items-center justify-center gap-[12px] text-center">
        <h4 className="text-[22px] font-semibold text-white">{heading}</h4>
        <h5 className="text-[16px] text-muted">{para}</h5>
      </div>
    </div>
  );
};

export default WhoThisBookIsFor;
