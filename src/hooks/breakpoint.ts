import { useEffect, useState } from "react";
import tailwindConfig from "../../tailwind.config";

// Define an index signature for screens
interface Screens {
  [key: string]: string;
}

const calculateBreakpoints = () => {
  if (typeof window === "undefined") {
    // If the code is running on the server-side or in a non-browser context, return default values.
    return { xs: true }; // Set the default breakpoint as "xs" or whatever you prefer.
  }

  const screens: Screens = tailwindConfig.theme.screens;

  const initialBreakpoints = Object.keys(screens).reduce((acc: any, key) => {
    acc[key] = window.matchMedia(`(min-width: ${screens[key]})`).matches;
    return acc;
  }, {});

  // Set the default breakpoint to "xs" (the smallest).
  initialBreakpoints.xs = true;

  return initialBreakpoints;
};

const useBreakpoint = () => {
  const [breakpoints, setBreakpoints] = useState(calculateBreakpoints());

  useEffect(() => {
    if (typeof window !== "undefined") {
      const resizeHandler = () => {
        setBreakpoints(calculateBreakpoints());
      };
      window.addEventListener("resize", resizeHandler);
      return () => window.removeEventListener("resize", resizeHandler);
    }
    // Add a return statement here
    return () => {};
  }, []);

  return breakpoints;
};

export default useBreakpoint;
