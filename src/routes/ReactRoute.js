import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import RuskRupees from "../pages/RuskRupees";

const ReactRoute = () => {
  return (
    <>
      <Routes>
        {/* <Route path='/' element={<Home />} /> */}
        {/* <Route path='cart' element={<Cart />} /> */}
        <Route path='/' element={<RuskRupees />} />
      </Routes>
    </>
  );
};

export default ReactRoute;
