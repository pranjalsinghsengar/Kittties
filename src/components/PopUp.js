import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PopUp = () => {
  const [showIcon, setshowIcon] = useState(true);
  const navigate = useNavigate();
  const PopUpHandler = () => {
    navigate("Resume");
  };
  return (
    <div className='fixed bottom-5 right-4 lg:right-14 z-40'>
      <div className='bg-white shadow-lg shadow-gray-400 rounded-full p-2 pr-5 pl-5 flex items-center gap-4 cursor-pointer'>
        {showIcon ? (
          <>
            <p onClick={PopUpHandler}>Resume</p>
            <img
              src='x.svg'
              alt=''
              className='w-5'
              onClick={() => setshowIcon(false)}
            />
          </>
        ) : (
          <img
            src='file-signature.svg'
            alt=''
            className='w-8 '
            onClick={() => setshowIcon(true)}
          />
        )}
      </div>
    </div>
  );
};

export default PopUp;
