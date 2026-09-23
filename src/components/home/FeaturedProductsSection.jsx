import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { sanityClient, QUERIES, urlFor } from "../../lib/sanity";
import ProductCard from "../ui/ProductCard";
import RevealText from "../ui/RevealText";
import FadeIn from "../ui/FadeIn";

export default function FeaturedProductsSection() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    sanityClient
      .fetch(QUERIES.popularProducts)
      .then((pop) => {
        const process = (list) =>
          list.map((p) => ({
            ...p,
            image: p.image ? urlFor(p.image).width(600).url() : null,
          }));
        setProducts(process(pop));
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return (
    <section
      className="py-12 md:py-16 overflow-hidden"
      style={{ background: "#f5f2ee" }}
    >
      <div className="container-site">
        {/* ── SECTION HEADER ─────────────────────────── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          {/* Label + Heading */}
          <div>
            <RevealText>
              <h2 className="section-heading">
                Most Popular <em className="text-brand not-italic">Tandoors</em>
              </h2>
            </RevealText>
          </div>
        </div>

        {/* ── CONTENT ────────────────────────────── */}
        <div className="relative min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key="popular-grid"
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
                <EmptyState />
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                  {products.map((product, i) => (
                    <ProductCard
                      key={product._id}
                      product={product}
                      index={i}
                      category={product.category?.name}
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
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-clay-200">
              <p className="text-sm text-charcoal-soft">
                Showing{" "}
                <span className="text-charcoal font-medium">
                  {products.length}
                </span>{" "}
                bestselling products
              </p>
              <Link
                to="/products/home-tandoors"
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

function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <div className="w-16 h-px bg-clay-300 mb-8" />
      <p className="font-display text-2xl text-charcoal-soft">
        Popular products coming soon.
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
