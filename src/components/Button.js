import { Button, ButtonBase } from "@mui/material";
import React from "react";

const Bttn = ({ backgroundColor, className, btnText, btnStyle , onClick}) => {
  return (
    <button
      variant='text'
      style={{
        ...btnStyle,
        backgroundColor: backgroundColor,
      }}
      className={className}
      onClick={onClick}
    >
      {btnText}
    </button>
  );
};

export default Bttn;
