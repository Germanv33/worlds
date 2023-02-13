import { useRef, useState, useEffect } from "react";

import "./team.sass";
import { OrbitControls, Stars } from "@react-three/drei";
import { Canvas, extend, useFrame, useThree } from "@react-three/fiber";

import { Mesh } from "three";

import team from "../../../../assets/team/team.png";
import shape_1 from "../../../../assets/team/shape1.png";
import shape_2 from "../../../../assets/team/shape2.png";
import shape_3 from "../../../../assets/team/shape3.png";
import shape_4 from "../../../../assets/team/shape4.png";
import shape_5 from "../../../../assets/team/shape5.png";

const StarsBG = () => {
  const ref = useRef<Mesh>(null!);
  const ref2 = useRef<Mesh>(null!);

  useFrame(() => {
    ref.current.rotation.y += 0.0001;
    ref2.current.rotation.y -= 0.00005;
  });

  return (
    <>
      {/* <Stars
        ref={ref}
        radius={6}
        depth={100}
        count={5000}
        factor={3}
        saturation={0.09}
        fade
        speed={0.01}
      />
      <Stars
        ref={ref2}
        radius={222}
        depth={200}
        count={5000}
        factor={3}
        saturation={0.09}
        fade
        speed={0.02}
      /> */}
      <Stars
        ref={ref}
        radius={4}
        depth={100}
        count={5000}
        factor={3}
        saturation={0.9}
        fade
        speed={0.01}
      />
      <Stars
        ref={ref2}
        radius={2}
        depth={200}
        count={5000}
        factor={3}
        saturation={0.9}
        fade
        speed={0.02}
      />
    </>
  );
};

export function SpaceBG() {
  return (
    <>
      <Canvas camera={{ position: [0, 0, 40], fov: 25 }}>
        <ambientLight intensity={0.25} position={[0, 0, 50000]} castShadow />
        <directionalLight position={[0, 0, 58]} castShadow intensity={1} />
        <StarsBG />
      </Canvas>
    </>
  );
}

export function TeamRoadmap() {
  return (
    <>
      <section className="team">
        <div className="bg">
          <SpaceBG />
        </div>

        <div className="team-block">
          <h2>TEAM</h2>

          <img src={team} alt="teammates" />
          <div className="names">
            <div className="name">
              <img src={shape_1} alt="shape" />
              <h3>Joseph</h3>
              <h4>3D designer</h4>
            </div>

            <div className="name">
              <img src={shape_2} alt="shape" />
              <h3>Joseph</h3>
              <h4>3D designer</h4>
            </div>

            <div className="name">
              <img src={shape_3} alt="shape" />
              <h3>Joseph</h3>
              <h4>3D designer</h4>
            </div>

            <div className="name">
              <img src={shape_4} alt="shape" />
              <h3>Joseph</h3>
              <h4>3D designer</h4>
            </div>

            <div className="name">
              <img src={shape_5} alt="shape" />
              <h3>Joseph</h3>
              <h4>3D designer</h4>
            </div>
          </div>
        </div>

        <div className="roadmap-block">
          <h2>ROADMAP</h2>

          <div className="stages">
            <div className="stage">
              <h3>Stage One: Summer 2022</h3>
            </div>

            <div className="stage">
              <h3>Stage One: Summer 2022</h3>
            </div>

            <div className="stage">
              <h3>Stage One: Summer 2022</h3>
            </div>

            <div className="stage">
              <h3>Stage One: Summer 2022</h3>
            </div>

            <div className="stage">
              <h3>Stage One: Summer 2022</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
