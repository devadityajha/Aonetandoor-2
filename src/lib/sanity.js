import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const sanityClient = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || "ng30wus8",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source) {
  return builder.image(source).format("webp").quality(80);
}

export const QUERIES = {
  // All categories
  categories: `*[_type == "category"] | order(title asc) {
    _id,
    title,
    "slug": slug.current,
    "image": image.asset->url
  }`,

  // Products by category slug
  productsByCategory: (slug) =>
    `*[_type == "product" && category->slug.current == "${slug}"] | order(_createdAt desc) {
      _id,
      name,
      "slug": slug.current,
      "category": category->title,
      "categorySlug": category->slug.current,
      "image": images[0]
    }`,

  // Most popular — isPopular == true
  popularProducts: `*[_type == "product" && isPopular == true] | order(_createdAt desc)[0...8] {
    _id,
    name,
    "slug": slug.current,
    "category": category->title,
    "categorySlug": category->slug.current,
    "image": images[0]
  }`,

  // New arrivals — isNew == true
  newArrivals: `*[_type == "product" && isNew == true] | order(_createdAt desc)[0...8] {
    _id,
    name,
    "slug": slug.current,
    "category": category->title,
    "categorySlug": category->slug.current,
    "image": images[0]
  }`,

  // All products (fallback — no filter)
  allProducts: `*[_type == "product"] | order(_createdAt desc) {
    _id,
    name,
    "slug": slug.current,
    "category": category->title,
    "categorySlug": category->slug.current,
    "image": images[0]
  }`,
  // Related products — same category, exclude current
  relatedProducts: (categorySlug, currentSlug) =>
    `*[_type == "product" && category->slug.current == "${categorySlug}" && slug.current != "${currentSlug}"] | order(_createdAt desc)[0...4] {
    _id,
    name,
    "slug": slug.current,
    "category": category->title,
    "categorySlug": category->slug.current,
    "image": images[0]
  }`,

  // Single product detail
  productDetail: (slug) =>
    `*[_type == "product" && slug.current == "${slug}"][0] {
      _id,
      name,
      "slug": slug.current,
      description,
      "category": category->title,
      "categorySlug": category->slug.current,
      "mainImage": images[0],
      "sizeImage": sizeImage.asset->url,
      fuelTags,
      coreMaterial,
      outerCasing,
      insulation,
      dimension,
      usage,
      portability,
      fuelOptionsText,
      usageEnvironment,
      customisation,
      topSurface,
      accessories,
      weight,
      importable,
      safetyNorms,
      sizeTable[] {
        modelNo,
        length,
        height,
        width,
        weight,
        mouthDiameter
      }
    }`,

  // All certifications
  certifications: `*[_type == "certification"] | order(_createdAt asc) {
    _id,
    name,
    issuingBody,
    year,
    "image": image.asset->url,
    description
  }`,
};

export default sanityClient;
