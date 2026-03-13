// src/components/home/BrandsSection.jsx

const brands = [
  { name: "ITC Hotels", category: "Hospitality" },
  { name: "Taj Hotels", category: "Hospitality" },
  { name: "Oberoi Group", category: "Hospitality" },
  { name: "Marriott", category: "Hotel Chain" },
  { name: "Hyatt", category: "Hotel Chain" },
  { name: "Barbeque Nation", category: "Restaurant Chain" },
  { name: "Haldiram's", category: "Food Brand" },
  { name: "Punjabi Grill", category: "Restaurant" },
  { name: "Bukhara", category: "Fine Dining" },
  { name: "Moti Mahal", category: "Restaurant" },
  { name: "Zomato Kitchens", category: "Cloud Kitchen" },
  { name: "Swiggy Eats", category: "Cloud Kitchen" },
];

// Duplicate for seamless loop
const marqueeItems = [...brands, ...brands];

export default function BrandsSection() {
  return (
    <section className="bg-clay-50 py-24 overflow-hidden">
      <div className="container-site mb-14">
        <div className="reveal-item flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <p className="section-label mb-3">Trusted Partners</p>
            <h2 className="section-heading max-w-xl">
              Brands We've <br />
              <span className="text-brand">Worked With</span>
            </h2>
          </div>
          <p className="text-charcoal/50 text-sm max-w-xs leading-relaxed md:text-right">
            From heritage hotel chains to modern cloud kitchens — our tandoors
            power kitchens that demand nothing but the best.
          </p>
        </div>
        <div className="divider-brand mt-6" />
      </div>

      {/* Marquee Row 1 — Left to Right */}
      <div className="relative mb-4">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-clay-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-clay-50 to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee-left gap-4 w-max">
          {marqueeItems.map((brand, i) => (
            <BrandCard key={i} brand={brand} />
          ))}
        </div>
      </div>

      {/* Marquee Row 2 — Right to Left */}
      <div className="relative">
        <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-clay-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-clay-50 to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee-right gap-4 w-max">
          {[...marqueeItems].reverse().map((brand, i) => (
            <BrandCard key={i} brand={brand} />
          ))}
        </div>
      </div>

      {/* Bottom note */}
      <div className="container-site mt-14">
        <p className="reveal-item text-center text-xs uppercase tracking-ultra text-charcoal/30">
          Trusted by 200+ establishments across India & abroad
        </p>
      </div>
    </section>
  );
}

function BrandCard({ brand }) {
  return (
    <div className="flex-shrink-0 group border border-charcoal/8 bg-white hover:border-brand/40 hover:shadow-lg hover:shadow-brand/5 transition-all duration-300 px-10 py-6 flex flex-col items-center justify-center gap-1 min-w-[180px]">
      <span className="font-display text-base font-semibold text-charcoal/70 group-hover:text-charcoal transition-colors duration-300 whitespace-nowrap">
        {brand.name}
      </span>
      <span className="text-[10px] uppercase tracking-ultra text-brand/50 group-hover:text-brand/80 transition-colors duration-300">
        {brand.category}
      </span>
    </div>
  );
}
