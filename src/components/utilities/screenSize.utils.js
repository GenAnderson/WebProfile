import { useMediaQuery } from "react-responsive";

export const useScreenSize = () => {
  // width = 1936
  const isLargeScreen = useMediaQuery({ query: "(min-width: 121em)" });

  // width = 1216-1920
  const isMediumScreen = useMediaQuery({
    query: "(min-width: 76em) and (max-width: 120em)",
  });

  // width = 768-1200
  const isSmallScreen = useMediaQuery({
    query: "(min-width: 48em) and (max-width: 75em)",
  });

  // width = 752
  const isExtraSmallScreen = useMediaQuery({ query: "(max-width: 47em)" });

  if (isLargeScreen) return "large";
  if (isMediumScreen) return "medium";
  if (isSmallScreen) return "small";
  if (isExtraSmallScreen) return "extraSmall";

  return "extraSmall";
};

export const useScreenSizeRSI = () => {
  const max = useMediaQuery({ query: "(min-width: 121em)" });
  const max120 = useMediaQuery({ query: "(max-width: 120em)" });

  // // width = 1216-1920
  // const isMediumScreen = useMediaQuery({
  //   query: "(min-width: 76em) and (max-width: 120em)",
  // });

  // // width = 768-1200
  // const isSmallScreen = useMediaQuery({
  //   query: "(min-width: 48em) and (max-width: 75em)",
  // });

  // // width = 752
  // const isExtraSmallScreen = useMediaQuery({ query: "(max-width: 47em)" });

  if (max) return "max";
  if (max120) return "max120";
  // if (isSmallScreen) return "small";
  // if (isExtraSmallScreen) return "extraSmall";

  return "max120";
};

export const useScreenSizeSlider = () => {
  const max = useMediaQuery({ query: "(min-width: 118em)" });
  const first1720 = useMediaQuery({ query: "(max-width: 109em)" });
  const second1696 = useMediaQuery({
    query: "(max-width: 106em)",
  });
  const third1600 = useMediaQuery({
    query: "(max-width: 100em)",
  });

  const fourth1552 = useMediaQuery({ query: "(max-width: 97em)" });

  if (max) return ["0%", "-85rem"];
  if (first1720) return ["0%", "-50rem"];
  if (second1696) return ["0%", "-50%"];
  if (third1600) return ["0%", "-60%"];
  if (fourth1552) return ["0%", "-70%"];

  return ["0%", "-85rem"];
};
