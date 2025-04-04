"use client";

import { Bag, Star, StarHalf, UserCircle } from "@phosphor-icons/react";
import { useRef, useState } from "react";

const Review = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const reviews = [
    {
      id: 1,
      image: "/review-1.jpg",
      name: "Akshaye Parekh",
      designation: "Owner Skybean Branding Agency, California",
      reviewTitle: "",
      review:
        "I run a branding agency in California, and we aim to attract high-ticket clients worldwide. After reading this e-book and being thoroughly impressed, we implemented its solutions. The results were amazing, our lead cost dropped by 35%, and our conversion rate increased by 24%.",
    },
    {
      id: 2,
      image: "/review-2.jpg",
      name: "Bipin Goel",
      designation: "Owner Sunrise Investments, Indore",
      reviewTitle: "",
      review:
        "I am a stock advisor. To run my business, I need a huge & consistent flow of high-quality leads who can work with me. I was running ads on Facebook and Instagram but getting leads who didn’t have much budget to invest. I needed high-budget clients but was unable to get them. I purchased this e-book after seeing an ad on Instagram. I read every chapter carefully and followed the suggestions to target high-budget clients. Today, I only work with clients having a high budget to invest.",
    },
    {
      id: 3,
      image: "/review-3.jpg",
      name: "Dr Geeta Bhosle",
      designation: "Geeta Nutrition Club, East Kalyan, Mumbai",
      reviewTitle: "",
      review:
        "I am a nutrition consultant. I guide people to get in shape before their marriage. My business wants lots of leads who can take our demo sessions and then apply for a 2-month course. Since I run ads in specific areas, I was getting lots of duplicate leads  were not of buying intent. After reading this book, I got to know what mistakes I am making. I sent this e-book to a person who was running my ads. He implemented the things and I started getting high-quality leads with high-converting intent.",
    },
  ];

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollContainerMDRef = useRef<HTMLDivElement>(null);

  const handleDotClickOnMD = (index: number) => {
    setActiveIndex(index);

    if (scrollContainerMDRef.current && typeof window !== undefined) {
      const offset = window.innerWidth * (index - 1) - 16 - 60;
      scrollContainerMDRef.current.scrollLeft = offset;
    }
  };

  const extendedReviews = [reviews[reviews.length - 1], ...reviews, reviews[0]];

  const handleDotClick = (index: number) => {
    setActiveIndex(index);

    if (scrollContainerRef.current) {
      const offset = 400 * index - (1200 - 400) / 2;
      scrollContainerRef.current.scrollLeft = offset;
    }
  };

  return (
    <section
      className="flex w-full flex-col items-center justify-center bg-bgDark"
      id="reviews"
    >
      <div className="flex w-full max-w-[1636px] flex-col items-center justify-center gap-[32px] px-[100px] py-[42px] max-xl:px-[60px] max-lg:flex-col max-sm:px-[30px]">
        {/* Section Title */}
        <h1 className="relative w-full max-w-[800px] text-center text-[28px] font-extrabold text-white md:text-[32px]">
          {`See How This E-book Helped people Generate High-Quality Leads`}
          <div className="absolute -bottom-[5%] left-1/2 h-[4px] w-[50px] -translate-x-1/2 bg-primary"></div>
        </h1>
        {/* <p className="w-full max-w-[550px] text-center text-muted">
          This book is concerned with creating typography and is essential for
          professionals who regularly work for clients.
        </p> */}

        {/* Slider */}
        <div className="flex w-full items-center justify-center max-md:hidden">
          <div
            ref={scrollContainerRef}
            className="no-scrollbar flex w-full max-w-[1200px] overflow-x-scroll scroll-smooth"
          >
            {extendedReviews.map((review, index) => (
              <div
                key={index}
                className={`w-[400px] flex-shrink-0 px-[8px] transition-opacity duration-500`}
              >
                <Card
                  reviewTitle={review.reviewTitle}
                  review={review.review}
                  name={review.name}
                  image={review.image}
                  designation={review.designation}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Dot Navigation */}
        <div className="flex max-md:hidden">
          {reviews.map((review) => (
            <button
              className={`mx-2 h-[10px] w-[10px] rounded-full transition-all duration-300 ${
                activeIndex === review.id ? "bg-white" : "bg-gray-600"
              }`}
              key={review.id}
              onClick={() => handleDotClick(review.id)}
            ></button>
          ))}
        </div>

        {/* On MD Devices */}

        {/* Slider */}
        <div className="hidden w-full items-center justify-center max-md:flex">
          <div
            ref={scrollContainerMDRef}
            className="no-scrollbar flex w-full max-w-[1200px] overflow-x-scroll scroll-smooth"
          >
            {reviews.map((review, index) => (
              <div
                key={index}
                className={`w-full flex-shrink-0 px-[8px] transition-opacity duration-500 hover:opacity-100`}
              >
                <Card
                  reviewTitle={review.reviewTitle}
                  review={review.review}
                  name={review.name}
                  image={review.image}
                  designation={review.designation}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Dot Navigation */}
        <div className="hidden max-md:flex">
          {reviews.map((review) => (
            <button
              className={`mx-2 h-[10px] w-[10px] rounded-full transition-all duration-300 ${
                activeIndex === review.id ? "bg-white" : "bg-gray-600"
              }`}
              key={review.id}
              onClick={() => handleDotClickOnMD(review.id)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;

const Card = ({
  name,
  review,
  designation,
}: {
  reviewTitle: string;
  image: string;
  name: string;
  review: string;
  designation: string;
}) => {
  return (
    <div className="flex flex-col items-start justify-start gap-[24px] rounded-lg bg-white p-[37px] shadow-md">
      <div className="flex">
        <Star weight="fill" color="#f2b827" />
        <Star weight="fill" color="#f2b827" />
        <Star weight="fill" color="#f2b827" />
        <Star weight="fill" color="#f2b827" />
        <StarHalf weight="fill" color="#f2b827" />
      </div>
      {/* <h3 className="text-[22px] font-bold text-[#051431]">{reviewTitle}</h3> */}
      <p className="text-[16px] text-[#666666]">{review}</p>
      <div className="flex flex-col items-start justify-center gap-[4px]">
        {/* <Image
          src={image}
          alt={image}
          height={60}
          width={60}
          className="rounded-full"
        /> */}
        <h5 className="flex items-center gap-2 text-[18px] text-[#000]">
          <UserCircle />
          {name}
        </h5>
        <h5 className="flex items-center gap-2 text-[14px] text-[#666666]">
          <Bag />
          {designation}
        </h5>
      </div>
    </div>
  );
};
