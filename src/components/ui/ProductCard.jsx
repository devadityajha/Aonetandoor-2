import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function ProductCard({ product, index = 0 }) {
  const imageUrl = product.image
    ? typeof product.image === "string"
      ? product.image
      : null
    : null;

  const slug =
    typeof product.slug === "string" ? product.slug : product.slug?.current;

  const href = `/products/${product.categorySlug || "all"}/${slug}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Link to={href} className="group block relative">
        {/* ── IMAGE ──────────────────────────────── */}
        <div className="relative overflow-hidden  aspect-[3/4] bg-clay-100">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={product.name}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-clay-200 via-clay-300 to-clay-200 flex items-center justify-center">
              <span
                className="text-clay-400 text-[10px] uppercase"
                style={{ letterSpacing: "0.3em" }}
              >
                No Image
              </span>
            </div>
          )}

          {/* Bottom gradient — always faintly visible, deepens on hover */}
          <div className="absolute  inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/10 to-transparent opacity-30 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Arrow CTA — top right, slides in on hover */}
          <div className="absolute top-4 right-4 p-2.5 bg-brand text-white opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all duration-300">
            <ArrowUpRight size={15} />
          </div>

          {/* Product name overlay — slides up from bottom on hover */}
          <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">
            <p
              className="text-white/50 text-[9px] uppercase mb-1"
              style={{ letterSpacing: "0.25em" }}
            >
              View Product
            </p>
            <h3 className="font-display text-white font-semibold leading-tight text-base">
              {product.name}
            </h3>
          </div>
        </div>

        {/* ── FOOTER ─────────────────────────────── */}
        <div className="pt-4 pb-5 px-0">
          <div className="flex items-start justify-between gap-3">
            {/* Name + expanding line */}
            <div className="flex-1 min-w-0">
              <h3 className="font-display text-base md:text-lg font-semibold text-charcoal group-hover:text-brand transition-colors duration-300 leading-snug truncate">
                {product.name}
              </h3>
              {/* Animated underline */}
              <div className="mt-2 h-px bg-clay-200 relative overflow-hidden">
                <div className="absolute inset-y-0 left-0 w-0 bg-brand group-hover:w-full transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
              </div>
            </div>

            {/* Minimal arrow — always visible */}
            <div className="mt-1 shrink-0 w-7 h-7 border border-clay-200 group-hover:border-brand group-hover:bg-brand flex items-center justify-center transition-all duration-300">
              <ArrowUpRight
                size={13}
                className="text-clay-400 group-hover:text-white transition-colors duration-300"
              />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
