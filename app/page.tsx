"use client";
import ChapterCover from "./components/ChapterCover";
import Faq from "./components/Faq";
import Landing from "./components/Landing";
import Review from "./components/Review";
import ScrollToTop from "./components/ScrollToTop";
import Section2 from "./components/Section2";
import ThingsYouWillLearn from "./components/ThingsYouWillLearn";
import WhoThisBookIsFor from "./components/WhoThisBookIsFor";
import Subscribe from "./components/Subscribe";
import CommonLayout from "./components/CommonLayout";

const Home = () => {
  return (
    <CommonLayout>
      <main className="relative h-auto w-full min-w-[320px]">
        <Landing />
        <Section2 />
        <ThingsYouWillLearn />
        <ChapterCover />
        <WhoThisBookIsFor />
        <Subscribe />
        <Review />
        <Faq />
        <ScrollToTop />
      </main>
    </CommonLayout>
  );
};

export default Home;
