// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { sanityClient, QUERIES } from "../lib/sanity";
// import ProductCard from "../components/ui/ProductCard";
// import FadeIn from "../components/ui/FadeIn";
// import RevealText from "../components/ui/RevealText";

// const CATEGORY_LABELS = {
//   "home-tandoors": "Home Tandoors",
//   "restaurant-tandoors": "Restaurant Tandoors",
//   "premium-tandoors": "Premium Tandoors",
//   accessories: "Accessories",
//   "wood-fire-brick-ovens": "Wood Fire Brick Ovens",
//   "utensils-clay": "Clay Utensils",
//   "utensils-copper": "Copper Utensils",
// };

// export default function ProductsPage() {
//   const { category } = useParams();
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     setLoading(true);
//     sanityClient
//       .fetch(QUERIES.productsByCategory(category))
//       .then(setProducts)
//       .catch(console.error)
//       .finally(() => setLoading(false));
//   }, [category]);

//   const label = CATEGORY_LABELS[category] || category;

//   return (
//     <main className="pt-24 pb-24 min-h-screen bg-clay-50">
//       {/* Page Header */}
//       <div className="bg-charcoal py-20 md:py-28 mb-16">
//         <div className="container-site">
//           <FadeIn>
//             <p className="section-label text-white/40 mb-3">Products</p>
//           </FadeIn>
//           <RevealText>
//             <h1 className="section-heading text-white">{label}</h1>
//           </RevealText>
//         </div>
//       </div>

//       <div className="container-site">
//         {loading ? (
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
//             {Array.from({ length: 8 }).map((_, i) => (
//               <div key={i} className="aspect-[3/4] bg-clay-200 animate-pulse" />
//             ))}
//           </div>
//         ) : products.length === 0 ? (
//           <div className="text-center py-24 text-charcoal-soft">
//             <p className="font-display text-2xl">
//               No products found in this category yet.
//             </p>
//           </div>
//         ) : (
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
//             {products.map((p, i) => (
//               <ProductCard key={p._id} product={p} index={i} />
//             ))}
//           </div>
//         )}
//       </div>
//     </main>
//   );
// }

// import { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import client, { urlFor } from "../lib/sanity";
// import ProductCard from "../components/ui/ProductCard";
// import FadeIn from "../components/ui/FadeIn";
// import RevealText from "../components/ui/RevealText";
// import { ChevronRight } from "lucide-react";

// const CATEGORY_LABELS = {
//   "home-tandoors": "Home Tandoors",
//   "restaurant-tandoors": "Restaurant Tandoors",
//   "premium-tandoors": "Premium Tandoors",
//   accessories: "Accessories",
//   "wood-fire-brick-ovens": "Wood Fire Brick Ovens",
//   "utensils-clay": "Clay Utensils",
//   "utensils-copper": "Copper Utensils",
// };

// export default function ProductsPage() {
//   const { category: categorySlugFromRoute } = useParams();
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Fetch ALL products once (same idea as your AllProductsPage)
//   useEffect(() => {
//     setLoading(true);

//     client
//       .fetch(
//         `*[_type == "product"]{
//           _id,
//           name,
//           fuelType,
//           isAceExporter,
//           "slug": slug.current,
//           "image": images[0],
//           "category": category->title,
//           "categorySlug": category->slug.current
//         }`,
//       )
//       .then((data) => {
//         // Filter by route category slug
//         const filtered =
//           categorySlugFromRoute && categorySlugFromRoute !== "all"
//             ? data.filter((p) => p.categorySlug === categorySlugFromRoute)
//             : data;

//         setProducts(
//           filtered.map((p) => ({
//             ...p,
//             // ensure image is a URL string for ProductCard
//             image: p.image ? urlFor(p.image).width(600).url() : null,
//           })),
//         );
//       })
//       .catch((err) => {
//         console.error("Error fetching products:", err);
//       })
//       .finally(() => setLoading(false));
//   }, [categorySlugFromRoute]);

//   const label =
//     CATEGORY_LABELS[categorySlugFromRoute] ||
//     (categorySlugFromRoute
//       ? categorySlugFromRoute.replace(/-/g, " ")
//       : "All Products");

//   return (
//     <main className="pt-24 pb-24 min-h-screen bg-clay-50">
//       {/* Header */}
//       <div className="bg-charcoal py-20 md:py-28 mb-16">
//         <div className="container-site">
//           {/* Breadcrumb */}
//           <div className="flex items-center gap-2 text-xs text-white/50 mb-4">
//             <Link to="/" className="hover:text-white transition-colors">
//               Home
//             </Link>
//             <ChevronRight size={12} />
//             <span className="hover:text-white transition-colors">Products</span>
//             {categorySlugFromRoute && (
//               <>
//                 <ChevronRight size={12} />
//                 <span className="capitalize text-white">{label}</span>
//               </>
//             )}
//           </div>

//           <FadeIn>
//             <p className="section-label text-white/40 mb-3">Products</p>
//           </FadeIn>
//           <RevealText>
//             <h1 className="section-heading text-white">{label}</h1>
//           </RevealText>
//         </div>
//       </div>

//       {/* Content */}
//       <div className="container-site">
//         {loading ? (
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
//             {Array.from({ length: 8 }).map((_, i) => (
//               <div key={i} className="flex flex-col gap-3">
//                 <div
//                   className="aspect-[3/4] bg-clay-200 animate-pulse"
//                   style={{ animationDelay: `${i * 80}ms` }}
//                 />
//                 <div className="h-3 bg-clay-200 animate-pulse w-1/2 rounded" />
//                 <div className="h-4 bg-clay-200 animate-pulse w-3/4 rounded" />
//               </div>
//             ))}
//           </div>
//         ) : products.length === 0 ? (
//           <div className="text-center py-24 text-charcoal-soft">
//             <p className="font-display text-2xl mb-2">
//               No products found in this category.
//             </p>
//             <p className="text-sm text-charcoal-soft mb-6">
//               Try another category or browse the full catalogue.
//             </p>
//             <Link
//               to="/products/home-tandoors"
//               className="btn-primary inline-flex"
//             >
//               Browse All Products
//             </Link>
//           </div>
//         ) : (
//           <>
//             {/* Count */}
//             <div className="flex items-center justify-between gap-4 mb-6">
//               <p className="text-sm text-charcoal-soft">
//                 Showing{" "}
//                 <span className="text-charcoal font-medium">
//                   {products.length}
//                 </span>{" "}
//                 product{products.length !== 1 ? "s" : ""} in{" "}
//                 <span className="text-charcoal font-medium">{label}</span>
//               </p>
//             </div>

//             {/* Grid */}
//             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
//               {products.map((p, i) => (
//                 <ProductCard key={p._id} product={p} index={i} />
//               ))}
//             </div>
//           </>
//         )}
//       </div>
//     </main>
//   );
// }

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
  "utensils-clay": "Clay Utensils",
  "utensils-copper": "Copper Utensils",
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
