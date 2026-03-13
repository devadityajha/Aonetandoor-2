import { useState, useEffect } from "react";
import { sanityClient, QUERIES } from "../lib/sanity";
import { motion } from "framer-motion";
import FadeIn from "../components/ui/FadeIn";
import RevealText from "../components/ui/RevealText";
import { Award } from "lucide-react";

export default function CertificationsPage() {
  const [certs, setCerts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    sanityClient
      .fetch(QUERIES.certifications)
      .then(setCerts)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return (
    <main className="pt-24 pb-24 min-h-screen bg-clay-50">
      {/* Header */}
      <div className="bg-charcoal py-20 md:py-28 mb-16">
        <div className="container-site">
          <FadeIn>
            <p className="section-label text-white/40 mb-3">
              Quality Assurance
            </p>
          </FadeIn>
          <RevealText>
            <h1 className="section-heading text-white">
              Our <em className="text-brand not-italic">Certifications</em>
            </h1>
          </RevealText>
          <FadeIn delay={0.3}>
            <p className="mt-5 text-white/50 max-w-xl leading-relaxed">
              Every TandoorCraft product meets rigorous international safety,
              quality, and manufacturing standards verified by leading
              certification bodies.
            </p>
          </FadeIn>
        </div>
      </div>

      <div className="container-site">
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="aspect-[4/3] bg-clay-200 animate-pulse" />
            ))}
          </div>
        ) : certs.length === 0 ? (
          <div className="text-center py-24 text-charcoal-soft">
            <Award size={48} className="mx-auto mb-4 text-clay-300" />
            <p className="font-display text-2xl">Certifications coming soon.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certs.map((cert, i) => (
              <motion.div
                key={cert._id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.6 }}
                className="group bg-white border border-clay-200 hover:border-brand/30 hover:shadow-xl hover:shadow-brand/5 transition-all duration-500 overflow-hidden"
              >
                {/* Certificate Preview */}
                <div className="aspect-[4/3] bg-clay-100 overflow-hidden">
                  {cert.image ? (
                    <img
                      src={cert.image}
                      alt={cert.name}
                      loading="lazy"
                      className="w-full h-full object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Award size={56} className="text-clay-300" />
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="p-6 border-t border-clay-200 group-hover:border-brand/20 transition-colors">
                  <div className="divider-brand mb-4" />
                  <h3 className="font-display text-xl text-charcoal group-hover:text-brand transition-colors">
                    {cert.name}
                  </h3>
                  {cert.issuingBody && (
                    <p className="text-sm text-charcoal-soft mt-1">
                      {cert.issuingBody}
                    </p>
                  )}
                  {cert.year && (
                    <p className="text-xs text-charcoal-soft/60 mt-1">
                      {cert.year}
                    </p>
                  )}
                  {cert.description && (
                    <p className="text-sm text-charcoal-soft mt-3 leading-relaxed">
                      {cert.description}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
