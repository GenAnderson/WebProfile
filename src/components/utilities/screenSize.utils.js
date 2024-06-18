import { useMediaQuery } from "react-responsive";

// export const useScreenSize = () => {
//   // width = 1936
//   const isLargeScreen = useMediaQuery({ query: "(min-width: 121em)" });

//   // width = 1216-1920
//   const isMediumScreen = useMediaQuery({
//     query: "(min-width: 76em) and (max-width: 120em)",
//   });

//   // width = 768-1200
//   const isSmallScreen = useMediaQuery({
//     query: "(min-width: 48em) and (max-width: 75em)",
//   });

//   // width = 752
//   const isExtraSmallScreen = useMediaQuery({ query: "(max-width: 47em)" });

//   if (isLargeScreen) return "large";
//   if (isMediumScreen) return "medium";
//   if (isSmallScreen) return "small";
//   if (isExtraSmallScreen) return "extraSmall";

//   return "extraSmall";
// };

export const useScreenSizeRSIup = () => {
  const max = useMediaQuery({ query: "(min-width: 121em)" });
  const max120 = useMediaQuery({
    query: "(min-width: 56em) and (max-width: 120em)",
  });
  const max55 = useMediaQuery({
    query: "(min-width: 40em) and (max-width: 55em)",
  });

  if (max) return "max";
  if (max120) return "max120";
  if (max55) return "max55";

  return "max55";
};

export const useScreenSizeRSISides = () => {
  const max55 = useMediaQuery({
    query: "(max-width: 55em)",
  });
  const max50 = useMediaQuery({
    query: "(max-width: 50em)",
  });

  if (max55) return "max55";
  if (max50) return "max50";

  return "max50";
};
