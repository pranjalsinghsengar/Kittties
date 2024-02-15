import React from "react";
import RuskRupees from "./HomeScreen/components/RuskRupees";
import ScrapBuddy from "./HomeScreen/components/ScrapBuddy";

const Projects = () => {
  return (
    <div className='overflow-auto snap-y snap-mandatory no-scrollbar h-screen'>
      <ScrapBuddy />
      <RuskRupees />
    </div>
  );
};

export default Projects;
