import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { sanityClient, QUERIES, urlFor } from "../../lib/sanity";
import ProductCard from "../ui/ProductCard";
import RevealText from "../ui/RevealText";
import FadeIn from "../ui/FadeIn";

const TABS = [
  { key: "popular", label: "Most Popular" },
  { key: "new", label: "New Arrivals" },
];

export default function FeaturedProductsSection() {
  const [activeTab, setActiveTab] = useState("popular");
  const [popular, setPopular] = useState([]);
  const [newArrivals, setNewArrivals] = useState([]);
  const [loading, setLoading] = useState(true);
  const indicatorRef = useRef(null);
  const tabRefs = useRef({});

  useEffect(() => {
    Promise.all([
      sanityClient.fetch(QUERIES.popularProducts),
      sanityClient.fetch(QUERIES.newArrivals),
    ])
      .then(([pop, nw]) => {
        const process = (list) =>
          list.map((p) => ({
            ...p,
            image: p.image ? urlFor(p.image).width(600).url() : null,
          }));
        setPopular(process(pop));
        setNewArrivals(process(nw));
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  // Move the sliding indicator under the active tab
  useEffect(() => {
    const activeEl = tabRefs.current[activeTab];
    const indicator = indicatorRef.current;
    if (!activeEl || !indicator) return;
    indicator.style.width = `${activeEl.offsetWidth}px`;
    indicator.style.left = `${activeEl.offsetLeft}px`;
  }, [activeTab]);

  const products = activeTab === "popular" ? popular : newArrivals;

  return (
    <section className="py-24 md:py-32 bg-clay-50 overflow-hidden">
      <div className="container-site">
        {/* ── SECTION HEADER ─────────────────────────── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          {/* Left: Label + Heading */}
          <div>
            <FadeIn>
              <p className="section-label mb-3">Our Collection</p>
            </FadeIn>
            <RevealText>
              <h2 className="section-heading">
                Handpicked <em className="text-brand not-italic">Tandoors</em>
              </h2>
            </RevealText>
          </div>

          {/* Right: Tab switcher */}
          <FadeIn delay={0.2} direction="left">
            <div className="relative flex items-center gap-0 border border-clay-200 bg-white p-1 self-start md:self-auto">
              {/* Sliding background pill */}
              <motion.div
                layout
                layoutId="tab-bg"
                className="absolute top-1 bottom-1 bg-charcoal z-0 pointer-events-none"
                style={{ borderRadius: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                ref={indicatorRef}
              />

              {TABS.map((tab) => (
                <button
                  key={tab.key}
                  ref={(el) => (tabRefs.current[tab.key] = el)}
                  onClick={() => setActiveTab(tab.key)}
                  className={`relative z-10 px-6 py-2.5 text-xs font-medium uppercase transition-colors duration-300 whitespace-nowrap ${
                    activeTab === tab.key
                      ? "text-white"
                      : "text-charcoal-soft hover:text-charcoal"
                  }`}
                  style={{ letterSpacing: "0.15em" }}
                >
                  {tab.label}

                  {/* Active tab sliding bg using framer layout */}
                  {activeTab === tab.key && (
                    <motion.span
                      layoutId="tab-active-bg"
                      className="absolute inset-0 bg-charcoal -z-10"
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    />
                  )}
                </button>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* ── TAB CONTENT ────────────────────────────── */}
        <div className="relative min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              {loading ? (
                /* Skeleton grid */
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div key={i} className="flex flex-col gap-3">
                      <div
                        className="aspect-[3/4] bg-clay-200 animate-pulse"
                        style={{ animationDelay: `${i * 80}ms` }}
                      />
                      <div className="h-3 bg-clay-200 animate-pulse w-1/2 rounded" />
                      <div className="h-4 bg-clay-200 animate-pulse w-3/4 rounded" />
                    </div>
                  ))}
                </div>
              ) : products.length === 0 ? (
                <EmptyState tab={activeTab} />
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                  {products.map((product, i) => (
                    <ProductCard
                      key={product._id}
                      product={product}
                      index={i}
                    />
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── BOTTOM CTA ─────────────────────────────── */}
        {!loading && products.length > 0 && (
          <FadeIn delay={0.3}>
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-clay-200">
              <p className="text-sm text-charcoal-soft">
                Showing{" "}
                <span className="text-charcoal font-medium">
                  {products.length}
                </span>{" "}
                {activeTab === "popular" ? "bestselling" : "newly added"}{" "}
                products
              </p>
              <Link
                to={
                  activeTab === "popular"
                    ? "/products/home-tandoors"
                    : "/products/premium-tandoors"
                }
                className="group inline-flex items-center gap-3 text-xs font-medium uppercase text-charcoal hover:text-brand transition-colors duration-300"
                style={{ letterSpacing: "0.15em" }}
              >
                View Full Catalogue
                <span className="w-6 h-px bg-current group-hover:w-10 transition-all duration-300" />
              </Link>
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
}

function EmptyState({ tab }) {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <div className="w-16 h-px bg-clay-300 mb-8" />
      <p className="font-display text-2xl text-charcoal-soft">
        {tab === "popular"
          ? "Popular products coming soon."
          : "New arrivals coming soon."}
      </p>
      <p className="text-sm text-clay-400 mt-2">
        Check back shortly or explore our full catalogue.
      </p>
      <Link to="/products/home-tandoors" className="btn-primary mt-8">
        Browse All Products
      </Link>
    </div>
  );
}
