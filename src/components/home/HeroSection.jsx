import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowDown } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const bgRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax on hero background
      gsap.to(bgRef.current, {
        yPercent: 25,
        ease: "none",
        scrollTrigger: {
          trigger: bgRef.current.parentElement,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    });
    return () => ctx.revert();
  }, []);

  const scrollDown = () => {
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden flex items-center">
      {/* Background */}
      <div ref={bgRef} className="absolute inset-0 scale-110">
        <div className="w-full h-full bg-gradient-to-br from-charcoal via-charcoal-light to-brand-dark">
          {/* Decorative fire-like gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-charcoal to-transparent" />
          {/* Warm glow */}
          <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-brand/20 blur-3xl" />
        </div>
      </div>

      {/* Content */}
      <div className="container-site relative z-10 pt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-8 h-px bg-brand" />
            <span className="section-label text-white/60">
              Crafted Since 1987
            </span>
          </motion.div>

          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold text-white leading-[1.05] text-balance"
            >
              Where Fire Meets <em className="text-brand not-italic">Craft</em>
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-6 text-base md:text-lg text-white/60 max-w-xl leading-relaxed"
          >
            Premium tandoors and cooking equipment engineered for homes,
            restaurants, and professional kitchens across the world.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-wrap items-center gap-4 mt-10"
          >
            <Link to="/products/home-tandoors" className="btn-primary">
              Explore Products
            </Link>
            <Link
              to="/about"
              className="btn-outline border-white/40 text-white hover:bg-white hover:text-charcoal"
            >
              Our Story
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="flex flex-wrap gap-10 mt-16 pt-10 border-t border-white/10"
          >
            {[
              ["35+", "Years of Craft"],
              ["50+", "Products"],
              ["30+", "Countries Served"],
              ["10K+", "Happy Clients"],
            ].map(([num, label]) => (
              <div key={label}>
                <p className="font-display text-3xl font-bold text-brand">
                  {num}
                </p>
                <p className="text-xs text-white/40 uppercase tracking-widest mt-1">
                  {label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollDown}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 hover:text-white transition-colors"
        aria-label="Scroll down"
      >
        <span className="text-[10px] tracking-ultra uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.button>
    </section>
  );
}
