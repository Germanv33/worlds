import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
import { Mesh } from "three";
import { Earth } from "../../Three/hero/model/Planets_gltf";
import { Loader } from "../loader/Loader";

export function PlanetMesh() {
  // const myMesh = useRef<Mesh>(null!);
  // const [rotSpeed, setSpeed] = useState(1);

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Earth position={[-3, 0, 0]} scale={2.2} />
      </Suspense>
    </>
  );
}
