import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import FadeIn from "../components/ui/FadeIn";
import RevealText from "../components/ui/RevealText";
import { Link } from "react-router-dom";

const MILESTONES = [
  {
    year: "2005",
    title: "Founded in New Delhi",
    desc: "Started as a small workshop crafting tandoors by hand for local restaurants.",
  },
  {
    year: "2010",
    title: "First International Export",
    desc: "Expanded to the UK and UAE market, marking the beginning of our global journey.",
  },
  {
    year: "2010",
    title: "ISO 9001 Certification",
    desc: "Received ISO quality certification, validating our manufacturing standards.",
  },
  {
    year: "2016",
    title: "NSF International Certification",
    desc: "Our premium range became NSF certified, opening doors to the US market.",
  },
  {
    year: "2019",
    title: "10,000 Clients Milestone",
    desc: "Celebrated serving over 10,000 customers across restaurants and homes worldwide.",
  },
  {
    year: "2024",
    title: "Digital Catalogue Launch",
    desc: "Launched our new digital platform to serve clients across all time zones.",
  },
];

const STATS = [
  ["20+", "Years in Business"],
  ["30+", "Countries Served"],
  ["10,000+", "Happy Clients"],
  ["50+", "Product Models"],
];

const TEAM_VALUES = [
  {
    title: "Authentic Materials",
    desc: "We source the finest fire clay, stainless steel, and refractory materials — nothing artificial, nothing compromised.",
  },
  {
    title: "Precision Engineering",
    desc: "Dimensional tolerances are held to the millimetre. Every joint, weld, and fitting is inspected before assembly.",
  },
  {
    title: "Thermal Testing",
    desc: "Each tandoor undergoes live thermal testing at 500°C+ before leaving our facility to ensure consistent heat performance.",
  },
  {
    title: "Global Compliance",
    desc: "Our export-ready products come with full compliance documentation for UK, EU, US, and GCC markets.",
  },
];

export default function AboutPage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <main>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative h-[70vh] min-h-[500px] overflow-hidden flex items-center"
      >
        <motion.div style={{ y: bgY }} className="absolute inset-0 scale-110">
          <div className="w-full h-full bg-gradient-to-br from-charcoal via-brand-dark to-charcoal-light">
            <div className="absolute inset-0 bg-charcoal/60" />
            {/* Warm glow */}
            <div className="absolute bottom-1/3 left-1/3 w-96 h-64 rounded-full bg-brand/10 blur-3xl" />
          </div>
        </motion.div>
        <div className="container-site relative z-10 pt-20">
          <FadeIn>
            <p className="section-label text-white/40 mb-4">Who We Are</p>
          </FadeIn>
          <RevealText>
            <h1 className="section-heading text-white max-w-2xl">
              Three Decades of{" "}
              <em className="text-brand not-italic">Tandoor Mastery</em>
            </h1>
          </RevealText>
          <FadeIn delay={0.4}>
            <p className="mt-5 text-white/50 max-w-lg leading-relaxed">
              From a workshop in New Delhi to kitchens across 30+ countries —
              this is the story of craft, fire, and relentless pursuit of
              quality.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── OUR STORY ────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-clay-50">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Image placeholder — replace with actual factory/workshop image */}
            <FadeIn direction="right">
              <div className="relative">
                <div className="aspect-[4/5] bg-gradient-to-br from-clay-200 to-clay-300 overflow-hidden">
                  {/* Decorative brand stripe */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand" />
                </div>
                {/* Floating stat card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="absolute -bottom-8 -right-6 bg-charcoal p-6 shadow-2xl"
                >
                  <p className="font-display text-4xl font-bold text-brand">
                    35+
                  </p>
                  <p className="text-xs text-white/50 uppercase tracking-widest mt-1">
                    Years of Craft
                  </p>
                </motion.div>
              </div>
            </FadeIn>

            {/* Text */}
            <div className="lg:pt-0 pt-8">
              <FadeIn>
                <p className="section-label mb-4">Our Story</p>
              </FadeIn>
              <RevealText delay={0.1}>
                <h2 className="section-subheading mb-6">
                  From a Workshop
                  <br />
                  <em className="text-brand not-italic">to a Global Brand</em>
                </h2>
              </RevealText>
              <FadeIn delay={0.2}>
                <p className="text-charcoal-soft leading-relaxed mb-4">
                  TandoorCraft began in 1987 in a modest workshop in New Delhi,
                  founded by artisans with a single obsession — to build the
                  most authentic, durable, and performance-driven tandoors in
                  the world.
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p className="text-charcoal-soft leading-relaxed mb-4">
                  What started as a local supplier to Delhi's restaurant scene
                  has grown into a globally recognized brand trusted by
                  Michelin-starred restaurants, five-star hotels, and home chefs
                  across 30+ countries.
                </p>
              </FadeIn>
              <FadeIn delay={0.4}>
                <p className="text-charcoal-soft leading-relaxed">
                  Our products are built on three principles: authentic heat,
                  precision engineering, and enduring quality — values we have
                  never compromised in over three decades of manufacturing.
                </p>
              </FadeIn>

              {/* Divider + Certifications row */}
              <FadeIn delay={0.5}>
                <div className="mt-10 pt-8 border-t border-clay-200 flex flex-wrap gap-6">
                  {["NSF Certified", "ISO 9001", "BIS Approved"].map((cert) => (
                    <div key={cert} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand" />
                      <span className="text-sm text-charcoal font-medium">
                        {cert}
                      </span>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAND ───────────────────────────────────── */}
      <section className="py-20 bg-brand">
        <div className="container-site">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {STATS.map(([num, label], i) => (
              <FadeIn key={label} delay={i * 0.1}>
                <div className="text-center">
                  <p className="font-display text-4xl md:text-5xl font-bold text-white">
                    {num}
                  </p>
                  <p className="text-xs text-white/60 uppercase tracking-widest mt-2">
                    {label}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CRAFTSMANSHIP ────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-beige-warm">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text Left */}
            <div>
              <FadeIn>
                <p className="section-label mb-4">Our Craft</p>
              </FadeIn>
              <RevealText delay={0.1}>
                <h2 className="section-subheading mb-6">
                  Manufacturing With
                  <br />
                  <em className="text-brand not-italic">
                    Uncompromising Precision
                  </em>
                </h2>
              </RevealText>
              <FadeIn delay={0.2}>
                <p className="text-charcoal-soft leading-relaxed mb-4">
                  Every TandoorCraft tandoor is built from carefully sourced
                  fire clay, precision-fitted stainless steel casings, and
                  industrial-grade insulation. Each unit undergoes rigorous
                  thermal testing before it leaves our factory floor.
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p className="text-charcoal-soft leading-relaxed mb-10">
                  Our manufacturing facility in New Delhi operates to ISO 9001
                  standards with a dedicated QA team that inspects every weld,
                  joint, and finish before dispatch — whether the order is for
                  one unit or five hundred.
                </p>
              </FadeIn>
              <FadeIn delay={0.4}>
                <Link to="/products/premium-tandoors" className="btn-primary">
                  Explore Our Products
                </Link>
              </FadeIn>
            </div>

            {/* Values Grid Right */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {TEAM_VALUES.map((v, i) => (
                <FadeIn key={v.title} delay={0.1 + i * 0.09}>
                  <div className="group p-6 bg-white border border-clay-200 hover:border-brand/30 hover:shadow-lg hover:shadow-brand/5 transition-all duration-400">
                    <div className="divider-brand mb-4 transition-all duration-500 group-hover:w-10" />
                    <h3 className="font-display text-base text-charcoal mb-2">
                      {v.title}
                    </h3>
                    <p className="text-sm text-charcoal-soft leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── MILESTONE TIMELINE ───────────────────────────── */}
      <section className="py-24 md:py-32 bg-charcoal overflow-hidden">
        <div className="container-site">
          <div className="text-center mb-16">
            <FadeIn>
              <p className="section-label text-white/40 mb-3">Our Journey</p>
            </FadeIn>
            <RevealText>
              <h2 className="section-heading text-white">
                Key <em className="text-brand not-italic">Milestones</em>
              </h2>
            </RevealText>
          </div>

          {/* Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Centre vertical line — visible on lg */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-white/10 hidden lg:block" />

            <div className="flex flex-col gap-0">
              {MILESTONES.map((m, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <FadeIn key={m.year} delay={i * 0.08}>
                    <div
                      className={`relative grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-0 py-10 ${
                        isLeft ? "" : "lg:flex-row-reverse"
                      }`}
                    >
                      {/* Content block */}
                      <div
                        className={`${isLeft ? "lg:pr-16 lg:text-right" : "lg:col-start-2 lg:pl-16"} flex flex-col ${isLeft ? "lg:items-end" : "lg:items-start"}`}
                      >
                        <span className="font-display text-5xl font-bold text-brand/30 leading-none">
                          {m.year}
                        </span>
                        <h3 className="font-display text-xl text-white mt-1">
                          {m.title}
                        </h3>
                        <p className="text-white/50 mt-2 text-sm leading-relaxed max-w-xs">
                          {m.desc}
                        </p>
                      </div>

                      {/* Centre dot */}
                      <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 items-center justify-center">
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: i * 0.08 }}
                          className="w-4 h-4 rounded-full bg-brand border-4 border-charcoal ring-1 ring-brand/40"
                        />
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── INDUSTRY PRESENCE ────────────────────────────── */}
      <section className="py-24 md:py-32 bg-clay-50">
        <div className="container-site">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <FadeIn>
              <p className="section-label mb-4">Where We Operate</p>
            </FadeIn>
            <RevealText>
              <h2 className="section-heading">
                Trusted Across{" "}
                <em className="text-brand not-italic">Industries</em>
              </h2>
            </RevealText>
            <FadeIn delay={0.2}>
              <p className="mt-5 text-charcoal-soft leading-relaxed">
                From residential kitchens to five-star hotel banquet operations
                — TandoorCraft products perform across every segment.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Fine Dining Restaurants",
                desc: "Our restaurant-grade tandoors are the choice of award-winning Indian restaurants globally.",
              },
              {
                title: "Five-Star Hotels",
                desc: "Trusted by leading hotel chains for banquet kitchens, buffet live stations, and specialty restaurants.",
              },
              {
                title: "Home Chefs",
                desc: "Compact, safe, and elegant models designed for passionate home cooks who demand authentic results.",
              },
              {
                title: "Catering Businesses",
                desc: "Portable and semi-portable models built for catering setups that move between venues.",
              },
              {
                title: "Cloud Kitchens",
                desc: "High-throughput restaurant tandoors optimised for commercial delivery kitchen operations.",
              },
              {
                title: "International Exports",
                desc: "Export-ready products with full documentation for UK, EU, US, UAE, and Australian markets.",
              },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.08}>
                <div className="group p-8 bg-white border border-clay-200 hover:border-brand/30 hover:shadow-xl hover:shadow-brand/5 transition-all duration-500">
                  <div className="text-3xl font-display font-bold text-brand/20 group-hover:text-brand/40 transition-colors mb-4 select-none">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="divider-brand mb-4 transition-all duration-500 group-hover:w-10" />
                  <h3 className="font-display text-lg text-charcoal mb-2 group-hover:text-brand transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm text-charcoal-soft leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLOSING CTA ──────────────────────────────────── */}
      <section className="py-24 bg-brand">
        <div className="container-site text-center max-w-2xl mx-auto">
          <RevealText>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-white leading-tight">
              Ready to Experience the TandoorCraft Difference?
            </h2>
          </RevealText>
          <FadeIn delay={0.2}>
            <p className="mt-5 text-white/70 leading-relaxed">
              Browse our complete product catalogue or reach out to our team for
              a personalised recommendation.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="flex flex-wrap justify-center gap-4 mt-10">
              <Link
                to="/products/home-tandoors"
                className="inline-flex items-center gap-2 bg-white text-brand px-8 py-3.5 text-sm font-medium tracking-widest uppercase hover:bg-clay-100 transition-colors"
              >
                View Products
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-white/50 text-white px-8 py-3.5 text-sm font-medium tracking-widest uppercase hover:bg-white/10 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
