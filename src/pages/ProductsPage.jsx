import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { sanityClient, urlFor } from "../lib/sanity";
import ProductCard from "../components/ui/ProductCard";
import FadeIn from "../components/ui/FadeIn";
import RevealText from "../components/ui/RevealText";
import { ChevronRight } from "lucide-react";

const CATEGORY_LABELS = {
  "home-tandoors": "Home Tandoors",
  "restaurant-tandoors": "Restaurant Tandoors",
  "premium-tandoors": "Premium Tandoors",
  accessories: "Accessories",
  "wood-fire-brick-ovens": "Wood Fire Brick Ovens",
  "clay-tandoors": "Clay Utensils",
  "copper-tandoors": "Copper Utensils",
  utensils: "All Utensils",
};

export default function ProductsPage() {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

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
      .then((data) => {
        setProducts(
          data.map((p) => ({
            ...p,
            image: p.image ? urlFor(p.image).width(600).url() : null,
          })),
        );
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [category]);

  const label = CATEGORY_LABELS[category] || category?.replace(/-/g, " ");

  return (
    <main className="pt-24 pb-24 min-h-screen bg-clay-50">
      {/* Header */}
      <div className="bg-charcoal py-20 md:py-28 mb-16">
        <div className="container-site">
          <div className="flex items-center gap-2 text-xs text-white/40 mb-4">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight size={11} />
            <span className="text-white capitalize">{label}</span>
          </div>
          <FadeIn>
            <p className="section-label text-white/40 mb-3">Products</p>
          </FadeIn>
          <RevealText>
            <h1 className="section-heading text-white capitalize">{label}</h1>
          </RevealText>
        </div>
      </div>

      {/* Products */}
      <div className="container-site">
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
          <div className="text-center py-24">
            <p className="font-display text-2xl text-charcoal-soft mb-2">
              No products found.
            </p>
            <p className="text-sm text-charcoal-soft mb-8">
              This category has no products yet.
            </p>
            <Link to="/" className="btn-primary inline-flex">
              Back to Home
            </Link>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between mb-8">
              <p className="text-sm text-charcoal-soft">
                <span className="text-charcoal font-medium">
                  {products.length}
                </span>{" "}
                product{products.length !== 1 ? "s" : ""} found
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {products.map((p, i) => (
                <ProductCard key={p._id} product={p} index={i} />
              ))}
            </div>
          </>
        )}
      </div>
    </main>
  );
}
