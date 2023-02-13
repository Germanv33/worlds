import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Jeep(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/garage/jeep-c.glb");
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="body_root" position={[-0.26, 0.22, -0.51]} scale={1.62}>
          <mesh
            name="Mesh"
            geometry={nodes.Mesh.geometry}
            material={materials["Material #2146931449"]}
          />
          <mesh
            name="Mesh_1"
            geometry={nodes.Mesh_1.geometry}
            material={materials["Material #2146931446"]}
          />
          <mesh
            name="Mesh_2"
            geometry={nodes.Mesh_2.geometry}
            material={materials["Material #2146931437"]}
          />
          <mesh
            name="Mesh_3"
            geometry={nodes.Mesh_3.geometry}
            material={materials["Material #2146931432"]}
          />
          <mesh
            name="Mesh_4"
            geometry={nodes.Mesh_4.geometry}
            material={materials["Material #2146931433"]}
          />
          <mesh
            name="Mesh_5"
            geometry={nodes.Mesh_5.geometry}
            material={materials["Material #2146931434"]}
          />
          <mesh
            name="Mesh_6"
            geometry={nodes.Mesh_6.geometry}
            material={materials["Material #2146931435"]}
          />
          <mesh
            name="Mesh_7"
            geometry={nodes.Mesh_7.geometry}
            material={materials["Material #2146931436"]}
          />
          <mesh
            name="Mesh_8"
            geometry={nodes.Mesh_8.geometry}
            material={materials["Material #2146931438"]}
          />
          <mesh
            name="Mesh_9"
            geometry={nodes.Mesh_9.geometry}
            material={materials["Material #2146931439"]}
          />
          <mesh
            name="Mesh_10"
            geometry={nodes.Mesh_10.geometry}
            material={materials.Axles}
          />
          <mesh
            name="Mesh_11"
            geometry={nodes.Mesh_11.geometry}
            material={materials.Material_004}
          />
          <mesh
            name="Mesh_12"
            geometry={nodes.Mesh_12.geometry}
            material={materials.None}
          />
          <mesh
            name="Mesh_13"
            geometry={nodes.Mesh_13.geometry}
            material={materials["Material #2146931447"]}
          />
          <mesh
            name="Mesh_14"
            geometry={nodes.Mesh_14.geometry}
            material={materials["Material #2146931440"]}
          />
          <mesh
            name="Mesh_15"
            geometry={nodes.Mesh_15.geometry}
            material={materials["Material #2146931441"]}
          />
          <mesh
            name="Mesh_16"
            geometry={nodes.Mesh_16.geometry}
            material={materials["Material #2146931442"]}
          />
          <mesh
            name="Mesh_17"
            geometry={nodes.Mesh_17.geometry}
            material={materials.Material_012}
          />
          <mesh
            name="Mesh_18"
            geometry={nodes.Mesh_18.geometry}
            material={materials.Material_008}
          />
          <mesh
            name="Mesh_19"
            geometry={nodes.Mesh_19.geometry}
            material={materials["Material #2146931443"]}
          />
          <mesh
            name="Mesh_20"
            geometry={nodes.Mesh_20.geometry}
            material={materials["Material #2146931444"]}
          />
          <mesh
            name="Mesh_21"
            geometry={nodes.Mesh_21.geometry}
            material={materials["Material #2146931448"]}
          />
          <mesh
            name="Mesh_22"
            geometry={nodes.Mesh_22.geometry}
            material={materials["Material #2146931445"]}
          />

          <group
            name="wheel_bl"
            position={[-0.05, 0.06, 0.03]}
            rotation={[0, 0.01, 0]}
          >
            <mesh
              name="Mesh002"
              geometry={nodes.Mesh002.geometry}
              material={materials["Material #2146931454"]}
            />
            <mesh
              name="Mesh002_1"
              geometry={nodes.Mesh002_1.geometry}
              material={materials["Material #2146931456"]}
            />
            <mesh
              name="Mesh002_2"
              geometry={nodes.Mesh002_2.geometry}
              material={materials["Material #2146931455"]}
            />
            <mesh
              name="Mesh002_3"
              geometry={nodes.Mesh002_3.geometry}
              material={materials["Material #2146931435"]}
            />
          </group>

          <group
            name="wheel_BR"
            position={[-0.19, 0.07, 0.2]}
            rotation={[0, 0.02, 0]}
          >
            <mesh
              name="Mesh004"
              geometry={nodes.Mesh004.geometry}
              material={materials["Material #2146931454"]}
            />
            <mesh
              name="Mesh004_1"
              geometry={nodes.Mesh004_1.geometry}
              material={materials["Material #2146931456"]}
            />
            <mesh
              name="Mesh004_2"
              geometry={nodes.Mesh004_2.geometry}
              material={materials["Material #2146931455"]}
            />
            <mesh
              name="Mesh004_3"
              geometry={nodes.Mesh004_3.geometry}
              material={materials["Material #2146931435"]}
            />
          </group>

          <group
            name="wheel_fL"
            position={[-0.12, 0.05, -0.04]}
            rotation={[0.01, 0.01, -0.01]}
          >
            <mesh
              name="Mesh001"
              geometry={nodes.Mesh001.geometry}
              material={materials["Material #2146931454"]}
            />
            <mesh
              name="Mesh001_1"
              geometry={nodes.Mesh001_1.geometry}
              material={materials["Material #2146931455"]}
            />
            <mesh
              name="Mesh001_2"
              geometry={nodes.Mesh001_2.geometry}
              material={materials["Material #2146931456"]}
            />
            <mesh
              name="Mesh001_3"
              geometry={nodes.Mesh001_3.geometry}
              material={materials["Material #2146931435"]}
            />
          </group>

          <group
            name="wheel_FR"
            position={[-0.25, 0.04, 0.01]}
            rotation={[0.02, 0.01, 0.02]}
          >
            <mesh
              name="Mesh003"
              geometry={nodes.Mesh003.geometry}
              material={materials["Material #2146931454"]}
            />
            <mesh
              name="Mesh003_1"
              geometry={nodes.Mesh003_1.geometry}
              material={materials["Material #2146931456"]}
            />
            <mesh
              name="Mesh003_2"
              geometry={nodes.Mesh003_2.geometry}
              material={materials["Material #2146931455"]}
            />
            <mesh
              name="Mesh003_3"
              geometry={nodes.Mesh003_3.geometry}
              material={materials["Material #2146931435"]}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/garage/jeep-c.glb");
