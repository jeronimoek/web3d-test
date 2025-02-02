import { VideoPlane } from "@/components";
import { Totoro } from "@/models";
import {
  Environment,
  GizmoHelper,
  GizmoViewport,
  MeshReflectorMaterial,
  OrbitControls,
  RoundedBox,
  Stars,
} from "@react-three/drei";
import { MeshProps } from "@react-three/fiber";
import { Suspense } from "react";

const Ground = (props: Partial<MeshProps>) => {
  return (
    <mesh {...props} rotation-x={-Math.PI / 2} rotation-z={Math.PI / 2}>
      <circleGeometry args={[10, 50]} />
      {/* <MeshReflectorMaterial
        color="#2d2d2d"
        // color="white"
        mirror={1}
        resolution={4000}
        mixBlur={1}
        mixStrength={0.8}
        blur={[4000, 4000]}
        metalness={0.5}
        // normalScale={new Vector2(1, 1)}
        // {...materialProps}
      /> */}

      <MeshReflectorMaterial
        color="#2d2d2d"
        blur={[0, 0]} // Blur ground reflections (width, height), 0 skips blur
        mixBlur={0.5} // How much blur mixes with surface roughness (default = 1)
        mixStrength={1} // Strength of the reflections
        mixContrast={1} // Contrast of the reflections
        resolution={2000} // Off-buffer resolution, lower=faster, higher=better quality, slower
        mirror={0} // Mirror environment, 0 = texture colors, 1 = pick up env colors
        depthScale={0} // Scale the depth factor (0 = no depth, default = 0)
        // minDepthThreshold={0.9} // Lower edge for the depthTexture interpolation (default = 0)
        // maxDepthThreshold={1} // Upper edge for the depthTexture interpolation (default = 0)
        depthToBlurRatioBias={0.25} // Adds a bias factor to the depthTexture before calculating the blur amount [blurFactor = blurTexture * (depthTexture + bias)]. It accepts values between 0 and 1, default is 0.25. An amount > 0 of bias makes sure that the blurTexture is not too sharp because of the multiplication with the depthTexture
        // distortion={1} // Amount of distortion based on the distortionMap texture
        // distortionMap={distortionTexture} // The red channel of this texture is used as the distortion map. Default is null
        // debug={0} // Depending on the assigned value, one of the following channels is shown:
        //0 = no debug
        //1 = depth channel
        //2 = base channel
        //3 = distortion channel
        //4 = lod channel (based on the roughness)
        //
        // reflectorOffset={0.2} // Offsets the virtual camera that projects the reflection. Useful when the reflective surface is some distance from the object's origin (default = 0)
      />
    </mesh>
    /*
      resolution={4000}
      geometry={new CircleGeometry(10, 50)}
      mirror={1}
      mixBlur={1}
      mixStrength={0.8}
      rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      blur={[4000, 4000]}
      
          color="white"
          metalness={0.5}
          normalScale={new Vector2(1, 1)}
          {...materialProps}
          */
  );
};

const Decorations = () => {
  return (
    <>
      <RoundedBox
        receiveShadow
        castShadow
        smoothness={10}
        radius={0.05}
        position={[-7, 1, 1.6]}
        scale={[4.2, 2, 2]}
      >
        <meshStandardMaterial
          color="#f4ae00"
          envMapIntensity={0.5}
          roughness={0}
          metalness={0}
        />
      </RoundedBox>
      <mesh position={[5, 1, 5]} castShadow>
        <icosahedronGeometry />
        <meshStandardMaterial
          color="#8e00f4"
          envMapIntensity={0.8}
          roughness={0.2}
          metalness={1}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        rotation-x={-Math.PI / 2}
        position={[8, 1.1, 2]}
        scale={[2, 2, 2]}
      >
        <boxGeometry args={[1, 1, 1, 3, 3, 3]} />
        <meshStandardMaterial
          color="#2d2d2d"
          envMapIntensity={0.5}
          roughness={0}
          metalness={0}
          wireframe
        />
      </mesh>
    </>
  );
};

export const HomeScene = ({ play }: { play: boolean }) => {
  return (
    <>
      <OrbitControls />
      <pointLight
        position={[10, 15, 15]}
        color="#570c0c"
        castShadow
        intensity={5}
        shadow-camera-near={0.1}
        shadow-camera-far={200}
        shadow-camera-left={-20}
        shadow-camera-right={20}
        shadow-camera-top={20}
        shadow-camera-bottom={-20}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <directionalLight
        position={[10, 15, -5]}
        color="#570c0c"
        castShadow
        intensity={5}
        shadow-camera-near={0.1}
        shadow-camera-far={200}
        shadow-camera-left={-20}
        shadow-camera-right={20}
        shadow-camera-top={20}
        shadow-camera-bottom={-20}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <Environment preset="city" />
      {/* <ambientLight /> */}
      {/* <mesh position={[0, 1, 0]}>
        <boxGeometry />
        <meshStandardMaterial color="red" />
      </mesh> */}
      <GizmoHelper alignment="bottom-right" margin={[100, 100]}>
        <GizmoViewport
          axisColors={["red", "green", "blue"]}
          labelColor="black"
        />
      </GizmoHelper>
      <group position={[0, -3, 0]}>
        <VideoPlane
          play={play}
          videoUrl="./totoro.mp4"
          position={[0, 5, -0.6]}
          rotation-y={Math.PI}
          muted
        />
        <VideoPlane play={play} videoUrl="./totoro.mp4" />
        <mesh castShadow receiveShadow position={[0, 5, 0]}>
          <boxGeometry args={[17, 10, 1]} />
          <meshStandardMaterial
            color="black"
            envMapIntensity={0.5}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>
        <mesh position={[0, -5, 0]}>
          <cylinderGeometry args={[10, 10, 10, 50]} />
          <meshStandardMaterial
            color="black"
            envMapIntensity={0.5}
            roughness={0}
            metalness={0}
          />
        </mesh>
        <Decorations />
      </group>
      <Ground position={[0, -2.96, 0]} />
      <Suspense>
        <Totoro
          position={[5, -3, -8]}
          scale={[0.2, 0.2, 0.2]}
          rotation-y={Math.PI * 1.8}
        />
        <Totoro position={[0, -3, -9.5]} scale={[0.2, 0.2, 0.2]} />
        <Totoro
          position={[-5, -3, -8]}
          scale={[0.2, 0.2, 0.2]}
          rotation-y={Math.PI * 0.2}
        />
      </Suspense>
      <Stars
        radius={50}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
    </>
  );
};
