import { useState, useEffect } from "react";

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    
    const updateMatches = () => setMatches(media.matches);

    updateMatches(); // Initial check

    const resizeListener = () => updateMatches();

    media.addEventListener("change", resizeListener);

    return () => {
      media.removeEventListener("change", resizeListener);
    };
  }, [query]);

  return matches;
};

export default useMediaQuery;
