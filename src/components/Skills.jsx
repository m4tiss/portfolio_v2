import { useState, startTransition, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { MapControls } from "@react-three/drei";
import skills from "../data/skills";
import SkillCube from "./SkillCube";

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(skills[0]);

  const defaultColor = "#ffffff";
  const gap = 0.05;

  const emptyPNG =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8Xw8AAoMBgD4u+6QAAAAASUVORK5CYII=";

  const cubes = [];
  for (let x = 0; x < 3; x++) {
    for (let y = 0; y < 3; y++) {
      for (let z = 0; z < 3; z++) {
        const block = skills.find(
          (b) => b.pos[0] === x && b.pos[1] === y && b.pos[2] === z,
        );

        cubes.push(
          <SkillCube
            key={`${x}-${y}-${z}`}
            position={[
              (x - 1) * (1 + gap),
              (y - 1) * (1 + gap),
              (z - 1) * (1 + gap),
            ]}
            color={block ? block.color : defaultColor}
            icon={block ? block.icon : emptyPNG}
            onClick={() =>
              block &&
              startTransition(() => {
                setSelectedSkill(block);
              })
            }
          />,
        );
      }
    }
  }

  return (
    <div className="w-full relative h-screen flex flex-col items-center justify-start">
      <div className="flex flex-col absolute top-5 items-center w-80">
        <h1
          style={{ color: selectedSkill?.color || "#000000" }}
          className="text-3xl font-bold"
        >
          {selectedSkill?.label || "REACT"}
        </h1>
        <p className="text-black text-center">{selectedSkill?.description}</p>
      </div>
      <div className="w-full h-full">
        <Suspense fallback={null}>
          <Canvas camera={{ position: [-4, 3, 6], fov: 60 }}>
            <ambientLight intensity={2} />
            <directionalLight position={[10, 10, 10]} intensity={1} />
            {cubes}
            <MapControls enableRotate enableZoom={false} enablePan={false} />
          </Canvas>
        </Suspense>
      </div>
    </div>
  );
};

export default Skills;
