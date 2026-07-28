// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

// const contactItems = [
//   {
//     icon: Phone,
//     title: "Call Us",
//     value: "+91 98765 43210",
//     href: "tel:+919876543210",
//   },
//   {
//     icon: Mail,
//     title: "Email Us",
//     value: "info@aonetandoor.com",
//     href: "mailto:info@aonetandoor.com",
//   },
//   {
//     icon: MapPin,
//     title: "Our Location",
//     value: "Ludhiana, Punjab, India",
//     href: "/contact",
//   },
//   {
//     icon: Clock,
//     title: "Working Hours",
//     value: "Mon - Sat: 9am - 6pm",
//     href: "/contact",
//   },
// ];

// export default function Footer() {
//   return (
//     <footer
//       className="relative pt-10 md:pt-14"
//       style={{ background: "#f5f2ee" }}
//     >
//       <div className="container-site">
//         {/* CTA Banner */}
//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="relative overflow-hidden rounded-[20px] border"
//           style={{
//             // background:
//             //   "linear-gradient(135deg, #6f1918 0%, #7d1d1c 35%, #5b1212 100%)",
//             backgroundColor: "#944E4E",
//             borderColor: "rgba(255,255,255,0.12)",
//             boxShadow: "0 18px 50px rgba(91,18,18,0.18)",
//           }}
//         >
//           {/* background depth */}
//           <div
//             className="absolute inset-0"
//             style={{
//               background:
//                 "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.08), transparent 30%), radial-gradient(circle at 80% 30%, rgba(255,255,255,0.06), transparent 24%), linear-gradient(to right, rgba(0,0,0,0.12), rgba(0,0,0,0.02))",
//             }}
//           />

//           <div className="relative grid lg:grid-cols-[1.1fr_0.9fr] items-center">
//             {/* Left content */}
//             <div className="px-6 py-10 sm:px-8 md:px-12 md:py-14 lg:pr-8">
//               <p
//                 className="text-[11px] uppercase tracking-[0.22em] font-semibold"
//                 style={{ color: "rgba(255,244,240,0.82)" }}
//               >
//                 Ready to upgrade your kitchen?
//               </p>

//               <h2
//                 className="mt-4 font-serif font-bold leading-[1.02]"
//                 style={{
//                   color: "#fffaf7",
//                   fontSize: "clamp(1.8rem, 3vw, 3rem)",
//                   maxWidth: "none",
//                   letterSpacing: "-0.03em",
//                 }}
//               >
//                 Need Commercial Kitchen Equipment?
//               </h2>

//               <p
//                 className="mt-5 text-sm md:text-lg leading-relaxed"
//                 style={{
//                   color: "rgba(255,245,242,0.82)",
//                   maxWidth: "34rem",
//                 }}
//               >
//                 Tell us your requirements and our experts will help you choose
//                 the right equipment for your business.
//               </p>

//               <div className="mt-8 flex flex-col sm:flex-row gap-4">
//                 <Link
//                   to="/contact"
//                   className="inline-flex items-center justify-center min-h-[52px] px-7 text-sm font-semibold uppercase tracking-[0.14em] rounded-[10px] transition-all duration-300"
//                   style={{
//                     background: "#fffaf7",
//                     color: "#6b1716",
//                     border: "1px solid rgba(255,255,255,0.45)",
//                   }}
//                 >
//                   Request a Quote
//                 </Link>

//                 <a
//                   href="https://wa.me/919876543210"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-flex items-center justify-center gap-3 min-h-[52px] px-7 text-sm font-semibold uppercase tracking-[0.14em] rounded-[10px] transition-all duration-300"
//                   style={{
//                     background: "transparent",
//                     color: "#fffaf7",
//                     border: "1px solid rgba(255,255,255,0.35)",
//                   }}
//                 >
//                   <MessageCircle size={18} />
//                   Whatsapp Us
//                 </a>
//               </div>
//             </div>

//             {/* Right visual */}
//             <div className="relative h-full min-h-[280px] md:min-h-[360px] lg:min-h-[100%] flex items-end justify-center">
//               <div
//                 className="absolute inset-0"
//                 style={{
//                   background:
//                     "linear-gradient(to left, rgba(255,255,255,0.02), transparent 55%)",
//                 }}
//               />
//               <img
//                 src="/Footer.png"
//                 alt="Commercial tandoor equipment"
//                 className="relative z-10 w-[82%] max-w-[480px] object-contain drop-shadow-[0_24px_40px_rgba(0,0,0,0.28)]"
//                 loading="lazy"
//               />
//             </div>
//           </div>
//         </motion.div>

//         {/* Contact strip */}
//         <div
//           className="mt-5 rounded-[18px] overflow-hidden border"
//           style={{
//             background: "#fffdfb",
//             borderColor: "rgba(79,38,22,0.08)",
//             boxShadow: "0 10px 30px rgba(60,40,20,0.05)",
//           }}
//         >
//           <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
//             {contactItems.map((item, i) => {
//               const Icon = item.icon;
//               const Wrapper = item.href?.startsWith("/") ? Link : "a";
//               const wrapperProps = item.href?.startsWith("/")
//                 ? { to: item.href }
//                 : { href: item.href };

//               return (
//                 <Wrapper
//                   key={item.title}
//                   {...wrapperProps}
//                   className="group flex items-start gap-4 px-6 py-6 md:px-8 md:py-7 transition-colors duration-300"
//                   style={{
//                     borderRight:
//                       i !== contactItems.length - 1
//                         ? "1px solid rgba(79,38,22,0.08)"
//                         : "none",
//                     borderBottom:
//                       i < 2 ? "1px solid rgba(79,38,22,0.08)" : "none",
//                   }}
//                 >
//                   <div
//                     className="shrink-0 w-11 h-11 rounded-full flex items-center justify-center"
//                     style={{
//                       background: "rgba(122,27,26,0.06)",
//                       color: "#7a1b1a",
//                     }}
//                   >
//                     <Icon size={20} strokeWidth={1.8} />
//                   </div>

//                   <div>
//                     <p
//                       className="text-sm font-semibold"
//                       style={{ color: "#4f2616" }}
//                     >
//                       {item.title}
//                     </p>
//                     <p
//                       className="mt-1 text-sm md:text-base"
//                       style={{ color: "#2e2018" }}
//                     >
//                       {item.value}
//                     </p>
//                   </div>
//                 </Wrapper>
//               );
//             })}
//           </div>
//         </div>
//       </div>

//       {/* Bottom bar */}
//       <div
//         className="mt-6"
//         style={{
//           backgroundColor: "#944E4E",
//         }}
//       >
//         <div className="container-site">
//           <div className="py-5 text-center">
//             <p className="text-sm" style={{ color: "rgba(255,250,247,0.9)" }}>
//               © 2026 A-One Tandoor. All Rights Reserved.
//             </p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom"; // ✅ useLocation add kiya
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

const contactItems = [
  {
    icon: Phone,
    title: "Call Us",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
  },
  {
    icon: Mail,
    title: "Email Us",
    value: "info@aonetandoor.com",
    href: "mailto:info@aonetandoor.com",
  },
  {
    icon: MapPin,
    title: "Our Location",
    value: "Ludhiana, Punjab, India",
    href: "/contact",
  },
  {
    icon: Clock,
    title: "Working Hours",
    value: "Mon - Sat: 9am - 6pm",
    href: "/contact",
  },
];

export default function Footer() {
  const { pathname } = useLocation(); // ✅ pathname liya

  return (
    <footer
      className="relative pt-10 md:pt-14"
      style={{ background: "#f5f2ee" }}
    >
      <div className="container-site">
        {/* ✅ CTA Banner — sirf home page "/" pe dikhega */}
        {pathname === "/" && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-[20px] border"
            style={{
              // background:
              //   "linear-gradient(135deg, #6f1918 0%, #7d1d1c 35%, #5b1212 100%)",
              backgroundColor: "#944E4E",
              borderColor: "rgba(255,255,255,0.12)",
              boxShadow: "0 18px 50px rgba(91,18,18,0.18)",
            }}
          >
            {/* background depth */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.08), transparent 30%), radial-gradient(circle at 80% 30%, rgba(255,255,255,0.06), transparent 24%), linear-gradient(to right, rgba(0,0,0,0.12), rgba(0,0,0,0.02))",
              }}
            />

            <div className="relative grid lg:grid-cols-[1.1fr_0.9fr] items-center">
              {/* Left content */}
              <div className="px-6 py-10 sm:px-8 md:px-12 md:py-14 lg:pr-8">
                <p
                  className="text-[11px] uppercase tracking-[0.22em] font-semibold"
                  style={{ color: "rgba(255,244,240,0.82)" }}
                >
                  Ready to upgrade your kitchen?
                </p>

                <h2
                  className="mt-4 font-serif font-bold leading-[1.02]"
                  style={{
                    color: "#fffaf7",
                    fontSize: "clamp(1.8rem, 3vw, 3rem)",
                    maxWidth: "none",
                    letterSpacing: "-0.03em",
                  }}
                >
                  Need Commercial Kitchen Equipment?
                </h2>

                <p
                  className="mt-5 text-sm md:text-lg leading-relaxed"
                  style={{
                    color: "rgba(255,245,242,0.82)",
                    maxWidth: "34rem",
                  }}
                >
                  Tell us your requirements and our experts will help you choose
                  the right equipment for your business.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center min-h-[52px] px-7 text-sm font-semibold uppercase tracking-[0.14em] rounded-[10px] transition-all duration-300"
                    style={{
                      background: "#fffaf7",
                      color: "#6b1716",
                      border: "1px solid rgba(255,255,255,0.45)",
                    }}
                  >
                    Request a Quote
                  </Link>

                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 min-h-[52px] px-7 text-sm font-semibold uppercase tracking-[0.14em] rounded-[10px] transition-all duration-300"
                    style={{
                      background: "transparent",
                      color: "#fffaf7",
                      border: "1px solid rgba(255,255,255,0.35)",
                    }}
                  >
                    <MessageCircle size={18} />
                    Whatsapp Us
                  </a>
                </div>
              </div>

              {/* Right visual */}
              <div className="relative h-full min-h-[280px] md:min-h-[360px] lg:min-h-[100%] flex items-end justify-center">
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to left, rgba(255,255,255,0.02), transparent 55%)",
                  }}
                />
                <img
                  src="/Footer.png"
                  alt="Commercial tandoor equipment"
                  className="relative z-10 w-[82%] max-w-[480px] object-contain drop-shadow-[0_24px_40px_rgba(0,0,0,0.28)]"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>
        )}
        {/* ✅ CTA Banner end */}

        {/* Contact strip */}
        <div
          className="mt-5 rounded-[18px] overflow-hidden border"
          style={{
            background: "#fffdfb",
            borderColor: "rgba(79,38,22,0.08)",
            boxShadow: "0 10px 30px rgba(60,40,20,0.05)",
          }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
            {contactItems.map((item, i) => {
              const Icon = item.icon;
              const Wrapper = item.href?.startsWith("/") ? Link : "a";
              const wrapperProps = item.href?.startsWith("/")
                ? { to: item.href }
                : { href: item.href };

              return (
                <Wrapper
                  key={item.title}
                  {...wrapperProps}
                  className="group flex items-start gap-4 px-6 py-6 md:px-8 md:py-7 transition-colors duration-300"
                  style={{
                    borderRight:
                      i !== contactItems.length - 1
                        ? "1px solid rgba(79,38,22,0.08)"
                        : "none",
                    borderBottom:
                      i < 2 ? "1px solid rgba(79,38,22,0.08)" : "none",
                  }}
                >
                  <div
                    className="shrink-0 w-11 h-11 rounded-full flex items-center justify-center"
                    style={{
                      background: "rgba(122,27,26,0.06)",
                      color: "#7a1b1a",
                    }}
                  >
                    <Icon size={20} strokeWidth={1.8} />
                  </div>

                  <div>
                    <p
                      className="text-sm font-semibold"
                      style={{ color: "#4f2616" }}
                    >
                      {item.title}
                    </p>
                    <p
                      className="mt-1 text-sm md:text-base"
                      style={{ color: "#2e2018" }}
                    >
                      {item.value}
                    </p>
                  </div>
                </Wrapper>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="mt-6"
        style={{
          backgroundColor: "#944E4E",
        }}
      >
        <div className="container-site">
          <div className="py-5 text-center">
            <p className="text-sm" style={{ color: "rgba(255,250,247,0.9)" }}>
              © 2026 A-One Tandoor. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
