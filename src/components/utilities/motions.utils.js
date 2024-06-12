import { useTransform } from "framer-motion";

export const useKupono = (scrollY, values) => {
  return useTransform(scrollY, [0, 100, 200, 300, 400], values);
};

/////////////////MEDIA QUERY////////////////////

// export const getRSIpicParams = (screenSize) => {
//   switch (screenSize) {
//     case "large":
//       return [0, 200, 600];
//     case "medium":
//       return [0, 200, 300];
//     case "small":
//       return [0, 200, 800];
//     case "extraSmall":
//     default:
//       return [0, 200, 600];
//   }
// };

export const getRSIPhotoUpValues = (screenSize) => {
  switch (screenSize) {
    case "max":
      return ["0rem", "-70rem"];

    case "max120":
    default:
      return ["0rem", "-55rem"];
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
