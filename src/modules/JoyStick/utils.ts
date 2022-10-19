interface Props {
  page: "home" | "whoWeAre";
  move: "up" | "down" | "left" | "right" | null;
}

export const wichPage = ({ page, move }: Props) => {
  switch (page) {
    case "home":
      if (move === "left") {
        return "whoWeAre";
      }
      break
    default:
      return "home";
  }
};
