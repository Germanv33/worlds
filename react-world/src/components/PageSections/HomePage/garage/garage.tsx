import "./garage.sass";
import garage from "../../../../assets/garage/garage.png";
import man_1 from "../../../../assets/garage/man_1.png";
import man_2 from "../../../../assets/garage/man_2.png";
import man_3 from "../../../../assets/garage/man_3.png";
import { JeepMesh } from "../../../Three/garage/models/jeep/jeepMesh";
import { OrbitControls } from "@react-three/drei";
import { Canvas, extend, useFrame, useThree } from "@react-three/fiber";
import { MotoMesh } from "../../../Three/garage/models/moto/motoMesh";
import { CarMesh } from "../../../Three/garage/models/car/carMesh";
import { ExMesh } from "../../../Three/garage/models/ex/carMesh";
import { useState } from "react";

export function Garage() {
  extend({ OrbitControls });

  const [curTech, setCur] = useState(true);

  return (
    <>
      <section className="garage">
        <img src={garage} alt="garage" />

        <div className="title">
          <h2>TRANSPORT COLLECTION</h2>

          <Canvas camera={{ position: [0, 0, 20], fov: 25 }}>
            <ambientLight intensity={0.75} position={[0, 0, 10]} castShadow />

            <directionalLight position={[1, 0, 0]} intensity={2} />

            <directionalLight
              position={[0, 1, 0]}
              intensity={2}
              // color="yellow"
            />

            {/* <JeepMesh /> */}
            {!curTech && <ExMesh />}
            {curTech && <CarMesh />}

            <OrbitControls
              enableZoom={false}
              enablePan={false}
              enableDamping={false}
              autoRotate
              autoRotateSpeed={0.5}
              maxPolarAngle={1.5}
              minPolarAngle={1.3}
            />
          </Canvas>

          <h3 className="vehicle-descr">
            Big, powerful and strong Monster-Truck.
            <br /> This car contains two seats <br />
            for you and your friend.
          </h3>
          <button
            onClick={() => {
              setCur((val) => !val);
            }}
          >
            BUY
          </button>

          {/* <div className="chars">
            <div className="gifs">
              <img src={man_2} alt="char" className="first" />
              <img src={man_1} alt="char" />
              <img src={man_3} alt="char" className="third" />
            </div>
            <h3>HERO COLLECTION</h3>
          </div> */}
        </div>
      </section>
    </>
  );
}
