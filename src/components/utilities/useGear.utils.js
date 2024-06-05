import { useAnimation } from "framer-motion";
import { useEffect } from "react";
import useScreenSize from "./screenSize.utils";

const useGearAnimation = (scrollY) => {
  const gearOne = useAnimation();
  const gearTwo = useAnimation();
  const screenSize = useScreenSize(); // Get current screen size

  useEffect(() => {
    const handleScroll = (latest) => {
      let offset;
      switch (screenSize) {
        case "large":
          offset = 1400;
          break;
        case "medium":
          offset = 1100;
          break;
        case "small":
          offset = 600;
          break;
        case "extraSmall":
        default:
          offset = 300;
      }

      const adjustedScrollY = Math.max(0, latest - offset);
      gearOne.start({ rotate: -adjustedScrollY });
      gearTwo.start({ rotate: adjustedScrollY });
    };

    const unsubscribe = scrollY.on("change", handleScroll);
    return () => unsubscribe();
  }, [scrollY, gearOne, gearTwo, screenSize]);

  return { gearOne, gearTwo };
};

export default useGearAnimation;
