import { Canvas, useFrame } from "@react-three/fiber";
import { circIn, useScroll, useTransform } from "framer-motion";
import { Suspense, useRef, useState } from "react";
import { Mesh } from "three";
import { Earth } from "../../Three/hero/model/Planets_gltf";
import { Loader } from "../loader/Loader";

export function PlanetMesh( scrollYProgressRef: any) {
  // const myMesh = useRef<Mesh>(null!);
  // const [rotSpeed, setSpeed] = useState(1);

  const { scrollYProgress } = useScroll({
    target: scrollYProgressRef,
    offset: ["start start", "end start"],
  });

  useFrame(() => {
    // console.log(scrollYProgress.get())
  })

  // const top = useTransform(scrollYProgress, [0, 1], ["0", "45%"], { ease: circIn});

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Earth position={[-3, 0, 0]} scale={2.2} />
      </Suspense>
    </>
  );
}
