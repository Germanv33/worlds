import { OrbitControls, Stars } from "@react-three/drei";
import { Canvas, extend, useFrame, useThree } from "@react-three/fiber";
import { cubicBezier, easeIn, easeInOut, useScroll, useTransform } from "framer-motion";
import { motion, circIn } from "framer-motion";
import { useRef } from "react";
import THREE, { Mesh } from "three";
import { PlanetMesh } from "./planetMesh";
import { HeroText } from "./heroText";
import mouse_icon from "../../../assets/hero/mouse.png";

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

export const PlanetCamera = () => {
  const camera = useRef<THREE.PerspectiveCamera>(null!);

  const z_margins = [55, 8];
  // const x = useMotionValue(0);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], z_margins);
  const x = useTransform(scrollY, [0, 1000], [-5, 0]);
  let rCmaera = useThree((state) => state.camera);

  useFrame(() => {
    // camera.current.position.z = y.get();
    
    // console.log(scrollYProgress.get());
    rCmaera.position.z = y.get();
    rCmaera.position.x = x.get();
    // console.log(scrollY.get());
    // console.log(camera.current.position.z);
    // camera.current.position.z = y.get();
    // const y = useTransform(scrollY, [0, 40], z_margins);
  });

  return (
    <>
      <perspectiveCamera ref={camera} fov={15} />
    </>
  );
};

export function PlanetScene() {
  extend({ OrbitControls });

  const containerRef = useRef(null!);

  // const x = useMotionValue(0);

  const { scrollY } = useScroll();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  

  const top = useTransform(scrollYProgress, [0.6, 1], ["0", "250px"], { ease: easeInOut});
  // const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1], { ease: easeInOut});


  const opacity = useTransform(
    scrollY,
    [900, 1100, 1300, 1700],
    ["0", "1", "0.9", "0.4"],
    {
      ease: circIn,
    }
  );

  const border_opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // const top = useTransform(scrollY, [1550, 1900], ["91%", "85%"], {
  //   ease: easeInOut,
  // });

  // const top = useTransform(
  //   scrollY,
  //   [900, 1100, 1500, 1900],
  //   [
  //     "calc(100vh + 200px)",
  //     "calc(100vh + 200px)",
  //     "calc(100vh + 600px)",
  //     "calc(100vh + 450px)",
  //   ]
  // );

  return (
    <>
      <motion.div  className="sticky-container">

        <motion.div
        transition={{ type: "inertia", velocity: 50 }}
          style={{ top }}
          className="relative h-full w-full overflow-hidden"
          ref={containerRef}
        >
          <div className="hero-canvas">
            <Canvas>
              <ambientLight
                intensity={0.25}
                position={[0, 0, 50000]}
                castShadow
              />

              <directionalLight
                position={[0, 0, 58]}
                castShadow
                intensity={1}
              />

              <StarsBG />
              <PlanetMesh containerRef/>
              {/* <OrbitControls /> */}
              <PlanetCamera />
              <HeroText />
            </Canvas>
          </div>

          <motion.div
            style={{ opacity }}
            className="content flex ml-auto items-center flex-col text-white w-[55%]"
          >
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
          </motion.div>

          <motion.div
            style={{ opacity: border_opacity }}
            className="mouse-container"
          >
            <motion.div
              initial={{ opacity: 0.3 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="mouse-wrapper"
            ></motion.div>

            <motion.span
              initial={{ opacity: 0.7 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              Scroll down to see the content{" "}
              <img src={mouse_icon} alt="mouse icon" />
            </motion.span>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
}
