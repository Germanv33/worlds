import { useEffect, useRef, useState } from "react";
import { Description } from "../../components/PageSections/HomePage/description/Description";
import { Garage } from "../../components/PageSections/HomePage/garage/garage";
import { Hero } from "../../components/PageSections/HomePage/hero/Hero";
import { Intro } from "../../components/PageSections/HomePage/intro/intro";
import { TeamRoadmap } from "../../components/PageSections/HomePage/team/team";
import "./style.sass";
import gsap from "gsap";
// import { LocomotiveScrollProvider } from "react-locomotive-scroll";
// import { ScrollSmoother } from "gsap/dist/ScrollSmoother"; бЕСИТ НАДО КУПИТЬ ТИПО

export function HomePage() {
  // gsap.registerPlugin(ScrollSmoother);

  // const smoother = ScrollSmoother.create({
  //   wrapper: ".root",
  //   content: ".overflow-hidden",
  //   smooth: 1.5,
  //   effects: true,
  //   normalizeScroll: true,
  //   // onUpdate: (self) => update(clamp(self.getVelocity() / -50)),
  //   // onStop: () => update(0)
  // });

  // ScrollSmoother.create({
  //   content: "#smooth-content",
  //   wrapper: "#smooth-wrapper",
  //   smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
  //   effects: true, // looks for data-speed and data-lag attributes on elements
  //   normalizeScroll: true, // prevents address bar from showing/hiding on most devices, solves various other browser inconsistencies
  //   ignoreMobileResize: true, // skips ScrollTrigger.refresh() on mobile resizes from address bar showing/hiding
  // });

  const containerRef = useRef(null);

  // useEffect(() => {
  //   document.body.style.height;
  // }, []);

  return (
    <>
      <div className="" ref={containerRef} id="smooth-wrapper">
        <div id="smooth-content">
          <Hero data-scroll-sticky />

          <Description />

          <Garage />
          <Intro />
          <TeamRoadmap />
        </div>
      </div>
    </>
  );
}
