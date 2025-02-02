import { useGLTF } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";

export const Totoro = (props: GroupProps) => {
  const { nodes, materials } = useGLTF("./uploads_files_2951928_Totoro.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        // @ts-expect-error: missing types
        geometry={nodes.Body.geometry}
        material={materials.skin}
        position={[0, 12.499, 0]}
        scale={7.42}
      >
        <mesh
          castShadow
          receiveShadow
          // @ts-expect-error: missing types
          geometry={nodes.Arms.geometry}
          material={materials.skin}
          position={[0.894, -0.203, -0.117]}
          rotation={[0, 0, 0.189]}
          scale={0.343}
        >
          <mesh
            castShadow
            receiveShadow
            // @ts-expect-error: missing types
            geometry={nodes.Claws_arms.geometry}
            material={materials.claws}
            position={[-0.039, -2.465, -0.483]}
            rotation={[0.049, 0.25, 0.058]}
            scale={0.278}
          />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          // @ts-expect-error: missing types
          geometry={nodes.Belly.geometry}
          material={materials.belly}
        >
          <mesh
            castShadow
            receiveShadow
            // @ts-expect-error: missing types
            geometry={nodes.Marks_belly.geometry}
            material={materials.skin}
            position={[0, -0.113, 0.876]}
            rotation={[-0.52, 0, 0]}
            scale={[0.109, 0.044, 0.007]}
          />
          <mesh
            castShadow
            receiveShadow
            // @ts-expect-error: missing types
            geometry={nodes.Marks_belly001.geometry}
            material={materials.skin}
            position={[0.426, -0.304, 0.862]}
            rotation={[-0.424, 0.432, 0.185]}
            scale={[0.109, 0.044, 0.007]}
          />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          // @ts-expect-error: missing types
          geometry={nodes.Ears.geometry}
          material={materials.skin}
          position={[0.442, 0.928, 0]}
          rotation={[0, 0, -0.27]}
          scale={0.046}
        />
        <group
          position={[0.464, 0.323, 0.781]}
          rotation={[-0.239, 0.625, -0.108]}
          scale={[0.11, 0.11, 0.047]}
        >
          <mesh
            castShadow
            receiveShadow
            // @ts-expect-error: missing types
            geometry={nodes.Sphere.geometry}
            material={materials["eyes | sclera"]}
          />
          <mesh
            castShadow
            receiveShadow
            // @ts-expect-error: missing types
            geometry={nodes.Sphere_1.geometry}
            material={materials["eyes | pupil"]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          // @ts-expect-error: missing types
          geometry={nodes.Feet.geometry}
          material={materials.skin}
          position={[0.258, -1.502, -0.117]}
          rotation={[0, -1.195, 1.63]}
          scale={[0.243, 0.175, 0.243]}
        >
          <mesh
            castShadow
            receiveShadow
            // @ts-expect-error: missing types
            geometry={nodes.Claws_feet.geometry}
            material={materials.claws}
            position={[-0.722, -2.397, -0.035]}
            rotation={[0.119, 0.19, -0.215]}
            scale={[0.364, 0.58, 0.322]}
          />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          // @ts-expect-error: missing types
          geometry={nodes.Leaf_hat.geometry}
          material={materials["leaf | body"]}
          position={[0, 0.923, 0]}
          scale={0.407}
        >
          <mesh
            castShadow
            receiveShadow
            // @ts-expect-error: missing types
            geometry={nodes.Stalk.geometry}
            material={materials["leaf | stalk"]}
            position={[0.009, 0.409, -1.301]}
            rotation={[0.082, 0, 0]}
            scale={[0.152, 0.084, 0.588]}
          />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          // @ts-expect-error: missing types
          geometry={nodes.Nose.geometry}
          material={materials.nose}
          position={[0, 0.375, 0.802]}
          rotation={[1.014, 0, 0]}
          scale={[0.135, 0.12, 0.091]}
        />
        <mesh
          castShadow
          receiveShadow
          // @ts-expect-error: missing types
          geometry={nodes.Tail.geometry}
          material={materials.skin}
          position={[0, -1.34, -0.863]}
          scale={[0.31, 0.31, 0.398]}
        />
        <mesh
          castShadow
          receiveShadow
          // @ts-expect-error: missing types
          geometry={nodes.Whiskers.geometry}
          material={materials.whiskers}
          position={[0.423, 0.198, 0.403]}
          rotation={[0, 0.348, -0.046]}
          scale={0.038}
        />
      </mesh>
    </group>
  );
};

useGLTF.preload("./uploads_files_2951928_Totoro.glb");
