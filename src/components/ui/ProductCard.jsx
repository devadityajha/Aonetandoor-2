import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { urlFor } from "../../lib/sanity";
import { ArrowUpRight } from "lucide-react";

export default function ProductCard({ product, index = 0 }) {
  const imageUrl = product.image
    ? typeof product.image === "string"
      ? product.image
      : urlFor(product.image).width(600).height(700).url()
    : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Link
        to={`/products/${product.categorySlug || "all"}/${product.slug?.current || product.slug}`}
        className="card-product block"
      >
        {/* Image */}
        <div className="relative overflow-hidden aspect-[3/4] bg-clay-100">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={product.name}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-clay-200 to-clay-300 flex items-center justify-center">
              <span className="text-clay-500 text-xs tracking-widest uppercase">
                No Image
              </span>
            </div>
          )}

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Arrow Icon */}
          <div className="absolute top-4 right-4 p-2 bg-brand text-white opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
            <ArrowUpRight size={16} />
          </div>
        </div>

        {/* Info */}
        <div className="p-5 border-t border-clay-200 group-hover:border-brand/40 transition-colors duration-300">
          <p className="section-label text-[10px] mb-1.5">{product.category}</p>
          <h3 className="font-display text-lg text-charcoal group-hover:text-brand transition-colors duration-300 leading-snug">
            {product.name}
          </h3>
          <div className="mt-3 w-0 h-0.5 bg-brand group-hover:w-8 transition-all duration-500" />
        </div>
      </Link>
    </motion.div>
  );
}
