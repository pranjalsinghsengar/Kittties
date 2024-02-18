import React, { useContext } from "react";
import Button from "../components/Button";
import { Context } from "../context/AppContext";
import Bttn from "../components/Button";
import { useDispatch } from "react-redux";
import { AddToCart } from "../redux/action";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import ReactRoute from "../routes/ReactRoute";
import Home from "./Home";
import PopUp from "../components/PopUp";

const Main = () => {
  const { userData, elementRef } = useContext(Context);

  console.log(userData);
  const dispatch = useDispatch();
  return (
    <div className='w-full h-full relative no-scrollbar' ref={elementRef}>
      <Header />
      <ReactRoute />
      <PopUp />
    </div>
  );
};

export default Main;
