import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { sanityClient, urlFor } from "../lib/sanity";
import ProductCard from "../components/ui/ProductCard";
import FadeIn from "../components/ui/FadeIn";
import { ChevronRight, ArrowUpRight } from "lucide-react";

const CATEGORY_META = {
  "home-tandoors": {
    label: "Home Tandoors",
    tagline: "Crafted for your kitchen.",
    desc: "Precision-built tandoors for the home chef who refuses to compromise.",
    stat: ["480°C", "Max Heat"],
  },
  "restaurant-tandoors": {
    label: "Restaurant Tandoors",
    tagline: "Built for volume.",
    desc: "Commercial-grade tandoors engineered for high-output professional kitchens.",
    stat: ["50kg+", "Capacity"],
  },
  "premium-tandoors": {
    label: "Premium Tandoors",
    tagline: "Our flagship range.",
    desc: "NSF certified and globally trusted — the pinnacle of tandoor engineering.",
    stat: ["NSF", "Certified"],
  },
  accessories: {
    label: "Accessories",
    tagline: "Complete the experience.",
    desc: "Skewers, covers, handles and everything your tandoor needs.",
    stat: ["30+", "Items"],
  },
  "wood-fire-brick-ovens": {
    label: "Wood Fire Brick Ovens",
    tagline: "Authentic wood-fired perfection.",
    desc: "Traditional masonry meets modern precision. From Italy to your kitchen.",
    stat: ["450°C", "Wood Fire"],
  },
  "utensils-clay": {
    label: "Clay Utensils",
    tagline: "Earth. Fire. Tradition.",
    desc: "Handcrafted clay cookware that enhances every flavour it touches.",
    stat: ["100%", "Natural"],
  },
  "utensils-copper": {
    label: "Copper Utensils",
    tagline: "Timeless. Functional. Beautiful.",
    desc: "Premium copper cookware with unmatched heat conductivity and elegance.",
    stat: ["Pure", "Copper"],
  },
};

export default function ProductsPage() {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // ── meta must be defined before return ──
  const meta = CATEGORY_META[category] || {
    label: category?.replace(/-/g, " "),
    tagline: "Explore our range.",
    desc: "Discover our complete collection of premium products.",
    stat: ["100%", "Quality"],
  };

  useEffect(() => {
    setLoading(true);
    setProducts([]);

    sanityClient
      .fetch(
        `*[_type == "product" && category->slug.current == "${category}"] | order(_createdAt desc) {
          _id,
          name,
          "slug": slug.current,
          "category": category->title,
          "categorySlug": category->slug.current,
          "image": images[0]
        }`,
      )
      .then((data) =>
        setProducts(
          data.map((p) => ({
            ...p,
            image: p.image ? urlFor(p.image).width(600).url() : null,
          })),
        ),
      )
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [category]);

  return (
    <main className="min-h-screen bg-clay-50">
      {/* ── HEADER ─────────────────────────────────── */}
      <div className="pt-32 pb-12 md:pb-16 border-b border-clay-200 bg-clay-50">
        <div className="container-site">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-[11px] text-charcoal-soft/60 mb-8"
            style={{ letterSpacing: "0.18em" }}
          >
            <Link
              to="/"
              className="hover:text-brand transition-colors uppercase"
            >
              Home
            </Link>
            <ChevronRight size={10} />
            <span className="uppercase text-charcoal-soft">Products</span>
            <ChevronRight size={10} />
            <span className="uppercase text-charcoal">{meta.label}</span>
          </motion.div>

          <div className="grid grid-cols-12 gap-6 items-end">
            {/* Left: Title */}
            <div className="col-span-12 lg:col-span-7">
              {/* Eyebrow */}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex items-center gap-3 mb-5"
              >
                <span className="w-8 h-px bg-brand" />
                <span
                  className="text-brand/70 text-[10px] font-medium uppercase"
                  style={{ letterSpacing: "0.4em" }}
                >
                  Our Collection
                </span>
              </motion.div>

              {/* Title */}
              <div className="overflow-hidden mb-3">
                <motion.h1
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.15,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="font-display font-semibold text-charcoal leading-none"
                  style={{
                    fontSize: "clamp(2.8rem, 6vw, 5.5rem)",
                    letterSpacing: "-0.025em",
                  }}
                >
                  {meta.label}
                </motion.h1>
              </div>

              {/* Tagline */}
              <div className="overflow-hidden">
                <motion.p
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.25,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="font-display italic text-brand/80"
                  style={{ fontSize: "clamp(1rem, 2vw, 1.4rem)" }}
                >
                  {meta.tagline}
                </motion.p>
              </div>
            </div>

            {/* Right: Desc + Stat */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="col-span-12 lg:col-span-5 flex flex-col md:flex-row lg:flex-col xl:flex-row items-start gap-8 pb-1"
            >
              <p className="text-charcoal-soft text-sm leading-relaxed flex-1">
                {meta.desc}
              </p>
              <div className="flex items-end gap-3 shrink-0">
                <div className="w-px h-12 bg-clay-300" />
                <div>
                  <p className="font-display text-3xl font-bold text-charcoal leading-none">
                    {meta.stat[0]}
                  </p>
                  <p
                    className="text-charcoal-soft/50 mt-1"
                    style={{ fontSize: "9px", letterSpacing: "0.3em" }}
                  >
                    {meta.stat[1].toUpperCase()}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom meta bar */}
          <AnimatePresence>
            {!loading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-10 pt-5 border-t border-clay-200 flex items-center justify-between"
              >
                <p
                  className="text-[11px] text-charcoal-soft/50 uppercase"
                  style={{ letterSpacing: "0.25em" }}
                >
                  {products.length} Product{products.length !== 1 ? "s" : ""}{" "}
                  Available
                </p>
                <div
                  className="flex items-center gap-2 text-charcoal-soft/40 text-[11px] uppercase"
                  style={{ letterSpacing: "0.2em" }}
                >
                  <span>Scroll to explore</span>
                  <motion.span
                    animate={{ y: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    ↓
                  </motion.span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* ── PRODUCTS GRID ──────────────────────────── */}
      <div className="container-site py-16 md:py-20">
        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="flex flex-col gap-3">
                <div
                  className="aspect-[3/4] bg-clay-200 animate-pulse"
                  style={{ animationDelay: `${i * 80}ms` }}
                />
                <div className="h-3 bg-clay-200 animate-pulse w-1/2" />
                <div className="h-4 bg-clay-200 animate-pulse w-3/4" />
              </div>
            ))}
          </div>
        ) : products.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-32 text-center">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6 }}
              className="w-12 h-px bg-clay-300 mb-10"
            />
            <p className="font-display text-2xl text-charcoal mb-2">
              No products in this category yet.
            </p>
            <p className="text-sm text-charcoal-soft mb-10 max-w-sm">
              Check back shortly or explore another category.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-3 text-xs font-medium uppercase text-charcoal hover:text-brand transition-colors"
              style={{ letterSpacing: "0.15em" }}
            >
              Back to Home
              <span className="w-5 h-px bg-current" />
            </Link>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
          >
            {products.map((p, i) => (
              <ProductCard key={p._id} product={p} index={i} />
            ))}
          </motion.div>
        )}
      </div>

      {/* ── BOTTOM CTA BAND ────────────────────────── */}
      {!loading && products.length > 0 && (
        <FadeIn>
          <div className="bg-white border-t border-clay-200">
            <div className="container-site py-12 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <p
                  className="text-[10px] text-charcoal-soft uppercase mb-1"
                  style={{ letterSpacing: "0.3em" }}
                >
                  Can't find what you need?
                </p>
                <p className="font-display text-xl text-charcoal">
                  We build custom tandoors to your exact spec.
                </p>
              </div>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 bg-brand text-white text-xs font-medium uppercase px-7 py-4 hover:bg-brand-dark transition-colors shrink-0"
                style={{ letterSpacing: "0.15em" }}
              >
                Request Custom Build
                <ArrowUpRight
                  size={14}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </Link>
            </div>
          </div>
        </FadeIn>
      )}
    </main>
  );
}
