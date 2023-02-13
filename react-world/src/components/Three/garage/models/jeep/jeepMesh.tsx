import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
import { Loader } from "../../../loader/Loader";
import { Jeep } from "./Jeep-c";

export function JeepMesh() {
  // const myMesh = useRef<Mesh>(null!);
  // const [rotSpeed, setSpeed] = useState(1);

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Jeep position={[0, -2, 0]} scale={0.005} />
      </Suspense>
    </>
  );
}
