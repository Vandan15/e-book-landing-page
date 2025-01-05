import { Minus, Plus } from "@phosphor-icons/react";
import { useState } from "react";

const ChapterCover = () => {
  const chapterList = [
    {
      faqId: 1,
      question: "Chapter-1: Overview of Meta Ads Lead Generation Ecosystem",
      answer:
        "Different ways to generate leads from Meta Ads, most people don’t consider.",
    },
    {
      faqId: 2,
      question:
        "Chapter-2: Exact Way to Set up Lead Generation Campaign in Meta",
      answer: "Includes hidden steps that are usually missed.",
    },
    {
      faqId: 3,
      question:
        "Chapter-3: How to Target the Right Audience for Your Industry?",
      answer: "Target right to reach high-quality people.",
    },
    {
      faqId: 4,
      question:
        "Chapter-4: Lookalike or Advantage+: Which is Better for Lead Generation?",
      answer:
        "Which to use to target a broader audience while scaling the campaign.",
    },
    {
      faqId: 5,
      question:
        "Chapter-5: Audience Targeting to Get HNI (High Net Worth Individuals) Client",
      answer: "To target people that have immense budgets to spend.",
    },
    {
      faqId: 6,
      question:
        "Chapter-6: How to Design Instant Form for High-Quality Leads That Convert?",
      answer: "",
    },
    {
      faqId: 7,
      question:
        "Chapter-7: How to Optimize a Landing Page to Collect High-Quality Leads?",
      answer: "",
    },
    {
      faqId: 8,
      question: "Chapter-8: Common Mistakes That Decrease the Lead Quality",
      answer: "Identifying and avoiding common pitfalls.",
    },
    {
      faqId: 9,
      question:
        "Chapter-9: Immediate Steps to Implement RIGHT NOW for High-Quality Leads",
      answer: "",
    },
    {
      faqId: 10,
      question:
        "Chapter-10: Secrets to Avoid Fake Leads & Collect ONLY High-Quality Leads",
      answer: "",
    },
    {
      faqId: 11,
      question:
        "Chapter-11: Common Leads-Related Issues & Their Effective Solutions",
      answer:
        "Troubleshooting common lead generation problems. \n\nProblem 1: Duplicate Leads\nProblem 2: Leads Are Saying 'I Didn’t Fill Out the Form'\nProblem 3: Lead Cost Is Too High\nProblem 4: Getting Quality Leads But Quality Is Not Consistent\nProblem 5: Leads Have No Buying Intent\nProblem 6: Leads Are Not Picking Calls or Replying to Messages\nProblem 7: Leads Express Interest in the Future, But Not Now\nProblem 8: Getting Leads From Outside Your Desired Geographic Location\nProblem 9: Leads are Filling Fake Details",
    },
    {
      faqId: 12,
      question: "Chapter-12: How to Write Ad Copy For High-Quality Leads?",
      answer: "",
    },
    {
      faqId: 13,
      question:
        "Chapter-13: How to Analyze and Optimize Lead Generation Campaign?",
      answer: "",
    },
    {
      faqId: 14,
      question:
        "Chapter-14: How to Scale Campaign Without Compromising Lead Quality?",
      answer: "Best practices for scaling while maintaining lead quality.",
    },
    {
      faqId: 15,
      question:
        "Chapter-15: Using Meta’s Lead Center to Manage Leads Effectively",
      answer: "How to use Meta’s built-in tools to handle leads.",
    },
    {
      faqId: 16,
      question:
        "Chapter-16: Most Important Lead Generation Metrics to Track Your Performance",
      answer: "",
    },
    {
      faqId: 17,
      question: "Chapter-17: A Perfect Dashboard For Lead Generation Campaign",
      answer: "",
    },
    {
      faqId: 18,
      question:
        "Chapter-18: Directly Integrate Meta’s Instant Form with Google Sheet",
      answer: "Without Needing Any 3rd Party Tool.",
    },
    {
      faqId: 19,
      question: "Chapter-19: Industry-Specific Lead Generation Tips",
      answer:
        "Covering real estate, finance, insurance, stock market, home services, courses, consultation business, and a lot more.",
    },
    {
      faqId: 20,
      question: "Chapter-20: Leads Got Converted - Now What?",
      answer: "Strategies to get maximum value from converted leads.",
    },
  ];

  const Accordion = ({
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
          className="w-full cursor-pointer rounded-md bg-white bg-opacity-[0.05] px-[28px] py-[20px]"
          onClick={answer ? () => handleToggle(faqId) : undefined}
        >
          {/* Question */}
          <div className="flex items-center justify-between gap-[12px] text-white">
            <p className="text-[16px]">{question}</p>
            {answer ? (
              isActive == faqId ? (
                <Minus size={18} weight="bold" className="shrink-0" />
              ) : (
                <Plus size={18} weight="bold" className="shrink-0" />
              )
            ) : null}
          </div>
        </div>
        {/* Answer */}
        <div
          className={`overflow-hidden px-[28px] transition-all duration-500 ease-in-out ${isActive == faqId ? "h-[100px] py-[20px] max-lg:h-[100px] max-md:h-[120px] max-sm:h-auto" : "h-[0px]"} text-white`}
        >
          <p className="text-[14px]">{answer}</p>
        </div>
      </div>
    );
  };

  return (
    <section
      className="flex w-full flex-col items-center justify-center bg-bgDark"
      id="chapters"
    >
      <div className="flex w-full max-w-[1636px] flex-col items-center justify-center gap-[32px] px-[100px] py-[42px] max-xl:px-[60px] max-lg:flex-col max-sm:px-[30px]">
        {/* Section Title */}
        <h1 className="relative w-full text-center text-[28px] font-extrabold text-white max-sm:text-[38px] md:text-[32px]">
          {` Chapters Covered to Make You Master of Lead Generation`}
          <div className="absolute -bottom-[5%] left-1/2 h-[4px] w-[50px] -translate-x-1/2 bg-primary"></div>
        </h1>
        {/* <p className="w-full max-w-[700px] text-center text-muted">
          This lovely, well-written book is concerned with creating typography
          and is essential for professionals who regularly work for clients.
        </p> */}

        {/* Chapters */}
        <div className="flex max-w-[800px] items-center justify-start max-lg:flex-wrap">
          {/* Col - 1 */}
          {/* <div className="flex w-1/3 flex-col border-r-[1px] border-r-[#ffffff0d] px-[42px] max-xl:px-[18px] max-lg:min-w-[300px] max-lg:flex-1 max-md:min-w-full max-md:border-r-0">
            <Chapter
              chapterNo="Chapter 1"
              chapterTitle="Overview of Meta Ads Lead Generation Ecosystem"
              chapterDescription="Different ways to generate leads from Meta Ads, most people don’t consider"
            />
            <Chapter
              chapterNo="Chapter 2"
              chapterTitle="Exact Way to Set up Lead Generation Campaign in Meta"
              chapterDescription="Includes hidden steps that are usually missed"
            />
            <Chapter
              chapterNo="Chapter 3"
              chapterTitle="How to Target the Right Audience for Your Industry?"
              chapterDescription="Target right to reach high-quality people"
            />
            <Chapter
              chapterNo="Chapter 4"
              chapterTitle="Lookalike or Advantage+: Which is Better for Lead Generation?"
              chapterDescription="Which to use to target a broader audience while scaling the campaign"
            />
            <Chapter
              chapterNo="Chapter 5"
              chapterTitle="Audience Targeting to Get HNI (High Net Worth Individuals) Client"
              chapterDescription="To target people that have immense budgets to spend"
            />
            <Chapter
              chapterNo="Chapter 6"
              chapterTitle="How to Design Instant Form for High-Quality Leads That Convert?"
              chapterDescription="-"
            />
            <Chapter
              chapterNo="Chapter 7"
              chapterTitle="How to Optimize a Landing Page to Collect High-Quality Leads?"
              chapterDescription="Well-written book is concerned with creating typography and is essential for professionals who regularly"
            />
          </div> */}

          {/* Col - 2 */}
          {/* <div className="flex w-1/3 flex-col border-r-[1px] border-r-[#ffffff0d] px-[42px] max-xl:px-[18px] max-lg:min-w-[300px] max-lg:flex-1 max-lg:border-r-0 max-md:min-w-full">
            <Chapter
              chapterNo="Chapter 8"
              chapterTitle="Common Mistakes That Decrease the Lead Quality"
              chapterDescription="Identifying and avoiding common pitfalls"
            />
            <Chapter
              chapterNo="Chapter 9"
              chapterTitle="Immediate Steps to Implement RIGHT NOW for High-Quality Leads"
              chapterDescription="-"
            />
            <Chapter
              chapterNo="Chapter 10"
              chapterTitle="Secrets to Avoid Fake Leads & Collect ONLY High-Quality Leads"
              chapterDescription="-"
            />
            <Chapter
              chapterNo="Chapter 11"
              chapterTitle="Common Leads-Related Issues & Their Effective Solutions"
              chapterDescription="Troubleshooting common lead generation problems"
            />
            <Chapter
              chapterNo="Chapter 12"
              chapterTitle="How to Write Ad Copy For High-Quality Leads?"
              chapterDescription="-"
            />
            <Chapter
              chapterNo="Chapter 13"
              chapterTitle="How to Analyze and Optimize Lead Generation Campaign?"
              chapterDescription="-"
            />
            <Chapter
              chapterNo="Chapter 14"
              chapterTitle="How to Scale Campaign Without Compromising Lead Quality?"
              chapterDescription="Best practices for scaling while maintaining lead quality"
            />
          </div> */}

          {/* Col - 3 */}
          {/* <div className="flex w-1/3 flex-col px-[42px] max-xl:px-[18px] max-lg:min-w-[300px] max-lg:flex-1 max-md:min-w-full">
            <Chapter
              chapterNo="Chapter 15"
              chapterTitle="Using Meta’s Lead Center to Manage Leads Effectively"
              chapterDescription="How to use Meta’s built-in tools to handle leads"
            />
            <Chapter
              chapterNo="Chapter 16"
              chapterTitle="Most Important Lead Generation Metrics to Track Your Performance"
              chapterDescription="-"
            />
            <Chapter
              chapterNo="Chapter 17"
              chapterTitle="A Perfect Dashboard For Lead Generation Campaign"
              chapterDescription="-"
            />
            <Chapter
              chapterNo="Chapter 18"
              chapterTitle="Directly Integrate Meta’s Instant Form with Google Sheet"
              chapterDescription="Without Needing Any 3rd Party Tool"
            />
            <Chapter
              chapterNo="Chapter 19"
              chapterTitle="Industry-Specific Lead Generation Tips"
              chapterDescription="Covering real estate, finance, insurance, stock market, home services, courses, consultation business, and a lot more"
            />
            <Chapter
              chapterNo="Chapter 20"
              chapterTitle="Leads Got Converted - Now What?"
              chapterDescription="Strategies to get maximum value from converted leads"
            />
            <Chapter
              chapterNo="Chapter 21"
              chapterTitle="Chapter 21"
              chapterDescription="Well-written book is concerned with creating typography and is essential for professionals who regularly"
            />
          </div> */}

          {/* Dummy - For Responsive */}
          {/* <div className="hidden max-lg:flex max-lg:flex-1"></div> */}

          {/* Accordians */}
          <div className="flex flex-col items-start gap-[16px]">
            {chapterList.map((faq) => (
              <Accordion
                key={faq.faqId}
                faqId={faq.faqId}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// const Chapter = ({
//   chapterNo,
//   chapterTitle,
//   chapterDescription,
// }: {
//   chapterNo: string;
//   chapterTitle: string;
//   chapterDescription: string;
// }) => {
//   return (
//     <div className="flex h-[250px] flex-col items-start justify-start text-white max-md:mb-[38px] max-md:h-auto">
//       <h5 className="font-semibold">{chapterNo}</h5>
//       <h4 className="mt-[8px] text-[22px] font-black">{chapterTitle}</h4>
//       <p className="mt-[12px] text-[16px] text-muted">{chapterDescription}</p>
//     </div>
//   );
// };

export default ChapterCover;
