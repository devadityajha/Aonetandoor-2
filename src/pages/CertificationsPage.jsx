// src/pages/CertificationsPage.jsx
import { useRef } from "react";
import { motion } from "framer-motion";
import FadeIn from "../components/ui/FadeIn";
import RevealText from "../components/ui/RevealText";

const certifications = [
  {
    id: "ce",
    label: "EU Compliance",
    title: "CE Certification",
    issuer: "U.S. Certification (IABCERT Accredited)",
    year: "2025",
    validity: "Valid until Apr 2028",
    description:
      "Our electric tandoors and commercial kitchen equipment comply with EU Low Voltage Directive 2014/35/EU. Certificate No. US-AEEX-25-11255721, issued April 2025.",
    pdf: "/Certificate-1.pdf", // ← your PDF path
  },

  {
    id: "export",
    label: "Export Compliance",
    title: "Importer-Exporter Code (IEC)",
    issuer: "DGFT — Govt. of India",
    year: "2024",
    validity: "Permanent",
    description:
      "ACE Exporters holds IEC code GEAPP2265A issued by the Directorate General of Foreign Trade, certifying our authorization to import and export commercially across international markets.",
    pdf: "/Certificate-2.pdf",
  },
];

export default function CertificationsPage() {
  return (
    <main className="bg-clay-50 min-h-screen">
      {/* ── Hero ── */}
      <section className="bg-charcoal pt-36 pb-24 overflow-hidden relative">
        {/* Background number watermark */}
        <span className="absolute right-10 top-1/2 -translate-y-1/2 font-display text-[220px] font-semibold text-white/[0.03] leading-none select-none pointer-events-none">
          CERT
        </span>

        <div className="container-site relative z-10">
          <FadeIn>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-5 h-px bg-brand" />
              <p className="section-label text-brand/60">Verified Standards</p>
            </div>
          </FadeIn>
          <RevealText>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1.05] max-w-3xl">
              Certifications
              <br />
              <span className="text-brand">& Compliance</span>
            </h1>
          </RevealText>
          <FadeIn delay={0.3}>
            <p className="mt-8 text-[13.5px] text-white/40 leading-[1.95] max-w-md">
              Every A-One Tandoor product is backed by internationally
              recognised certifications — earned through decades of consistent
              manufacturing standards, not paperwork.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Certification Cards ── */}
      <section className="py-24">
        <div className="container-site">
          {/* Intro row */}
          <FadeIn>
            <div className="flex items-end justify-between mb-16 pb-8 border-b border-clay-200">
              <div>
                <p className="text-[10px] uppercase tracking-ultra text-charcoal/30 mb-3">
                  All Documents
                </p>
                <p className="font-display text-2xl font-semibold text-charcoal">
                  {certifications.length} Active Certifications
                </p>
              </div>
              <p className="hidden md:block text-xs text-charcoal/35 max-w-xs text-right leading-relaxed">
                Certificates are available for download below. For verification,
                contact our compliance team directly.
              </p>
            </div>
          </FadeIn>

          {/* Cards */}
          <div className="flex flex-col gap-px bg-clay-200">
            {certifications.map((cert, i) => (
              <CertCard key={cert.id} cert={cert} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Compliance Note ── */}
      <section className="py-20 border-t border-clay-200">
        <div className="container-site">
          <FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
              <div className="md:col-span-5">
                <p className="text-[10px] uppercase tracking-ultra text-charcoal/30 mb-4">
                  Need Verification?
                </p>
                <h3 className="font-display text-3xl font-semibold text-charcoal leading-tight mb-4">
                  Request official
                  <br />
                  <span className="text-brand">certified copies.</span>
                </h3>
                <div className="divider-brand mt-6" />
              </div>
              <div className="md:col-span-7 md:pt-10">
                <p className="text-[13.5px] text-charcoal/55 leading-[1.95] mb-6 max-w-lg">
                  For importers, distributors, or institutional buyers requiring
                  hard copies or notarised certification documents for customs
                  or procurement, our team can provide these upon request.
                </p>
                <a href="/contact" className="btn-primary">
                  Contact Compliance Team
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}

/* ── Individual Cert Card ── */
function CertCard({ cert, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.08, duration: 0.5, ease: "easeOut" }}
      className="bg-clay-50 group hover:bg-white transition-colors duration-300"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
        {/* Left — index + label */}
        <div className="md:col-span-2 px-8 py-8 flex flex-row md:flex-col justify-between md:justify-start gap-2 border-b md:border-b-0 md:border-r border-clay-200">
          <span className="font-display text-[11px] text-charcoal/20 font-semibold">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="text-[10px] uppercase tracking-ultra text-brand/60 md:mt-auto">
            {cert.label}
          </span>
        </div>

        {/* Center — main info */}
        <div className="md:col-span-7 px-8 py-8 md:border-r border-clay-200">
          <h3 className="font-display text-xl font-semibold text-charcoal mb-1 group-hover:text-brand transition-colors duration-300">
            {cert.title}
          </h3>
          <div className="flex items-center gap-4 mb-5">
            <span className="text-[11px] text-charcoal/40">{cert.issuer}</span>
            <span className="text-[10px] uppercase tracking-ultra text-charcoal/20">
              Since {cert.year}
            </span>
            <span className="text-[10px] uppercase tracking-ultra text-charcoal/20">
              {cert.validity}
            </span>
          </div>
          <p className="text-[13px] text-charcoal/50 leading-[1.85] max-w-lg">
            {cert.description}
          </p>
        </div>

        {/* Right — PDF placeholder */}
        <div className="md:col-span-3 px-8 py-8 flex flex-col items-start md:items-center justify-center gap-4">
          {/* ─────────────────────────────────────────
              PDF PLACEHOLDER — Replace href="#" with
              your actual PDF path or URL when ready.
              e.g. href="/certs/nsf-certificate.pdf"
          ───────────────────────────────────────── */}
          <a
            href={cert.pdf || "#"} // ← REPLACE WITH PDF PATH
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto flex flex-col items-center justify-center gap-3 border border-dashed border-clay-300 hover:border-brand group/pdf transition-colors duration-300 px-6 py-8"
          >
            {/* PDF Icon */}
            <svg
              className="w-7 h-7 text-charcoal/20 group-hover/pdf:text-brand transition-colors duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
              />
            </svg>
            <div className="text-center">
              <p className="text-[11px] font-semibold text-charcoal/40 group-hover/pdf:text-brand transition-colors duration-300">
                View Certificate
              </p>
              <p className="text-[10px] uppercase tracking-ultra text-charcoal/25 mt-0.5">
                PDF Document
              </p>
            </div>
          </a>
          {/* ─── END PDF PLACEHOLDER ─── */}
        </div>
      </div>
    </motion.div>
  );
}
