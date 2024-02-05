import React from "react";

const FooterGradient = ({ className }) => {
  return (
    <div
      className={`flex justify-center fixed bottom-0  w-full h-20  bg-gradient-to-b from-transparent via-slate-50 via-9D0% to-white z-10 ${className} `}
    ></div>
  );
};

export default FooterGradient;
