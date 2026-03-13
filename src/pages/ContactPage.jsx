import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import FadeIn from "../components/ui/FadeIn";
import RevealText from "../components/ui/RevealText";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    subject: "",
  });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    // TODO: Integrate your form backend (e.g. Formspree, custom API)
    setTimeout(() => setStatus("sent"), 1500);
  };

  return (
    <main className="pt-24 pb-24 min-h-screen bg-clay-50">
      {/* Header */}
      <div className="bg-charcoal py-20 md:py-28 mb-0">
        <div className="container-site">
          <FadeIn>
            <p className="section-label text-white/40 mb-3">Reach Out</p>
          </FadeIn>
          <RevealText>
            <h1 className="section-heading text-white">
              Contact <em className="text-brand not-italic">Us</em>
            </h1>
          </RevealText>
        </div>
      </div>

      {/* Map */}
      <div className="w-full h-64 md:h-80 bg-clay-300">
        <iframe
          title="Factory Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502!2d77.1025!3d28.7041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDQyJzE0LjgiTiA3N8KwMDYnMDkuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0, filter: "grayscale(50%) contrast(1.1)" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className="container-site py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <FadeIn>
              <h2 className="section-subheading mb-8">Get in Touch</h2>
            </FadeIn>

            <div className="flex flex-col gap-8">
              {[
                {
                  icon: MapPin,
                  label: "Factory Address",
                  value:
                    "RZ - 59 Santosh Park, Uttam Nagar East Near Shiv Mandir, New Delhi, India - 110059 ",
                },
                {
                  icon: Phone,
                  label: "Phone",
                  value: "+91 9582828397, 9315102828",
                  href: "tel:+919999999999",
                },
                {
                  icon: Mail,
                  label: "Email",
                  value: "exporterspace@gmail.com",
                  href: "exporterspace@gmail.comcom",
                },
                {
                  icon: Clock,
                  label: "Working Hours",
                  value: "Mon – Sat: 9:00 AM – 6:30 PM",
                },
              ].map(({ icon: Icon, label, value, href }) => (
                <FadeIn key={label} delay={0.1}>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-brand/10 flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-brand" />
                    </div>
                    <div>
                      <p className="text-xs text-charcoal-soft uppercase tracking-widest mb-1">
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          className="text-sm text-charcoal hover:text-brand transition-colors whitespace-pre-line"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-sm text-charcoal whitespace-pre-line">
                          {value}
                        </p>
                      )}
                    </div>
                  </div>
                </FadeIn>
              ))}

              {/* WhatsApp */}
              <FadeIn delay={0.5}>
                <a
                  href="https://wa.me/919999999999"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 bg-[#25D366] text-white px-6 py-3 text-sm font-medium hover:bg-[#1ebe59] transition-colors"
                >
                  <FaWhatsapp size={20} /> Chat on WhatsApp
                </a>
              </FadeIn>
            </div>
          </div>

          {/* Contact Form */}
          <FadeIn delay={0.2} className="lg:col-span-2">
            <div className="bg-white p-8 md:p-12 border border-clay-200">
              <h2 className="section-subheading mb-8">Send a Message</h2>

              {status === "sent" ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-16"
                >
                  <div className="w-16 h-16 bg-brand/10 flex items-center justify-center mx-auto mb-4">
                    <Mail size={28} className="text-brand" />
                  </div>
                  <h3 className="font-display text-2xl text-charcoal mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-charcoal-soft">
                    We'll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs text-charcoal-soft uppercase tracking-widest mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="w-full border border-clay-200 bg-clay-50 px-4 py-3 text-sm text-charcoal focus:outline-none focus:border-brand transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-charcoal-soft uppercase tracking-widest mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="w-full border border-clay-200 bg-clay-50 px-4 py-3 text-sm text-charcoal focus:outline-none focus:border-brand transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs text-charcoal-soft uppercase tracking-widest mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full border border-clay-200 bg-clay-50 px-4 py-3 text-sm text-charcoal focus:outline-none focus:border-brand transition-colors"
                        placeholder="+91 99999 99999"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-charcoal-soft uppercase tracking-widest mb-2">
                        Subject
                      </label>
                      <select
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        className="w-full border border-clay-200 bg-clay-50 px-4 py-3 text-sm text-charcoal focus:outline-none focus:border-brand transition-colors"
                      >
                        <option value="">Select subject</option>
                        <option value="quote">Request a Quote</option>
                        <option value="custom">Custom Order</option>
                        <option value="support">After-Sales Support</option>
                        <option value="export">Export Enquiry</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-charcoal-soft uppercase tracking-widest mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full border border-clay-200 bg-clay-50 px-4 py-3 text-sm text-charcoal focus:outline-none focus:border-brand transition-colors resize-none"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "sending" ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </main>
  );
}
