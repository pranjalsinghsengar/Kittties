import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Cart from "../pages/Cart";
import RuskRupees from "../pages/HomeScreen/components/RuskRupees";
import Home from "../pages/HomeScreen/Home";
import ReactjsProject from "../pages/ReactjsProject";
import Projects from "../pages/Projects";
import ShowResume from "../pages/ShowResume";

const ReactRoute = () => {
  return (
    <>
      <Routes>
        {/* <Route path='/' element={<Home />} /> */}
        {/* <Route path='cart' element={<Cart />} /> */}
        <Route path='/' element={<Home />} />
        <Route path='ReactjsProject' element={<ReactjsProject />} />
        <Route path='Project' element={<Projects />} />
        <Route path='Resume' element={<ShowResume />} />
      </Routes>
    </>
  );
};

export default ReactRoute;
