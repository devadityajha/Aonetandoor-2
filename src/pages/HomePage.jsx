import HeroSection from "../components/home/HeroSection";
import BrandIntroSection from "../components/home/BrandIntroSection";
import CategoriesSection from "../components/home/CategoriesSection";
import WhyChooseSection from "../components/home/WhyChooseSection";
import PopularProductsSection from "../components/home/PopularProductsSection";
import CulinaryInspirationSection from "../components/home/CulinaryInspirationSection";
import NewArrivalsSection from "../components/home/NewArrivalsSection";
import ProductShowcaseSlider from "../components/home/ProductShowcaseSlider";
import ContactCTASection from "../components/home/ContactCTASection";
import FeaturedProductsSection from "../components/home/FeaturedProductsSection";
import GlobalExportSection from "../components/home/GlobalExportSection";
import BrandsSection from "../components/home/BrandsSection";

// export default function HomePage() {
//   return (
//     <main>
//       <HeroSection />
//       <BrandIntroSection />
//       <CategoriesSection />
//       <WhyChooseSection />
//       <FeaturedProductsSection />
//       {/* <PopularProductsSection /> */}
//       <CulinaryInspirationSection />
//       {/* <NewArrivalsSection /> */}
//       <ProductShowcaseSlider />
//       <ContactCTASection />
//     </main>
//   );
// }
export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <BrandIntroSection />
      <CategoriesSection />
      <FeaturedProductsSection />
      <GlobalExportSection />
      {/* <BrandsSection /> */}
      <WhyChooseSection />
      {/* <PopularProductsSection /> */}
      <CulinaryInspirationSection />
      {/* <NewArrivalsSection /> */}
      <ProductShowcaseSlider />
      {/* <ContactCTASection /> */}
    </main>
  );
}
