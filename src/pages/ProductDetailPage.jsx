import { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { sanityClient, QUERIES, urlFor } from "../lib/sanity";
import FadeIn from "../components/ui/FadeIn";
import { ChevronRight, Share2, Phone, Check } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import ProductCard from "../components/ui/ProductCard";
import RevealText from "../components/ui/RevealText";

const TABS = [
  { key: "info", label: "Product Information" },
  { key: "size", label: "Size Information" },
];

const SPEC_FIELDS = [
  ["coreMaterial", "Core Material"],
  ["outerCasing", "Outer Casing"],
  ["insulation", "Insulation"],
  ["dimension", "Dimension"],
  ["usage", "Usage"],
  ["portability", "Portability"],
  ["fuelOptionsText", "Fuel Options"],
  ["usageEnvironment", "Usage Environment"],
  ["customisation", "Customisation"],
  ["topSurface", "Top Surface"],
  ["accessories", "Accessories"],
  ["weight", "Weight"],
  ["importable", "Importable"],
  ["safetyNorms", "Safety Norms"],
];

// ── Image flip component ─────────────────────────────
function ProductImage({ src, alt, active }) {
  return (
    <AnimatePresence mode="wait">
      {active && (
        <motion.div
          key={src}
          initial={{ opacity: 0, rotateY: -15, scale: 0.97 }}
          animate={{ opacity: 1, rotateY: 0, scale: 1 }}
          exit={{ opacity: 0, rotateY: 15, scale: 0.97 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="w-full h-full"
          style={{ transformStyle: "preserve-3d" }}
        >
          {src ? (
            <img src={src} alt={alt} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-clay-200 to-clay-300 flex items-center justify-center">
              <span className="text-clay-400 text-xs tracking-[0.3em] uppercase">
                No Image
              </span>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ── Skeleton loader ──────────────────────────────────
function DetailSkeleton() {
  return (
    <main className="pt-24 min-h-screen bg-clay-50">
      <div className="container-site py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="aspect-[3/4] bg-clay-200 animate-pulse" />
          <div className="space-y-5 pt-4">
            <div className="h-3 w-24 bg-clay-200 animate-pulse" />
            <div className="h-10 w-3/4 bg-clay-200 animate-pulse" />
            <div className="h-3 w-1/2 bg-clay-200 animate-pulse" />
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="flex gap-4">
                <div className="h-3 w-1/3 bg-clay-200 animate-pulse" />
                <div className="h-3 w-1/2 bg-clay-200 animate-pulse" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default function ProductDetailPage() {
  const { category, slug } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("info");
  const [copied, setCopied] = useState(false);
  const tabRefs = useRef({});
  const indicatorRef = useRef(null);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(QUERIES.productDetail(slug))
      .then((data) => {
        setProduct(data);

        // fetch related products after product loads
        if (data?.categorySlug) {
          sanityClient
            .fetch(QUERIES.relatedProducts(data.categorySlug, slug))
            .then((rel) =>
              setRelated(
                rel.map((p) => ({
                  ...p,
                  image: p.image ? urlFor(p.image).width(600).url() : null,
                })),
              ),
            )
            .catch(console.error);
        }
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [slug]);

  // Slide indicator
  useEffect(() => {
    const el = tabRefs.current[activeTab];
    const bar = indicatorRef.current;
    if (!el || !bar) return;
    bar.style.width = `${el.offsetWidth}px`;
    bar.style.left = `${el.offsetLeft}px`;
  }, [activeTab, loading]);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (loading) return <DetailSkeleton />;

  if (!product) {
    return (
      <main className="pt-32 pb-24 min-h-screen bg-clay-50 flex items-center justify-center">
        <div className="text-center">
          <p className="font-display text-2xl text-charcoal">
            Product not found.
          </p>
          <Link to="/" className="btn-primary mt-8 inline-flex">
            Back to Home
          </Link>
        </div>
      </main>
    );
  }

  // Build image URLs
  const mainImageUrl = product.mainImage
    ? typeof product.mainImage === "string"
      ? product.mainImage
      : urlFor(product.mainImage).width(900).url()
    : null;

  const sizeImageUrl = product.sizeImage || null;

  // Which image shows per tab
  const activeImage = activeTab === "info" ? mainImageUrl : sizeImageUrl;

  // Fuel tags
  const fuelTags = product.fuelTags || [];

  return (
    <main className="min-h-screen bg-clay-50">
      {/* ── BREADCRUMB ─────────────────────────────── */}
      <div className="pt-24 bg-white border-b border-clay-200">
        <div className="container-site py-4 flex items-center gap-2 text-xs text-charcoal-soft">
          <Link to="/" className="hover:text-brand transition-colors">
            Home
          </Link>
          <ChevronRight size={11} />
          <Link
            to={`/products/${category}`}
            className="hover:text-brand transition-colors capitalize"
          >
            {category?.replace(/-/g, " ")}
          </Link>
          <ChevronRight size={11} />
          <span className="text-charcoal truncate max-w-[180px]">
            {product.name}
          </span>
        </div>
      </div>

      {/* ── HERO BAND ──────────────────────────────── */}
      <div className="bg-white pb-0">
        <div className="container-site pt-10 pb-0">
          {/* Product name + meta row */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-10">
            <div className="flex-1">
              <FadeIn>
                <div className="flex items-center gap-3 mb-3">
                  <span className="section-label">{product.category}</span>
                  {fuelTags.length > 0 && (
                    <div className="flex items-center gap-1.5">
                      {fuelTags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 text-[10px] font-medium uppercase bg-clay-100 text-charcoal-soft border border-clay-200"
                          style={{ letterSpacing: "0.12em" }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </FadeIn>

              <div className="overflow-hidden">
                <motion.h1
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                  className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-charcoal leading-tight"
                >
                  {product.name}
                </motion.h1>
              </div>

              {product.description && (
                <FadeIn delay={0.2}>
                  <p className="mt-4 text-charcoal-soft leading-relaxed max-w-xl text-sm md:text-base">
                    {product.description}
                  </p>
                </FadeIn>
              )}
            </div>

            {/* Action buttons */}
            <FadeIn delay={0.3} direction="left">
              <div className="flex items-center gap-3 shrink-0">
                <button
                  onClick={handleShare}
                  className="p-3 border border-clay-200 text-charcoal-soft hover:border-brand hover:text-brand transition-all duration-300"
                  aria-label="Copy link"
                >
                  {copied ? (
                    <Check size={16} className="text-brand" />
                  ) : (
                    <Share2 size={16} />
                  )}
                </button>
                <a
                  href="https://wa.me/919999999999"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-5 py-3 bg-[#25D366] text-white text-xs font-medium uppercase hover:bg-[#1ebe59] transition-colors"
                  style={{ letterSpacing: "0.12em" }}
                >
                  <FaWhatsapp size={16} /> Enquire
                </a>
                <Link
                  to="/contact"
                  className="flex items-center gap-2 px-5 py-3 bg-brand text-white text-xs font-medium uppercase hover:bg-brand-dark transition-colors"
                  style={{ letterSpacing: "0.12em" }}
                >
                  <Phone size={14} /> Get Quote
                </Link>
              </div>
            </FadeIn>
          </div>

          {/* ── TAB SWITCHER ─────────────────────────── */}
          <div className="relative flex items-center border-b border-clay-200">
            {/* Sliding bottom indicator */}
            <div
              ref={indicatorRef}
              className="absolute bottom-0 h-0.5 bg-brand transition-all duration-400"
              style={{ left: 0, width: 0 }}
            />

            {TABS.map((tab) => (
              <button
                key={tab.key}
                ref={(el) => (tabRefs.current[tab.key] = el)}
                onClick={() => setActiveTab(tab.key)}
                className={`relative px-6 md:px-10 py-4 text-xs font-medium uppercase transition-colors duration-300 ${
                  activeTab === tab.key
                    ? "text-brand"
                    : "text-charcoal-soft hover:text-charcoal"
                }`}
                style={{ letterSpacing: "0.15em" }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── TAB CONTENT ────────────────────────────── */}
      <div className="bg-clay-50">
        <div className="container-site py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* ── LEFT: IMAGE (flips on tab switch) ─── */}
            <div className="lg:sticky lg:top-28">
              <div
                className="relative overflow-hidden bg-white border border-clay-200"
                style={{ perspective: "1000px" }}
              >
                {/* Aspect container */}
                <div className="aspect-[3/4] relative">
                  <ProductImage
                    src={activeImage}
                    alt={product.name}
                    active={activeTab === "info"}
                    key="info-img"
                  />
                  {activeTab === "size" && (
                    <AnimatePresence mode="wait">
                      <motion.div
                        key="size-img"
                        initial={{ opacity: 0, rotateY: -15, scale: 0.97 }}
                        animate={{ opacity: 1, rotateY: 0, scale: 1 }}
                        exit={{ opacity: 0, rotateY: 15, scale: 0.97 }}
                        transition={{
                          duration: 0.55,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="absolute inset-0"
                        style={{ transformStyle: "preserve-3d" }}
                      >
                        {sizeImageUrl ? (
                          <img
                            src={sizeImageUrl}
                            alt={`${product.name} dimensions`}
                            className="w-full h-full object-contain p-8 bg-white"
                          />
                        ) : (
                          <div className="w-full h-full bg-white flex items-center justify-center">
                            <span className="text-clay-400 text-xs tracking-[0.3em] uppercase">
                              No Diagram
                            </span>
                          </div>
                        )}
                      </motion.div>
                    </AnimatePresence>
                  )}
                  {activeTab === "info" && mainImageUrl && (
                    <AnimatePresence mode="wait">
                      <motion.div
                        key="info-img-inner"
                        initial={{ opacity: 0, rotateY: 15, scale: 0.97 }}
                        animate={{ opacity: 1, rotateY: 0, scale: 1 }}
                        exit={{ opacity: 0, rotateY: -15, scale: 0.97 }}
                        transition={{
                          duration: 0.55,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="absolute inset-0"
                        style={{ transformStyle: "preserve-3d" }}
                      >
                        <img
                          src={mainImageUrl}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                    </AnimatePresence>
                  )}
                </div>

                {/* Tab label watermark on image */}
                <div className="absolute bottom-4 left-4">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={activeTab}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.3 }}
                      className="text-[9px] text-white/60 uppercase bg-charcoal/50 backdrop-blur-sm px-3 py-1"
                      style={{ letterSpacing: "0.25em" }}
                    >
                      {activeTab === "info" ? "Product View" : "Size Diagram"}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </div>

              {/* Thumbnail switcher — mini tab indicators below image */}
              <div className="flex gap-2 mt-3">
                {TABS.map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`flex-1 py-2.5 text-[10px] font-medium uppercase border transition-all duration-300 ${
                      activeTab === tab.key
                        ? "border-brand bg-brand text-white"
                        : "border-clay-200 text-charcoal-soft hover:border-brand/40"
                    }`}
                    style={{ letterSpacing: "0.12em" }}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* ── RIGHT: TAB PANELS ────────────────── */}
            <AnimatePresence mode="wait">
              {activeTab === "info" && (
                <motion.div
                  key="info-panel"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  <InfoPanel product={product} />
                </motion.div>
              )}

              {activeTab === "size" && (
                <motion.div
                  key="size-panel"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  <SizePanel product={product} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* ── RELATED / CTA BAND ─────────────────────── */}
      {/* <div className="bg-charcoal py-16">
        <div className="container-site flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="section-label text-white/40 mb-2">Interested?</p>
            <h3 className="font-display text-2xl md:text-3xl text-white">
              Get a personalised quote for{" "}
              <em className="text-brand not-italic">{product.name}</em>
            </h3>
          </div>
          <div className="flex flex-wrap gap-4 shrink-0">
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-6 py-3.5 bg-[#25D366] text-white text-xs font-medium uppercase hover:bg-[#1ebe59] transition-colors"
              style={{ letterSpacing: "0.12em" }}
            >
              <FaWhatsapp size={18} /> WhatsApp Us
            </a>
            <Link to="/contact" className="btn-primary">
              Request a Quote
            </Link>
          </div>
        </div>
      </div> */}

      {/* ── RELATED PRODUCTS ───────────────────────── */}
      {related.length > 0 && (
        <div className="bg-clay-50 py-4 md:py-4">
          <div className="container-site">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                {/* <FadeIn>
                  <p className="section-label mb-3">
                    More from {product.category}
                  </p>
                </FadeIn> */}
                <RevealText>
                  <h2 className="section-heading">
                    You May Also <em className="text-brand not-italic">Like</em>
                  </h2>
                </RevealText>
              </div>
              <FadeIn direction="left">
                <Link
                  to={`/products/${product.categorySlug}`}
                  className="group inline-flex items-center gap-3 text-xs font-medium uppercase text-charcoal hover:text-brand transition-colors"
                  style={{ letterSpacing: "0.15em" }}
                >
                  View All {product.category}
                  <span className="w-6 h-px bg-current group-hover:w-10 transition-all duration-300" />
                </Link>
              </FadeIn>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {related.map((p, i) => (
                <ProductCard key={p._id} product={p} index={i} />
              ))}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

// ── INFO PANEL ───────────────────────────────────────
function InfoPanel({ product }) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-8">
        <div className="divider-brand" />
        <span
          className="text-[10px] text-charcoal-soft uppercase font-medium"
          style={{ letterSpacing: "0.25em" }}
        >
          Specifications
        </span>
      </div>

      <div className="divide-y divide-clay-200">
        {SPEC_FIELDS.map(([key, label], i) =>
          product[key] ? (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04, duration: 0.4 }}
              className="grid grid-cols-5 gap-4 py-4 group hover:bg-white hover:px-4 hover:-mx-4 transition-all duration-300"
            >
              <span
                className="col-span-2 text-[11px] text-charcoal-soft uppercase font-medium pt-0.5"
                style={{ letterSpacing: "0.15em" }}
              >
                {label}
              </span>
              <span className="col-span-3 text-sm text-charcoal leading-relaxed">
                {product[key]}
              </span>
            </motion.div>
          ) : null,
        )}
      </div>

      {/* Fuel tags row */}
      {product.fuelTags && product.fuelTags.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 pt-6 border-t border-clay-200"
        >
          <p
            className="text-[11px] text-charcoal-soft uppercase font-medium mb-3"
            style={{ letterSpacing: "0.2em" }}
          >
            Compatible Fuel Types
          </p>
          <div className="flex flex-wrap gap-2">
            {product.fuelTags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 border border-brand/30 text-brand text-xs font-medium uppercase bg-brand/5"
                style={{ letterSpacing: "0.12em" }}
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}

// ── SIZE PANEL ───────────────────────────────────────
function SizePanel({ product }) {
  const sizes = product.sizeTable || [];

  if (sizes.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="w-12 h-px bg-clay-300 mb-6" />
        <p className="font-display text-xl text-charcoal-soft">
          Size information not available.
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center gap-3 mb-8">
        <div className="divider-brand" />
        <span
          className="text-[10px] text-charcoal-soft uppercase font-medium"
          style={{ letterSpacing: "0.25em" }}
        >
          Available Models
        </span>
      </div>

      {/* Model cards — more premium than a raw table */}
      <div className="flex flex-col gap-4">
        {sizes.map((v, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.07, duration: 0.45 }}
            className="group bg-white border border-clay-200 hover:border-brand/40 hover:shadow-lg hover:shadow-brand/5 transition-all duration-400 overflow-hidden"
          >
            {/* Model header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-clay-100 group-hover:border-brand/20 transition-colors">
              <span className="font-display text-lg text-charcoal font-semibold">
                {v.modelNo}
              </span>
              <span
                className="text-[9px] text-brand uppercase font-medium"
                style={{ letterSpacing: "0.25em" }}
              >
                Model
              </span>
            </div>

            {/* Specs grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-0 divide-x divide-y divide-clay-100">
              {[
                ["Length", v.length],
                ["Height", v.height],
                ["Width", v.width],
                ["Weight", v.weight],
                ["Mouth Dia.", v.mouthDiameter],
              ].map(([label, value]) =>
                value ? (
                  <div key={label} className="px-5 py-4">
                    <p
                      className="text-[9px] text-charcoal-soft uppercase mb-1"
                      style={{ letterSpacing: "0.2em" }}
                    >
                      {label}
                    </p>
                    <p className="text-sm font-medium text-charcoal">{value}</p>
                  </div>
                ) : null,
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Note */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-6 text-xs text-charcoal-soft/60 leading-relaxed"
        style={{ letterSpacing: "0.05em" }}
      >
        * Custom sizes available on request. Contact us for bespoke dimensions.
      </motion.p>
    </div>
  );
}
