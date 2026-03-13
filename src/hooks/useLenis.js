import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

let lenisInstance = null;

export function useLenis() {
  useEffect(() => {
    lenisInstance = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.5,
    });

    function raf(time) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenisInstance.destroy();
  }, []);

  return lenisInstance;
}
