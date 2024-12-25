"use client";
import Link from "next/link";
import {
  FacebookLogo,
  LinkedinLogo,
  PinterestLogo,
  TwitterLogo,
} from "@phosphor-icons/react";

import { useState } from "react";
import { ROUTES } from "@/utils/constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <nav className="sticky top-0 z-50 flex h-[100px] w-full min-w-[320px] items-center justify-center bg-bgDark max-sm:h-[80px]">
      <div className="h-full w-full max-w-[1636px]">
        {/* Desktop Navbar */}
        <div className="flex h-full items-center justify-between border-b-[1px] border-b-[#ffffff0d] px-[160px] max-xl:px-[60px] max-sm:px-[30px]">
          {/* Navbar title */}
          <Link
            href={{ pathname: ROUTES.home }}
            className="text-3xl font-extrabold text-white"
          >
            BookHunt
          </Link>

          {/* Navbar Menu */}
          {/* <div className="flex items-center justify-center gap-[24px] text-[16px] font-extrabold text-white max-lg:hidden">
            <Link
              href={{
                pathname: ROUTES.home,
                hash: "",
              }}
              className="transition-all duration-500 hover:text-primary"
            >
              Home
            </Link>
            <Link
              href={{
                pathname: ROUTES.home,
                hash: "about",
              }}
              className="transition-all duration-500 hover:text-primary"
            >
              About
            </Link>
            <Link
              href={{
                pathname: ROUTES.home,
                hash: "chapters",
              }}
              className="transition-all duration-500 hover:text-primary"
            >
              Chapters
            </Link>
            <Link
              href={{
                pathname: ROUTES.home,
                hash: "reviews",
              }}
              className="transition-all duration-500 hover:text-primary"
            >
              Reviews
            </Link>

            <div className="flex items-center justify-center gap-3">
              <div className="flex cursor-pointer rounded-full bg-white bg-opacity-[0.08] p-2 transition-all duration-500 hover:bg-primary">
                <FacebookLogo size={20} />
              </div>
              <div className="flex cursor-pointer rounded-full bg-white bg-opacity-[0.08] p-2 transition-all duration-500 hover:bg-primary">
                <TwitterLogo size={20} />
              </div>
              <div className="flex cursor-pointer rounded-full bg-white bg-opacity-[0.08] p-2 transition-all duration-500 hover:bg-primary">
                <LinkedinLogo size={20} />
              </div>
              <div className="flex cursor-pointer rounded-full bg-white bg-opacity-[0.08] p-2 transition-all duration-500 hover:bg-primary">
                <PinterestLogo size={20} />
              </div>
            </div>
          </div> */}

          {/* Navbar Menu Toggle Btn */}
          {/* <div
            className="hidden cursor-pointer rounded-sm bg-white px-2 py-1 hover:bg-muted max-lg:block"
            onClick={handleToggle}
          >
            <List size={32} weight="bold" />
          </div> */}
        </div>

        {/* Toggle Menu */}
        {toggle && (
          <div className="flex h-[calc(100vh-100px)] w-screen min-w-[320px] flex-col items-center justify-center gap-[24px] bg-bgDark text-[16px] font-extrabold text-white">
            <Link
              className="transition-all duration-500 hover:text-primary"
              onClick={handleToggle}
              href={{
                pathname: ROUTES.home,
                hash: "",
              }}
            >
              Home
            </Link>
            <Link
              className="transition-all duration-500 hover:text-primary"
              onClick={handleToggle}
              href={{
                pathname: ROUTES.home,
                hash: "about",
              }}
            >
              About
            </Link>
            <Link
              className="transition-all duration-500 hover:text-primary"
              onClick={handleToggle}
              href={{
                pathname: ROUTES.home,
                hash: "chapters",
              }}
            >
              Chapters
            </Link>
            <Link
              className="transition-all duration-500 hover:text-primary"
              onClick={handleToggle}
              href={{
                pathname: ROUTES.home,
                hash: "reviews",
              }}
            >
              Reviews
            </Link>

            <div className="mt-[24px] flex items-center justify-center gap-3">
              <div className="flex cursor-pointer rounded-full bg-white bg-opacity-[0.08] p-2 transition-all duration-500 hover:bg-primary">
                <FacebookLogo size={20} />
              </div>
              <div className="flex cursor-pointer rounded-full bg-white bg-opacity-[0.08] p-2 transition-all duration-500 hover:bg-primary">
                <TwitterLogo size={20} />
              </div>
              <div className="flex cursor-pointer rounded-full bg-white bg-opacity-[0.08] p-2 transition-all duration-500 hover:bg-primary">
                <LinkedinLogo size={20} />
              </div>
              <div className="flex cursor-pointer rounded-full bg-white bg-opacity-[0.08] p-2 transition-all duration-500 hover:bg-primary">
                <PinterestLogo size={20} />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
