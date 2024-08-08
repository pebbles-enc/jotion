import { useState, useEffect} from "react";

// Custom hook - convention to name them with useX
export const useScrollTop = (threshold = 10) => {
  const [scrolled, setScrolled] = useState(false);
  // useEffect: interact with the DOM after every render BUT
  // only when threshold changes (and mount, always onMount)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > threshold) {
        setScrolled(true);
      }
      else {
        setScrolled(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    // Cleanup function: reset scroll before using effect "again" aftet committing to the DOM
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return scrolled;
}