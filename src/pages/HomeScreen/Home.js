import React, { createRef, useEffect, useRef } from "react";

import { gsap, ScrollTrigger, SplitText } from "gsap/all";
import RuskRupees from "./components/RuskRupees";
import ScrapBuddy from "./components/ScrapBuddy";
import Intro from "./components/Intro";
import PopUp from "../../components/PopUp";
import Skills from "./Skills";
import { useContext } from "react";
import { Context } from "../../context/AppContext";
import * as Draggable from "gsap/Draggable";
import { CSSPlugin } from "gsap";
import SplitType from "split-type";

const Home = () => {
  const elementRef = useRef(null);
  const triggerRef = useRef(null);
  const eleRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    // const SplitHead = new SplitType(".textHead");
    // console.warn("SplitHead", SplitHead);

    const tl = gsap
      .timeline(
        { defaults: { duration: 2, ease: "none" } },
        {
          scrollTrigger: {
            trigger: elementRef.current,
            start: "center 400", //animation start at this point
            end: "bottom top ", //animation end at this point
            markers: true,
            scrub: true,
            pin: true,
          },
        }
      )
      .to(".construction", {
        backgroundColor: "#000000",
        delay: 0.7,
      });

    // tl.from(".textHead", {
    //   opacity: 1,
    //   y: 20,
    //   duration: 1,
    //   stagger: 0.2, // Stagger time between each element
    // });

    tl.to(".textHead, .textPera ", {
      y: -30,
      stagger: 0.09,
      delay: 0.7,
      duration: 0.7,
      opacity: 1,
    });

    // return () => {};
  }, []);

  return (
    <div className='h-screen  '>
      <Intro />
      <Skills triggerRef={triggerRef} eleRef={eleRef} />
    </div>
  );
};

export default Home;
