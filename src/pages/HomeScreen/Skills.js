import React, { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "gsap/all";

const Skills = ({ triggerRef, eleRef }) => {
  return (
    <div
      // ref={triggers}
      ref={triggerRef}
      className='h-full  flex justify-center items-center construction  '
    >
      <div className='text-white w-4/5 '>
        <h1 className='text-5xl lg:text-9xl italic textHead opacity-0 '>
          This site is on Construction
        </h1>
        <p className='lg:text-4xl text-right textPera  opacity-0'>
          watch my resume to learn more about me
        </p>
      </div>
    </div>
  );
};

export default Skills;
