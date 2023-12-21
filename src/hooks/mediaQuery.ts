import { useEffect, useState } from "react";

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth <= 1024 : false
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      const media = window.matchMedia(query);
      if (media.matches !== matches) {
        setMatches(media.matches);
      }
      const listener = (event: MediaQueryListEvent) =>
        setMatches(event.matches);
      media.addEventListener("change", listener);
      return () => media.removeEventListener("change", listener);
    } else {
      // Return a no-op function when window is not defined
      return () => {};
    }
  }, [matches, query]);

  return matches;
};

export default useMediaQuery;

// import { useState, useEffect } from "react";

// const useMediaQuery = (query: string) => {
//   const [matches, setMatches] = useState(window.innerWidth <= 1024); // 1024px is typically the breakpoint for large screens

//   useEffect(() => {
//     const media = window.matchMedia(query);
//     if (media.matches !== matches) {
//       setMatches(media.matches);
//     }
//     const listener = (event: MediaQueryListEvent) => setMatches(event.matches);
//     media.addEventListener("change", listener);
//     return () => media.removeEventListener("change", listener);
//   }, [matches, query]);

//   return matches;
// };

// export default useMediaQuery;
