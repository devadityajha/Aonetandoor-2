import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import FadeIn from "../components/ui/FadeIn";
import RevealText from "../components/ui/RevealText";
import { Link } from "react-router-dom";

const MILESTONES = [
  {
    year: "2000",
    title: "Founded in New Delhi",
    desc: "Started as a small workshop crafting tandoors by hand, carrying forward our ancestral craft of tandoor making.",
  },
  {
    year: "2005",
    title: "Expanded Product Range",
    desc: "Introduced cooking ranges, fast food machinery, and catering equipment to serve diverse kitchen needs.",
  },
  {
    year: "2010",
    title: "First International Export",
    desc: "Expanded to international markets, marking the beginning of our global journey as exporters.",
  },
  {
    year: "2015",
    title: "ISO 9001 Certification",
    desc: "Received ISO quality certification, validating our rigorous manufacturing standards.",
  },
  {
    year: "2019",
    title: "10,000 Clients Milestone",
    desc: "Celebrated serving over 10,000 happy customers across restaurants, hotels, and homes worldwide.",
  },
  {
    year: "2024",
    title: "Digital Catalogue Launch",
    desc: "Launched our new digital platform to serve clients across all time zones seamlessly.",
  },
];

const STATS = [
  ["20+", "Years in Business"],
  ["30+", "Countries Served"],
  ["10,000+", "Happy Clients"],
  ["50+", "Product Models"],
];

const EXPERTISE = [
  {
    title: "Tandoors & Clay Products",
    desc: "Crafted with precision and care — traditional clay tandoors, stainless steel tandoors, and custom-made options to suit different culinary needs.",
  },
  {
    title: "Cooking Ranges",
    desc: "Built for both domestic and commercial kitchens, equipped with the latest technology for efficiency and safety.",
  },
  {
    title: "Fast Food Machinery",
    desc: "Fryers, grills, and ovens designed for high-demand fast food establishments, ensuring quick and consistent results.",
  },
  {
    title: "Catering Equipment",
    desc: "From buffet setups to heavy-duty kitchen machinery — ideal for events, hotels, and large-scale food production.",
  },
];

const COMMITMENTS = [
  {
    title: "Quality Assurance",
    desc: "Every product undergoes rigorous quality checks using the finest materials and latest manufacturing techniques.",
  },
  {
    title: "Innovation",
    desc: "We continuously invest in R&D to bring innovative products that enhance productivity and efficiency.",
  },
  {
    title: "Customer Satisfaction",
    desc: "Our customers are at the heart of everything we do. Our dedicated team is always ready to assist with any queries.",
  },
  {
    title: "Global Reach",
    desc: "Strong presence in international markets — we handle all aspects of exporting, ensuring products reach you safely and on time.",
  },
];

const WHY_CHOOSE = [
  {
    title: "Experience & Expertise",
    desc: "With 20 years of experience, we have an unparalleled understanding of tandoor making rooted in generational heritage.",
  },
  {
    title: "Comprehensive Range",
    desc: "Clay tandoors, modern cooking ranges, or fast food machinery — our diverse range caters to both small and large-scale operations.",
  },
  {
    title: "Customization",
    desc: "We offer customized solutions — our team will work with you to design equipment that fits your exact specifications.",
  },
  {
    title: "Trusted by Many",
    desc: "A loyal and growing customer base built on years of delivering quality, reliability, and exceptional service.",
  },
  {
    title: "Ancestral Legacy",
    desc: "Our ancestors pioneered tandoor making in India. That generational craftsmanship is reflected in every product we build.",
  },
  {
    title: "Export Ready",
    desc: "We handle all export documentation and logistics, ensuring your order reaches any corner of the world safely.",
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
            <div className="absolute bottom-1/3 left-1/3 w-96 h-64 rounded-full bg-brand/10 blur-3xl" />
          </div>
        </motion.div>
        <div className="container-site relative z-10 pt-20">
          <FadeIn>
            <p className="section-label text-white/40 mb-4">Who We Are</p>
          </FadeIn>
          <RevealText>
            <h1 className="section-heading text-white max-w-2xl">
              20+ Years of{" "}
              <em className="text-brand not-italic">Tandoor Mastery</em>
            </h1>
          </RevealText>
          <FadeIn delay={0.4}>
            <p className="mt-5 text-white/50 max-w-lg leading-relaxed">
              From a workshop in New Delhi to kitchens across 30+ countries — a
              legacy of craft passed down through generations, built on fire,
              tradition, and uncompromising quality.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── WELCOME / OUR STORY ──────────────────────────── */}
      <section className="py-24 md:py-32 bg-clay-50">
        {/* <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <FadeIn direction="right">
              <div className="relative">
                <div className="aspect-[4/5] bg-gradient-to-br from-clay-200 to-clay-300 overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand" />
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="absolute -bottom-8 -right-6 bg-charcoal p-6 shadow-2xl"
                >
                  <p className="font-display text-4xl font-bold text-brand">
                    24+
                  </p>
                  <p className="text-xs text-white/50 uppercase tracking-widest mt-1">
                    Years of Craft
                  </p>
                </motion.div>
              </div>
            </FadeIn>

            <div className="lg:pt-0 pt-8">
              <FadeIn>
                <p className="section-label mb-4">Our Story</p>
              </FadeIn>
              <RevealText delay={0.1}>
                <h2 className="section-subheading mb-6">
                  Welcome to
                  <br />
                  <em className="text-brand not-italic">A-One Tandoors</em>
                </h2>
              </RevealText>
              <FadeIn delay={0.2}>
                <p className="text-charcoal-soft leading-relaxed mb-4">
                  We are a leading manufacturer and exporter of high-quality
                  kitchen equipment, specializing in tandoors and clay products.
                  Based in Delhi, India, we have been serving our customers for
                  the past 24 years with dedication and excellence.
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p className="text-charcoal-soft leading-relaxed mb-4">
                  Our company has a rich heritage in tandoor making — a craft
                  passed down from our ancestors who were pioneers in
                  introducing tandoors to India. That generational wisdom is
                  reflected in every product we build.
                </p>
              </FadeIn>
              <FadeIn delay={0.4}>
                <p className="text-charcoal-soft leading-relaxed">
                  From a modest workshop in New Delhi to kitchens across 30+
                  countries, A-One Tandoors stands as a testament to tradition
                  meeting innovation.
                </p>
              </FadeIn>
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
        </div> */}

        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
            {/* ── LEFT — Image Column (5 cols) ── */}
            <FadeIn direction="right" className="lg:col-span-5">
              <div className="relative h-full min-h-[520px]">
                {/* Main image */}
                <div className="absolute inset-0 bg-gradient-to-br from-clay-200 to-clay-300 overflow-hidden">
                  {/* Replace with <img> when ready */}
                  {/* Vertical brand stripe — left edge */}
                  <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-brand" />
                  {/* Diagonal texture overlay */}
                  <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(45deg, #1a1a1a 0, #1a1a1a 1px, transparent 0, transparent 50%)",
                      backgroundSize: "12px 12px",
                    }}
                  />
                </div>

                {/* Floating year badge — bottom right, bleeds out */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
                  className="absolute -bottom-6 -right-5 lg:-right-10 bg-charcoal px-7 py-6 z-10"
                >
                  <p className="font-display text-5xl font-semibold text-brand leading-none">
                    20+
                  </p>
                  <p className="text-[10px] uppercase tracking-ultra text-white/40 mt-2">
                    Years of Craft
                  </p>
                </motion.div>

                {/* Floating origin tag — top left corner */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  className="absolute top-6 left-6 flex items-center gap-2"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
                  <span className="text-[10px] uppercase tracking-ultra text-charcoal/50 bg-white/80 px-3 py-1">
                    New Delhi, India
                  </span>
                </motion.div>
              </div>
            </FadeIn>

            {/* ── Vertical Divider (1 col) ── */}
            <div className="hidden lg:flex lg:col-span-1 justify-center pt-10 pb-10">
              <div className="w-px bg-clay-200 h-full" />
            </div>

            {/* ── RIGHT — Content Column (6 cols) ── */}
            <div className="lg:col-span-6 lg:pl-10 pt-14 lg:pt-0 flex flex-col justify-center">
              {/* Label */}
              <FadeIn>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-5 h-px bg-brand" />
                  <p className="section-label">Our Story</p>
                </div>
              </FadeIn>

              {/* Heading — two visual weights */}
              <RevealText delay={0.1}>
                <h2 className="font-display leading-[1.08] text-charcoal mb-10">
                  <span className="block text-[2.6rem] md:text-[3.2rem] font-light tracking-tight text-charcoal/40">
                    Twenty+ years of
                  </span>
                  <span className="block text-[2.8rem] md:text-[3.6rem] font-semibold">
                    craft, fire
                  </span>
                  <span className="block text-[2.8rem] md:text-[3.6rem] font-semibold text-brand">
                    & trust.
                  </span>
                </h2>
              </RevealText>

              {/* Pull quote */}
              <FadeIn delay={0.2}>
                <div className="border-l-[2px] border-brand pl-5 mb-10">
                  <p className="text-base md:text-lg font-display italic text-charcoal/70 leading-snug">
                    "A heritage passed down through generations — the same hands
                    that pioneered the tandoor in India now serve kitchens
                    across 30+ countries."
                  </p>
                </div>
              </FadeIn>

              {/* Body */}
              <FadeIn delay={0.3}>
                <p className="text-[13.5px] text-charcoal/55 leading-[1.95] mb-4 max-w-[420px]">
                  Based in New Delhi, we manufacture and export premium tandoors
                  and clay kitchen equipment — built by craftsmen who treat each
                  unit as a signature, not a product off a line.
                </p>
              </FadeIn>

              <FadeIn delay={0.35}>
                <p className="text-[13.5px] text-charcoal/55 leading-[1.95] mb-12 max-w-[420px]">
                  From a modest workshop to professional kitchens worldwide,
                  every tandoor carries the weight of generational knowledge —
                  refined over decades, never mass-produced.
                </p>
              </FadeIn>

              {/* Certifications */}
              <FadeIn delay={0.45}>
                <div className="border-t border-clay-200 pt-8">
                  <p className="text-[10px] uppercase tracking-ultra text-charcoal/25 mb-6">
                    Certifications & Standards
                  </p>
                  <div className="flex flex-wrap gap-x-8 gap-y-4">
                    {[
                      { label: "NSF Certified", sub: "Food Safety" },
                      { label: "ISO 9001", sub: "Quality Mgmt." },
                      { label: "BIS Approved", sub: "Indian Standard" },
                    ].map((cert) => (
                      <div
                        key={cert.label}
                        className="group flex flex-col gap-1"
                      >
                        <div className="flex items-center gap-2">
                          <div className="w-[5px] h-[5px] bg-brand rotate-45 shrink-0" />
                          <span className="text-sm font-semibold text-charcoal">
                            {cert.label}
                          </span>
                        </div>
                        <span className="text-[10px] uppercase tracking-ultra text-charcoal/30 pl-[18px]">
                          {cert.sub}
                        </span>
                      </div>
                    ))}
                  </div>
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

      {/* ── OUR EXPERTISE ────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-beige-warm">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <FadeIn>
                <p className="section-label mb-4">Our Expertise</p>
              </FadeIn>
              <RevealText delay={0.1}>
                <h2 className="section-subheading mb-6">
                  Built for Every
                  <br />
                  <em className="text-brand not-italic">Kitchen Need</em>
                </h2>
              </RevealText>
              <FadeIn delay={0.2}>
                <p className="text-charcoal-soft leading-relaxed mb-4">
                  At A-One Tandoors, we pride ourselves on our extensive range
                  of kitchen equipment designed to meet the diverse needs of our
                  clients — from home kitchens to large commercial operations.
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p className="text-charcoal-soft leading-relaxed mb-10">
                  Our product portfolio spans tandoors, cooking ranges, fast
                  food machinery, and catering equipment — each built with a
                  focus on efficiency, safety, and durability.
                </p>
              </FadeIn>
              <FadeIn delay={0.4}>
                <Link to="/products/home-tandoors" className="btn-primary">
                  Explore Our Products
                </Link>
              </FadeIn>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {EXPERTISE.map((v, i) => (
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

      {/* ── OUR LEGACY ───────────────────────────────────── */}
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
            <FadeIn delay={0.2}>
              <p className="mt-5 text-white/50 max-w-xl mx-auto leading-relaxed">
                The art of tandoor making is deeply rooted in our family
                history. Our ancestors were pioneers in introducing tandoors to
                India — a rich tradition reflected in every product we make.
              </p>
            </FadeIn>
          </div>

          {/* Timeline */}
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-white/10 hidden lg:block" />
            <div className="flex flex-col gap-0">
              {MILESTONES.map((m, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <FadeIn key={m.year + m.title} delay={i * 0.08}>
                    <div
                      className={`relative grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-0 py-10 ${
                        isLeft ? "" : "lg:flex-row-reverse"
                      }`}
                    >
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

      {/* ── OUR COMMITMENT ───────────────────────────────── */}
      <section className="py-24 md:py-32 bg-clay-50">
        <div className="container-site">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <FadeIn>
              <p className="section-label mb-4">Our Commitment</p>
            </FadeIn>
            <RevealText>
              <h2 className="section-heading">
                What You Can{" "}
                <em className="text-brand not-italic">Expect From Us</em>
              </h2>
            </RevealText>
            <FadeIn delay={0.2}>
              <p className="mt-5 text-charcoal-soft leading-relaxed">
                We are committed to providing our customers with the best
                products and services — from quality assurance to global
                delivery.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMMITMENTS.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.08}>
                <div className="group p-8 bg-white border border-clay-200 hover:border-brand/30 hover:shadow-xl hover:shadow-brand/5 transition-all duration-500 h-full">
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

      {/* ── WHY CHOOSE US ────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-beige-warm">
        <div className="container-site">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <FadeIn>
              <p className="section-label mb-4">Why Choose Us</p>
            </FadeIn>
            <RevealText>
              <h2 className="section-heading">
                Why <em className="text-brand not-italic">A-One Tandoors?</em>
              </h2>
            </RevealText>
            <FadeIn delay={0.2}>
              <p className="mt-5 text-charcoal-soft leading-relaxed">
                A-One Tandoors is your one-stop solution for all kitchen
                equipment needs — a blend of tradition, innovation, and
                unmatched expertise.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CHOOSE.map((item, i) => (
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

      {/* ── LEADERSHIP ───────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-charcoal">
        <div className="container-site">
          <div className="text-center mb-16">
            <FadeIn>
              <p className="section-label text-white/40 mb-3">Leadership</p>
            </FadeIn>
            <RevealText>
              <h2 className="section-heading text-white">
                The People{" "}
                <em className="text-brand not-italic">Behind the Craft</em>
              </h2>
            </RevealText>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-8 max-w-2xl mx-auto">
            {[
              { name: "Rajesh Kumar", role: "Founder & Owner" },
              { name: "Pratyaksh", role: "Director" },
            ].map((person, i) => (
              <FadeIn key={person.name} delay={i * 0.15}>
                <div className="flex-1 text-center group">
                  <div className="w-28 h-28 mx-auto bg-gradient-to-br from-brand-dark to-charcoal-light border border-brand/20 flex items-center justify-center mb-5">
                    <span className="font-display text-3xl font-bold text-brand/60">
                      {person.name.charAt(0)}
                    </span>
                  </div>
                  <div className="w-8 h-0.5 bg-brand mx-auto mb-4" />
                  <h3 className="font-display text-xl text-white">
                    {person.name}
                  </h3>
                  <p className="text-sm text-white/40 uppercase tracking-widest mt-1">
                    {person.role}
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
              Ready to Experience the A-One Difference?
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
