import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import FadeIn from "../ui/FadeIn";
import RevealText from "../ui/RevealText";
import { ArrowUpRight } from "lucide-react";

const CATEGORIES = [
  {
    label: "Home Tandoors",
    slug: "home-tandoors",
    desc: "Compact, safe, and elegant designs crafted for the modern home kitchen.",
  },
  {
    label: "Restaurant Tandoors",
    slug: "restaurant-tandoors",
    desc: "Heavy-duty, high-performance tandoors designed for professional kitchens.",
  },
  {
    label: "Premium Tandoors",
    slug: "premium-tandoors",
    desc: "Our finest range — bespoke finishes, superior insulation, and NSF certified.",
  },
  {
    label: "Wood Fire Brick Ovens",
    slug: "wood-fire-brick-ovens",
    desc: "Authentic Italian-style brick ovens fused with traditional Indian heat masonry.",
  },
  {
    label: "Accessories",
    slug: "accessories",
    desc: "Essential accessories: skewers, handles, brushes, and more.",
  },
  {
    label: "Copper Tandoor",
    slug: "utensils-clay",
    desc: "Traditional clay and copper cookware to complete your cooking experience.",
  },
];

export default function CategoriesSection() {
  return (
    <section className="pt-10 pb-28 md:py-24 bg-charcoal clip-diagonal">
      <div className="container-site">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-6">
          <div>
            <FadeIn>
              <p className="section-label text-white/40 mb-5">What We Offer</p>
            </FadeIn>
            <RevealText>
              <h2 className="section-heading text-white">
                Our Product{" "}
                <em className="text-brand not-italic">Categories</em>
              </h2>
            </RevealText>
          </div>
          <FadeIn direction="left">
            <Link
              to="/products/home-tandoors"
              className="btn-outline border-white/30 text-white/70 hover:border-white hover:text-white hidden md:inline-flex"
            >
              View All Products
            </Link>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.slug}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
            >
              <Link
                to={`/products/${cat.slug}`}
                className="group relative block p-8 bg-charcoal hover:bg-charcoal-light transition-colors duration-300 overflow-hidden"
              >
                {/* Number */}
                <span className="absolute top-6 right-6 font-display text-6xl font-bold text-white/5 group-hover:text-white/8 transition-colors select-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="divider-brand mb-6 transition-all duration-500 group-hover:w-16" />
                <h3 className="font-display text-xl text-white group-hover:text-brand-muted transition-colors duration-300 mb-3">
                  {cat.label}
                </h3>
                <p className="text-sm text-white/40 leading-relaxed">
                  {cat.desc}
                </p>
                <div className="mt-6 flex items-center gap-2 text-brand text-xs tracking-widest uppercase font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  Explore <ArrowUpRight size={14} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
