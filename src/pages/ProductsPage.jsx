// import { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import { sanityClient, urlFor } from "../lib/sanity";
// import ProductCard from "../components/ui/ProductCard";
// import FadeIn from "../components/ui/FadeIn";
// import { ChevronRight, ArrowUpRight } from "lucide-react";

// const CATEGORY_META = {
//   "home-tandoors": {
//     label: "Home Tandoors",
//     tagline: "Crafted for your kitchen.",
//     desc: "Precision-built tandoors for the home chef who refuses to compromise.",
//     stat: ["480°C", "Max Heat"],
//   },
//   "restaurant-tandoors": {
//     label: "Restaurant Tandoors",
//     tagline: "Built for volume.",
//     desc: "Commercial-grade tandoors engineered for high-output professional kitchens.",
//     stat: ["50kg+", "Capacity"],
//   },
//   "premium-tandoors": {
//     label: "Premium Tandoors",
//     tagline: "Our flagship range.",
//     desc: "NSF certified and globally trusted — the pinnacle of tandoor engineering.",
//     stat: ["NSF", "Certified"],
//   },
//   accessories: {
//     label: "Accessories",
//     tagline: "Complete the experience.",
//     desc: "Skewers, covers, handles and everything your tandoor needs.",
//     stat: ["30+", "Items"],
//   },
//   "wood-fire-brick-ovens": {
//     label: "Wood Fire Brick Ovens",
//     tagline: "Authentic wood-fired perfection.",
//     desc: "Traditional masonry meets modern precision. From Italy to your kitchen.",
//     stat: ["450°C", "Wood Fire"],
//   },
//   "utensils-clay": {
//     label: "Clay Utensils",
//     tagline: "Earth. Fire. Tradition.",
//     desc: "Handcrafted clay cookware that enhances every flavour it touches.",
//     stat: ["100%", "Natural"],
//   },
//   "utensils-copper": {
//     label: "Copper Utensils",
//     tagline: "Timeless. Functional. Beautiful.",
//     desc: "Premium copper cookware with unmatched heat conductivity and elegance.",
//     stat: ["Pure", "Copper"],
//   },
// };

// export default function ProductsPage() {
//   const { category } = useParams();
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // ── meta must be defined before return ──
//   const meta = CATEGORY_META[category] || {
//     label: category?.replace(/-/g, " "),
//     tagline: "Explore our range.",
//     desc: "Discover our complete collection of premium products.",
//     stat: ["100%", "Quality"],
//   };

//   useEffect(() => {
//     setLoading(true);
//     setProducts([]);

//     sanityClient
//       .fetch(
//         `*[_type == "product" && category->slug.current == "${category}"] | order(_createdAt desc) {
//           _id,
//           name,
//           "slug": slug.current,
//           "category": category->title,
//           "categorySlug": category->slug.current,
//           "image": images[0]
//         }`,
//       )
//       .then((data) =>
//         setProducts(
//           data.map((p) => ({
//             ...p,
//             image: p.image ? urlFor(p.image).width(600).url() : null,
//           })),
//         ),
//       )
//       .catch(console.error)
//       .finally(() => setLoading(false));
//   }, [category]);

//   return (
//     <main className="min-h-screen bg-clay-50">
//       {/* ── HEADER ─────────────────────────────────── */}
//       <div className="pt-32 pb-12 md:pb-16 border-b border-clay-200 bg-clay-50">
//         <div className="container-site">
//           {/* Breadcrumb */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.5 }}
//             className="flex items-center gap-2 text-[11px] text-charcoal-soft/60 mb-8"
//             style={{ letterSpacing: "0.18em" }}
//           >
//             <Link
//               to="/"
//               className="hover:text-brand transition-colors uppercase"
//             >
//               Home
//             </Link>
//             <ChevronRight size={10} />
//             <span className="uppercase text-charcoal-soft">Products</span>
//             <ChevronRight size={10} />
//             <span className="uppercase text-charcoal">{meta.label}</span>
//           </motion.div>

//           <div className="grid grid-cols-12 gap-6 items-end">
//             {/* Left: Title */}
//             <div className="col-span-12 lg:col-span-7">
//               {/* Eyebrow */}
//               <motion.div
//                 initial={{ opacity: 0, x: -16 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.6, delay: 0.1 }}
//                 className="flex items-center gap-3 mb-5"
//               >
//                 <span className="w-8 h-px bg-brand" />
//                 <span
//                   className="text-brand/70 text-[10px] font-medium uppercase"
//                   style={{ letterSpacing: "0.4em" }}
//                 >
//                   Our Collection
//                 </span>
//               </motion.div>

//               {/* Title */}
//               <div className="overflow-hidden mb-3">
//                 <motion.h1
//                   initial={{ y: "100%" }}
//                   animate={{ y: 0 }}
//                   transition={{
//                     duration: 0.8,
//                     delay: 0.15,
//                     ease: [0.22, 1, 0.36, 1],
//                   }}
//                   className="font-display font-semibold text-charcoal leading-none"
//                   style={{
//                     fontSize: "clamp(2.8rem, 6vw, 5.5rem)",
//                     letterSpacing: "-0.025em",
//                   }}
//                 >
//                   {meta.label}
//                 </motion.h1>
//               </div>

//               {/* Tagline */}
//               <div className="overflow-hidden">
//                 <motion.p
//                   initial={{ y: "100%" }}
//                   animate={{ y: 0 }}
//                   transition={{
//                     duration: 0.7,
//                     delay: 0.25,
//                     ease: [0.22, 1, 0.36, 1],
//                   }}
//                   className="font-display italic text-brand/80"
//                   style={{ fontSize: "clamp(1rem, 2vw, 1.4rem)" }}
//                 >
//                   {meta.tagline}
//                 </motion.p>
//               </div>
//             </div>

//             {/* Right: Desc + Stat */}
//             <motion.div
//               initial={{ opacity: 0, y: 16 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7, delay: 0.35 }}
//               className="col-span-12 lg:col-span-5 flex flex-col md:flex-row lg:flex-col xl:flex-row items-start gap-8 pb-1"
//             >
//               <p className="text-charcoal-soft text-sm leading-relaxed flex-1">
//                 {meta.desc}
//               </p>
//               <div className="flex items-end gap-3 shrink-0">
//                 <div className="w-px h-12 bg-clay-300" />
//                 <div>
//                   <p className="font-display text-3xl font-bold text-charcoal leading-none">
//                     {meta.stat[0]}
//                   </p>
//                   <p
//                     className="text-charcoal-soft/50 mt-1"
//                     style={{ fontSize: "9px", letterSpacing: "0.3em" }}
//                   >
//                     {meta.stat[1].toUpperCase()}
//                   </p>
//                 </div>
//               </div>
//             </motion.div>
//           </div>

//           {/* Bottom meta bar */}
//           <AnimatePresence>
//             {!loading && (
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.5 }}
//                 className="mt-10 pt-5 border-t border-clay-200 flex items-center justify-between"
//               >
//                 <p
//                   className="text-[11px] text-charcoal-soft/50 uppercase"
//                   style={{ letterSpacing: "0.25em" }}
//                 >
//                   {products.length} Product{products.length !== 1 ? "s" : ""}{" "}
//                   Available
//                 </p>
//                 <div
//                   className="flex items-center gap-2 text-charcoal-soft/40 text-[11px] uppercase"
//                   style={{ letterSpacing: "0.2em" }}
//                 >
//                   <span>Scroll to explore</span>
//                   <motion.span
//                     animate={{ y: [0, 4, 0] }}
//                     transition={{ duration: 1.5, repeat: Infinity }}
//                   >
//                     ↓
//                   </motion.span>
//                 </div>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>
//       </div>

//       {/* ── PRODUCTS GRID ──────────────────────────── */}
//       <div className="container-site py-16 md:py-20">
//         {loading ? (
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
//             {Array.from({ length: 8 }).map((_, i) => (
//               <div key={i} className="flex flex-col gap-3">
//                 <div
//                   className="aspect-[3/4] bg-clay-200 animate-pulse"
//                   style={{ animationDelay: `${i * 80}ms` }}
//                 />
//                 <div className="h-3 bg-clay-200 animate-pulse w-1/2" />
//                 <div className="h-4 bg-clay-200 animate-pulse w-3/4" />
//               </div>
//             ))}
//           </div>
//         ) : products.length === 0 ? (
//           <div className="flex flex-col items-center justify-center py-32 text-center">
//             <motion.div
//               initial={{ scaleX: 0 }}
//               animate={{ scaleX: 1 }}
//               transition={{ duration: 0.6 }}
//               className="w-12 h-px bg-clay-300 mb-10"
//             />
//             <p className="font-display text-2xl text-charcoal mb-2">
//               No products in this category yet.
//             </p>
//             <p className="text-sm text-charcoal-soft mb-10 max-w-sm">
//               Check back shortly or explore another category.
//             </p>
//             <Link
//               to="/"
//               className="inline-flex items-center gap-3 text-xs font-medium uppercase text-charcoal hover:text-brand transition-colors"
//               style={{ letterSpacing: "0.15em" }}
//             >
//               Back to Home
//               <span className="w-5 h-px bg-current" />
//             </Link>
//           </div>
//         ) : (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.5 }}
//             className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
//           >
//             {products.map((p, i) => (
//               <ProductCard key={p._id} product={p} index={i} />
//             ))}
//           </motion.div>
//         )}
//       </div>

//       {/* ── BOTTOM CTA BAND ────────────────────────── */}
//       {!loading && products.length > 0 && (
//         <FadeIn>
//           <div className="bg-[#f5f2ee] border-t border-clay-200">
//             <div className="container-site py-12 flex flex-col md:flex-row items-center justify-between gap-6">
//               <div>
//                 <p
//                   className="text-[10px] text-charcoal-soft uppercase mb-1"
//                   style={{ letterSpacing: "0.3em" }}
//                 >
//                   Can't find what you need?
//                 </p>
//                 <p className="font-display text-xl text-charcoal">
//                   We build custom tandoors to your exact spec.
//                 </p>
//               </div>
//               <Link
//                 to="/contact"
//                 className="group inline-flex items-center gap-3 bg-brand text-white text-xs font-medium uppercase px-7 py-4 hover:bg-brand-dark transition-colors shrink-0"
//                 style={{ letterSpacing: "0.15em" }}
//               >
//                 Request Custom Build
//                 <ArrowUpRight
//                   size={14}
//                   className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
//                 />
//               </Link>
//             </div>
//           </div>
//         </FadeIn>
//       )}
//     </main>
//   );
// }

import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { sanityClient, urlFor } from "../lib/sanity";
import ProductCard from "../components/ui/ProductCard";
import FadeIn from "../components/ui/FadeIn";
import { ChevronRight, Shield, Settings, Globe, FileText } from "lucide-react";

const WHATSAPP_PHONE = "919999999999";

const HIGHLIGHTS = [
  { icon: Shield, line1: "Premium", line2: "Quality Materials" },
  { icon: Settings, line1: "Custom Sizes", line2: "Available" },
  { icon: Globe, line1: "Export Quality", line2: "Manufacturing" },
];

const CATEGORY_META = {
  "home-tandoors": {
    label: "Home Tandoors",
    desc: "Traditional clay and modern home tandoors crafted for home chefs, outdoor cooking, and premium residential spaces.",
  },
  "restaurant-tandoors": {
    label: "Restaurant Tandoors",
    desc: "Commercial-grade tandoors engineered for high-output professional kitchens.",
  },
  "premium-tandoors": {
    label: "Premium Tandoors",
    desc: "NSF certified and globally trusted — the pinnacle of tandoor engineering.",
  },
  accessories: {
    label: "Accessories",
    desc: "Skewers, covers, handles and everything your tandoor needs.",
  },
  "wood-fire-brick-ovens": {
    label: "Wood Fire Brick Ovens",
    desc: "Traditional masonry meets modern precision. From Italy to your kitchen.",
  },
  "utensils-clay": {
    label: "Clay Utensils",
    desc: "Handcrafted clay cookware that enhances every flavour it touches.",
  },
  "utensils-copper": {
    label: "Copper Utensils",
    desc: "Premium copper cookware with unmatched heat conductivity and elegance.",
  },
};

export default function ProductsPage() {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const meta = CATEGORY_META[category] || {
    label: category?.replace(/-/g, " "),
    desc: "Discover our complete collection of premium products.",
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
    <main className="min-h-screen" style={{ background: "#ffffff" }}>
      {/* ── BREADCRUMB ─────────────────────────────── */}
      <div
        className="pt-24"
        style={{ borderBottom: "1px solid rgba(60,40,20,0.08)" }}
      >
        <div className="container-site py-4 flex items-center gap-2 text-xs">
          <Link to="/" className="hover:underline" style={{ color: "#8a7060" }}>
            Home
          </Link>
          <ChevronRight size={12} style={{ color: "#c5b8ae" }} />
          <span style={{ color: "#8a7060" }}>Products</span>
          <ChevronRight size={12} style={{ color: "#c5b8ae" }} />
          <span style={{ color: "#1a1410", fontWeight: 500 }}>
            {meta.label}
          </span>
        </div>
      </div>

      {/* ── HEADER ─────────────────────────────────── */}
      <div className="container-site pt-10 pb-8">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="uppercase font-semibold mb-4"
          style={{
            fontSize: "11px",
            letterSpacing: "0.18em",
            color: "#8b1a1a",
          }}
        >
          Our Product Category
        </motion.p>

        <div className="overflow-hidden mb-5">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-semibold leading-none pb-2"
            style={{
              fontSize: "clamp(2.4rem, 5vw, 4rem)",
              letterSpacing: "-0.025em",
              color: "#1a1410",
            }}
          >
            {meta.label}
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm leading-relaxed mb-8"
          style={{ color: "#5c4a3a", maxWidth: "52ch" }}
        >
          {meta.desc}
        </motion.p>

        {/* Highlights row */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center gap-6 md:gap-10"
        >
          {HIGHLIGHTS.map(({ icon: Icon, line1, line2 }, i) => (
            <div key={line1} className="flex items-center gap-6 md:gap-10">
              {i > 0 && (
                <span
                  className="hidden md:block w-px h-9"
                  style={{ background: "rgba(60,40,20,0.14)" }}
                />
              )}
              <div className="flex items-center gap-3">
                <Icon
                  size={22}
                  strokeWidth={1.5}
                  style={{ color: "#8b1a1a" }}
                />
                <p
                  className="text-[13px] leading-snug"
                  style={{ color: "#1a1410" }}
                >
                  {line1}
                  <br />
                  {line2}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Count */}
        <AnimatePresence>
          {!loading && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-8 text-[13px]"
              style={{ color: "#8a7060" }}
            >
              <span style={{ color: "#8b1a1a", fontWeight: 600 }}>
                {products.length}
              </span>{" "}
              Product{products.length !== 1 ? "s" : ""} Available
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* ── PRODUCTS GRID ──────────────────────────── */}
      <div className="container-site pb-16 md:pb-20">
        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="flex flex-col gap-3">
                <div
                  className="aspect-[3/4] bg-clay-200 animate-pulse"
                  style={{ animationDelay: `${i * 80}ms` }}
                />
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

      {/* ── HELP CTA BAND ──────────────────────────── */}
      {!loading && products.length > 0 && (
        <FadeIn>
          <div className="container-site pb-16 md:pb-20">
            <div
              className="flex flex-col lg:flex-row items-center justify-between gap-6 px-6 py-6 md:px-10 md:py-8"
              style={{ background: "#8b1a1a" }}
            >
              <div className="flex items-center gap-5 text-center lg:text-left">
                <div
                  className="hidden sm:flex shrink-0 w-14 h-14 rounded-full items-center justify-center"
                  style={{ background: "rgba(255,255,255,0.14)" }}
                >
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <p
                    className="font-display font-semibold mb-1"
                    style={{ fontSize: "1.15rem", color: "#ffffff" }}
                  >
                    Need Help Choosing the Right Tandoor?
                  </p>
                  <p
                    className="text-[13px]"
                    style={{ color: "rgba(255,255,255,0.8)" }}
                  >
                    Our experts are here to help you find the perfect fit for
                    your needs.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase px-6 py-3.5 transition-opacity duration-200 hover:opacity-90"
                  style={{
                    border: "1px solid rgba(255,255,255,0.5)",
                    color: "#ffffff",
                    letterSpacing: "0.12em",
                  }}
                >
                  <FileText size={15} strokeWidth={1.8} />
                  Request a Quote
                </Link>

                <a
                  href={`https://wa.me/${WHATSAPP_PHONE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase px-6 py-3.5 transition-opacity duration-200 hover:opacity-90"
                  style={{
                    background: "#ffffff",
                    color: "#8b1a1a",
                    letterSpacing: "0.12em",
                  }}
                >
                  <svg
                    viewBox="0 0 32 32"
                    fill="currentColor"
                    className="w-4 h-4"
                    aria-hidden="true"
                  >
                    <path d="M16.004 0h-.008C7.174 0 .002 7.174.002 16c0 3.5 1.128 6.744 3.046 9.378L1.05 31.34l6.166-1.971A15.9 15.9 0 0 0 16.004 32C24.83 32 32 24.826 32 16S24.83 0 16.004 0zm9.31 22.594c-.386 1.09-1.918 1.994-3.14 2.258-.836.178-1.928.32-5.604-1.204-4.702-1.948-7.73-6.726-7.966-7.036-.226-.31-1.9-2.53-1.9-4.826 0-2.296 1.166-3.424 1.636-3.904.386-.394.892-.574 1.378-.574.157 0 .298.008.425.014.396.017.595.04.856.664.386.916 1.318 3.212 1.43 3.446.113.234.226.552.068.862-.148.32-.278.46-.512.73-.234.27-.456.476-.69.766-.214.252-.456.522-.186.988.27.456 1.2 1.976 2.568 3.194 1.766 1.572 3.198 2.074 3.712 2.288.383.159.84.121 1.12-.177.355-.383.794-1.018 1.24-1.643.317-.448.718-.504 1.138-.345.428.148 2.714 1.278 3.18 1.51.466.234.774.346.887.542.111.196.111 1.122-.275 2.212z" />
                  </svg>
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      )}
    </main>
  );
}
