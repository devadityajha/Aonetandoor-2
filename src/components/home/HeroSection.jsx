import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowDown } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { num: "20+", label: "Years Experience" },
  { num: "150+", label: "Products" },
  { num: "30+", label: "Countries Exports" },
  { num: "10K+", label: "Happy Clients" },
];

const NAVBAR_HEIGHT = "80px";

export default function HeroSection() {
  const imgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(imgRef.current, {
        yPercent: 6,
        ease: "none",
        scrollTrigger: {
          trigger: imgRef.current?.closest("section"),
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    });
    return () => ctx.revert();
  }, []);

  const scrollDown = () =>
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" });

  return (
    <section
      className="relative overflow-hidden flex flex-col"
      style={{ background: "#f5f2ee", minHeight: "100svh" }}
    >
      {/* grain overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
      />

      {/* SPLIT LAYOUT */}
      <div
        className="relative z-10 flex-1 flex flex-col lg:flex-row"
        style={{ paddingTop: NAVBAR_HEIGHT }}
      >
        {/* LEFT — text content */}
        <div
          className="flex flex-col px-6 sm:px-10 lg:px-16 xl:px-20 pt-6 pb-6 lg:pb-8 lg:w-1/2 xl:w-[52%]"
          style={{
            paddingTop:
              "clamp(1rem, 2.5vw, 2.5rem)" /* desktop mein thoda neeche */,
            justifyContent: "flex-start",
          }}
        >
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex items-center gap-3 mb-5"
          >
            <span
              className="inline-block w-8 h-px"
              style={{ background: "#8b1a1a" }}
            />
            <span
              className="text-xs font-semibold tracking-[0.18em] uppercase"
              style={{ color: "#8b1a1a" }}
            >
              Crafted Since 2005
            </span>
          </motion.div>

          {/* Headline */}
          <div className="overflow-hidden mb-5">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-serif leading-[1.06]"
              style={{
                // fontSize: "clamp(2.2rem, 3.6vw, 3.8rem)",
                fontSize: "clamp(1.9rem, 3vw, 3.2rem)",
                fontWeight: 700,
                color: "#1a1410",
                letterSpacing: "-0.01em",
              }}
            >
              <span className="block">
                Commercial{" "}
                <em className="not-italic" style={{ color: "#8b1a1a" }}>
                  Tandoors &
                </em>{" "}
              </span>
              <span className="block">Kitchen Equipment</span>
              <span className="block" style={{ color: "#3d2b1f" }}>
                Manufacturers
              </span>
            </motion.h1>
          </div>

          {/* Sub-copy */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            style={{
              fontSize: "clamp(0.9rem, 1.1vw, 1rem)",
              color: "#5c4a3a",
              maxWidth: "44ch",
              lineHeight: 1.7,
              marginBottom: "1.25rem",
            }}
          >
            Export-quality commercial kitchen equipment designed for
            restaurants, hotels, cloud kitchens, and food businesses worldwide.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85 }}
            className="flex flex-wrap gap-3"
          >
            <Link
              to="/products"
              className="inline-flex items-center justify-center text-sm font-semibold text-white rounded transition-all duration-200 hover:opacity-90 active:scale-95"
              style={{
                background: "#944E4E",
                padding: "0.85rem 1.75rem",
                letterSpacing: "0.05em",
              }}
            >
              VIEW PRODUCTS
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center text-sm font-semibold rounded border-2 transition-all duration-200 hover:bg-[#8b1a1a] hover:text-white active:scale-95"
              style={{
                borderColor: "#8b1a1a",
                color: "#8b1a1a",
                padding: "0.85rem 1.75rem",
                letterSpacing: "0.05em",
                background: "transparent",
              }}
            >
              REQUEST A QUOTE
            </Link>
          </motion.div>
        </div>

        {/* RIGHT — image */}
        {/* MOBILE: normal flow with fixed aspect ratio so image is tall enough */}
        {/* DESKTOP: absolute fill of the right column */}
        <motion.div
          ref={imgRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.45 }}
          className="relative will-change-transform lg:w-1/2 xl:w-[48%] flex-shrink-0"
          style={{ minHeight: "320px" }}
        >
          {/* On mobile: use padding-top trick for aspect ratio so image is tall */}
          <div
            className="block lg:hidden w-full mx-4 rounded-2xl overflow-hidden"
            style={{
              height: "56vw",
              minHeight: "260px",
              maxHeight: "420px",
              background: "#ede8e2",
              boxShadow:
                "0 2px 4px rgba(60,40,20,0.05), 0 12px 32px rgba(60,40,20,0.1)",
              margin: "0 1rem 1.5rem 1rem",
              width: "calc(100% - 2rem)",
            }}
          >
            <img
              src="/heroBanner.png"
              alt="A-One Tandoor commercial tandoor oven"
              className="w-full h-full object-cover object-center"
              loading="eager"
            />
          </div>

          {/* On desktop: absolute fill flush to edge */}
          <div
            className="hidden lg:block absolute inset-y-8 left-4 right-0 rounded-2xl overflow-hidden"
            style={{
              background: "#ede8e2",
              boxShadow:
                "0 2px 4px rgba(60,40,20,0.05), 0 20px 60px rgba(60,40,20,0.13)",
            }}
          >
            <div
              className="absolute inset-0 pointer-events-none z-10"
              style={{
                background:
                  "radial-gradient(ellipse 70% 60% at 60% 50%, rgba(212,188,168,0.3) 0%, transparent 70%)",
              }}
            />
            <img
              src="/heroBanner.png"
              alt="A-One Tandoor commercial tandoor oven"
              className="w-full h-full object-cover object-center"
              loading="eager"
            />
          </div>
        </motion.div>
      </div>

      {/* TRUST BAR */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.1 }}
        className="relative z-10 w-full"
        style={{
          borderTop: "1px solid rgba(60,40,20,0.1)",
          background: "rgba(255,255,255,0.6)",
          backdropFilter: "blur(12px)",
        }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-16 py-3 grid grid-cols-2 lg:flex lg:flex-wrap items-center lg:justify-between gap-4 lg:gap-5">
          {stats.map(({ num, label }, i) => (
            <div key={label} className="flex items-center gap-3">
              <StatIcon index={i} />
              <div>
                <p
                  className="font-semibold leading-tight"
                  style={{
                    fontSize: "clamp(1.1rem, 1.8vw, 1.5rem)",
                    color: "#1a1410",
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  {num}
                </p>
                <p
                  className="text-xs tracking-wide"
                  style={{ color: "#8a7060" }}
                >
                  {label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* scroll indicator */}
      <motion.button
        onClick={scrollDown}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-20 right-8 hidden lg:flex flex-col items-center gap-1.5 hover:opacity-60 transition-opacity"
        style={{ color: "#8a7060" }}
        aria-label="Scroll down"
      >
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={14} />
        </motion.div>
      </motion.button>
    </section>
  );
}

function StatIcon({ index }) {
  const icons = [
    <svg
      key={0}
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#8b1a1a"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>,
    <svg
      key={1}
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#8b1a1a"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>,
    <svg
      key={2}
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#8b1a1a"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>,
    <svg
      key={3}
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#8b1a1a"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>,
  ];
  return icons[index] ?? null;
}
