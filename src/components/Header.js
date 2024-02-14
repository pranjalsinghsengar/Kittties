import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className=' flex justify-center z-10 '>
      <div className='w-full pr-5 pl-5  flex justify-between items-center h-20 sm:h-14 fixed bg-gradient-to-b from-white via-slate-50 via-50% to-transparent z-10'>
        <div className='sm:w-32  sm:mt-5 sm:ml-10 w-full '>
          <img src='/logo123.png' className='w-20 sm:w-28' />
        </div>

        {/* <h1 className='text-xl font-bold '>
          PERSONAL
          <p className='text-right text-slate-700 pl-20 text-sm'>
            {" "}
            learning{" "}
          </p>{" "}
        </h1> */}

        <button
          onClick={() => {
            location.pathname === "/"
              ? navigate("ReactjsProject")
              : navigate("/");
          }}
          className='relative justify-center grid border p-2 pr-4 pl-5 rounded-md text-sm'
        >
          <div className='absolute top-5 -z-10 w-full '>
            <img src='https://media.tenor.com/xH-AneonkgsAAAAi/kitten-cat.gif' />
          </div>
          {location.pathname === "/" ? "ReactJS project" : "React Native"}
        </button>
      </div>
    </div>
  );
};

export default Header;
