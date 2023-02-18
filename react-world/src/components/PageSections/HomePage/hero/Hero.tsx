import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { PlanetScene } from "../../../Three/hero/PlanetScene";
import "./hero.sass";

export function Hero() {
  const { scrollY } = useScroll();

  const margins = [0, 300];

  let heroRef = useRef(null);

  // const [windowWidth, setWindowWidth] = useState(0);
  // const [windowHeight, setWindowHeight] = useState(0);

  // const [heroHeight, setHeroHeight] = useState("0px");
  // const [heroMinHeight, setHeroMinHeight] = useState("0px");

  // let resizeWindow = () => {
  //   setWindowWidth(window.innerWidth);
  //   setWindowHeight(window.innerHeight);
  // };

  // useEffect(() => {
  //   resizeWindow();
  //   window.addEventListener("resize", resizeWindow);
  //   return () => {
  //     window.removeEventListener("resize", resizeWindow);
  //   };
  // }, [windowWidth]);

  // useEffect(() => {
  //   if (windowWidth * 0.79 > windowHeight) {
  //     setHeroHeight("100vh");
  //     setHeroMinHeight(String(windowWidth / 1.5) + "px");
  //   } else {
  //     setHeroHeight(String(windowWidth * 0.79) + "px");
  //     setHeroMinHeight("0px");
  //   }
  // }, [windowWidth, windowHeight]);

  const h = useTransform(
    scrollY,
    [0, 1450, 1500, 1900],
    [
      "calc(100vh + 1500px)",
      "calc(100vh + 1500px)",
      "calc(100vh + 1500px)",
      "calc(100vh + 1000px)",
    ]
  );

  const opacity = useTransform(scrollY, [0, 300], ["1", "0"]);

  return (
    <motion.section
      id="hero"
      ref={heroRef}
      style={{ height: h }}
      className="hero relative "
    >
      {/* top-[-30%] right-[-30%] */}
      {/* flex justify-center items-center */}
      <PlanetScene />

      {/* <div className="content z-20 flex ml-auto justify-center items-center flex-col h-full text-white w-[55%]">
        <h1 className="inline-flex font-black text-5xl text-center text-white mb-4">
          HUNTERS PLANET
        </h1>

        <h2 className="text-3xl text-center">
          A new era of play2earn.
          <br /> Explore the world and find the treasure!
        </h2>

        <input
          type="email"
          className="
          hero-input
          
          text-center
          bg-transparent
      "
          id="exampleEmail0"
          placeholder="enter e-mail"
        />

        <button>REGISTER</button>
      </div> */}
    </motion.section>
  );
}
