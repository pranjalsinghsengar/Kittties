import React from "react";
import FooterGradient from "../components/FooterGradient";

const RuskRupees = () => {
  const handleDownload = () => {
    console.warn("Clicked");
    const apkUrl = "app-release.apk";
    window.location.href = apkUrl;
  };
  return (
    <div className='h-full w-full bg-RuskRupees-BG bg-cover bg-center relative'>
      <div className='h-full bg-gradient-to-b from-slate-50 via-slate-50/40 via-50% to-slate-100 relative  sm:overflow-hidden'>
        <div className=' absolute top-0 right-0 left-0 bottom-0 flex justify-center items-center'>
          <img
            src='ruppesSign.png'
            alt=''
            className='w-10/12 animate-wiggle opacity-45 sm:opacity-15 sm:w-2/5  '
          />
        </div>
        <div className='flex justify-center items-center h-full '>
          <button
            className=' z-10 p-5 pl-8 pr-8 bg-teal-800/70 border-2 shadow-2xl border-white  rounded-xl text-white font-bold tracking-wider cursor-pointer'
            onClick={handleDownload}
          >
            DOWNLOAD NOW
          </button>
        </div>
        <FooterGradient />
        <div className='h-14 absolute bottom-8 justify-center flex w-full z-10'>
          <img src='LOGORusk.png' alt='' className='h-full' />
        </div>
      </div>
    </div>
  );
};

export default RuskRupees;
