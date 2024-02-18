import React from "react";

const Intro = () => {
  return (
    <div className='h-full flex justify-center items-center break-words  select-none snap-center '>
      <p className='text-2xl lg:text-8xl text-gray-800 leading-3'>
        <p className='text-xl lg:text-7xl'>Hii,</p>
        <span className='pl-3 lg:pl-14'>
          <span className='lg:text-6xl'>I'm</span>
          <span className='border-b border-gray-800 '>
            {" "}
            PRANJAL{" "}
            <span className='bg-gray-800 text-white pl-4 pr-4'> SENGAR</span>
          </span>
        </span>
      </p>
    </div>
  );
};

export default Intro;
