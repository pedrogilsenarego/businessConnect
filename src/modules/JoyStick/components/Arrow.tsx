import { useState } from "react";
import {
  IoIosArrowUp,
  IoIosArrowBack,
  IoIosArrowForward,
  IoIosArrowDown,
} from "react-icons/io";

interface Props {
  position: "up" | "down" | "left" | "right";
  setMove: (position: "up" | "down" | "left" | "right" | null) => void
  page: "home" | "whoWeAre"
  setPage: (page: "home" | "whoWeAre") => void
}

const Arrow = ({ position, setMove, page, setPage }: Props) => {
  const [hovered, setHovered] = useState<boolean>(false);
  const ARROW_COLOR = "#ffffff66";
  const ARROW_HOVER_COLOR = "#ffffff";
  const SIZE = "1.5em";

  const handleClick = () => {
    switch (position) {
      case "up":
        setMove("up");
        break
      case "down":
        setMove("down");
        break
      case "left":
        setMove("left");
        setPage("whoWeAre")
        break
      case "right":
        setMove("right");
        break
      default:
        return null;
    }
  };

  const renderArrow = () => {
    switch (position) {
      case "up":
        return (
          <IoIosArrowUp
            size={SIZE}
            color={hovered ? ARROW_HOVER_COLOR : ARROW_COLOR}
          />
        );
      case "down":
        return (
          <IoIosArrowDown
            size={SIZE}
            color={hovered ? ARROW_HOVER_COLOR : ARROW_COLOR}
          />
        );
      case "left":
        return (
          <IoIosArrowBack
            size={SIZE}
            color={hovered ? ARROW_HOVER_COLOR : ARROW_COLOR}
          />
        );
      case "right":
        return (
          <IoIosArrowForward
            size={SIZE}
            color={hovered ? ARROW_HOVER_COLOR : ARROW_COLOR}
          />
        );
      default:
        return (
          <IoIosArrowUp
            size={SIZE}
            color={hovered ? ARROW_HOVER_COLOR : ARROW_COLOR}
          />
        );
    }
  };

  return (
    <div
      style={{ cursor: "pointer" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => handleClick()}
    >
      {renderArrow()}
    </div>
  );
};

export default Arrow;
