import { useTransform } from "framer-motion";

export const useKupono = (scrollY, values) => {
  return useTransform(scrollY, [0, 100, 200, 300, 400], values);
};

export const getRSIPhotoUpValues = (screenSize) => {
  switch (screenSize) {
    case "max":
      return ["0rem", "-62rem"];
    case "max120":
      return ["0rem", "-50rem"];
    case "max55":
    default:
      return ["0rem", "-50rem"];
  }
};
export const getRSIPhotoRightValues = (screenSize) => {
  switch (screenSize) {
    case "max":
      return ["0rem", "-5rem"];
    case "max55":
      return ["0rem", "0rem"];
    case "max50":
    default:
      return ["0rem", "5rem"];
  }
};

export const getRSIPhotoLeftValues = (screenSize) => {
  switch (screenSize) {
    case "max":
      return ["0rem", "5rem"];
    case "max55":
      return ["0rem", "0rem"];
    case "max50":
    default:
      return ["0rem", "-5rem"];
  }
};
