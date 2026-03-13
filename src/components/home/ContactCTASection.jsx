import { Link } from "react-router-dom";
import FadeIn from "../ui/FadeIn";
import RevealText from "../ui/RevealText";
import { Phone, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function ContactCTASection() {
  return (
    <section className="py-24 md:py-32 bg-charcoal">
      <div className="container-site text-center max-w-3xl mx-auto">
        <FadeIn>
          <p className="section-label text-white/40 mb-4">Get in Touch</p>
        </FadeIn>
        <RevealText>
          <h2 className="section-heading text-white">
            Let's Build Your Perfect{" "}
            <em className="text-brand not-italic">Tandoor</em>
          </h2>
        </RevealText>
        <FadeIn delay={0.2}>
          <p className="mt-6 text-white/50 leading-relaxed">
            Whether you need a single home tandoor or a fleet for a restaurant
            chain — our team is ready to help you find the right product.
          </p>
        </FadeIn>
        <FadeIn delay={0.3}>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Link to="/contact" className="btn-primary">
              Request a Quote
            </Link>
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noreferrer"
              className="btn-outline border-white/30 text-white/70 hover:border-white hover:text-white flex items-center gap-2"
            >
              <FaWhatsapp size={18} /> Chat on WhatsApp
            </a>
          </div>
        </FadeIn>
        <FadeIn delay={0.4}>
          <div className="flex flex-wrap justify-center gap-8 mt-12 pt-8 border-t border-white/10">
            <a
              href="tel:+919999999999"
              className="flex items-center gap-2 text-sm text-white/50 hover:text-brand transition-colors"
            >
              <Phone size={15} /> +91 99999 99999
            </a>
            <a
              href="mailto:info@tandoorcraft.com"
              className="flex items-center gap-2 text-sm text-white/50 hover:text-brand transition-colors"
            >
              <Mail size={15} /> info@tandoorcraft.com
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
