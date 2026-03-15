import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function HeroSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);

  return (
    <section
      ref={containerRef}
      className="relative h-screen min-h-[680px] max-h-[1000px] bg-[#0c0703] overflow-hidden"
    >
      {/* ── GRID LAYOUT — Left content / Right image ── */}
      <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2">
        {/* ── RIGHT — Tandoor Image ── */}
        <div className="order-first lg:order-last relative overflow-hidden">
          <motion.div
            style={{ y: imageY }}
            className="absolute inset-0 h-[115%] -top-[8%]"
          >
            {/*
              Using a real tandoor fire image.
              When you have your own photo, replace the src below with:
              src="/hero-tandoor.jpg"
            */}
            <img
              src="https://pplx-res.cloudinary.com/image/upload/pplx_search_images/c9a6d3cca3f1351935278bf9ada634d441c0ecb1.jpg"
              alt="Glowing clay tandoor with fire"
              className="w-full h-full object-cover object-center"
            />

            {/* Left edge gradient — blends into content side */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0c0703] via-[#0c0703]/60 to-transparent lg:via-[#0c0703]/30" />
            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0c0703] to-transparent" />
            {/* Top fade */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0c0703] to-transparent" />

            {/* Fire glow overlay — warm amber wash */}
            <div
              className="absolute inset-0 mix-blend-multiply"
              style={{
                background:
                  "radial-gradient(ellipse at 60% 70%, rgba(180,70,10,0.35) 0%, transparent 65%)",
              }}
            />
          </motion.div>

          {/* Floating craft tag — bottom right of image */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="absolute bottom-10 right-8 z-10 text-right"
          >
            <p className="text-[10px] uppercase tracking-ultra text-white/30 mb-1">
              Est. 2005
            </p>
            <p className="font-display text-sm font-semibold text-white/60">
              New Delhi, India
            </p>
          </motion.div>
        </div>

        {/* ── LEFT — Content ── */}
        <motion.div
          style={{ y: textY }}
          className="relative z-10 flex flex-col justify-end pb-16 md:pb-20 lg:pb-24 px-5 md:px-10 lg:pl-16 lg:pr-8"
        >
          {/* Origin badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#e8622a] animate-pulse" />
            <span className="text-[10px] uppercase tracking-ultra text-white/35">
              Handcrafted Tandoors · Since 2005
            </span>
          </motion.div>

          {/* Headline */}
          <div className="overflow-hidden mb-2">
            <motion.h1
              initial={{ y: "105%" }}
              animate={{ y: 0 }}
              transition={{
                delay: 0.45,
                duration: 0.95,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-display font-semibold leading-[0.92] tracking-tight text-white"
              style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}
            >
              Where Fire
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-2">
            <motion.h1
              initial={{ y: "105%" }}
              animate={{ y: 0 }}
              transition={{
                delay: 0.58,
                duration: 0.95,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-display font-semibold leading-[0.92] tracking-tight"
              style={{
                fontSize: "clamp(3rem, 7vw, 6rem)",
                background:
                  "linear-gradient(95deg, #e8622a 0%, #f5a84a 55%, #e05e1e 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundSize: "200% auto",
                animation: "shimmer 5s linear infinite",
              }}
            >
              Meets Clay.
            </motion.h1>
          </div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.9, duration: 0.7, ease: "easeOut" }}
            className="w-12 h-px bg-[#e8622a] origin-left mt-6 mb-7"
          />

          {/* Supporting text */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.7 }}
            className="text-[13px] text-white/40 leading-[1.95] max-w-[320px] mb-10"
          >
            Premium handbuilt tandoors, trusted by professional kitchens across
            30+ countries. Two decades of craft — built into every product we
            make.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05, duration: 0.7 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Link
              to="/products/tandoors"
              className="group flex items-center gap-3 bg-[#e8622a] hover:bg-[#d4561f] text-white px-7 py-4 text-xs font-medium uppercase transition-all duration-300 hover:shadow-2xl hover:shadow-[#e8622a]/25"
              style={{ letterSpacing: "0.15em" }}
            >
              Explore Tandoors
              <ArrowUpRight
                size={14}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
            </Link>
            <Link
              to="/contact"
              className="flex items-center gap-3 border border-white/15 hover:border-[#e8622a]/60 text-white/55 hover:text-white px-7 py-4 text-xs font-medium uppercase transition-all duration-300"
              style={{ letterSpacing: "0.15em" }}
            >
              Get a Quote
            </Link>
          </motion.div>

          {/* Bottom stats — mobile hidden, shows under CTAs on desktop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.7 }}
            className="hidden lg:flex items-center gap-10 mt-14 pt-8 border-t border-white/8"
          >
            {[
              { value: "24+", label: "Years of Craft" },
              { value: "30+", label: "Countries" },
              { value: "10K+", label: "Units Shipped" },
            ].map((stat, i) => (
              <div key={i}>
                <p className="font-display text-xl font-semibold text-white/75">
                  {stat.value}
                </p>
                <p className="text-[10px] uppercase tracking-ultra text-white/25 mt-0.5">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* ── SCROLL INDICATOR ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 z-20"
      >
        <div className="w-px h-10 bg-white/10 relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full bg-[#e8622a]"
            animate={{ height: ["0%", "100%"], top: ["0%", "100%"] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <span className="text-[9px] uppercase tracking-ultra text-white/20">
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
