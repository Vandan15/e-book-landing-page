"use client";
import { Minus, Plus } from "@phosphor-icons/react";
import { useState } from "react";

const Faq = () => {
  return (
    <section className="flex w-full flex-col items-center justify-center bg-bgLight">
      <div className="flex w-full max-w-[1636px] flex-col items-center gap-[32px] px-[160px] py-[42px] max-xl:px-[60px] max-lg:flex-col max-sm:px-[30px]">
        {/* Section Title */}
        <h1 className="relative w-full text-center text-[28px] font-extrabold text-white md:text-[32px]">
          {` Frequently Asked Questions`}
          <div className="absolute -bottom-[5%] left-1/2 h-[4px] w-[50px] -translate-x-1/2 bg-primary"></div>
        </h1>
        <p className="w-full max-w-[750px] text-center text-muted">
          This book is concerned with creating typography and is essential for
          professionals who regularly work for clients.
        </p>

        {/* Accordians */}
        <div className="flex w-full items-start gap-[32px] max-lg:flex-col max-lg:gap-0">
          {/* Left Column */}
          <div className="mt-[24px] flex w-1/2 flex-col items-start justify-center gap-[32px] max-lg:w-full max-lg:flex-col">
            <Accordian
              faqId={1}
              question="I have hired a person/agency to run my ads, should I buy this e-book?"
              answer="Yes, you can buy this e-book and send it to a particular person, telling them to implement the steps mentioned here. This will be a great learning opportunity for them to improve your campaigns."
            />
            <Accordian
              faqId={2}
              question="How do I access the eBook after purchase?"
              answer="Once you make the payment, you’ll receive an instant download link in your email. You can access the eBook immediately and start reading right away."
            />
            <Accordian
              faqId={3}
              question="Website reponse taking time, how to improve?"
              answer="Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum"
            />
            <Accordian
              faqId={4}
              question="Is the eBook available offline?"
              answer="Yes, once you download the eBook, you can read it offline anytime, anywhere, even without an internet connection."
            />
          </div>

          {/* Right Column */}
          <div className="mt-[24px] flex w-1/2 flex-col items-start justify-center gap-[32px] max-lg:w-full max-lg:flex-col">
            <Accordian
              faqId={5}
              question="What if I lose the eBook file?"
              answer="If you lose your eBook, you can usually re-download it from the link provided after purchase via email."
            />
            <Accordian
              faqId={6}
              question="Will I get updates if the eBook is revised?"
              answer="Yes, when we add new chapters, tools, or techniques, you will receive an updated version."
            />
            <Accordian
              faqId={7}
              question="How can I ask questions or get support for the eBook?"
              answer="If you have any queries related to e-books, you can contact us at conversionshastra@gmail.com. Our team will try to answer you as soon as possible."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const Accordian = ({
  question,
  answer,
  faqId,
}: {
  question: string;
  answer: string;
  faqId: number;
}) => {
  const [isActive, setIsActive] = useState(0);
  const handleToggle = (faqId: number) => {
    if (isActive === faqId) {
      setIsActive(0);
    } else {
      setIsActive(faqId);
    }
  };
  return (
    <div className={`w-[calc(100%)]`}>
      <div
        className="w-full cursor-pointer rounded-full bg-white bg-opacity-[0.05] px-[28px] py-[20px]"
        onClick={() => handleToggle(faqId)}
      >
        {/* Question */}
        <div className="flex items-center justify-between gap-[12px] text-white">
          <p className="text-[18px]">{question}</p>

          {isActive == faqId ? (
            <Minus size={18} weight="bold" className="shrink-0" />
          ) : (
            <Plus size={18} weight="bold" className="shrink-0" />
          )}
        </div>
      </div>
      {/* Answer */}
      <div
        className={`overflow-hidden px-[28px] transition-all duration-500 ease-in-out ${isActive == faqId ? "h-[120px] py-[20px] max-lg:h-[100px] max-md:h-[120px] max-sm:h-auto" : "h-[0px]"} text-white`}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default Faq;
