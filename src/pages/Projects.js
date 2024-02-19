import React from "react";
import RuskRupees from "./HomeScreen/components/RuskRupees";
import ScrapBuddy from "./HomeScreen/components/ScrapBuddy";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className='overflow-auto snap-y snap-mandatory no-scrollbar h-screen'>
      <ScrapBuddy />
      <RuskRupees />
      <div
        // ref={triggers}

        className='h-full flex justify-center items-center snap-center '
      >
        <div className='text-black  w-4/5 '>
          <h1 className='text-5xl lg:text-9xl font-semibold '>
            This site is on Construction
          </h1>
          <p className='lg:text-4xl text-right  '>
            <a
              href='https://github.com/pranjalsinghsengar/'
              className='text-blue-700 font-bold'
            >
              watch my Github{" "}
            </a>
            to learn more about me
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
