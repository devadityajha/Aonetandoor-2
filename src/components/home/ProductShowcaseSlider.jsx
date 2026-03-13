// import { useEffect, useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, EffectFade, Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/effect-fade";
// import "swiper/css/navigation";
// import FadeIn from "../ui/FadeIn";
// import RevealText from "../ui/RevealText";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const SLIDES = [
//   {
//     label: "Home Tandoors",
//     title: "Designed for the Discerning Home Chef",
//     sub: "Compact. Safe. Elegant.",
//   },
//   {
//     label: "Restaurant Tandoors",
//     title: "The Workhorse of Professional Kitchens",
//     sub: "Built for volume, built to last.",
//   },
//   {
//     label: "Premium Tandoors",
//     title: "Our Flagship Masterpiece",
//     sub: "NSF Certified. Globally Trusted.",
//   },
//   {
//     label: "Wood Fire Brick Ovens",
//     title: "Authentic Wood-Fired Perfection",
//     sub: "From Italy to your kitchen.",
//   },
// ];

// export default function ProductShowcaseSlider() {
//   return (
//     <section className="py-24 md:py-32 bg-clay-100 overflow-hidden">
//       <div className="container-site mb-12">
//         <FadeIn>
//           <p className="section-label mb-3">Featured Range</p>
//         </FadeIn>
//         <RevealText>
//           <h2 className="section-heading">
//             Product <em className="text-brand not-italic">Showcase</em>
//           </h2>
//         </RevealText>
//       </div>

//       <div className="relative">
//         <Swiper
//           modules={[Autoplay, Navigation]}
//           spaceBetween={24}
//           slidesPerView={1.2}
//           centeredSlides
//           loop
//           autoplay={{ delay: 4000, disableOnInteraction: false }}
//           navigation={{ prevEl: ".swiper-prev", nextEl: ".swiper-next" }}
//           breakpoints={{
//             640: { slidesPerView: 1.5 },
//             1024: { slidesPerView: 2.2 },
//             1280: { slidesPerView: 2.8 },
//           }}
//         >
//           {SLIDES.map((slide, i) => (
//             <SwiperSlide key={i}>
//               <div className="group relative overflow-hidden aspect-[4/5] md:aspect-[3/4] bg-charcoal cursor-pointer">
//                 <div
//                   className={`w-full h-full bg-gradient-to-br ${
//                     i % 2 === 0
//                       ? "from-charcoal to-brand-dark"
//                       : "from-brand-dark to-charcoal-light"
//                   } transition-transform duration-700 group-hover:scale-105`}
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
//                 <div className="absolute bottom-0 left-0 right-0 p-8">
//                   <p className="section-label text-white/50 mb-2">
//                     {slide.label}
//                   </p>
//                   <h3 className="font-display text-xl text-white leading-snug">
//                     {slide.title}
//                   </h3>
//                   <p className="text-sm text-white/50 mt-2">{slide.sub}</p>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* Navigation */}
//         <div className="container-site flex justify-end gap-3 mt-8">
//           <button className="swiper-prev p-3 border border-clay-300 text-charcoal hover:border-brand hover:text-brand transition-colors">
//             <ChevronLeft size={20} />
//           </button>
//           <button className="swiper-next p-3 border border-clay-300 text-charcoal hover:border-brand hover:text-brand transition-colors">
//             <ChevronRight size={20} />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }
///////////////////////////////
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import "swiper/css";
import FadeIn from "../ui/FadeIn";
import RevealText from "../ui/RevealText";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

const SLIDES = [
  {
    label: "Home Tandoors",
    slug: "home-tandoors",
    title: "Designed for the Discerning Home Chef",
    sub: "Compact. Safe. Elegant.",
    stat: ["480°C", "Peak Heat"],
    accent: "from-[#3E261D] via-[#5E3A2C] to-[#944E4E]",
    number: "01",
  },
  {
    label: "Restaurant Tandoors",
    slug: "restaurant-tandoors",
    title: "The Workhorse of Professional Kitchens",
    sub: "Built for volume, built to last.",
    stat: ["50kg+", "Capacity"],
    accent: "from-[#1A1614] via-[#2C2420] to-[#6B3232]",
    number: "02",
  },
  {
    label: "Premium Tandoors",
    slug: "premium-tandoors",
    title: "Our Flagship Masterpiece",
    sub: "NSF Certified. Globally Trusted.",
    stat: ["NSF", "Certified"],
    accent: "from-[#6B3232] via-[#944E4E] to-[#B06060]",
    number: "03",
  },
  {
    label: "Wood Fire Brick Ovens",
    slug: "wood-fire-brick-ovens",
    title: "Authentic Wood-Fired Perfection",
    sub: "Traditional masonry. Modern precision.",
    stat: ["450°C", "Wood Fire"],
    accent: "from-[#201410] via-[#3E261D] to-[#7D5040]",
    number: "04",
  },
  {
    label: "Accessories",
    slug: "accessories",
    title: "Everything Your Tandoor Needs",
    sub: "Skewers, covers, handles & more.",
    stat: ["30+", "Items"],
    accent: "from-[#2C2420] via-[#3D3330] to-[#944E4E]",
    number: "05",
  },
];

export default function ProductShowcaseSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const swiperRef = useRef(null);

  const handlePrev = () => swiperRef.current?.slidePrev();
  const handleNext = () => swiperRef.current?.slideNext();

  return (
    <section className="py-24 md:py-32 bg-charcoal overflow-hidden">
      <div className="container-site">
        {/* ── HEADER ROW ─────────────────────────────── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <FadeIn>
              <p className="section-label text-white/40 mb-3">Featured Range</p>
            </FadeIn>
            <RevealText>
              <h2 className="section-heading text-white">
                Product <em className="text-brand not-italic">Showcase</em>
              </h2>
            </RevealText>
          </div>

          {/* Slide counter */}
          <FadeIn direction="left">
            <div className="flex items-center gap-4">
              <span className="font-display text-4xl font-bold text-brand leading-none">
                {String(activeIndex + 1).padStart(2, "0")}
              </span>
              <div className="flex flex-col gap-1.5">
                {/* Progress bar */}
                <div className="w-24 h-px bg-white/10 relative overflow-hidden">
                  <motion.div
                    className="absolute left-0 top-0 h-full bg-brand"
                    style={{ width: `${progress}%` }}
                    transition={{ duration: 0.1 }}
                  />
                </div>
                <span
                  className="text-white/30 text-right"
                  style={{ fontSize: "10px", letterSpacing: "0.2em" }}
                >
                  / {String(SLIDES.length).padStart(2, "0")}
                </span>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* ── SWIPER ─────────────────────────────────── */}
      <div className="relative pl-5 md:pl-10 lg:pl-16 xl:pl-[calc((100vw-80rem)/2+4rem)]">
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={16}
          slidesPerView={1.15}
          loop={false}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          onAutoplayTimeLeft={(_, __, ratio) => setProgress((1 - ratio) * 100)}
          breakpoints={{
            640: { slidesPerView: 1.4, spaceBetween: 20 },
            1024: { slidesPerView: 2.1, spaceBetween: 24 },
            1280: { slidesPerView: 2.6, spaceBetween: 24 },
          }}
        >
          {SLIDES.map((slide, i) => (
            <SwiperSlide key={i}>
              <SlideCard slide={slide} isActive={i === activeIndex} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ── BOTTOM ROW: Nav + Active Label ─────────── */}
      <div className="container-site mt-8 flex items-center justify-between">
        {/* Active slide info */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
            className="flex items-center gap-4"
          >
            <div className="w-1 h-8 bg-brand" />
            <div>
              <p
                className="text-white/30 text-[9px] uppercase"
                style={{ letterSpacing: "0.3em" }}
              >
                Currently Viewing
              </p>
              <p className="text-white text-sm font-medium mt-0.5">
                {SLIDES[activeIndex]?.label}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            disabled={activeIndex === 0}
            className="p-3.5 border border-white/10 text-white/50 hover:border-brand hover:text-brand disabled:opacity-20 disabled:cursor-not-allowed transition-all duration-300"
            aria-label="Previous"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={handleNext}
            disabled={activeIndex === SLIDES.length - 1}
            className="p-3.5 border border-white/10 text-white/50 hover:border-brand hover:text-brand disabled:opacity-20 disabled:cursor-not-allowed transition-all duration-300"
            aria-label="Next"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}

// ── INDIVIDUAL SLIDE CARD ────────────────────────────
function SlideCard({ slide, isActive }) {
  return (
    <Link to={`/products/${slide.slug}`}>
      <motion.div
        animate={{
          scale: isActive ? 1 : 0.96,
          opacity: isActive ? 1 : 0.6,
        }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="group relative overflow-hidden cursor-pointer"
        style={{ aspectRatio: "3/4" }}
      >
        {/* Gradient background */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${slide.accent} transition-transform duration-700 group-hover:scale-105`}
        />

        {/* Texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundSize: "200px",
          }}
        />

        {/* Bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/95 via-charcoal/20 to-transparent" />

        {/* Large background number */}
        <div
          className="absolute top-6 right-6 font-display font-bold text-white/5 select-none leading-none"
          style={{ fontSize: "clamp(5rem, 12vw, 8rem)" }}
        >
          {slide.number}
        </div>

        {/* Top: stat badge */}
        <div className="absolute top-5 left-5">
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : -8 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="flex flex-col items-start"
          >
            <span className="font-display text-2xl font-bold text-white leading-none">
              {slide.stat[0]}
            </span>
            <span
              className="text-white/40 mt-0.5"
              style={{ fontSize: "9px", letterSpacing: "0.25em" }}
            >
              {slide.stat[1].toUpperCase()}
            </span>
          </motion.div>
        </div>

        {/* Bottom content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          {/* Category label */}
          <div className="flex items-center gap-2 mb-3">
            <div className="w-4 h-px bg-brand" />
            <span
              className="text-brand/80 font-medium"
              style={{ fontSize: "10px", letterSpacing: "0.25em" }}
            >
              {slide.label.toUpperCase()}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-display text-xl md:text-2xl text-white leading-snug font-semibold">
            {slide.title}
          </h3>

          {/* Sub */}
          <p
            className="text-white/40 mt-2 leading-relaxed"
            style={{ fontSize: "12px", letterSpacing: "0.05em" }}
          >
            {slide.sub}
          </p>

          {/* CTA row — appears on hover */}
          <div className="mt-5 flex items-center gap-3 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-400">
            <span
              className="text-white text-xs font-medium uppercase"
              style={{ letterSpacing: "0.15em" }}
            >
              Explore
            </span>
            <div className="flex items-center justify-center w-7 h-7 bg-brand text-white">
              <ArrowUpRight size={14} />
            </div>
          </div>
        </div>

        {/* Active indicator — left border */}
        <motion.div
          className="absolute left-0 top-0 bottom-0 w-[3px] bg-brand"
          animate={{ scaleY: isActive ? 1 : 0 }}
          style={{ originY: 0 }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>
    </Link>
  );
}
