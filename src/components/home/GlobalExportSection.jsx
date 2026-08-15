// import { useRef } from "react";
// import { motion } from "framer-motion";

// const COUNTRIES = [
//   { name: "USA", code: "us" },
//   { name: "UK", code: "gb" },
//   { name: "UAE", code: "ae" },
//   { name: "Saudi Arabia", code: "sa" },
//   { name: "Australia", code: "au" },
//   { name: "Canada", code: "ca" },
//   { name: "Qatar", code: "qa" },
//   { name: "Oman", code: "om" },
//   { name: "Singapore", code: "sg" },
//   { name: "Malaysia", code: "my" },
//   { name: "Germany", code: "de" },
// ];

// // Duplicate for seamless infinite loop
// const MARQUEE_ITEMS = [...COUNTRIES, ...COUNTRIES, ...COUNTRIES];

// const FlagImg = ({ code, name, size = "md" }) => {
//   const map = {
//     sm: { w: 36, h: 26, cdn: "w40", cdn2x: "w80" },
//     md: { w: 52, h: 37, cdn: "w80", cdn2x: "w160" },
//   };
//   const { w, h, cdn, cdn2x } = map[size];
//   return (
//     <img
//       src={`https://flagcdn.com/${cdn}/${code}.png`}
//       srcSet={`https://flagcdn.com/${cdn2x}/${code}.png 2x`}
//       alt={name}
//       width={w}
//       height={h}
//       className="rounded object-cover"
//       loading="lazy"
//       style={{ display: "block" }}
//     />
//   );
// };

// export default function GlobalExportSection() {
//   return (
//     <section
//       className="py-8 md:py-12 overflow-hidden"
//       style={{ background: "#f5f2ee" }}
//     >
//       {/* ── Inline keyframe styles ── */}
//       <style>{`
//         @keyframes marquee {
//           0%   { transform: translateX(0); }
//           100% { transform: translateX(-33.333%); }
//         }
//         .marquee-track {
//           display: flex;
//           width: max-content;
//           animation: marquee 22s linear infinite;
//           will-change: transform;
//         }
//         .marquee-track:hover {
//           animation-play-state: paused;
//         }
//         @media (prefers-reduced-motion: reduce) {
//           .marquee-track { animation: none; }
//         }
//       `}</style>

//       <div className="container-site">
//         {/* Header */}
//         <div className="max-w-3xl mx-auto text-center mb-5 md:mb-8">
//           <motion.div
//             initial={{ opacity: 0, y: 10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="flex items-center justify-center gap-3 mb-4"
//           >
//             <div className="w-5 h-px" style={{ background: "#8b1a1a" }} />
//             <p
//               className="uppercase text-[10px] md:text-[11px] font-semibold"
//               style={{ color: "#8b1a1a", letterSpacing: "0.18em" }}
//             >
//               Global Export
//             </p>
//             <div className="w-5 h-px" style={{ background: "#8b1a1a" }} />
//           </motion.div>

//           <motion.h2
//             initial={{ opacity: 0, y: 10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.08 }}
//             className="font-serif font-bold leading-tight"
//             style={{
//               color: "#1a1410",
//               fontSize: "clamp(2rem, 3vw, 3rem)",
//               letterSpacing: "-0.02em",
//             }}
//           >
//             We Export <span style={{ color: "#8b1a1a" }}>Globally</span>
//           </motion.h2>

//           <motion.p
//             initial={{ opacity: 0, y: 10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.14 }}
//             className="mt-3 text-sm md:text-base"
//             style={{ color: "#8a7060" }}
//           >
//             Proudly exporting our commercial kitchen equipment to 30+ countries
//             worldwide.
//           </motion.p>
//         </div>
//       </div>

//       {/* ── MOBILE: Infinite marquee — full bleed, no container ── */}
//       <div className="md:hidden relative">
//         {/* Left fade */}
//         <div
//           className="absolute left-0 top-0 bottom-0 w-10 z-10 pointer-events-none"
//           style={{
//             background: "linear-gradient(to right, #f5f2ee, transparent)",
//           }}
//         />
//         {/* Right fade */}
//         <div
//           className="absolute right-0 top-0 bottom-0 w-10 z-10 pointer-events-none"
//           style={{
//             background: "linear-gradient(to left, #f5f2ee, transparent)",
//           }}
//         />

//         <div className="overflow-hidden">
//           <div className="marquee-track gap-3 py-1" style={{ gap: "12px" }}>
//             {MARQUEE_ITEMS.map((country, i) => (
//               <div
//                 key={`${country.code}-${i}`}
//                 className="shrink-0 flex flex-col items-center justify-center text-center rounded-2xl"
//                 style={{
//                   width: "100px",
//                   paddingTop: "14px",
//                   paddingBottom: "14px",
//                   paddingLeft: "8px",
//                   paddingRight: "8px",
//                   background: "#ffffff",
//                   border: "1px solid rgba(60,40,20,0.08)",
//                   boxShadow: "0 1px 4px rgba(60,40,20,0.06)",
//                 }}
//               >
//                 <FlagImg code={country.code} name={country.name} size="sm" />
//                 <span
//                   className="mt-2 font-medium leading-tight"
//                   style={{
//                     color: "#3d2b1f",
//                     fontSize: "11px",
//                     maxWidth: "80px",
//                     display: "block",
//                   }}
//                 >
//                   {country.name}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* ── DESKTOP: 2-row grid ── */}
//       <div className="container-site">
//         <div className="hidden md:grid grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-5 max-w-6xl mx-auto mt-0">
//           {COUNTRIES.map((country, i) => (
//             <motion.div
//               key={country.name}
//               initial={{ opacity: 0, y: 18 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{
//                 delay: i * 0.04,
//                 duration: 0.4,
//                 ease: [0.22, 1, 0.36, 1],
//               }}
//               className="group"
//             >
//               <div
//                 className="rounded-2xl px-4 py-5 text-center h-full flex flex-col items-center transition-all duration-300"
//                 style={{
//                   background: "#ffffff",
//                   border: "1px solid rgba(60,40,20,0.08)",
//                   boxShadow: "0 1px 3px rgba(60,40,20,0.05)",
//                 }}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.transform = "translateY(-3px)";
//                   e.currentTarget.style.boxShadow =
//                     "0 10px 28px rgba(60,40,20,0.10)";
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.transform = "translateY(0)";
//                   e.currentTarget.style.boxShadow =
//                     "0 1px 3px rgba(60,40,20,0.05)";
//                 }}
//               >
//                 <FlagImg code={country.code} name={country.name} size="md" />
//                 <p
//                   className="mt-3 text-sm font-medium leading-tight"
//                   style={{ color: "#3d2b1f" }}
//                 >
//                   {country.name}
//                 </p>
//               </div>
//             </motion.div>
//           ))}

//           {/* +20 more card */}
//           <motion.div
//             initial={{ opacity: 0, y: 18 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{
//               delay: 0.18,
//               duration: 0.4,
//               ease: [0.22, 1, 0.36, 1],
//             }}
//           >
//             <div
//               className="rounded-2xl px-4 py-5 text-center h-full flex flex-col items-center justify-center"
//               style={{
//                 background: "rgba(139,26,26,0.05)",
//                 border: "1px solid rgba(139,26,26,0.14)",
//               }}
//             >
//               <div
//                 className="w-14 h-14 rounded-full flex items-center justify-center text-lg font-semibold"
//                 style={{
//                   background: "#ffffff",
//                   color: "#8b1a1a",
//                   border: "1px solid rgba(139,26,26,0.12)",
//                 }}
//               >
//                 +20
//               </div>
//               <p
//                 className="mt-3 text-sm font-medium"
//                 style={{ color: "#8b1a1a" }}
//               >
//                 More Countries
//               </p>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { motion } from "framer-motion";

const COUNTRIES = [
  { name: "USA", code: "us" },
  { name: "UK", code: "gb" },
  { name: "UAE", code: "ae" },
  { name: "Saudi Arabia", code: "sa" },
  { name: "Australia", code: "au" },
  { name: "Canada", code: "ca" },
  { name: "Qatar", code: "qa" },
  { name: "Oman", code: "om" },
  { name: "Singapore", code: "sg" },
  { name: "Malaysia", code: "my" },
  { name: "Germany", code: "de" },
];

// Duplicate for seamless infinite loop
const MARQUEE_ITEMS = [...COUNTRIES, ...COUNTRIES, ...COUNTRIES];

const FlagImg = ({ code, name, size = "md" }) => {
  // 💡 UPDATED: Increased sizes and CDN resolutions here
  const map = {
    sm: { w: 48, h: 34, cdn: "w80", cdn2x: "w160" }, // Was 36x26
    md: { w: 72, h: 51, cdn: "w160", cdn2x: "w320" }, // Was 52x37
  };
  const { w, h, cdn, cdn2x } = map[size];

  return (
    <img
      src={`https://flagcdn.com/${cdn}/${code}.png`}
      srcSet={`https://flagcdn.com/${cdn2x}/${code}.png 2x`}
      alt={name}
      width={w}
      height={h}
      className="rounded-md object-cover shrink-0 shadow-sm"
      loading="lazy"
      style={{ display: "block" }}
    />
  );
};

export default function GlobalExportSection() {
  return (
    <section
      className="py-8 md:py-12 overflow-hidden"
      style={{ background: "#f5f2ee" }}
    >
      {/* ── Inline keyframe styles ── */}
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 22s linear infinite;
          will-change: transform;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none; }
        }
      `}</style>

      <div className="container-site">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-5 md:mb-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="w-5 h-px" style={{ background: "#8b1a1a" }} />
            <p
              className="uppercase text-[10px] md:text-[11px] font-semibold"
              style={{ color: "#8b1a1a", letterSpacing: "0.18em" }}
            >
              Global Export
            </p>
            <div className="w-5 h-px" style={{ background: "#8b1a1a" }} />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="font-serif font-bold leading-tight"
            style={{
              color: "#1a1410",
              fontSize: "clamp(2rem, 3vw, 3rem)",
              letterSpacing: "-0.02em",
            }}
          >
            We Export <span style={{ color: "#8b1a1a" }}>Globally</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.14 }}
            className="mt-3 text-sm md:text-base"
            style={{ color: "#8a7060" }}
          >
            Proudly exporting our commercial kitchen equipment to 30+ countries
            worldwide.
          </motion.p>
        </div>
      </div>

      {/* ── MOBILE: Infinite marquee — full bleed, no container ── */}
      <div className="md:hidden relative">
        {/* Left fade */}
        <div
          className="absolute left-0 top-0 bottom-0 w-10 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(to right, #f5f2ee, transparent)",
          }}
        />
        {/* Right fade */}
        <div
          className="absolute right-0 top-0 bottom-0 w-10 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(to left, #f5f2ee, transparent)",
          }}
        />

        <div className="overflow-hidden">
          <div className="marquee-track gap-3 py-1" style={{ gap: "12px" }}>
            {MARQUEE_ITEMS.map((country, i) => (
              <div
                key={`${country.code}-${i}`}
                className="shrink-0 flex flex-col items-center justify-start text-center rounded-2xl"
                style={{
                  width: "110px",
                  height: "120px", // Slightly taller to accommodate bigger flag
                  paddingTop: "24px",
                  paddingLeft: "8px",
                  paddingRight: "8px",
                  background: "#ffffff",
                  border: "1px solid rgba(60,40,20,0.08)",
                  boxShadow: "0 1px 4px rgba(60,40,20,0.06)",
                }}
              >
                <FlagImg code={country.code} name={country.name} size="sm" />
                <span
                  className="mt-3 font-medium leading-tight line-clamp-2"
                  style={{
                    color: "#3d2b1f",
                    fontSize: "11px",
                    width: "100%",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {country.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── DESKTOP: 2-row grid ── */}
      <div className="container-site">
        <div className="hidden md:grid grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-5 max-w-6xl mx-auto mt-0">
          {COUNTRIES.map((country, i) => (
            <motion.div
              key={country.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.04,
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group"
            >
              <div
                className="rounded-2xl px-4 pt-7 pb-4 text-center flex flex-col items-center justify-start transition-all duration-300 w-full"
                style={{
                  height: "165px", // Slightly taller to accommodate bigger flag
                  background: "#ffffff",
                  border: "1px solid rgba(60,40,20,0.08)",
                  boxShadow: "0 1px 3px rgba(60,40,20,0.05)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 28px rgba(60,40,20,0.10)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 1px 3px rgba(60,40,20,0.05)";
                }}
              >
                <FlagImg code={country.code} name={country.name} size="md" />
                <p
                  className="mt-4 text-sm font-medium leading-tight line-clamp-2"
                  style={{
                    color: "#3d2b1f",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {country.name}
                </p>
              </div>
            </motion.div>
          ))}

          {/* +20 more card */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.18,
              duration: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div
              className="rounded-2xl px-4 text-center flex flex-col items-center justify-center w-full"
              style={{
                height: "165px", // Matching new height
                background: "rgba(139,26,26,0.05)",
                border: "1px solid rgba(139,26,26,0.14)",
              }}
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center text-lg font-semibold shrink-0"
                style={{
                  background: "#ffffff",
                  color: "#8b1a1a",
                  border: "1px solid rgba(139,26,26,0.12)",
                }}
              >
                +20
              </div>
              <p
                className="mt-3 text-sm font-medium"
                style={{ color: "#8b1a1a" }}
              >
                More Countries
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
