import { RoundedBox } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";
const SkillCube = ({ position, color, icon, onClick }) => {
  const size = 1;
  const faceOffset = [0, 0, size / 2 + 0.01];

  const texture = useLoader(THREE.TextureLoader, icon);

  return (
    <group position={position}>
      <RoundedBox
        args={[size, size, size]}
        radius={0.1}
        smoothness={4}
        onClick={onClick}
        onPointerOver={(e) => {
          e.stopPropagation();
          document.body.style.cursor = "pointer";
        }}
        onPointerOut={(e) => {
          e.stopPropagation();
          document.body.style.cursor = "default";
        }}
      >
        <meshStandardMaterial color={color} roughness={0.5} metalness={0.2} />
      </RoundedBox>

      {texture && (
        <mesh position={faceOffset}>
          <planeGeometry args={[size * 0.8, size * 0.8]} />
          <meshStandardMaterial
            map={texture}
            transparent
            polygonOffset
            polygonOffsetFactor={-1}
          />
        </mesh>
      )}
    </group>
  );
};

export default SkillCube;
