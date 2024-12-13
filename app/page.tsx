"use client";
import ChapterCover from "./components/ChapterCover";
import Faq from "./components/Faq";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Review from "./components/Review";
import ScrollToTop from "./components/ScrollToTop";
import Section2 from "./components/Section2";
import ThingsYouWillLearn from "./components/ThingsYouWillLearn";
import WhoThisBookIsFor from "./components/WhoThisBookIsFor";
import Subscribe from "./components/Subscribe";

const Home = () => {
  return (
    <main className="relative h-auto w-full min-w-[320px]">
      <Navbar />
      <Landing />
      <Section2 />
      <ThingsYouWillLearn />
      <WhoThisBookIsFor />
      <Subscribe />
      <ChapterCover />
      <Review />
      <Faq />
      <ScrollToTop />
    </main>
  );
};

export default Home;
