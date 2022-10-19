import { useState } from "react";

const useJoyStick = () => {
  const [cubeConfig, setCubeConfig] = useState<{ position: number }>({
    position: 0,
  });
  const [move, setMove] = useState<
    "up" | "down" | "right" | "left" | null
  >(null );

  return {
    cubeConfig,
    setCubeConfig,
    move,
    setMove,
  };
};

export default useJoyStick;
