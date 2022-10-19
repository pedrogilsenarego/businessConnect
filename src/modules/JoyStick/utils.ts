interface Props {
  page: "home" | "whoWeAre" | undefined
  position: "up" | "down" | "left" | "right" | null;
}

export const whichPage = ({ page, position }: Props) => {
  switch (page) {
    case "home":
      if (position === "left") {
        return "whoWeAre";
      }
      break;
    case "whoWeAre":
      if (position === "right") {
        return "home";
      }
      break;
    case undefined: return "home"
    default:
      return "home";
  }
};
