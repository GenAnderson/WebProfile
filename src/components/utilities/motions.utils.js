import { useTransform } from "framer-motion";

export const useKupono = (scrollY, values) => {
  return useTransform(scrollY, [0, 100, 200, 300, 400], values);
};

/////////////////MEDIA QUERY////////////////////

// export const getSlidingParams = (screenSize) => {
//   switch (screenSize) {
//     case "large":
//       return [1450, 1700];
//     case "medium":
//       return [1150, 1200];
//     case "small":
//       return [800, 1000];
//     case "extraSmall":
//     default:
//       return [500, 700];
//   }
// };

// export const getBGParams = (screenSize) => {
//   switch (screenSize) {
//     case "large":
//       return [350, 450];
//     case "medium":
//       return [200, 300];
//     case "small":
//       return [200, 300];
//     case "extraSmall":
//     default:
//       return [100, 200];
//   }
// };

export const getRSIpicParams = (screenSize) => {
  switch (screenSize) {
    case "large":
      return [0, 200, 600];
    case "medium":
      return [0, 200, 300];
    case "small":
      return [0, 200, 800];
    case "extraSmall":
    default:
      return [0, 200, 600];
  }
};

export const getRSIPhotoUpValues = (screenSize) => {
  switch (screenSize) {
    case "large":
      return ["0rem", "-70rem"];
    case "medium":
      return ["0rem", "-55rem"];
    case "small":
      return ["0rem", "-20rem"];
    case "extraSmall":
    default:
      return ["0rem", "-10rem"];
  }
};

// export const getSlidingValues = (screenSize) => {
//   switch (screenSize) {
//     case "large":
//       return ["0%", "-33%"];
//     case "medium":
//       return ["0%", "-33%"];
//     case "small":
//       return ["0%", "-99%"];
//     case "extraSmall":
//     default:
//       return ["0%", "-33%"];
//   }
// };
