// src/pages/CertificationsPage.jsx
import { useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import FadeIn from "../components/ui/FadeIn";
import RevealText from "../components/ui/RevealText";

const certifications = [
  {
    id: "ce",
    label: "EU Compliance",
    title: "CE Certification",
    issuer: "U.S. Certification (IABCERT Accredited)",
    since: "SINCE 2025",
    validity: "VALID UNTIL APR 2028",
    description:
      "Our electric tandoors and commercial kitchen equipment comply with EU Low Voltage Directive 2014/35/EU. Certificate No. US-AEEX-25-11255721, issued April 2025.",
    pdf: "/Certificate-1.pdf",
    // thumb: "/cert-thumb-1.jpg",
    thumb: "/CE.png",
  },
  {
    id: "export",
    label: "Export Compliance",
    title: "Importer-Exporter Code (IEC)",
    issuer: "DGFT — Govt. of India",
    since: "SINCE 2024",
    validity: "PERMANENT",
    description:
      "ACE Exporters holds IEC code GEAPP2265A issued by the Directorate General of Foreign Trade, certifying our authorization to import and export commercially across international markets.",
    pdf: "/Certificate-2.pdf",
    // thumb: "/cert-thumb-2.jpg",
    thumb: "/IEC.png",
  },
];

export default function CertificationsPage() {
  return (
    <main style={{ background: "#ffffff", minHeight: "100vh" }}>
      {/* ── Breadcrumb ── */}
      <div
        style={{
          background: "#ffffff",
          borderBottom: "1px solid rgba(60,40,20,0.08)",
        }}
      >
        <div
          className="container-site py-3 flex items-center gap-2 text-xs"
          style={{ color: "#8a7060" }}
        >
          <Link to="/" style={{ color: "#8a7060" }} className="hover:underline">
            Home
          </Link>
          <span style={{ color: "#c5b8ae" }}>›</span>
          <span style={{ color: "#1a1410", fontWeight: 500 }}>
            Certifications
          </span>
        </div>
      </div>

      {/* ── Hero — light, off-white ── */}
      <section
        style={{
          background: "#f5f2ee",
          paddingTop: "3rem",
          paddingBottom: "3rem",
        }}
      >
        <div className="container-site">
          <FadeIn>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-4 h-px" style={{ background: "#8b1a1a" }} />
              <p
                className="uppercase font-semibold"
                style={{
                  color: "#8b1a1a",
                  fontSize: "10px",
                  letterSpacing: "0.2em",
                }}
              >
                Verified Standards
              </p>
            </div>
          </FadeIn>

          <RevealText>
            <h1
              className="font-serif font-bold leading-tight"
              style={{
                fontSize: "clamp(2.4rem, 5vw, 4rem)",
                color: "#1a1410",
                letterSpacing: "-0.02em",
                maxWidth: "14ch",
              }}
            >
              Certifications &{" "}
              <em className="not-italic" style={{ color: "#8b1a1a" }}>
                Compliance
              </em>
            </h1>
          </RevealText>

          {/* Red underline accent */}
          <div
            className="mt-4 mb-5"
            style={{ width: "2.5rem", height: "2px", background: "#8b1a1a" }}
          />

          <FadeIn delay={0.2}>
            <p
              style={{
                fontSize: "13.5px",
                color: "#5c4a3a",
                lineHeight: 1.9,
                maxWidth: "48ch",
              }}
            >
              Every A-One Tandoor product is backed by internationally
              recognised certifications — earned through decades of consistent
              manufacturing standards, not paperwork.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Certification Cards ── */}
      <section
        style={{
          paddingTop: "3rem",
          paddingBottom: "3rem",
          background: "#ffffff",
        }}
      >
        <div className="container-site">
          {/* Intro row */}
          <FadeIn>
            <div
              className="flex items-end justify-between pb-6 mb-8"
              style={{ borderBottom: "1px solid rgba(60,40,20,0.1)" }}
            >
              <div>
                <p
                  className="uppercase mb-2"
                  style={{
                    fontSize: "10px",
                    letterSpacing: "0.16em",
                    color: "rgba(26,20,16,0.35)",
                  }}
                >
                  All Documents
                </p>
                <p
                  className="font-serif font-semibold"
                  style={{
                    fontSize: "clamp(1.3rem, 2vw, 1.6rem)",
                    color: "#1a1410",
                  }}
                >
                  {certifications.length} Active Certifications
                </p>
              </div>
              <p
                className="hidden md:block text-right leading-relaxed"
                style={{
                  fontSize: "12px",
                  color: "rgba(26,20,16,0.4)",
                  maxWidth: "28ch",
                }}
              >
                Certificates are available for download below.
                <br />
                For verification, contact our compliance team directly.
              </p>
            </div>
          </FadeIn>

          {/* Cards */}
          <div className="flex flex-col" style={{ gap: "0" }}>
            {certifications.map((cert, i) => (
              <CertCard key={cert.id} cert={cert} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Compliance Note ── */}
      <section
        style={{
          borderTop: "1px solid rgba(60,40,20,0.08)",
          background: "#f5f2ee",
          padding: "2.5rem 0",
        }}
      >
        <div className="container-site">
          <FadeIn>
            <div
              className="flex flex-col md:flex-row items-start md:items-center gap-6 rounded-2xl px-6 py-6 md:px-10 md:py-8"
              style={{
                background: "#ffffff",
                border: "1px solid rgba(60,40,20,0.08)",
                boxShadow: "0 1px 4px rgba(60,40,20,0.05)",
              }}
            >
              {/* Icon */}
              <div
                className="shrink-0 w-14 h-14 rounded-full flex items-center justify-center"
                style={{ background: "rgba(139,26,26,0.07)" }}
              >
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#8b1a1a"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <circle cx="10" cy="13" r="2" />
                  <path d="m20 21-2.5-2.5" />
                  <path d="M15.5 16.5 13 14" />
                </svg>
              </div>

              {/* Text */}
              <div className="flex-1">
                <p
                  className="font-semibold mb-1"
                  style={{ fontSize: "1rem", color: "#1a1410" }}
                >
                  Request official certified copies.
                </p>
                <p
                  style={{
                    fontSize: "13px",
                    color: "#8a7060",
                    lineHeight: 1.7,
                  }}
                >
                  For importers, distributors, or institutional buyers requiring
                  hard copies or notarised certification documents.
                </p>
              </div>

              {/* CTA */}
              <Link
                to="/contact"
                className="shrink-0 inline-flex items-center gap-2 font-semibold uppercase transition-opacity duration-200 hover:opacity-90"
                style={{
                  background: "#8b1a1a",
                  color: "#ffffff",
                  padding: "0.85rem 1.75rem",
                  fontSize: "12px",
                  letterSpacing: "0.1em",
                  borderRadius: "8px",
                  whiteSpace: "nowrap",
                }}
              >
                Contact Compliance Team
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
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
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        delay: index * 0.08,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{
        borderTop: index === 0 ? "1px solid rgba(60,40,20,0.1)" : "none",
        borderBottom: "1px solid rgba(60,40,20,0.1)",
        background: "#ffffff",
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 items-stretch">
        {/* Col 1 — Index + Label */}
        <div
          className="md:col-span-2 px-6 py-8 flex flex-row md:flex-col justify-between md:justify-start gap-2"
          style={{ borderRight: "1px solid rgba(60,40,20,0.08)" }}
        >
          <span
            className="font-serif font-semibold"
            style={{ fontSize: "1.1rem", color: "rgba(26,20,16,0.18)" }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <span
            className="uppercase font-semibold md:mt-auto"
            style={{
              fontSize: "9px",
              letterSpacing: "0.18em",
              color: "#8b1a1a",
            }}
          >
            {cert.label}
          </span>
        </div>

        {/* Col 2 — Main Info */}
        <div
          className="md:col-span-7 px-6 md:px-8 py-8"
          style={{ borderRight: "1px solid rgba(60,40,20,0.08)" }}
        >
          <h3
            className="font-serif font-semibold mb-2"
            style={{
              fontSize: "clamp(1.1rem, 1.5vw, 1.3rem)",
              color: "#1a1410",
            }}
          >
            {cert.title}
          </h3>

          {/* Meta badges */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span style={{ fontSize: "11px", color: "rgba(26,20,16,0.45)" }}>
              {cert.issuer}
            </span>
            <span style={{ fontSize: "10px", color: "rgba(26,20,16,0.0)" }}>
              •
            </span>
            <span
              className="uppercase font-semibold"
              style={{
                fontSize: "9px",
                letterSpacing: "0.14em",
                color: "#8b1a1a",
                background: "rgba(139,26,26,0.07)",
                padding: "2px 8px",
                borderRadius: "4px",
              }}
            >
              {cert.since}
            </span>
            <span
              className="uppercase font-semibold"
              style={{
                fontSize: "9px",
                letterSpacing: "0.14em",
                color: "#6b7280",
                background: "rgba(107,114,128,0.08)",
                padding: "2px 8px",
                borderRadius: "4px",
              }}
            >
              {cert.validity}
            </span>
          </div>

          <p
            style={{
              fontSize: "13px",
              color: "#8a7060",
              lineHeight: 1.85,
              maxWidth: "56ch",
            }}
          >
            {cert.description}
          </p>
        </div>

        {/* Col 3 — Thumbnail + PDF */}
        <div className="md:col-span-3 px-6 py-8 flex flex-row md:flex-col items-center justify-center gap-5">
          {/* Certificate thumbnail preview */}
          <div
            className="overflow-hidden rounded-lg shrink-0"
            style={{
              width: "90px",
              height: "115px",
              background: "#ede8e2",
              border: "1px solid rgba(60,40,20,0.1)",
              boxShadow: "0 2px 8px rgba(60,40,20,0.1)",
            }}
          >
            <img
              src={cert.thumb}
              alt={`${cert.title} certificate preview`}
              className="w-full h-full object-contain p-2"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </div>

          {/* View PDF link */}
          <a
            href={cert.pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="group/pdf flex flex-col items-center gap-1.5 transition-colors duration-200"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#8b1a1a"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover/pdf:opacity-70 transition-opacity"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <p
              className="uppercase font-semibold text-center"
              style={{
                fontSize: "9px",
                letterSpacing: "0.14em",
                color: "#8b1a1a",
              }}
            >
              View Certificate
            </p>
            <p
              className="uppercase text-center"
              style={{
                fontSize: "8px",
                letterSpacing: "0.12em",
                color: "rgba(26,20,16,0.3)",
              }}
            >
              PDF Document
            </p>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
