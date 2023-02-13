import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
import { Loader } from "../../../loader/Loader";
import { Car } from "./Car-c";

export function CarMesh() {
  // const myMesh = useRef<Mesh>(null!);
  // const [rotSpeed, setSpeed] = useState(1);

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Car position={[0, -2, 0]} scale={1.9} />
      </Suspense>
    </>
  );
}
