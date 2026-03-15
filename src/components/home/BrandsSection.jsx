import React from "react";
import { motion } from "framer-motion";

const BRANDS = [
  { name: "Haldiram", logo: "/Haldiram's_Logo_SVG.svg" },
  { name: "Hira Sweets", logo: "/Hira.png" },
  { name: "Bikano", logo: "/Bikano.png" },
  { name: "Daryaganj", logo: "/daryaganj.png" },
  { name: "Hyatt Regency", logo: "/hyatt.jpg" },
  { name: "Sighri", logo: "/sighri.jpeg" },
  { name: "Radisson Blu", logo: "/raddision.png" },
  { name: "The Lalit", logo: "/lalit.png" },
];

const BrandLogo = ({ brand, index }) => {
  return (
    <motion.div
      animate={{ y: [0, -6, 0] }}
      transition={{
        duration: 5,
        repeat: Infinity,
        delay: index * 0.4,
        ease: "easeInOut",
      }}
      className="flex flex-col items-center justify-center px-10 md:px-16 group cursor-pointer"
    >
      <div className="relative h-16 md:h-20 w-32 md:w-44 flex items-center justify-center">
        {/* LOGO IMAGE - Removed the dark background plates since we are on a light theme now */}
        <img
          src={brand.logo}
          alt={`${brand.name} logo`}
          className="
            relative z-10
            h-full w-full object-contain 
            opacity-90 
            group-hover:opacity-100 
            group-hover:scale-110
            transition-all duration-500 ease-in-out
          "
        />
      </div>

      {/* TEXT: Changed opacity and color to be visible on light background */}
      <span className="mt-4 text-[10px] uppercase tracking-ultra text-charcoal opacity-40 group-hover:opacity-100 transition-opacity duration-500 font-bold whitespace-nowrap">
        {brand.name}
      </span>
    </motion.div>
  );
};

const BrandsSection = () => {
  const brandsList = [...BRANDS, ...BRANDS];

  return (
    <section className="py-24 bg-[#FAF9F6] overflow-hidden relative border-y border-clay-100">
      <div className="container-site mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-3 mb-4"
        >
          <div className="w-4 h-px bg-brand" />
          <p className="text-brand uppercase tracking-ultra text-[10px] font-bold">
            Established Partnerships
          </p>
          <div className="w-4 h-px bg-brand" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          /* FIX: Changed text-white to text-charcoal so it is visible */
          className="text-charcoal text-3xl md:text-5xl font-display tracking-tight"
        >
          Powering the world’s <br />
          <span className="text-brand italic font-serif text-4xl md:text-6xl">
            finest
          </span>{" "}
          kitchens.
        </motion.h2>
      </div>

      {/* Marquee Container */}
      <div className="relative flex overflow-hidden group">
        {/* DARK EDGES REMOVED: Deleted the gradient divs that were here */}

        <div className="flex w-max flex-nowrap animate-marquee-infinite group-hover:[animation-play-state:paused] py-4">
          {brandsList.map((brand, idx) => (
            <BrandLogo key={idx} brand={brand} index={idx} />
          ))}
        </div>
      </div>

      {/* Aesthetic Vertical Accent */}
      <div className="mt-20 flex justify-center opacity-20">
        <div className="w-px h-16 bg-gradient-to-b from-brand to-transparent" />
      </div>
    </section>
  );
};

export default BrandsSection;
