import React from "react";
import FooterGradient from "../components/FooterGradient";

const RuskRupees = () => {
  const handleDownload = () => {
    console.warn("Clicked");
    const apkUrl = "app-release.apk";
    window.location.href = apkUrl;
  };
  return (
    <div className='h-full w-full bg-RuskRupees-BG bg-cover bg-center relative flex overflow-hidden snap-center'>
      <div className='relative sm:w-1/2 bg-white flex justify-center items-center '>
        <div className='flex justify-center items-center h-full '>
          <button
            className=' z-10 p-5 pl-8 pr-8 bg-teal-800/70 border-2 shadow-2xl border-white  rounded-xl text-white font-bold tracking-wider cursor-pointer'
            onClick={handleDownload}
          >
            DOWNLOAD NOW
          </button>
        </div>
      </div>

      <div className='w-1/2 flex justify-center items-center h-full  relative  sm:overflow-hidden bg-gradient-to-r from-white   to-transparent'>
        <div className=' h-1/4 justify-center flex items-center w-full z-10  flex'>
          <img
            src='LOGORusk.png'
            alt=''
            className='hidden sm:block h-1/2 lg:h-full rounded-2xl pr-5 pl-5 border border-2'
          />
        </div>
      </div>
      <div className='h-full absolute top-0 left-0 bottom-0 right-0 flex justify-center items-center'>
        <img
          src='ruppesSign.png'
          alt=''
          className=' lg:w-3/5 animate-wiggle opacity-45 sm:opacity-15 sm:w-2/5  '
        />
      </div>

      {/* <FooterGradient /> */}
    </div>
  );
};

export default RuskRupees;
