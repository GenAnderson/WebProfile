import { useMediaQuery } from "react-responsive";

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
  const max = useMediaQuery({ query: "(min-width: 121em)" });

  const max55 = useMediaQuery({
    query: "(max-width: 55em)",
  });
  const max50 = useMediaQuery({
    query: "(max-width: 50em)",
  });
  if (max) return "max";

  if (max55) return "max55";
  if (max50) return "max50";

  return "max50";
};
