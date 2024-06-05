import { useTransform } from "framer-motion";

export const useKuponoLarge = (scrollY, values) => {
  return useTransform(scrollY, [0, 100, 200, 300, 400], values);
};

export const useRSILarge = (scrollY, values) => {
  return useTransform(scrollY, [0, 200, 600], values);
};

/////////////////MEDIA QUERY////////////////////
export const getRSIParams = (screenSize) => {
  switch (screenSize) {
    case "large":
      return {
        opacityRange: [400, 500],
        scaleRange: [400, 500],
        zIndexRange: [400, 500],
        rsiMidLeftRange: [400, 500],
        rsiMidRightRange: [400, 500],
      };
    case "medium":
      return {
        opacityRange: [300, 400],
        scaleRange: [300, 400],
        zIndexRange: [300, 400],
        rsiMidLeftRange: [300, 400],
        rsiMidRightRange: [300, 400],
      };
    case "small":
      return {
        opacityRange: [200, 300],
        scaleRange: [200, 300],
        zIndexRange: [200, 300],
        rsiMidLeftRange: [200, 300],
        rsiMidRightRange: [200, 300],
      };
    case "extraSmall":
    default:
      return {
        opacityRange: [100, 200],
        scaleRange: [100, 200],
        zIndexRange: [100, 200],
        rsiMidLeftRange: [100, 200],
        rsiMidRightRange: [100, 200],
      };
  }
};

export const getSlidingParams = (screenSize) => {
  switch (screenSize) {
    case "large":
      return [1450, 1700];
    case "medium":
      return [1150, 1300];
    case "small":
      return [800, 1000];
    case "extraSmall":
    default:
      return [500, 700];
  }
};

export const getBGParams = (screenSize) => {
  switch (screenSize) {
    case "large":
      return [400, 500];
    case "medium":
      return [300, 400];
    case "small":
      return [200, 300];
    case "extraSmall":
    default:
      return [100, 200];
  }
};
