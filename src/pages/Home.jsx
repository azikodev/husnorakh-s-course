import React from "react";

//sections
import { AboutMe, AboutCourse, FAQ, Prices, QuestionWithTG } from "../sections";
function Home() {
  return (
    <div className=" flex flex-col gap-[40px] h-full lg:max-container min-container">
      <AboutMe />
      <AboutCourse />
      <FAQ />
      <Prices />
      <QuestionWithTG />
    </div>
  );
}

export default Home;
