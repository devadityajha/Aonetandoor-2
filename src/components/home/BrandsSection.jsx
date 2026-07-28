import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BRANDS = [
  { name: "Haldiram", logo: "/Haldiram's_Logo_SVG.svg" },
  { name: "Hira Sweets", logo: "/Hira.png" },
  { name: "Bikano", logo: "/Bikano.png" },
  { name: "Daryaganj", logo: "/daryaganj.png" },
  { name: "Hyatt Regency", logo: "/hyatt.jpg" },
  { name: "Sighri", logo: "/sighri.jpeg" },
  { name: "Radisson Blu", logo: "/raddision.png" },
  { name: "The Lalit", logo: "/lalit.png" },
];

function useScreenType() {
  const getType = () => {
    if (typeof window === "undefined") return "desktop";
    if (window.innerWidth < 640) return "mobile";
    if (window.innerWidth < 1024) return "tablet";
    return "desktop";
  };
  const [screenType, setScreenType] = useState(getType);
  useEffect(() => {
    const onResize = () => setScreenType(getType());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return screenType;
}

const BrandCard = ({ brand }) => (
  <div className="h-full px-2">
    <div
      className="h-[110px] sm:h-[118px] md:h-[128px] flex flex-col items-center justify-center px-4 py-5"
      style={{
        background: "#ffffff",
        border: "1px solid rgba(60,40,20,0.08)",
        boxShadow: "0 1px 2px rgba(60,40,20,0.04)",
      }}
    >
      <div className="h-9 md:h-11 w-full flex items-center justify-center">
        <img
          src={brand.logo}
          alt={`${brand.name} logo`}
          className="max-h-full max-w-full object-contain opacity-90"
          loading="lazy"
        />
      </div>
      <p
        className="mt-3 text-center font-medium leading-tight"
        style={{ color: "#3d2b1f", fontSize: "clamp(0.74rem, 0.9vw, 0.9rem)" }}
      >
        {brand.name}
      </p>
    </div>
  </div>
);

const BrandsSection = () => {
  const screenType = useScreenType();
  const isMobile = screenType === "mobile";
  const visibleCount =
    screenType === "mobile" ? 2 : screenType === "tablet" ? 3 : 5;

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % BRANDS.length);
    }, 2000);
    return () => clearInterval(id);
  }, []);

  // ✅ Same logic for BOTH mobile and desktop — pure virtual window from modulo
  const visibleBrands = useMemo(() => {
    return Array.from(
      { length: visibleCount },
      (_, i) => BRANDS[(index + i) % BRANDS.length],
    );
  }, [index, visibleCount]);

  return (
    <section
      className="py-10 md:py-14 border-y overflow-hidden"
      style={{ background: "#f5f2ee", borderColor: "rgba(60,40,20,0.06)" }}
    >
      <div className="container-site">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="w-5 h-px" style={{ background: "#8b1a1a" }} />
            <p
              className="uppercase text-[10px] md:text-[11px] font-semibold"
              style={{ color: "#8b1a1a", letterSpacing: "0.18em" }}
            >
              Brands We Have Worked With
            </p>
            <div className="w-5 h-px" style={{ background: "#8b1a1a" }} />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="font-serif font-bold leading-tight"
            style={{
              color: "#1a1410",
              fontSize: "clamp(2rem, 3.2vw, 3.2rem)",
              letterSpacing: "-0.02em",
            }}
          >
            Trusted by Leading <span style={{ color: "#8b1a1a" }}>Brands</span>
          </motion.h2>
        </div>

        {/* ✅ Unified carousel — works for mobile, tablet AND desktop */}
        <div className="overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className={`grid gap-3 ${
                visibleCount === 2
                  ? "grid-cols-2"
                  : visibleCount === 3
                    ? "grid-cols-3"
                    : "grid-cols-5"
              }`}
            >
              {visibleBrands.map((brand, i) => (
                <BrandCard key={`${brand.name}-${i}`} brand={brand} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {BRANDS.map((_, i) => (
            <span
              key={i}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === index % BRANDS.length ? "8px" : "6px",
                height: i === index % BRANDS.length ? "8px" : "6px",
                background:
                  i === index % BRANDS.length
                    ? "#8b1a1a"
                    : "rgba(139,26,26,0.18)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
