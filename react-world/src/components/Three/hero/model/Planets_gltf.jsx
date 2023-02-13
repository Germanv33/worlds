import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { motion } from "framer-motion-3d";
import { useMotionValue, useTransform } from "framer-motion";
import { Camera, StaticReadUsage } from "three";

export function Earth(props) {
  const { nodes, materials } = useGLTF("/earth/planets_gltf.glb");

  const group = useRef();
  const [rotSpeed, setSpeed] = useState(1);
  const l1 = useRef();
  const l2 = useRef();
  const l3 = useRef();
  const l4 = useRef();
  const l5 = useRef();

  const k = useMotionValue(0);
  const speed = useTransform(k, (v) => v / 100);

  useFrame(() => {
    group.current.rotation.z += 0.0004 * rotSpeed;
    group.current.rotation.x += 0.0003 * rotSpeed;
  });

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      onPointerOver={(e) => {
        setSpeed(0.2);
      }}
      onPointerOut={(e) => {
        // e.stopPropagation();
        setSpeed(1);
      }}
    >
      <group name="Scene">
        <motion.mesh
          visible={false}
          ref={l3}
          name="line_island_3"
          geometry={nodes.line_island_3.geometry}
          material={materials.PM3D_Sphere3D_8}
          rotation={[Math.PI / 2, 0, 0]}
          scale={1.01}
          initial="hidden"
          animate="visible"
          variants={variants}
        />

        <motion.mesh
          visible={false}
          name="Line_island_4"
          ref={l4}
          geometry={nodes.Line_island_4.geometry}
          material={materials.PM3D_Sphere3D_8}
          rotation={[Math.PI / 2, 0, 0]}
          scale={1.01}
          initial="hidden"
          animate="visible"
          variants={variants}
        />

        <motion.mesh
          visible={false}
          name="Line_island_1"
          ref={l1}
          geometry={nodes.Line_island_1.geometry}
          material={materials.PM3D_Sphere3D_8}
          rotation={[Math.PI / 2, 0, 0]}
          scale={1.01}
          initial="hidden"
          animate="visible"
          variants={variants}
        />

        <motion.mesh
          visible={false}
          name="Line_island_5"
          ref={l5}
          geometry={nodes.Line_island_5.geometry}
          material={materials.PM3D_Sphere3D_8}
          rotation={[Math.PI / 2, 0, 0]}
          scale={1.01}
          initial="hidden"
          animate="visible"
          variants={variants}
        />

        <motion.mesh
          visible={false}
          ref={l2}
          name="line_island_2"
          geometry={nodes.line_island_2.geometry}
          rotation={[Math.PI / 2, 0, 0]}
          scale={1.01}
          initial="hidden"
          animate="visible"
          variants={variants}
        />

        <mesh
          name="Clouds"
          geometry={nodes.Clouds.geometry}
          material={materials.PM3D_Sphere3D1}
          scale={0.026}
        />

        <mesh
          visible={false}
          name="Island_1"
          onPointerOver={(e) => {
            e.stopPropagation();
            l1.current.visible = true;
            l1.current.material.transparent = true;
            l1.current.material.opacity = 0.5;
          }}
          onPointerOut={(e) => {
            e.stopPropagation();

            if (e.eventObject.name == "Island_1") {
              l1.current.visible = false;
              l1.current.material.opacity = 0;
            }
          }}
          geometry={nodes.Island_1.geometry}
          material={materials.PM3D_Sphere3D_8}
          position={[0.04, 0.02, 0.01]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={1.02}
        />

        <mesh
          visible={false}
          name="Island_5"
          onPointerOver={(e) => {
            e.stopPropagation();
            l5.current.visible = true;
            l5.current.material.transparent = true;
            l5.current.material.opacity = 0.5;
          }}
          onPointerOut={(e) => {
            e.stopPropagation();
            if (e.eventObject.name == "Island_5") {
              l5.current.visible = false;
              l5.current.material.opacity = 0;
            }
          }}
          geometry={nodes.Island_5.geometry}
          material={materials.PM3D_Sphere3D_8}
          position={[0.04, 0, 0.01]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={1.02}
        />
        <mesh
          visible={false}
          name="Island_3"
          onPointerOver={(e) => {
            e.stopPropagation();
            l3.current.visible = true;
            l3.current.material.transparent = true;
            l3.current.material.opacity = 0.5;
          }}
          onPointerOut={(e) => {
            e.stopPropagation();
            if (e.eventObject.name == "Island_3") {
              l3.current.visible = false;
              l3.current.material.opacity = 0;
            }
          }}
          geometry={nodes.Island_3.geometry}
          material={materials.PM3D_Sphere3D_8}
          position={[0.02, 0, 0.01]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={1.02}
        />
        <mesh
          visible={false}
          name="Island_4"
          onPointerOver={(e) => {
            e.stopPropagation();
            l4.current.visible = true;
            l4.current.material.transparent = true;
            l4.current.material.opacity = 0.5;
          }}
          onPointerOut={(e) => {
            e.stopPropagation();
            if (e.eventObject.name == "Island_4") {
              l4.current.visible = false;
              l4.current.material.opacity = 0;
            }
          }}
          geometry={nodes.Island_4.geometry}
          material={materials.PM3D_Sphere3D_8}
          position={[0, 0, 0.01]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={1.02}
        />
        <mesh
          visible={false}
          name="Island_2"
          onPointerOver={(e) => {
            e.stopPropagation();
            l2.current.visible = true;
            l2.current.material.transparent = true;
            l2.current.material.opacity = 0.5;
          }}
          onPointerOut={(e) => {
            e.stopPropagation();
            if (e.eventObject.name == "Island_2") {
              l2.current.visible = false;
              l2.current.material.opacity = 0;
            }
          }}
          geometry={nodes.Island_2.geometry}
          material={materials.PM3D_Sphere3D_8}
          position={[0, 0, 0.01]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={1.02}
        />

        <mesh
          name="Planet"
          geometry={nodes.Planet.geometry}
          material={materials.PM3D_Sphere3D2}
          rotation={[Math.PI / 2, 0, 0]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/earth/planets_gltf.glb");
