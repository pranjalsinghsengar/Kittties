import React from "react";
import ScrapImg from "../components/ScrapImg";

const ScrapBuddy = () => {
  return (
    <div className='h-full flex justify-center items-center flex-row-reverse snap-center '>
      <div className='w-1/5 flex justify-center items-center'>
        <div className='border-green-900  border shadow-xl p-4 pr-10 pl-10 rounded-lg text-green-800'>
          Download Apk
        </div>
      </div>
      <div className='relative flex h-full justify-center items-center   '>
        <ScrapImg imgURL='Images/sb11.png' />
        <ScrapImg imgURL='Images/sb2.jpg' />
        <ScrapImg imgURL='Images/sb5.jpg' />
        <ScrapImg imgURL='Images/sb1.jpg' />
        <div className='w-full flex justify-center items-center h-full  absolute  sm:overflow-hidden bg-gradient-to-l from-white to-transparent'></div>
      </div>
    </div>
  );
};

export default ScrapBuddy;

{
  /* 4 images of the app  */
}
{
  /* https://drive.google.com/file/d/1VcELuvCOxqztA8U2hCB_FSNL7H1p2MOH/view?usp=sharing */
}
{
  /* Download button  */
}
{
  /* some Text */
}
