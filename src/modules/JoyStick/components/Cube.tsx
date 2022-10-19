import { useRef, useState, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber";

interface Props {
  move: "up" | "down" | "left" | "right" | null;
  setMove: (move: "up" | "down" | "left" | "right" | null) => void
}

const Cube = ({ move, setMove }: Props) => {
  function Solid() {
    // This reference will give us direct access to the mesh
    const mesh = useRef<any>();
    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false);
    const [active, setActive] = useState(false);
    const [color, setColor] = useState(23);
    const [rotationDir, setRotationDir] = useState(0.004);
    // Rotate mesh every frame, this is outside of React without overhead
    useFrame(() =>
      hovered
        ? mesh.current.rotation.x < 1.5
          ? (mesh.current.rotation.x += 0.04)
          : null
        : mesh.current.rotation.x > 0.0
          ? (mesh.current.rotation.x -= 0.002)
          : null
    );

    useFrame(
      () => { if (move) { (mesh.current.rotation.y += rotationDir) } })



    const sleep = (time: any) => {
      return new Promise((resolve) => setTimeout(resolve, time));
    };

    const doSomething = async (value: any) => {
      for (
        let i = color;
        value === "up" ? i < 60 : i > 23;
        value === "up" ? (i += 1) : (i -= 1)
      ) {
        await sleep(50);
        setColor(i);
      }
    };

    useEffect(() => {
      if (hovered) {
        if (color < 50) doSomething("up");
        else doSomething("down");
      }

      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [hovered]);

    return (
      <mesh

        ref={mesh}
        scale={1}
        onClick={(event) => {
          setActive(!active);
          setRotationDir(rotationDir * -1);
        }}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}
      >
        <boxGeometry args={[4, 4, 4]} />
        <meshStandardMaterial color={`rgb(139, 0, 0)`} />
      </mesh>
    );
  }


  return (
    <Canvas style={{ zIndex: 2 }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Solid />
    </Canvas>

  )
}

export default Cube