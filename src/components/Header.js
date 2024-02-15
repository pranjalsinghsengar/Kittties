import React, { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AppCtxt, { Context } from "../context/AppContext";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { headerAlign, setheaderAlign } = useContext(Context);

  // useEffect(() => {
  //   if (location.pathname === "/Resume") {
  //     setheaderAlign("right");
  //   } else setheaderAlign(null);
  // }, [location.pathname]);

  return (
    <div
      className={`flex ${
        location.pathname === "/Resume"
          ? "justify-center lg:justify-start "
          : "lg:justify-end justify-center"
      }   z-10`}
    >
      {/* <div className='w-full pr-5 pl-5  flex justify-between items-center h-20 sm:h-14 fixed bg-gradient-to-b from-white via-slate-50 via-50% to-transparent z-10'> */}
      <div
        className={`flex gap-3 bg-gray-800 lg:mr-10 mt-10 p-2 pr-8 pl-8 rounded-2xl items-center  justify-between absolute  z-20  overflow-hidden ${
          location.pathname === "/Resume" && "border border-white lg:ml-10"
        }  `}
      >
        <div className='sm:w-32   w-full '>
          {/* <img src='/logo123.png' className='w-20 sm:w-20' /> */}
          <img
            src='/logo.png'
            className='w-20 sm:w-20'
            onClick={() => navigate("/")}
            alt=''
          />
        </div>

        {/* <h1 className='text-xl font-bold '>
          PERSONAL
          <p className='text-right text-slate-700 pl-20 text-sm'>
            {" "}
            learning{" "}
          </p>{" "}
        </h1> */}

        {/* <button
          onClick={() => {
            location.pathname === "/"
              ? navigate("ReactjsProject")
              : navigate("/");
          }}
          className='relative justify-center text-white rounded-md text-sm'
        >
          {location.pathname === "/" ? "Web" : "Mobile"}
        </button> */}
        <div className='text-white flex gap-3 '>
          <button
            onClick={() => {
              location.pathname === "/" ? navigate("Project") : navigate("/");
            }}
            className='relative justify-center text-white rounded-md text-sm'
          >
            {location.pathname === "/" ? "Project" : "Home"}
          </button>
          <button className=''>Contect</button>
        </div>

        <div className='absolute top-5 -z-10 w-full '>
          <img src='https://media.tenor.com/xH-AneonkgsAAAAi/kitten-cat.gif' />
        </div>
      </div>
    </div>
  );
};

export default Header;
