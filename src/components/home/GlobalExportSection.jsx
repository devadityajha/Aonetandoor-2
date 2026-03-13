// src/components/home/GlobalExportSection.jsx
import { useEffect, useRef } from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";

const countries = [
  { name: "United Kingdom", flag: "🇬🇧", since: "Est. 2008" },
  { name: "United States", flag: "🇺🇸", since: "Est. 2010" },
  { name: "Canada", flag: "🇨🇦", since: "Est. 2011" },
  { name: "Australia", flag: "🇦🇺", since: "Est. 2013" },
  { name: "UAE", flag: "🇦🇪", since: "Est. 2009" },
  { name: "Germany", flag: "🇩🇪", since: "Est. 2015" },
  { name: "New Zealand", flag: "🇳🇿", since: "Est. 2016" },
  { name: "South Africa", flag: "🇿🇦", since: "Est. 2018" },
];

const stats = [
  { value: "20+", label: "Years Exporting" },
  { value: "30+", label: "Countries Reached" },
  { value: "10K+", label: "Units Shipped" },
];

export default function GlobalExportSection() {
  const sectionRef = useRef(null);
  useScrollReveal(sectionRef);

  return (
    <section
      ref={sectionRef}
      className="bg-charcoal text-white py-28 overflow-hidden"
    >
      <div className="container-site">
        {/* Header */}
        <div className="reveal-item mb-20">
          <p className="section-label text-brand/60 mb-4">Global Presence</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight text-white max-w-2xl">
              Crafted in India,
              <br />
              <span className="text-brand">Trusted Worldwide.</span>
            </h2>
            <p className="text-clay-300 text-base max-w-sm leading-relaxed md:text-right">
              From the heart of Delhi, our tandoors reach professional kitchens
              and culinary artisans across every continent.
            </p>
          </div>
          <div className="divider-brand mt-8" />
        </div>

        {/* Stats Row */}
        <div className="reveal-item grid grid-cols-3 gap-0 border border-white/10 mb-20">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`py-10 px-8 text-center ${
                i < stats.length - 1 ? "border-r border-white/10" : ""
              }`}
            >
              <p className="font-display text-4xl md:text-5xl font-semibold text-brand mb-2">
                {stat.value}
              </p>
              <p className="text-xs uppercase tracking-ultra text-white/40">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Countries Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px bg-white/10">
          {countries.map((country, i) => (
            <div
              key={i}
              className="reveal-item bg-charcoal group px-8 py-7 flex items-center justify-between hover:bg-white/5 transition-colors duration-300 cursor-default"
            >
              <div className="flex items-center gap-4">
                <span className="text-2xl">{country.flag}</span>
                <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors duration-300">
                  {country.name}
                </span>
              </div>
              <span className="text-[10px] uppercase tracking-ultra text-white/25 group-hover:text-brand/60 transition-colors duration-300 hidden sm:block">
                {country.since}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="reveal-item mt-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-t border-white/10 pt-12">
          <p className="text-white/50 text-sm max-w-md leading-relaxed">
            Looking to partner with us for distribution in your region? We work
            with importers, restaurant chains, and hospitality groups globally.
          </p>
          <a href="/contact" className="btn-primary shrink-0">
            Enquire for Export
          </a>
        </div>
      </div>
    </section>
  );
}
