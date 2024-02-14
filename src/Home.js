import React from "react";
import RuskRupees from "./pages/RuskRupees";
import ScrapBuddy from "./pages/ScrapBuddy";

const Home = () => {
  return (
    <div className='h-screen overflow-auto snap-y snap-mandatory   '>
      <ScrapBuddy />
      <RuskRupees />
    </div>
  );
};

export default Home;
