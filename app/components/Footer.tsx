import { ROUTES } from "@/utils/constants";
import { Copyright } from "@phosphor-icons/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();

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
                Quick Links
              </h5>
              <Link
                href={ROUTES.termsOfUse}
                className={`text-[16px] text-muted hover:text-primary ${
                  pathname === ROUTES.termsOfUse ? "text-primary" : ""
                }`}
              >
                Terms of use
              </Link>
              <Link
                href={ROUTES.privacyPolicy}
                className={`text-[16px] text-muted hover:text-primary ${
                  pathname === ROUTES.privacyPolicy ? "text-primary" : ""
                }`}
              >
                Privacy policy
              </Link>
            </div>
          </div>
          <div className="flex items-end gap-[72px] max-sm:flex-col max-sm:items-start max-sm:gap-[12px]">
            <div className="flex max-w-[200px] flex-col gap-[12px]">
              <h5 className="text-[18px] font-semibold text-white">Support</h5>
              <Link
                href={"mailto:conversionshastra@gmail.com"}
                className="text-[16px] text-muted hover:text-primary"
              >
                conversionshastra@gmail.com
              </Link>
              <Link
                href={"#"}
                className="text-[16px] text-muted hover:text-primary"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="flex w-full flex-col items-center justify-center bg-bgDark">
        <div className="flex w-full max-w-[1636px] border-t-[1px] border-t-[#ffffff0d] px-[200px] py-[24px] text-white max-xl:px-[60px] max-sm:px-[30px]">
          <div className="flex items-center justify-center gap-[12px] text-[16px]">
            <Copyright /> {new Date().getFullYear()}-Copyright reserved to
            Clicks to Client Pro
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
