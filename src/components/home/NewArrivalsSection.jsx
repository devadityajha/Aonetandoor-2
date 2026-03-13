import { useState, useEffect } from "react";
import { sanityClient, QUERIES, urlFor } from "../../lib/sanity";
import ProductCard from "../ui/ProductCard";
import FadeIn from "../ui/FadeIn";
import RevealText from "../ui/RevealText";

export default function NewArrivalsSection() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    sanityClient
      .fetch(QUERIES.newArrivals)
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
  }, []);

  if (!loading && products.length === 0) return null;

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container-site">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <FadeIn>
              <p className="section-label mb-3">Just Launched</p>
            </FadeIn>
            <RevealText>
              <h2 className="section-heading">
                New <em className="text-brand not-italic">Arrivals</em>
              </h2>
            </RevealText>
          </div>
        </div>

        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="aspect-[3/4] bg-clay-200 animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {products.map((p, i) => (
              <ProductCard key={p._id} product={p} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
