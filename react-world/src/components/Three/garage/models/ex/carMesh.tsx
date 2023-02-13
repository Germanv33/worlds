import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
import { Loader } from "../../../loader/Loader";
import { Ex } from "./ex-c";

export function ExMesh() {
  // const myMesh = useRef<Mesh>(null!);
  // const [rotSpeed, setSpeed] = useState(1);

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Ex position={[0, 0, 0]} scale={0.05} />
      </Suspense>
    </>
  );
}
