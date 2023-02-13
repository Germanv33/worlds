import {
  Center,
  Float,
  Text3D,
  useMatcapTexture,
  useScroll,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

// should be put elsewhere :)
function debounce(fn, ms) {
  let timer;
  return (_) => {
    clearTimeout(timer);
    timer = setTimeout((_) => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

export const HeroText = () => {
  const [matcapTexture] = useMatcapTexture("7B5254_E9DCC7_B19986_C8AC91", 256);
  const ref = useRef();
  const ref1 = useRef();
  const ref2 = useRef();
  const scroll = useScroll();
  const tl = useRef();
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }, 300);

    window.addEventListener("resize", debouncedHandleResize);

    return (_) => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  }, []);

  useFrame(() => {
    // tl.current.seek(scroll.offset * tl.current.duration());
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline();

    // tl.current.to(
    //   ref1.current.position,
    //   { duration: 1, x: -9.5, y: -1, z: 46 },
    //   0
    // );
    // tl.current.to(ref1.current.scale, { duration: 1, x: 2, y: 2, z: 0.5 }, 0);

    // tl.current.to(
    //   ref2.current.position,
    //   { duration: 1, x: -5, y: 0, z: 29 },
    //   0
    // );
    // tl.current.to(ref2.current.scale, { duration: 1, x: 2, y: 2, z: 0.5 }, 0);

    // tl.current.to(
    //   ref.current.position,
    //   { duration: 1, x: -10, y: 0, z: 10 },
    //   0
    // );
    // tl.current.to(ref.current.scale, { duration: 1, x: 2, y: 2, z: 0.5 }, 0);

    tl.current.to(
      ref1.current.position,
      { duration: 1, x: -25, y: 31, z: -21 },
      0
    );
    tl.current.to(ref1.current.scale, { duration: 1, x: 15, y: 15, z: 0.5 }, 0);

    tl.current.to(
      ref2.current.position,
      { duration: 1, x: -5, y: 0, z: 29 },
      0
    );
    tl.current.to(ref2.current.scale, { duration: 1, x: 2, y: 2, z: 0.5 }, 0);

    tl.current.to(
      ref.current.position,
      { duration: 1, x: -60, y: -24, z: 0 },
      0
    );
    tl.current.to(ref.current.scale, { duration: 1, x: 15, y: 15, z: 0.5 }, 0);
  }, []);

  return (
    <group>
      <Float rotationIntensity={0.6}>
        <Text3D
          ref={ref1}
          font={"/fonts/Mountains of Christmas_Bold.json"}
          // size={(dimensions.width * 1.75) / 1600}
          height={0.4}
          curveSegments={2}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}
        >
          Welcome
          <meshMatcapMaterial matcap={matcapTexture} />
        </Text3D>
      </Float>

      <Float rotationIntensity={0.6}>
        <Text3D
          ref={ref}
          font={"/fonts/Mountains of Christmas_Bold.json"}
          // size={(dimensions.width * 1.75) / 1600}
          height={0.4}
          curveSegments={2}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}
        >
          Hunters Planet
          <meshMatcapMaterial matcap={matcapTexture} />
        </Text3D>
      </Float>

      <Float>
        <Text3D
          ref={ref2}
          font={"/fonts/Mountains of Christmas_Bold.json"}
          // size={(dimensions.width * 1.75) / 1600}
          height={0.4}
          curveSegments={2}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}
        >
          to the
          <meshMatcapMaterial matcap={matcapTexture} />
        </Text3D>
      </Float>
    </group>
  );
};
