import React from "react";
import RuskRupees from "./pages/RuskRupees";
import ScrapBuddy from "./pages/ScrapBuddy";

const Home = () => {
  return (
    <div className='h-screen overflow-auto snap-y snap-mandatory no-scrollbar '>
      <ScrapBuddy />
      <RuskRupees />
    </div>
  );
};

export default Home;
