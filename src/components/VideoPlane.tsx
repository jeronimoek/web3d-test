import { MeshProps } from "@react-three/fiber";
import { useEffect, useState } from "react";
import { SRGBColorSpace } from "three";

export const VideoPlane = ({
  videoUrl,
  muted = false,
  play,
  ...props
}: MeshProps & { videoUrl: string; muted?: boolean; play: boolean }) => {
  const [video] = useState(() =>
    Object.assign(document.createElement("video"), {
      src: videoUrl,
      crossOrigin: "anonymous",
      loop: true,
      muted,
    })
  );

  useEffect(() => {
    if (play) video.play();
  }, [video, play]);

  return (
    <mesh
      castShadow
      receiveShadow
      position={[0, 5, 0.6]}
      scale={[16, 9, 1]}
      {...props}
    >
      <planeGeometry />
      <meshBasicMaterial>
        <videoTexture attach="map" args={[video]} colorSpace={SRGBColorSpace} />
      </meshBasicMaterial>
    </mesh>
  );
};
