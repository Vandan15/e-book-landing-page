const ChapterCover = () => {
  return (
    <section className="flex w-full flex-col items-center justify-center bg-bgDark">
      <div className="flex w-full max-w-[1636px] flex-col items-center justify-center gap-[32px] px-[100px] py-[42px] max-xl:px-[60px] max-lg:flex-col max-sm:px-[30px]">
        {/* Section Title */}
        <h1 className="relative w-full text-center text-[46px] font-extrabold text-white max-sm:text-[38px]">
          {` Chapters we've covered`}
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
              chapterTitle="Data Science Process"
              chapterDescription="Well-written book is concerned with creating typography and is essential for professionals who regularly"
            />
            <Chapter
              chapterNo="Chapter 2"
              chapterTitle="The rise of trend Design"
              chapterDescription="Well-written book is concerned with creating typography and is essential for professionals who regularly"
            />
            <Chapter
              chapterNo="Chapter 3"
              chapterTitle="The rise of trend Design"
              chapterDescription="Well-written book is concerned with creating typography and is essential for professionals who regularly"
            />
          </div>

          {/* Col - 2 */}
          <div className="flex w-1/3 flex-col border-r-[1px] border-r-[#ffffff0d] px-[42px] max-xl:px-[18px] max-lg:min-w-[300px] max-lg:flex-1 max-lg:border-r-0 max-md:min-w-full">
            <Chapter
              chapterNo="Chapter 4"
              chapterTitle="The rise of trend Design"
              chapterDescription="Well-written book is concerned with creating typography and is essential for professionals who regularly"
            />
            <Chapter
              chapterNo="Chapter 5"
              chapterTitle="The rise of trend Design"
              chapterDescription="Well-written book is concerned with creating typography and is essential for professionals who regularly"
            />
            <Chapter
              chapterNo="Chapter 6"
              chapterTitle="The rise of trend Design"
              chapterDescription="Well-written book is concerned with creating typography and is essential for professionals who regularly"
            />
          </div>

          {/* Col - 3 */}
          <div className="flex w-1/3 flex-col px-[42px] max-xl:px-[18px] max-lg:min-w-[300px] max-lg:flex-1 max-md:min-w-full">
            <Chapter
              chapterNo="Chapter 7"
              chapterTitle="The rise of trend Design"
              chapterDescription="Well-written book is concerned with creating typography and is essential for professionals who regularly"
            />
            <Chapter
              chapterNo="Chapter 8"
              chapterTitle="The rise of trend Design"
              chapterDescription="Well-written book is concerned with creating typography and is essential for professionals who regularly"
            />
            <Chapter
              chapterNo="Chapter 9"
              chapterTitle="The rise of trend Design"
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
    <div className="flex h-[200px] flex-col items-start justify-start text-white max-md:mb-[38px] max-md:h-auto">
      <h5 className="font-semibold">{chapterNo}</h5>
      <h4 className="mt-[8px] text-[22px] font-black">{chapterTitle}</h4>
      <p className="mt-[12px] text-[16px] text-muted">{chapterDescription}</p>
    </div>
  );
};

export default ChapterCover;
