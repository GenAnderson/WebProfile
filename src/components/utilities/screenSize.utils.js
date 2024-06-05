import { useMediaQuery } from "react-responsive";

const useScreenSize = () => {
  const isLargeScreen = useMediaQuery({ query: "(min-width: 121em)" });
  const isMediumScreen = useMediaQuery({
    query: "(min-width: 76em) and (max-width: 120em)",
  });
  const isSmallScreen = useMediaQuery({
    query: "(min-width: 48em) and (max-width: 75em)",
  });
  const isExtraSmallScreen = useMediaQuery({ query: "(max-width: 47em)" });

  if (isLargeScreen) return "large";
  if (isMediumScreen) return "medium";
  if (isSmallScreen) return "small";
  if (isExtraSmallScreen) return "extraSmall";

  return "extraSmall"; // Default case, though this should ideally not be hit if the above conditions cover all screen sizes
};

export default useScreenSize;
