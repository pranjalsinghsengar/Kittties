import React, { useContext } from "react";
import { Document, Page } from "react-pdf";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";

const ShowResume = () => {
  return (
    <div className='h-full lg:flex justify-center items-center bg-gray-800 p-8 overflow-y-auto'>
      <div className='w-full lg:h-full h-1/3 '>
        <div className='h-full flex justify-center items-center lg:text-6xl text-2xl text-white'>
          <p className='lg:w-11/12'>
            Believe your
            <span className='lg:text-8xl text-3xl text-orange-300'>
              {" "}
              endorsement
            </span>{" "}
            would be{" "}
            <span className='lg:text-6xl text-green-400'> invaluable</span>
          </p>
        </div>
      </div>
      <div className='lg:w-4/5 h-1/2 lg:h-full '>
        <div className='bg-white h-full w-full rounded-lg lg:rounded-2xl overflow-hidden'>
          {/* <embed
            src='Resume_Pranjal_2023.pdf'
            type='application/pdf'
            width='100%'
            height='100%'
          /> */}

          <iframe
            src='Resume_Pranjal_2023.pdf'
            width='100%'
            height='100%'
            title='Resume PDf'
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ShowResume;
