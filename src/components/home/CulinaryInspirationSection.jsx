import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";

export default function CulinaryInspirationSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={ref}
      className="relative h-[85vh] min-h-[500px] md:h-[70vh] overflow-hidden flex items-center"
    >
      {/* Parallax Background */}
      <motion.div style={{ y }} className="absolute inset-0 scale-110">
        <div className="w-full h-full bg-gradient-to-br from-brand-dark via-charcoal to-charcoal-light">
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 to-transparent" />
          {/* Warm glow circles */}
          <div className="absolute top-1/2 right-1/4 w-96 h-96 rounded-full bg-brand/15 blur-3xl -translate-y-1/2" />
        </div>
      </motion.div>

      {/* Content */}
      <motion.div style={{ opacity }} className="container-site relative z-10">
        <div className="max-w-2xl">
          <p className="section-label text-white/50 mb-4">The Experience</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight text-balance">
            The Ancient Art of Tandoor Cooking,{" "}
            <em className="text-brand-muted not-italic">
              Reimagined for Today
            </em>
          </h2>
          <p className="mt-6 text-white/60 leading-relaxed max-w-lg">
            From naans kissed by 480°C clay walls to slow-roasted meats with
            centuries of flavour memory — a true tandoor transforms every meal
            into an experience.
          </p>
          <div className="mt-10 flex gap-4">
            <Link to="/products/premium-tandoors" className="btn-primary">
              Explore Premium Range
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
