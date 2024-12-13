"use client";

import { ArrowUp } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {isVisible && (
        <div
          onClick={scrollToTop}
          className="fixed bottom-[24px] right-[24px] flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-full bg-primary"
        >
          <ArrowUp size={24} color="#ffffff" />
        </div>
      )}
    </>
  );
};

export default ScrollToTop;
