import { useEffect, useRef, useState } from "react";
import { Description } from "../../components/PageSections/HomePage/description/Description";
import { Garage } from "../../components/PageSections/HomePage/garage/garage";
import { Hero } from "../../components/PageSections/HomePage/hero/Hero";
import { Intro } from "../../components/PageSections/HomePage/intro/intro";
import { TeamRoadmap } from "../../components/PageSections/HomePage/team/team";
import "./style.sass";

export function HomePage() {
  return (
    <>
      <div className="overflow-hidden">
        <Hero />

        <Description />

        <Garage />
        <Intro />
        <TeamRoadmap />
      </div>
    </>
  );
}
