// import { useEffect } from "react";
// import Lenis from "@studio-freight/lenis"; // ← back to this

// let lenisInstance = null;

// export function useLenis() {
//   useEffect(() => {
//     const lenis = new Lenis({
//       duration: 1.4,
//       easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
//       orientation: "vertical",
//       smoothWheel: true,
//       wheelMultiplier: 0.9,
//       touchMultiplier: 1.5,
//     });

//     lenisInstance = lenis;

//     function raf(time) {
//       lenis.raf(time);
//       requestAnimationFrame(raf);
//     }

//     requestAnimationFrame(raf);

//     return () => {
//       lenis.destroy();
//       lenisInstance = null;
//     };
//   }, []);
// }

// export function getLenis() {
//   return lenisInstance;
// }

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

let lenisInstance = null;

export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.5,
    });

    lenisInstance = lenis;
    window.__lenis = lenis; // ← ADD THIS

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      lenisInstance = null;
      window.__lenis = null; // ← AND THIS in cleanup
    };
  }, []);
}

export function getLenis() {
  return lenisInstance;
}
