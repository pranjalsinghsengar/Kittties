import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Cart from "../pages/Cart";
import RuskRupees from "../pages/RuskRupees";
import Home from "../Home";
import ReactjsProject from "../pages/ReactjsProject";

const ReactRoute = () => {
  return (
    <>
      <Routes>
        {/* <Route path='/' element={<Home />} /> */}
        {/* <Route path='cart' element={<Cart />} /> */}
        <Route path='/' element={<Home />} />
        <Route path='ReactjsProject' element={<ReactjsProject />} />
      </Routes>
    </>
  );
};

export default ReactRoute;
