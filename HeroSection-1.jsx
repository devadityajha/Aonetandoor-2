// src/components/home/HeroSection.jsx
import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowDownRight } from "lucide-react";

export default function HeroSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax — image moves slower than scroll
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  // Fire glow pulse synced to scroll
  const glowOpacity = useTransform(scrollYProgress, [0, 0.5], [0.55, 0]);

  return (
    <section
      ref={containerRef}
      className="relative h-screen min-h-[680px] max-h-[980px] overflow-hidden bg-[#0d0906]"
    >
      {/* ── BACKGROUND IMAGE — parallax ── */}
      <motion.div
        style={{ y: imageY }}
        className="absolute inset-0 w-full h-[115%] -top-[8%]"
      >
        {/* REPLACE THIS DIV with your actual tandoor/fire image: */}
        <img
          src="https://i.pinimg.com/1200x/79/80/d3/7980d3d74fb293956deb87a42882a680.jpg"
          className="w-full h-full object-cover object-center"
        />

        {/* Ideal image: tandoor with fire glowing inside, clay texture visible,
          dark atmospheric background, warm amber/orange tones.
          Recommended: shoot from slightly above, fire visible in mouth of tandoor. */}

        <div className="w-full h-full bg-gradient-to-br from-[#1a0a02] via-[#2d1205] to-[#0d0906]" />
      </motion.div>

      {/* ── FIRE GLOW — radial warm light from bottom center ── */}
      <motion.div
        style={{ opacity: glowOpacity }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center bottom, rgba(210,90,20,0.45) 0%, rgba(180,60,10,0.2) 40%, transparent 70%)",
          opacity: glowOpacity,
        }}
      />

      {/* ── ANIMATED EMBER PARTICLES ── */}
      <EmberParticles />

      {/* ── DARK VIGNETTE — edges dark, center open ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 60% 50%, transparent 30%, rgba(8,4,2,0.7) 100%)",
        }}
      />

      {/* ── BOTTOM GRADIENT FADE — into next section ── */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0d0906] to-transparent pointer-events-none" />

      {/* ── CONTENT ── */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-16 md:pb-20 lg:pb-24">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-end">
            {/* LEFT — main content (8 cols) */}
            <div className="lg:col-span-8">
              {/* Origin badge */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="flex items-center gap-3 mb-8"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#e8622a] animate-pulse" />
                <span className="text-[10px] uppercase tracking-ultra text-white/40">
                  Handcrafted in New Delhi · Since 2005
                </span>
              </motion.div>

              {/* Headline — staggered lines */}
              <div className="overflow-hidden mb-3">
                <motion.p
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{
                    delay: 0.45,
                    duration: 0.9,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="font-display text-[13vw] sm:text-[11vw] md:text-[9vw] lg:text-[7.5vw] font-semibold leading-[0.9] text-white tracking-tight"
                >
                  Born of
                </motion.p>
              </div>
              <div className="overflow-hidden mb-6">
                <motion.p
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{
                    delay: 0.6,
                    duration: 0.9,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="font-display text-[13vw] sm:text-[11vw] md:text-[9vw] lg:text-[7.5vw] font-semibold leading-[0.9] tracking-tight"
                  style={{
                    background:
                      "linear-gradient(90deg, #e8622a 0%, #f5a623 60%, #e8622a 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundSize: "200% auto",
                    animation: "shimmer 4s linear infinite",
                  }}
                >
                  Fire & Clay.
                </motion.p>
              </div>

              {/* Supporting text + CTAs row */}
              <div className="flex flex-col sm:flex-row sm:items-end gap-8 sm:gap-16">
                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.85, duration: 0.7 }}
                  className="text-[13px] text-white/45 leading-[1.9] max-w-xs"
                >
                  Premium tandoors and clay kitchen equipment — trusted by
                  professional kitchens across 30+ countries for over two
                  decades.
                </motion.p>

                {/* CTAs */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.7 }}
                  className="flex items-center gap-4 shrink-0"
                >
                  <Link
                    to="/products/tandoors"
                    className="group flex items-center gap-3 bg-[#e8622a] hover:bg-[#d4561f] text-white px-7 py-4 text-xs font-medium uppercase transition-all duration-300 hover:shadow-xl hover:shadow-[#e8622a]/30"
                    style={{ letterSpacing: "0.15em" }}
                  >
                    Explore Tandoors
                    <ArrowDownRight
                      size={14}
                      className="group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform duration-300"
                    />
                  </Link>
                  <Link
                    to="/contact"
                    className="flex items-center gap-3 border border-white/20 hover:border-white/50 text-white/70 hover:text-white px-7 py-4 text-xs font-medium uppercase transition-all duration-300"
                    style={{ letterSpacing: "0.15em" }}
                  >
                    Get a Quote
                  </Link>
                </motion.div>
              </div>
            </div>

            {/* RIGHT — vertical stats strip (4 cols, desktop only) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="hidden lg:flex lg:col-span-4 flex-col items-end gap-0 pb-2"
            >
              {[
                { value: "24+", label: "Years of Craft" },
                { value: "30+", label: "Countries" },
                { value: "10K+", label: "Units Shipped" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className={`text-right py-5 ${
                    i < 2 ? "border-b border-white/8" : ""
                  } w-36`}
                >
                  <p className="font-display text-2xl font-semibold text-white/80">
                    {stat.value}
                  </p>
                  <p className="text-[10px] uppercase tracking-ultra text-white/25 mt-0.5">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── SCROLL INDICATOR ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <div className="w-px h-10 bg-white/15 relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full bg-[#e8622a]"
            animate={{ height: ["0%", "100%"], top: ["0%", "100%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <span className="text-[9px] uppercase tracking-ultra text-white/20">
          Scroll
        </span>
      </motion.div>
    </section>
  );
}

/* ── Ember Particles ── */
function EmberParticles() {
  const embers = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    left: `${15 + Math.random() * 60}%`,
    delay: Math.random() * 4,
    duration: 3 + Math.random() * 4,
    size: 1.5 + Math.random() * 2.5,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {embers.map((e) => (
        <motion.div
          key={e.id}
          className="absolute bottom-0 rounded-full"
          style={{
            left: e.left,
            width: e.size,
            height: e.size,
            background: `rgba(${230 + Math.random() * 25}, ${60 + Math.random() * 60}, 20, 0.8)`,
          }}
          animate={{
            y: [0, -(300 + Math.random() * 300)],
            x: [0, (Math.random() - 0.5) * 80],
            opacity: [0, 0.9, 0],
            scale: [0.5, 1.2, 0],
          }}
          transition={{
            duration: e.duration,
            delay: e.delay,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}
