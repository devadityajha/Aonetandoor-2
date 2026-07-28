import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Award,
  Box,
  Globe,
  Users,
  Shield,
  Settings,
  ChefHat,
  Wrench,
} from "lucide-react";

// ─── Reusable fade wrapper ───────────────────────────────────────────────────
const FadeIn = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

const SectionLabel = ({ children }) => (
  <div className="flex items-center gap-2 mb-3">
    <div className="w-5 h-px" style={{ background: "#8b1a1a" }} />
    <p
      className="uppercase text-[10px] font-semibold tracking-[0.2em]"
      style={{ color: "#8b1a1a" }}
    >
      {children}
    </p>
  </div>
);

// ─── 1. Hero ─────────────────────────────────────────────────────────────────
const HeroSection = () => (
  <section
    className="relative overflow-hidden"
    style={{ background: "#1a0f0e", minHeight: "clamp(320px,55vw,520px)" }}
  >
    {/* bg image */}
    <div className="absolute inset-0">
      <img
        src="/about-us.png"
        alt=""
        className="w-full h-full object-cover opacity-40"
        loading="eager"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(10,4,4,0.85) 45%, rgba(10,4,4,0.2))",
        }}
      />
    </div>

    <div className="container-site relative z-10 py-12 md:py-16">
      <FadeIn>
        <SectionLabel>Our Legacy</SectionLabel>
      </FadeIn>

      <FadeIn delay={0.08}>
        <h1
          className="font-serif font-bold leading-[1.05]"
          style={{
            color: "#fffaf7",
            fontSize: "clamp(2.2rem,5vw,4.5rem)",
            letterSpacing: "-0.03em",
            maxWidth: "14ch",
          }}
        >
          20+ Years of{" "}
          <em className="not-italic" style={{ color: "#c94040" }}>
            Manufacturing Excellence
          </em>
        </h1>
      </FadeIn>

      <FadeIn delay={0.14}>
        <p
          className="mt-4 text-sm md:text-base leading-relaxed"
          style={{ color: "rgba(255,245,240,0.72)", maxWidth: "42ch" }}
        >
          From traditional clay tandoors to complete commercial kitchen
          solutions, A-One Tandoor has been serving restaurants, hotels,
          caterers and food businesses worldwide for over two decades.
        </p>
      </FadeIn>

      {/* Stats */}
      <FadeIn delay={0.22}>
        <div
          className="mt-8 flex flex-wrap gap-8 pt-8 border-t"
          style={{ borderColor: "rgba(255,255,255,0.1)" }}
        >
          {[
            { icon: Award, num: "20+", label: "Years Experience" },
            { icon: Box, num: "150+", label: "Products" },
            { icon: Globe, num: "30+", label: "Countries Exported" },
            { icon: Users, num: "10,000+", label: "Happy Clients" },
          ].map(({ icon: Icon, num, label }) => (
            <div key={label} className="flex items-center gap-3">
              <Icon size={22} style={{ color: "#c94040" }} strokeWidth={1.5} />
              <div>
                <p
                  className="font-serif font-bold text-xl leading-none"
                  style={{ color: "#fffaf7" }}
                >
                  {num}
                </p>
                <p
                  className="mt-1 text-[10px] uppercase tracking-widest"
                  style={{ color: "rgba(255,245,240,0.5)" }}
                >
                  {label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </div>
  </section>
);

// ─── 2. Our Story ─────────────────────────────────────────────────────────────
const OurStory = () => (
  <section className="py-12 md:py-16" style={{ background: "#f5f2ee" }}>
    <div className="container-site">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <FadeIn>
          <div
            className="rounded-xl overflow-hidden"
            style={{ aspectRatio: "4/3" }}
          >
            <img
              src="/about-factory.jpg"
              alt="A-One Tandoor factory"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <SectionLabel>Our Story</SectionLabel>
          <h2
            className="font-serif font-bold leading-tight"
            style={{
              color: "#1a1410",
              fontSize: "clamp(1.8rem,3vw,2.8rem)",
              letterSpacing: "-0.02em",
            }}
          >
            Built on <span style={{ color: "#8b1a1a" }}>Craftsmanship.</span>
            <br />
            Driven by Innovation.
          </h2>
          <p
            className="mt-4 text-sm md:text-base leading-relaxed"
            style={{ color: "#5c4a3a" }}
          >
            A-One Tandoor began as a family-run manufacturing workshop in New
            Delhi with a commitment to preserving the traditional art of tandoor
            making.
          </p>
          <p
            className="mt-3 text-sm md:text-base leading-relaxed"
            style={{ color: "#5c4a3a" }}
          >
            Over the years, we have expanded into commercial kitchen equipment
            manufacturing and global exports while maintaining the same
            dedication to quality, durability and craftsmanship.
          </p>
          <div
            className="mt-5 flex items-start gap-3 pt-5 border-t"
            style={{ borderColor: "rgba(60,40,20,0.1)" }}
          >
            <Award
              size={18}
              className="shrink-0 mt-0.5"
              style={{ color: "#8b1a1a" }}
              strokeWidth={1.5}
            />
            <p
              className="text-sm leading-relaxed font-medium"
              style={{ color: "#8b1a1a" }}
            >
              Our promise is simple — deliver products that perform, last long
              and build trust.
            </p>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

// ─── 3. Manufacturing Facility ────────────────────────────────────────────────
const FACILITY = [
  {
    img: "/facility-1.jpg",
    icon: Settings,
    title: "Advanced Machinery",
    desc: "Modern equipment for precision engineering",
  },
  {
    img: "/facility-2.jpg",
    icon: Users,
    title: "Skilled Craftsmen",
    desc: "Experienced team with generational expertise",
  },
  {
    img: "/facility-3.jpg",
    icon: Shield,
    title: "Quality Inspection",
    desc: "Rigorous testing at every stage of production",
  },
  {
    img: "/facility-4.jpg",
    icon: Box,
    title: "Export Packaging",
    desc: "Secure packaging for safe international delivery",
  },
  {
    img: "/facility-5.jpg",
    icon: Wrench,
    title: "Custom Manufacturing",
    desc: "Tailor-made solutions as per client requirements",
  },
];

const ManufacturingSection = () => (
  <section className="py-12 md:py-16" style={{ background: "#ffffff" }}>
    <div className="container-site">
      <FadeIn className="text-center mb-8">
        <SectionLabel>Manufacturing Facility</SectionLabel>
        <h2
          className="font-serif font-bold"
          style={{
            color: "#1a1410",
            fontSize: "clamp(1.6rem,2.8vw,2.6rem)",
            letterSpacing: "-0.02em",
          }}
        >
          Precision Manufacturing. Quality Assured.
        </h2>
      </FadeIn>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
        {FACILITY.map(({ img, icon: Icon, title, desc }, i) => (
          <FadeIn key={title} delay={i * 0.06}>
            <div
              className="group rounded-xl overflow-hidden border"
              style={{
                borderColor: "rgba(60,40,20,0.07)",
                background: "#faf9f6",
              }}
            >
              <div className="overflow-hidden" style={{ aspectRatio: "1/1" }}>
                <img
                  src={img}
                  alt={title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-3">
                <div className="flex items-center gap-2 mb-1">
                  <Icon
                    size={14}
                    style={{ color: "#8b1a1a" }}
                    strokeWidth={1.8}
                  />
                  <p
                    className="font-semibold text-xs"
                    style={{ color: "#1a1410" }}
                  >
                    {title}
                  </p>
                </div>
                <p
                  className="text-[11px] leading-snug"
                  style={{ color: "#8a7060" }}
                >
                  {desc}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

// ─── 4. Expertise ────────────────────────────────────────────────────────────
const EXPERTISE = [
  {
    icon: ChefHat,
    title: "Tandoors & Clay Products",
    desc: "Traditional and modern tandoors built for commercial and residential use.",
  },
  {
    icon: Settings,
    title: "Commercial Kitchen Equipment",
    desc: "Complete range of equipment for restaurants and food businesses.",
  },
  {
    icon: Wrench,
    title: "Catering Equipment",
    desc: "Heavy-duty equipment designed for catering and large-scale operations.",
  },
  {
    icon: Box,
    title: "Custom Manufacturing",
    desc: "We build equipment as per your exact specifications and project needs.",
  },
];

const ExpertiseSection = () => (
  <section className="py-12 md:py-16" style={{ background: "#f5f2ee" }}>
    <div className="container-site">
      <div className="grid lg:grid-cols-[1fr_2fr] gap-8 md:gap-12 items-start">
        <FadeIn>
          <SectionLabel>Our Expertise</SectionLabel>
          <h2
            className="font-serif font-bold leading-tight"
            style={{
              color: "#1a1410",
              fontSize: "clamp(1.8rem,3vw,2.8rem)",
              letterSpacing: "-0.02em",
            }}
          >
            Manufacturing Solutions For{" "}
            <span style={{ color: "#8b1a1a" }}>Every Kitchen</span>
          </h2>
          <p
            className="mt-4 text-sm leading-relaxed"
            style={{ color: "#5c4a3a" }}
          >
            From clay tandoors to commercial kitchen equipment, we offer a wide
            range of solutions for all types of food businesses.
          </p>
        </FadeIn>

        <div className="grid grid-cols-2 gap-3 md:gap-4">
          {EXPERTISE.map(({ icon: Icon, title, desc }, i) => (
            <FadeIn key={title} delay={i * 0.07}>
              <div
                className="h-full rounded-xl p-4 md:p-5 border"
                style={{
                  background: "#ffffff",
                  borderColor: "rgba(60,40,20,0.07)",
                  boxShadow: "0 1px 4px rgba(60,40,20,0.05)",
                }}
              >
                <Icon
                  size={26}
                  style={{ color: "#8b1a1a" }}
                  strokeWidth={1.4}
                />
                <p
                  className="mt-3 font-semibold text-sm leading-snug"
                  style={{ color: "#1a1410" }}
                >
                  {title}
                </p>
                <p
                  className="mt-2 text-[12px] leading-relaxed"
                  style={{ color: "#8a7060" }}
                >
                  {desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  </section>
);

// ─── 5. Why Choose Us ─────────────────────────────────────────────────────────
const WHY = [
  {
    icon: Award,
    title: "20+ Years Experience",
    desc: "Two decades of expertise in tandoor and kitchen equipment manufacturing.",
  },
  {
    icon: Globe,
    title: "Export Ready",
    desc: "Proudly serving customers in 30+ countries across the globe.",
  },
  {
    icon: Settings,
    title: "Custom Solutions",
    desc: "Tailor-made equipment built to match your exact requirements.",
  },
  {
    icon: Shield,
    title: "Certified Quality",
    desc: "Manufactured to international standards with strict quality control.",
  },
];

const WhyChooseUs = () => (
  <section className="py-12 md:py-16" style={{ background: "#ffffff" }}>
    <div className="container-site">
      <FadeIn className="text-center mb-8">
        <SectionLabel>Why Businesses Choose Us</SectionLabel>
        <h2
          className="font-serif font-bold"
          style={{
            color: "#1a1410",
            fontSize: "clamp(1.6rem,2.8vw,2.6rem)",
            letterSpacing: "-0.02em",
          }}
        >
          Trusted by Businesses Worldwide
        </h2>
      </FadeIn>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {WHY.map(({ icon: Icon, title, desc }, i) => (
          <FadeIn key={title} delay={i * 0.07}>
            <div
              className="h-full rounded-xl p-5 border"
              style={{
                background: "#faf9f6",
                borderColor: "rgba(60,40,20,0.07)",
              }}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center mb-4"
                style={{ background: "rgba(139,26,26,0.06)" }}
              >
                <Icon
                  size={18}
                  style={{ color: "#8b1a1a" }}
                  strokeWidth={1.6}
                />
              </div>
              <p
                className="font-semibold text-sm mb-2"
                style={{ color: "#1a1410" }}
              >
                — {title}
              </p>
              <p
                className="text-xs leading-relaxed"
                style={{ color: "#8a7060" }}
              >
                {desc}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

// ─── 6. Global Presence ───────────────────────────────────────────────────────
const COUNTRIES = [
  { flag: "🇺🇸", name: "USA" },
  { flag: "🇬🇧", name: "UK" },
  { flag: "🇦🇪", name: "UAE" },
  { flag: "🇸🇦", name: "Saudi Arabia" },
  { flag: "🇶🇦", name: "Qatar" },
  { flag: "🇴🇲", name: "Oman" },
  { flag: "🇨🇦", name: "Canada" },
  { flag: "🇦🇺", name: "Australia" },
  { flag: "🇩🇪", name: "Germany" },
  { flag: "🇫🇷", name: "France" },
];

const GlobalPresence = () => (
  <section className="py-12 md:py-16" style={{ background: "#f5f2ee" }}>
    <div className="container-site">
      <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 md:gap-12 items-center">
        {/* World map placeholder */}
        <FadeIn>
          <div
            className="rounded-xl overflow-hidden w-full"
            style={{ aspectRatio: "16/9", background: "#ede8e2" }}
          >
            <img
              src="/world-map.png"
              alt="Export map"
              className="w-full h-full object-cover opacity-80"
              loading="lazy"
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <SectionLabel>Global Presence</SectionLabel>
          <h2
            className="font-serif font-bold leading-tight"
            style={{
              color: "#1a1410",
              fontSize: "clamp(1.8rem,3vw,2.8rem)",
              letterSpacing: "-0.02em",
            }}
          >
            Exporting to <span style={{ color: "#8b1a1a" }}>30+ Countries</span>
            <br />
            Worldwide
          </h2>

          <div className="mt-5 flex flex-wrap gap-2">
            {COUNTRIES.map((c) => (
              <span
                key={c.name}
                className="inline-flex items-center gap-1.5 text-[12px] font-medium px-2.5 py-1.5 rounded-lg"
                style={{
                  background: "#ffffff",
                  border: "1px solid rgba(60,40,20,0.08)",
                  color: "#3d2b1f",
                }}
              >
                <span className="text-sm">{c.flag}</span> {c.name}
              </span>
            ))}
          </div>

          <button
            className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider rounded-lg border transition-colors duration-200"
            style={{
              borderColor: "#8b1a1a",
              color: "#8b1a1a",
              background: "transparent",
            }}
          >
            + 20 More Countries
          </button>
        </FadeIn>
      </div>
    </div>
  </section>
);

// ─── 7. Leadership ────────────────────────────────────────────────────────────
const TEAM = [
  {
    img: "/team-rajesh.jpg",
    name: "Rajesh Kumar",
    role: "Founder & Owner",
    desc: "With over 20+ years of experience, he leads the company with a vision of quality, innovation and customer satisfaction.",
  },
  {
    img: "/team-pratyaksh.jpg",
    name: "Pratyaksh",
    role: "Director",
    desc: "Overseeing operations, exports and business development to deliver the best solutions to our global clients.",
  },
];

const Leadership = () => (
  <section className="py-12 md:py-16" style={{ background: "#ffffff" }}>
    <div className="container-site">
      <FadeIn className="text-center mb-8">
        <SectionLabel>Leadership</SectionLabel>
        <h2
          className="font-serif font-bold"
          style={{
            color: "#1a1410",
            fontSize: "clamp(1.6rem,2.8vw,2.6rem)",
            letterSpacing: "-0.02em",
          }}
        >
          The People Behind A-One Tandoor
        </h2>
      </FadeIn>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
        {TEAM.map(({ img, name, role, desc }, i) => (
          <FadeIn key={name} delay={i * 0.1}>
            <div
              className="flex items-start gap-4 p-5 rounded-xl border"
              style={{
                background: "#faf9f6",
                borderColor: "rgba(60,40,20,0.07)",
              }}
            >
              <div
                className="shrink-0 w-16 h-16 rounded-xl overflow-hidden"
                style={{ background: "#ede8e2" }}
              >
                <img
                  src={img}
                  alt={name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div>
                <p
                  className="font-semibold text-sm"
                  style={{ color: "#1a1410" }}
                >
                  {name}
                </p>
                <p
                  className="text-xs font-medium mt-0.5"
                  style={{ color: "#8b1a1a" }}
                >
                  {role}
                </p>
                <p
                  className="mt-2 text-xs leading-relaxed"
                  style={{ color: "#8a7060" }}
                >
                  {desc}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

// ─── 8. Certifications ────────────────────────────────────────────────────────
const Certifications = () => (
  <section className="py-10 md:py-12" style={{ background: "#f5f2ee" }}>
    <div className="container-site">
      <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
        <FadeIn className="shrink-0">
          <SectionLabel>Trusted &amp; Certified</SectionLabel>
          <h2
            className="font-serif font-bold leading-tight"
            style={{
              color: "#1a1410",
              fontSize: "clamp(1.4rem,2.4vw,2.2rem)",
              letterSpacing: "-0.02em",
            }}
          >
            Our Certifications
            <br />
            &amp; Recognitions
          </h2>
        </FadeIn>

        <FadeIn
          delay={0.1}
          className="flex flex-wrap items-center gap-4 md:gap-6"
        >
          {[
            { label: "ISO 9001:2015 Certified", badge: "ISO" },
            { label: "CE Certified", badge: "CE" },
            { label: "IEC Registered Exporter", badge: "IEC" },
          ].map(({ label, badge }) => (
            <div
              key={badge}
              className="flex flex-col items-center gap-1.5 px-5 py-4 rounded-xl border text-center"
              style={{
                background: "#ffffff",
                borderColor: "rgba(60,40,20,0.08)",
                minWidth: "90px",
              }}
            >
              <span className="font-bold text-xl" style={{ color: "#1a1410" }}>
                {badge}
              </span>
              <span
                className="text-[10px] leading-snug"
                style={{ color: "#8a7060" }}
              >
                {label}
              </span>
            </div>
          ))}

          <Link
            to="/certifications"
            className="ml-auto inline-flex items-center justify-center px-5 py-3 text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors duration-200"
            style={{ background: "#7a1b1a", color: "#fffaf7" }}
          >
            View All Certifications
          </Link>
        </FadeIn>
      </div>
    </div>
  </section>
);

// ─── Page export ──────────────────────────────────────────────────────────────
export default function AboutPage() {
  return (
    <main>
      <HeroSection />
      <OurStory />
      <ManufacturingSection />
      <ExpertiseSection />
      <WhyChooseUs />
      <GlobalPresence />
      <Leadership />
      <Certifications />
      {/* <CTABanner /> */}
    </main>
  );
}
