import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex w-full flex-col items-center justify-center bg-bgDark">
      <div className="flex w-full max-w-[1636px] flex-col items-center justify-center gap-[32px] px-[200px] py-[72px] max-xl:px-[60px] max-lg:flex-col max-sm:px-[30px] max-sm:py-[42px]">
        <div className="flex w-full items-center justify-between gap-[32px] max-lg:flex-col max-lg:items-start">
          <div className="max-w-[350px] max-lg:max-w-full">
            <h5 className="text-[18px] font-semibold text-white">BookHunt</h5>
            <p className="mt-[12px] text-[16px] text-muted">
              Veniam Sequi molestias aut necessitatibus optio magni at natus
              accusamus. Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Cupiditate, obcaecat .
            </p>
          </div>
          <div className="flex items-end gap-[72px] max-sm:flex-col max-sm:items-start max-sm:gap-[12px]">
            <div className="flex max-w-[200px] flex-col gap-[12px]">
              <h5 className="text-[18px] font-semibold text-white">
                Information
              </h5>
              <Link
                href={"#"}
                className="text-[16px] text-muted hover:text-primary"
              >
                SEO Business
              </Link>
              <Link
                href={"#"}
                className="text-[16px] text-muted hover:text-primary"
              >
                Digital Marketing
              </Link>
              <Link
                href={"#"}
                className="text-[16px] text-muted hover:text-primary"
              >
                Graphic Design
              </Link>
              <Link
                href={"#"}
                className="text-[16px] text-muted hover:text-primary"
              >
                Site Development
              </Link>
            </div>
            <div className="flex max-w-[200px] flex-col gap-[12px]">
              <Link
                href={"#"}
                className="text-[16px] text-muted underline hover:text-primary"
              >
                +1 (305) 547-9909
              </Link>
              <Link
                href={"#"}
                className="text-[16px] text-muted underline hover:text-primary"
              >
                382 NE 191st St # 87394 Miami, FL 33179-3899
              </Link>
              <Link
                href={"#"}
                className="text-[16px] text-muted underline hover:text-primary"
              >
                info@example.com
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="flex w-full flex-col items-center justify-center bg-bgDark">
        <div className="flex w-full max-w-[1636px] border-t-[1px] border-t-[#ffffff0d] px-[200px] py-[24px] text-white max-xl:px-[60px] max-sm:px-[30px]">
          <div>
            @ 2021-Copyright reserved to BooHunt.Proudly Crafted by &nbsp;
            <Link href={"#"} className="text-primary">
              Dreambuzz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
