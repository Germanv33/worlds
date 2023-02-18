import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
import { Loader } from "../../../loader/Loader";
import { Car12 } from "./Car_new";

export function Car1Mesh() {
  // const myMesh = useRef<Mesh>(null!);
  // const [rotSpeed, setSpeed] = useState(1);

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Car12 castShadow position={[0, -2, 0]} scale={0.016} />
      </Suspense>
    </>
  );
}
