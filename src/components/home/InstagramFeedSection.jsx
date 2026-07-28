import { motion } from "framer-motion";

const FEED_IMAGES = [
  { src: "/insta1.jpg", alt: "Stainless steel tandoor in kitchen" },
  { src: "/insta2.jpg", alt: "Copper tandoor closeup" },
  { src: "/insta3.jpg", alt: "Commercial kitchen setup" },
  { src: "/insta4.jpg", alt: "Chef cooking in professional kitchen" },
  { src: "/insta5.jpg", alt: "A-One Tandoor product" },
  { src: "/insta6.jpg", alt: "Seekh kebab on grill" },
];

export default function InstagramFeedSection() {
  return (
    <section className="py-10 md:py-14" style={{ background: "#f5f2ee" }}>
      <div className="container-site">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-6 md:mb-8">
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
              Follow Us on Instagram
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
            Instagram <span style={{ color: "#8b1a1a" }}>Feed</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.14 }}
            className="mt-3 text-sm md:text-base"
            style={{ color: "#8a7060" }}
          >
            Follow us for the latest updates, product highlights and
            behind-the-scenes.
          </motion.p>
        </div>

        {/* Image Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-3"
        >
          {FEED_IMAGES.map((img, i) => (
            <motion.a
              key={i}
              href="https://www.instagram.com/aonetandoor"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.06,
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative block overflow-hidden"
              style={{
                borderRadius: "6px",
                aspectRatio: "1 / 1",
              }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                style={{ display: "block" }}
              />

              {/* Hover overlay */}
              <div
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "rgba(26,20,16,0.45)" }}
              >
                {/* Instagram icon */}
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="0.8"
                    fill="#fff"
                    stroke="none"
                  />
                </svg>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-6 flex justify-center"
        >
          <a
            href="https://www.instagram.com/aonetandoor"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 text-xs font-semibold uppercase tracking-widest transition-all duration-300"
            style={{
              background: "#8b1a1a",
              color: "#ffffff",
              letterSpacing: "0.16em",
              border: "1px solid #8b1a1a",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "#8b1a1a";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#8b1a1a";
              e.currentTarget.style.color = "#ffffff";
            }}
          >
            {/* Instagram icon small */}
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle
                cx="17.5"
                cy="6.5"
                r="0.8"
                fill="currentColor"
                stroke="none"
              />
            </svg>
            Follow Us @AOneTandoor
          </a>
        </motion.div>
      </div>
    </section>
  );
}
