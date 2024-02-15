import React from "react";
import RuskRupees from "./components/RuskRupees";
import ScrapBuddy from "./components/ScrapBuddy";
import Intro from "./components/Intro";
import PopUp from "../../components/PopUp";
import Skills from "./Skills";

const Home = () => {
  return (
    <div className='h-screen overflow-auto snap-y snap-mandatory no-scrollbar '>
      <Intro />
      <Skills />
    </div>
  );
};

export default Home;
