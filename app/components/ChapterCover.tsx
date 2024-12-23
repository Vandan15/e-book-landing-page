const ChapterCover = () => {
  return (
    <section className="flex w-full flex-col items-center justify-center bg-bgDark" id="chapters">
      <div className="flex w-full max-w-[1636px] flex-col items-center justify-center gap-[32px] px-[100px] py-[42px] max-xl:px-[60px] max-lg:flex-col max-sm:px-[30px]">
        {/* Section Title */}
        <h1 className="relative w-full text-center text-[46px] font-extrabold text-white max-sm:text-[38px]">
          {` Chapters Covered to Make You Master of Lead Generation`}
          <div className="absolute -bottom-[5%] left-1/2 h-[4px] w-[50px] -translate-x-1/2 bg-primary"></div>
        </h1>
        <p className="w-full max-w-[700px] text-center text-muted">
          This lovely, well-written book is concerned with creating typography
          and is essential for professionals who regularly work for clients.
        </p>

        {/* Chapters */}
        <div className="mt-[42px] flex w-full items-center justify-start max-lg:flex-wrap">
          {/* Col - 1 */}
          <div className="flex w-1/3 flex-col border-r-[1px] border-r-[#ffffff0d] px-[42px] max-xl:px-[18px] max-lg:min-w-[300px] max-lg:flex-1 max-md:min-w-full max-md:border-r-0">
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
          </div>

          {/* Col - 2 */}
          <div className="flex w-1/3 flex-col border-r-[1px] border-r-[#ffffff0d] px-[42px] max-xl:px-[18px] max-lg:min-w-[300px] max-lg:flex-1 max-lg:border-r-0 max-md:min-w-full">
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
          </div>

          {/* Col - 3 */}
          <div className="flex w-1/3 flex-col px-[42px] max-xl:px-[18px] max-lg:min-w-[300px] max-lg:flex-1 max-md:min-w-full">
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
          </div>

          {/* Dummy - For Responsive */}
          <div className="hidden max-lg:flex max-lg:flex-1"></div>
        </div>
      </div>
    </section>
  );
};

const Chapter = ({
  chapterNo,
  chapterTitle,
  chapterDescription,
}: {
  chapterNo: string;
  chapterTitle: string;
  chapterDescription: string;
}) => {
  return (
    <div className="flex h-[250px] flex-col items-start justify-start text-white max-md:mb-[38px] max-md:h-auto">
      <h5 className="font-semibold">{chapterNo}</h5>
      <h4 className="mt-[8px] text-[22px] font-black">{chapterTitle}</h4>
      <p className="mt-[12px] text-[16px] text-muted">{chapterDescription}</p>
    </div>
  );
};

export default ChapterCover;
