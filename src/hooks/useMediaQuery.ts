import { useEffect, useState } from "react";

export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  const media = window.matchMedia(query);

  function handleResize() {
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [matches, media]);

  return matches;
}
