// import { motion } from "framer-motion";
// import FadeIn from "../ui/FadeIn";
// import RevealText from "../ui/RevealText";

// const FEATURES = [
//   {
//     icon: (
//       <svg
//         width="28"
//         height="28"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="1.5"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       >
//         <circle cx="12" cy="12" r="3" />
//         <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" />
//         <path d="M15.54 8.46a5 5 0 0 1 0 7.07M8.46 8.46a5 5 0 0 0 0 7.07" />
//       </svg>
//     ),
//     num: "20+",
//     title: "Years Manufacturing Experience",
//     desc: "Two decades of expertise in manufacturing premium tandoors and commercial kitchen equipment.",
//   },
//   {
//     icon: (
//       <svg
//         width="28"
//         height="28"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="1.5"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       >
//         <circle cx="12" cy="8" r="6" />
//         <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
//       </svg>
//     ),
//     num: null,
//     title: "Export Quality Standards",
//     desc: "Our products are built to meet international quality and safety standards across 30+ countries.",
//   },
//   {
//     icon: (
//       <svg
//         width="28"
//         height="28"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="1.5"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       >
//         <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
//       </svg>
//     ),
//     num: null,
//     title: "Custom Equipment Solutions",
//     desc: "We provide tailor-made equipment to match your specific kitchen requirements and space.",
//   },
//   {
//     icon: (
//       <svg
//         width="28"
//         height="28"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="1.5"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       >
//         <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
//         <circle cx="9" cy="7" r="4" />
//         <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
//         <path d="M16 3.13a4 4 0 0 1 0 7.75" />
//       </svg>
//     ),
//     num: "10,000+",
//     title: "Trusted by Clients Worldwide",
//     desc: "Our commitment to quality and service has earned the trust of thousands of businesses worldwide.",
//   },
// ];

// export default function WhyChooseSection() {
//   return (
//     <section className="py-12 md:py-16" style={{ background: "#f5f2ee" }}>
//       <div className="container-site">
//         {/* Header — centered */}
//         <div className="text-center max-w-2xl mx-auto mb-8 md:mb-10">
//           <FadeIn>
//             <p
//               className="text-xs font-semibold tracking-[0.18em] uppercase mb-4 flex items-center justify-center gap-3"
//               style={{ color: "#8b1a1a" }}
//             >
//               <span
//                 className="inline-block w-6 h-px"
//                 style={{ background: "#8b1a1a" }}
//               />
//               Why Choose Us
//               <span
//                 className="inline-block w-6 h-px"
//                 style={{ background: "#8b1a1a" }}
//               />
//             </p>
//           </FadeIn>
//           <RevealText>
//             <h2
//               className="font-serif font-bold leading-tight mb-4"
//               style={{
//                 fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
//                 color: "#1a1410",
//                 letterSpacing: "-0.01em",
//               }}
//             >
//               Why Choose{" "}
//               <em className="not-italic" style={{ color: "#8b1a1a" }}>
//                 A-One Tandoor
//               </em>
//             </h2>
//           </RevealText>
//           <FadeIn>
//             <p
//               className="text-sm md:text-base leading-relaxed"
//               style={{ color: "#8a7060" }}
//             >
//               We deliver more than just products — we deliver trust, quality and
//               solutions.
//             </p>
//           </FadeIn>
//         </div>

//         {/* Feature cards — 1 col mobile, 2 col md, 4 col lg */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
//           {FEATURES.map((f, i) => (
//             <motion.div
//               key={f.title}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{
//                 delay: i * 0.1,
//                 duration: 0.55,
//                 ease: [0.22, 1, 0.36, 1],
//               }}
//               className="group flex flex-col rounded-2xl p-6 md:p-7 transition-all duration-300"
//               style={{
//                 background: "#ffffff",
//                 border: "1px solid rgba(60,40,20,0.08)",
//                 boxShadow: "0 1px 4px rgba(60,40,20,0.05)",
//               }}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.boxShadow =
//                   "0 12px 40px rgba(60,40,20,0.12)";
//                 e.currentTarget.style.transform = "translateY(-4px)";
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.boxShadow =
//                   "0 1px 4px rgba(60,40,20,0.05)";
//                 e.currentTarget.style.transform = "translateY(0)";
//               }}
//             >
//               {/* Icon circle */}
//               <div
//                 className="w-14 h-14 rounded-full flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-[#8b1a1a]"
//                 style={{
//                   background: "rgba(139,26,26,0.08)",
//                   color: "#8b1a1a",
//                 }}
//                 onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
//               >
//                 {f.icon}
//               </div>

//               {/* Optional big number */}
//               {f.num && (
//                 <p
//                   className="font-serif font-bold leading-none mb-1"
//                   style={{
//                     fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)",
//                     color: "#8b1a1a",
//                     fontVariantNumeric: "tabular-nums",
//                   }}
//                 >
//                   {f.num}
//                 </p>
//               )}

//               {/* Title */}
//               <h3
//                 className="font-display font-semibold leading-snug mb-3"
//                 style={{
//                   fontSize: "clamp(0.95rem, 1.2vw, 1.05rem)",
//                   color: "#1a1410",
//                 }}
//               >
//                 {f.title}
//               </h3>

//               {/* Divider */}
//               <div
//                 className="h-px mb-3 transition-all duration-500 group-hover:w-12"
//                 style={{ width: "2rem", background: "rgba(139,26,26,0.3)" }}
//               />

//               {/* Description */}
//               <p
//                 className="text-sm leading-relaxed"
//                 style={{ color: "#8a7060" }}
//               >
//                 {f.desc}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import { motion } from "framer-motion";
import FadeIn from "../ui/FadeIn";
import RevealText from "../ui/RevealText";

const FEATURES = [
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" />
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07M8.46 8.46a5 5 0 0 0 0 7.07" />
      </svg>
    ),
    title: "20+ Years Manufacturing Experience",
    desc: "Two decades of expertise in manufacturing premium tandoors and commercial kitchen equipment.",
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    ),
    title: "Export Quality Standards",
    desc: "Our products are built to meet international quality and safety standards across 30+ countries.",
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    title: "Custom Equipment Solutions",
    desc: "We provide tailor-made equipment to match your specific kitchen requirements and space.",
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "10,000+ Trusted by Clients Worldwide",
    desc: "Our commitment to quality and service has earned the trust of thousands of businesses worldwide.",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="py-12 md:py-16" style={{ background: "#f5f2ee" }}>
      <div className="container-site">
        {/* Header — centered */}
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-10">
          <FadeIn>
            <p
              className="text-xs font-semibold tracking-[0.18em] uppercase mb-4 flex items-center justify-center gap-3"
              style={{ color: "#8b1a1a" }}
            >
              <span
                className="inline-block w-6 h-px"
                style={{ background: "#8b1a1a" }}
              />
              Why Choose Us
              <span
                className="inline-block w-6 h-px"
                style={{ background: "#8b1a1a" }}
              />
            </p>
          </FadeIn>
          <RevealText>
            <h2
              className="font-serif font-bold leading-tight mb-4"
              style={{
                fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
                color: "#1a1410",
                letterSpacing: "-0.01em",
              }}
            >
              Why Choose{" "}
              <em className="not-italic" style={{ color: "#8b1a1a" }}>
                A-One Tandoor
              </em>
            </h2>
          </RevealText>
          <FadeIn>
            <p
              className="text-sm md:text-base leading-relaxed"
              style={{ color: "#8a7060" }}
            >
              We deliver more than just products — we deliver trust, quality and
              solutions.
            </p>
          </FadeIn>
        </div>

        {/* Feature cards — 1 col mobile, 2 col md, 4 col lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.1,
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group flex flex-col rounded-2xl p-6 md:p-7 transition-all duration-300"
              style={{
                background: "#ffffff",
                border: "1px solid rgba(60,40,20,0.08)",
                boxShadow: "0 1px 4px rgba(60,40,20,0.05)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 12px 40px rgba(60,40,20,0.12)";
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 1px 4px rgba(60,40,20,0.05)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {/* Icon circle */}
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-[#8b1a1a]"
                style={{
                  background: "rgba(139,26,26,0.08)",
                  color: "#8b1a1a",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
              >
                {f.icon}
              </div>

              {/* Title (Now Unified) */}
              <h3
                className="font-serif font-bold leading-snug mb-3"
                style={{
                  fontSize: "clamp(1.1rem, 1.5vw, 1.25rem)",
                  color: "#1a1410",
                }}
              >
                {f.title}
              </h3>

              {/* Divider */}
              <div
                className="h-px mb-3 transition-all duration-500 group-hover:w-12"
                style={{ width: "2rem", background: "rgba(139,26,26,0.3)" }}
              />

              {/* Description */}
              <p
                className="text-sm leading-relaxed"
                style={{ color: "#8a7060" }}
              >
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
