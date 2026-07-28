import { motion } from "framer-motion";
import FadeIn from "../ui/FadeIn";
import RevealText from "../ui/RevealText";

const INDUSTRIES = [
  {
    title: "Restaurants",
    icon: (
      <svg
        width="34"
        height="34"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 11h18" />
        <path d="M5 11a7 7 0 0 1 14 0" />
        <path d="M12 4V3" />
        <path d="M6 21h12" />
        <path d="M7 11v6a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-6" />
      </svg>
    ),
  },
  {
    title: "Hotels",
    icon: (
      <svg
        width="34"
        height="34"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 21h18" />
        <path d="M5 21V7l7-4 7 4v14" />
        <path d="M9 10h.01" />
        <path d="M15 10h.01" />
        <path d="M9 14h.01" />
        <path d="M15 14h.01" />
        <path d="M10 21v-4h4v4" />
      </svg>
    ),
  },
  {
    title: "Cloud Kitchens",
    icon: (
      <svg
        width="34"
        height="34"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M8 21h8" />
        <path d="M10 21v-5" />
        <path d="M14 21v-5" />
        <path d="M8 8a4 4 0 1 1 8 0" />
        <path d="M6 12a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2" />
        <path d="M7 15h10" />
      </svg>
    ),
  },
  {
    title: "Catering Businesses",
    icon: (
      <svg
        width="34"
        height="34"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 11h18" />
        <path d="M5 11a7 7 0 0 1 14 0" />
        <path d="M8 21h8" />
        <path d="M12 11v10" />
        <path d="M16.5 5.5 18 4" />
      </svg>
    ),
  },
  {
    title: "Food Chains",
    icon: (
      <svg
        width="34"
        height="34"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 7h16" />
        <path d="M6 7V5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2" />
        <path d="M5 7v11a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7" />
        <path d="M9 11h6" />
      </svg>
    ),
  },
  {
    title: "Banquet Halls",
    icon: (
      <svg
        width="34"
        height="34"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 3 5 7v5c0 5 3.5 8 7 9 3.5-1 7-4 7-9V7l-7-4Z" />
        <path d="M9 12h6" />
      </svg>
    ),
  },
  {
    title: "Corporate Offices",
    icon: (
      <svg
        width="34"
        height="34"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 21h18" />
        <path d="M6 21V6a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v15" />
        <path d="M9 9h.01" />
        <path d="M15 9h.01" />
        <path d="M9 13h.01" />
        <path d="M15 13h.01" />
      </svg>
    ),
  },
  {
    title: "Govt. Offices & Institutions",
    icon: (
      <svg
        width="34"
        height="34"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 10h18" />
        <path d="M12 3 4 7v3h16V7l-8-4Z" />
        <path d="M5 21h14" />
        <path d="M7 10v8" />
        <path d="M12 10v8" />
        <path d="M17 10v8" />
      </svg>
    ),
  },
];

export default function IndustriesSection() {
  return (
    <section className="10 md:py-14" style={{ background: "#f5f2ee" }}>
      <div className="container-site">
        <div className="max-w-2xl mx-auto text-center mb-6 md:mb-8">
          <FadeIn>
            <p
              className="text-[11px] font-semibold uppercase tracking-[0.18em] mb-4"
              style={{ color: "#8b1a1a" }}
            >
              Industries / Client Types
            </p>
          </FadeIn>

          <RevealText>
            <h2
              className="font-serif font-bold leading-tight"
              style={{
                fontSize: "clamp(1.9rem, 3vw, 2.9rem)",
                color: "#1a1410",
                letterSpacing: "-0.02em",
              }}
            >
              Industries We{" "}
              <em className="not-italic" style={{ color: "#8b1a1a" }}>
                Serve
              </em>
            </h2>
          </RevealText>

          <FadeIn>
            <p
              className="mt-3 text-sm md:text-base"
              style={{ color: "#8a7060" }}
            >
              We work with a wide range of commercial kitchens, hospitality
              brands, and institutional buyers.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-8 border border-[rgba(60,40,20,0.08)] bg-white">
          {INDUSTRIES.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                duration: 0.45,
                delay: i * 0.04,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative"
            >
              <div
                className="h-full min-h-[130px] md:min-h-[145px] px-4 py-6 md:px-5 md:py-7 flex flex-col items-center justify-center text-center transition-all duration-300"
                style={{
                  borderRight: "1px solid rgba(60,40,20,0.08)",
                  borderBottom: "1px solid rgba(60,40,20,0.08)",
                  background: "#ffffff",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#fcfaf7";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#ffffff";
                }}
              >
                <div
                  className="mb-4 flex items-center justify-center transition-all duration-300 group-hover:-translate-y-1"
                  style={{ color: "#8b1a1a" }}
                >
                  {item.icon}
                </div>

                <h3
                  className="font-display font-semibold leading-snug"
                  style={{
                    fontSize: "clamp(0.88rem, 1vw, 1rem)",
                    color: "#1a1410",
                  }}
                >
                  {item.title}
                </h3>

                <div
                  className="mt-3 h-px w-0 group-hover:w-8 transition-all duration-300"
                  style={{ background: "#8b1a1a" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
