import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram, Youtube } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const categories = [
  { label: "Home Tandoors", href: "/products/home-tandoors" },
  { label: "Restaurant Tandoors", href: "/products/restaurant-tandoors" },
  { label: "Premium Tandoors", href: "/products/premium-tandoors" },
  { label: "Accessories", href: "/products/accessories" },
  { label: "Wood Fire Brick Ovens", href: "/products/wood-fire-brick-ovens" },
  { label: "Clay Utensils", href: "/products/clay-tandoors" },
  { label: "Copper Utensils", href: "/products/copper-tandoors" },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white/80">
      {/* Top CTA Band */}
      <div className="bg-brand py-12">
        <div className="container-site flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="section-label text-white/60">
              Ready to Elevate Your Kitchen?
            </p>
            <h3 className="font-display text-3xl text-white mt-1">
              Craft Your Perfect Tandoor
            </h3>
          </div>
          <Link
            to="/contact"
            className="btn-outline border-white text-white hover:bg-white hover:text-brand"
          >
            Request a Custom Quote
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-site py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="lg:col-span-1">
          <Link to="/" className="inline-block mb-4">
            <span className="font-display text-2xl font-bold text-white">
              TandoorCraft
            </span>
            <span className="block text-[9px] text-brand tracking-ultra uppercase mt-0.5">
              Since 2005
            </span>
          </Link>
          <p className="text-sm text-white/50 leading-relaxed mt-4 max-w-xs">
            Aone Tandoor is your one-stop shop for premium commercial kitchen
            equipment. From traditional clay pot tandoors to modern electric
            models, we offer a wide range of products designed to elevate your
            culinary experience.
          </p>
          <div className="flex items-center gap-4 mt-6">
            <a
              href="#"
              aria-label="Instagram"
              className="p-2 border border-white/20 text-white/50 hover:border-brand hover:text-brand transition-colors"
            >
              <Instagram size={16} />
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="p-2 border border-white/20 text-white/50 hover:border-brand hover:text-brand transition-colors"
            >
              <Youtube size={16} />
            </a>
            <a
              href="https://wa.me/919999999999"
              aria-label="WhatsApp"
              className="p-2 border border-white/20 text-white/50 hover:border-brand hover:text-brand transition-colors"
            >
              <FaWhatsapp size={16} />
            </a>
          </div>
        </div>

        {/* Products */}
        <div>
          <h4 className="text-xs tracking-ultra uppercase text-white/40 mb-5">
            Products
          </h4>
          <ul className="flex flex-col gap-3">
            {categories.map((c) => (
              <li key={c.href}>
                <Link
                  to={c.href}
                  className="text-sm text-white/60 hover:text-brand transition-colors"
                >
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-xs tracking-ultra uppercase text-white/40 mb-5">
            Company
          </h4>
          <ul className="flex flex-col gap-3">
            {[
              ["About Us", "/about"],
              ["Certifications", "/certifications"],
              ["Contact", "/contact"],
            ].map(([label, href]) => (
              <li key={href}>
                <Link
                  to={href}
                  className="text-sm text-white/60 hover:text-brand transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-xs tracking-ultra uppercase text-white/40 mb-5">
            Contact Us
          </h4>
          <ul className="flex flex-col gap-4">
            <li className="flex items-start gap-3">
              <MapPin size={15} className="text-brand mt-0.5 shrink-0" />
              <span className="text-sm text-white/60 leading-relaxed">
                RZ - 59 Santosh Park, Uttam Nagar East Near Shiv Mandir,
                <br />
                New Delhi - 110059 India
              </span>
            </li>
            <li>
              <a
                href="tel:+91 9582828397, +91 9315102828"
                className="flex items-center gap-3 text-sm text-white/60 hover:text-brand transition-colors"
              >
                <Phone size={15} className="text-brand shrink-0" />
                +91 9582828397 <br /> +91 9315102828
              </a>
            </li>
            <li>
              <a
                href="mailto:info@tandoorcraft.com"
                className="flex items-center gap-3 text-sm text-white/60 hover:text-brand transition-colors"
              >
                <Mail size={15} className="text-brand shrink-0" />
                info@tandoorcraft.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-site py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} TandoorCraft. All rights reserved.
          </p>
          <p className="text-xs text-white/30">
            Designed & Built with precision in India 🇮🇳
          </p>
        </div>
      </div>
    </footer>
  );
}
