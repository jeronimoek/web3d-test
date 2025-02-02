import { Canvas } from "@react-three/fiber";
import { HomeScene } from "@/scenes";
import { useState } from "react";

export const App = () => {
  const [play, setPlay] = useState(false);

  return (
    <>
      <main className="app">
        <div
          className="play-container"
          style={{
            opacity: play ? 0 : 1,
            pointerEvents: play ? "none" : "all",
          }}
        >
          <h1 onClick={() => setPlay(true)}>Play ▷</h1>
        </div>
        <section className="hero">
          <h1>Website 3D</h1>
          <h6>Made by Jerónimo Ekerdt</h6>
        </section>
      </main>
      <Canvas
        className="canvas"
        shadows
        camera={{ position: [0, 30, 60], fov: 15 }}
      >
        <HomeScene play={play} />
      </Canvas>
    </>
  );
};
