import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import FadeIn from "../ui/FadeIn";
import RevealText from "../ui/RevealText";
import { ArrowUpRight } from "lucide-react";

const CATEGORIES = [
  {
    label: "Home Tandoors",
    slug: "home-tandoors",
    desc: "Compact and efficient designs for modern home kitchens.",
    image: "/products/home-tandoors.png",
  },
  {
    label: "Restaurant Tandoors",
    slug: "restaurant-tandoors",
    desc: "Heavy-duty tandoors designed for high-volume commercial kitchens.",
    image: "/products/restaurant-tandoors.png",
  },
  {
    label: "Premium Tandoors",
    slug: "premium-tandoors",
    desc: "Top-tier craftsmanship for the most demanding culinary standards.",
    image: "/products/premium-tandoors.png",
  },
  {
    label: "Pizza Oven",
    slug: "Pizza Oven",
    desc: "Wood-fired and gas pizza ovens for authentic crispy results.",
    image: "/products/pizza-oven.png",
  },
  {
    label: "Copper Tandoor",
    slug: "copper-tandoors",
    desc: "Traditional handcrafted tandoors with premium copper finish.",
    image: "/products/copper-tandoors.png",
  },
  {
    label: "Export Tandoors",
    slug: "export-tandoors",
    desc: "Export-grade tandoors built to international quality standards.",
    image: "/products/export-tandoors.png",
  },
  {
    label: "Electric Tandoors",
    slug: "electric-tandoors",
    desc: "Modern electric tandoors — no gas, no smoke, pure performance.",
    image: "/products/electric-tandoors.png",
  },
  {
    label: "Accessories",
    slug: "accessories",
    desc: "Essential tools and add-ons to enhance your cooking experience.",
    image: "/products/accessories.png",
  },
];

export default function CategoriesSection() {
  return (
    <section className="py-10 md:py-14" style={{ background: "#f5f2ee" }}>
      <div className="container-site">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-6">
          <div>
            <FadeIn>
              <p className="section-label mb-5" style={{ color: "#8b1a1a" }}>
                What We Offer
              </p>
            </FadeIn>
            <RevealText>
              <h2 className="section-heading" style={{ color: "#1a1410" }}>
                Our Product{" "}
                <em className="not-italic" style={{ color: "#8b1a1a" }}>
                  Categories
                </em>
              </h2>
            </RevealText>
          </div>
          <FadeIn direction="left">
            <Link
              to="/products/home-tandoors"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-widest uppercase rounded border-2 transition-all duration-300 hover:text-white"
              style={{
                borderColor: "#8b1a1a",
                color: "#8b1a1a",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "#8b1a1a")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "transparent")
              }
            >
              View All Products
            </Link>
          </FadeIn>
        </div>

        {/* Grid — 2 cols mobile, 4 cols laptop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.07,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Link
                to={`/products/${cat.slug}`}
                className="group relative flex flex-col rounded-xl overflow-hidden transition-all duration-300"
                style={{
                  background: "#ffffff",
                  border: "1px solid rgba(60,40,20,0.1)",
                  boxShadow: "0 1px 3px rgba(60,40,20,0.06)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.boxShadow =
                    "0 8px 32px rgba(60,40,20,0.13)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.boxShadow =
                    "0 1px 3px rgba(60,40,20,0.06)")
                }
              >
                {/* Image area */}
                <div
                  className="relative overflow-hidden"
                  style={{ aspectRatio: "4/3", background: "#ede8e2" }}
                >
                  <img
                    src={cat.image}
                    alt={cat.label}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                  {/* hover tint */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: "rgba(139,26,26,0.06)" }}
                  />
                  {/* Number badge */}
                  <span
                    className="absolute top-3 left-3 text-[10px] font-bold tracking-widest select-none"
                    style={{ color: "rgba(60,40,20,0.25)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Text area */}
                <div className="flex flex-col flex-1 p-4 md:p-5">
                  {/* brand divider */}
                  <div
                    className="h-px mb-3 transition-all duration-500 group-hover:w-10"
                    style={{ width: "2rem", background: "#8b1a1a" }}
                  />

                  <h3
                    className="font-display text-sm md:text-base leading-snug mb-1.5 transition-colors duration-300"
                    style={{ color: "#1a1410" }}
                  >
                    {cat.label}
                  </h3>

                  <p
                    className="text-xs leading-relaxed line-clamp-2 hidden md:block"
                    style={{ color: "#8a7060" }}
                  >
                    {cat.desc}
                  </p>

                  {/* Explore link */}
                  <div
                    className="mt-3 flex items-center gap-1.5 text-[10px] tracking-widest uppercase font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0"
                    style={{ color: "#8b1a1a" }}
                  >
                    Explore <ArrowUpRight size={12} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile — View All button */}
        <div className="mt-8 flex justify-center md:hidden">
          <Link
            to="/products/home-tandoors"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-widest uppercase rounded border-2 transition-all duration-200 active:scale-95"
            style={{ borderColor: "#8b1a1a", color: "#8b1a1a" }}
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
