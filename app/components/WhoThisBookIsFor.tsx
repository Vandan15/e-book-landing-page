"use client";

import { CheckCircle, Briefcase, HourglassSimple } from "@phosphor-icons/react";

const WhoThisBookIsFor = () => {
  return (
    <section className="flex w-full flex-col items-center justify-center bg-bgLight">
      <div className="flex w-full max-w-[1636px] flex-col items-center justify-center gap-[32px] px-[160px] py-[42px] max-xl:px-[60px] max-lg:flex-col max-sm:px-[30px]">
        <h1 className="relative w-full text-center text-[28px] font-extrabold text-white md:text-[32px]">
          {`Don’t Like Reading E-books? Worry Not, You won’t be Bored As It Includes,`}
          <div className="absolute left-[180px] top-[42px] h-[4px] w-[280px] -translate-x-1/2 bg-primary md:left-[280px] md:top-[50px] md:w-[440px]"></div>
        </h1>
        {/* <p className="w-full max-w-[550px] text-center text-muted">
          This book is concerned with creating typography and is essential for
          professionals who regularly work for clients.
        </p> */}

        {/* Cards */}
        <div className="mt-[24px] flex w-full flex-wrap items-center justify-center gap-[32px] max-lg:flex-col">
          <Card
            Icon={CheckCircle}
            heading=""
            para="No fluff, just actionable advice for each of your lead related issues."
          />
          <Card
            Icon={Briefcase}
            heading=""
            para="40 minutes of reading for a lifetime of results"
          />
          <Card
            Icon={HourglassSimple}
            heading=""
            para="Quick & Skimmable content - To Avoid Reading Boring Lengthy Content (40 minutes to Complete)"
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
    <div className="group flex min-h-[230px] w-[calc(33%-32px)] flex-col items-center justify-start gap-[24px] rounded-lg bg-white bg-opacity-[0.05] p-[32px] hover:bg-opacity-[0.1] max-lg:w-full">
      <Icon size={48} className="text-primary" />
      <div className="flex flex-col items-center justify-center gap-[12px] text-center">
        {heading && (
          <h4 className="text-[22px] font-semibold text-white">{heading}</h4>
        )}
        <h5 className="text-[16px] text-muted">{para}</h5>
      </div>
    </div>
  );
};

export default WhoThisBookIsFor;
