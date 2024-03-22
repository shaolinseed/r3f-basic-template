import { useFrame, extend, Object3DNode } from "@react-three/fiber";
import { useRef } from "react";
import { shaderMaterial } from "@react-three/drei";
import * as THREE from "three";
import { Mesh } from "three";
import vertexShader from "../shaders/box/vertex.glsl";
import fragmentShader from "../shaders/box/fragment.glsl";
import { useControls } from "leva";

// Fix typescript (lower case JSX element)
declare global {
  namespace JSX {
    interface IntrinsicElements {
      boxMaterial: Object3DNode<
        THREE.ShaderMaterial,
        typeof THREE.ShaderMaterial
      >;
    }
  }
}

const Box = () => {
  const meshRef = useRef<Mesh>(null!);
  const color = useControls({
    boxColor: "#eb0051",
  });

  const BoxMaterial = shaderMaterial(
    { color: new THREE.Color(color.boxColor) },
    vertexShader,
    fragmentShader
  );

  extend({ BoxMaterial });

  useFrame(() => {
    meshRef.current.rotation.x += 0.005;
    meshRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <boxMaterial key={BoxMaterial.key} />
    </mesh>
  );
};

export default Box;
