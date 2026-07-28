// import { useState } from "react";
// import { motion } from "framer-motion";
// import { Phone, Mail, MapPin, Clock } from "lucide-react";
// import { FaWhatsapp } from "react-icons/fa";
// import FadeIn from "../components/ui/FadeIn";
// import RevealText from "../components/ui/RevealText";

// export default function ContactPage() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//     subject: "",
//   });
//   const [status, setStatus] = useState("idle");

//   const handleChange = (e) =>
//     setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus("sending");
//     // TODO: Integrate your form backend (e.g. Formspree, custom API)
//     setTimeout(() => setStatus("sent"), 1500);
//   };

//   return (
//     <main className="pt-24 pb-24 min-h-screen bg-clay-50">
//       {/* Header */}
//       <div className="bg-charcoal py-20 md:py-28 mb-0">
//         <div className="container-site">
//           <FadeIn>
//             <p className="section-label text-white/40 mb-3">Reach Out</p>
//           </FadeIn>
//           <RevealText>
//             <h1 className="section-heading text-white">
//               Contact <em className="text-brand not-italic">Us</em>
//             </h1>
//           </RevealText>
//         </div>
//       </div>

//       {/* Map */}
//       <div className="w-full h-64 md:h-80 bg-clay-300">
//         <iframe
//           title="Factory Location"
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502!2d77.1025!3d28.7041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDQyJzE0LjgiTiA3N8KwMDYnMDkuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
//           width="100%"
//           height="100%"
//           style={{ border: 0, filter: "grayscale(50%) contrast(1.1)" }}
//           allowFullScreen=""
//           loading="lazy"
//           referrerPolicy="no-referrer-when-downgrade"
//         />
//       </div>

//       <div className="container-site py-16">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
//           {/* Contact Info */}
//           <div className="lg:col-span-1">
//             <FadeIn>
//               <h2 className="section-subheading mb-8">Get in Touch</h2>
//             </FadeIn>

//             <div className="flex flex-col gap-8">
//               {[
//                 {
//                   icon: MapPin,
//                   label: "Factory Address",
//                   value:
//                     "RZ - 59 Santosh Park, Uttam Nagar East Near Shiv Mandir, New Delhi, India - 110059 ",
//                 },
//                 {
//                   icon: Phone,
//                   label: "Phone",
//                   value: "+91 9582828397, 9315102828",
//                   href: "tel:+919999999999",
//                 },
//                 {
//                   icon: Mail,
//                   label: "Email",
//                   value: "exportersace@gmail.com",
//                   href: "exportersace@gmail.com",
//                 },
//                 {
//                   icon: Clock,
//                   label: "Working Hours",
//                   value: "Mon – Sat: 9:00 AM – 6:30 PM",
//                 },
//               ].map(({ icon: Icon, label, value, href }) => (
//                 <FadeIn key={label} delay={0.1}>
//                   <div className="flex items-start gap-4">
//                     <div className="w-10 h-10 bg-brand/10 flex items-center justify-center shrink-0">
//                       <Icon size={18} className="text-brand" />
//                     </div>
//                     <div>
//                       <p className="text-xs text-charcoal-soft uppercase tracking-widest mb-1">
//                         {label}
//                       </p>
//                       {href ? (
//                         <a
//                           href={href}
//                           className="text-sm text-charcoal hover:text-brand transition-colors whitespace-pre-line"
//                         >
//                           {value}
//                         </a>
//                       ) : (
//                         <p className="text-sm text-charcoal whitespace-pre-line">
//                           {value}
//                         </p>
//                       )}
//                     </div>
//                   </div>
//                 </FadeIn>
//               ))}

//               {/* WhatsApp */}
//               <FadeIn delay={0.5}>
//                 <a
//                   href="https://wa.me/9315102828"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="inline-flex items-center gap-3 bg-[#25D366] text-white px-6 py-3 text-sm font-medium hover:bg-[#1ebe59] transition-colors"
//                 >
//                   <FaWhatsapp size={20} /> Chat on WhatsApp
//                 </a>
//               </FadeIn>
//             </div>
//           </div>

//           {/* Contact Form */}
//           <FadeIn delay={0.2} className="lg:col-span-2">
//             <div className="bg-white p-8 md:p-12 border border-clay-200">
//               <h2 className="section-subheading mb-8">Send a Message</h2>

//               {status === "sent" ? (
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   className="text-center py-16"
//                 >
//                   <div className="w-16 h-16 bg-brand/10 flex items-center justify-center mx-auto mb-4">
//                     <Mail size={28} className="text-brand" />
//                   </div>
//                   <h3 className="font-display text-2xl text-charcoal mb-2">
//                     Message Sent!
//                   </h3>
//                   <p className="text-charcoal-soft">
//                     We'll get back to you within 24 hours.
//                   </p>
//                 </motion.div>
//               ) : (
//                 <form onSubmit={handleSubmit} className="space-y-6">
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div>
//                       <label className="block text-xs text-charcoal-soft uppercase tracking-widest mb-2">
//                         Full Name *
//                       </label>
//                       <input
//                         type="text"
//                         name="name"
//                         value={form.name}
//                         onChange={handleChange}
//                         required
//                         className="w-full border border-clay-200 bg-clay-50 px-4 py-3 text-sm text-charcoal focus:outline-none focus:border-brand transition-colors"
//                         placeholder="Your full name"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-xs text-charcoal-soft uppercase tracking-widest mb-2">
//                         Email *
//                       </label>
//                       <input
//                         type="email"
//                         name="email"
//                         value={form.email}
//                         onChange={handleChange}
//                         required
//                         className="w-full border border-clay-200 bg-clay-50 px-4 py-3 text-sm text-charcoal focus:outline-none focus:border-brand transition-colors"
//                         placeholder="your@email.com"
//                       />
//                     </div>
//                   </div>

//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div>
//                       <label className="block text-xs text-charcoal-soft uppercase tracking-widest mb-2">
//                         Phone
//                       </label>
//                       <input
//                         type="tel"
//                         name="phone"
//                         value={form.phone}
//                         onChange={handleChange}
//                         className="w-full border border-clay-200 bg-clay-50 px-4 py-3 text-sm text-charcoal focus:outline-none focus:border-brand transition-colors"
//                         placeholder="+91 99999 99999"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-xs text-charcoal-soft uppercase tracking-widest mb-2">
//                         Subject
//                       </label>
//                       <select
//                         name="subject"
//                         value={form.subject}
//                         onChange={handleChange}
//                         className="w-full border border-clay-200 bg-clay-50 px-4 py-3 text-sm text-charcoal focus:outline-none focus:border-brand transition-colors"
//                       >
//                         <option value="">Select subject</option>
//                         <option value="quote">Request a Quote</option>
//                         <option value="custom">Custom Order</option>
//                         <option value="support">After-Sales Support</option>
//                         <option value="export">Export Enquiry</option>
//                         <option value="other">Other</option>
//                       </select>
//                     </div>
//                   </div>

//                   <div>
//                     <label className="block text-xs text-charcoal-soft uppercase tracking-widest mb-2">
//                       Message *
//                     </label>
//                     <textarea
//                       name="message"
//                       value={form.message}
//                       onChange={handleChange}
//                       required
//                       rows={5}
//                       className="w-full border border-clay-200 bg-clay-50 px-4 py-3 text-sm text-charcoal focus:outline-none focus:border-brand transition-colors resize-none"
//                       placeholder="Tell us about your requirements..."
//                     />
//                   </div>

//                   <button
//                     type="submit"
//                     disabled={status === "sending"}
//                     className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
//                   >
//                     {status === "sending" ? "Sending..." : "Send Message"}
//                   </button>
//                 </form>
//               )}
//             </div>
//           </FadeIn>
//         </div>
//       </div>
//     </main>
//   );
// }

// src/pages/ContactPage.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Home } from "lucide-react";
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
    setTimeout(() => setStatus("sent"), 1500);
  };

  return (
    <main style={{ background: "#f5f2ee", minHeight: "100vh" }}>
      {/* ── Main Content ── */}
      <section className="container-site py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-10 lg:gap-12 items-start">
          {/* ── LEFT COLUMN ── */}
          <div>
            {/* Label */}
            <FadeIn>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-4 h-px" style={{ background: "#8b1a1a" }} />
                <p
                  className="uppercase font-semibold"
                  style={{
                    fontSize: "10px",
                    letterSpacing: "0.2em",
                    color: "#8b1a1a",
                  }}
                >
                  Reach Out
                </p>
              </div>
            </FadeIn>

            {/* Heading */}
            <RevealText>
              <h1
                className="font-serif font-bold leading-tight mb-4"
                style={{
                  fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
                  color: "#1a1410",
                  letterSpacing: "-0.02em",
                }}
              >
                Contact{" "}
                <em className="not-italic" style={{ color: "#8b1a1a" }}>
                  Us
                </em>
              </h1>
            </RevealText>

            {/* Sub-copy */}
            <FadeIn delay={0.1}>
              <p
                className="mb-8"
                style={{
                  fontSize: "14px",
                  color: "#5c4a3a",
                  lineHeight: 1.75,
                  maxWidth: "38ch",
                }}
              >
                We're here to help you with the right kitchen solutions. Reach
                out to us for any queries, quotes, or business inquiries.
              </p>
            </FadeIn>

            {/* Contact Info Items */}
            <div className="flex flex-col gap-5 mb-7">
              {[
                {
                  icon: MapPin,
                  label: "Factory Address",
                  value:
                    "RZ - 59 Santosh Park, Uttam Nagar East\nNear Shiv Mandir, New Delhi – 110059, India",
                  href: null,
                },
                {
                  icon: MapPin,
                  label: "Residential Address",
                  value: "Uttam Nagar, \nNew Delhi – 110001, India",
                  href: null,
                },
                {
                  icon: Phone,
                  label: "Phone",
                  value: "+91 9582828397, +91 9315102828",
                  href: "tel:+919582828397",
                },
                {
                  icon: Mail,
                  label: "Email",
                  value: "exportersace@gmail.com",
                  href: "mailto:exportersace@gmail.com",
                },
                {
                  icon: Clock,
                  label: "Working Hours",
                  value: "Mon – Sat: 9:00 AM – 6:30 PM",
                  href: null,
                },
              ].map(({ icon: Icon, label, value, href }, i) => (
                <FadeIn key={label} delay={i * 0.06}>
                  <div className="flex items-start gap-4">
                    {/* Icon circle */}
                    <div
                      className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                      style={{ background: "rgba(139,26,26,0.07)" }}
                    >
                      <Icon
                        size={17}
                        style={{ color: "#8b1a1a" }}
                        strokeWidth={1.7}
                      />
                    </div>
                    <div>
                      <p
                        className="uppercase font-semibold mb-0.5"
                        style={{
                          fontSize: "9px",
                          letterSpacing: "0.16em",
                          color: "rgba(26,20,16,0.45)",
                        }}
                      >
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          className="transition-colors duration-200"
                          style={{
                            fontSize: "13.5px",
                            color: "#1a1410",
                            lineHeight: 1.6,
                          }}
                          onMouseEnter={(e) =>
                            (e.currentTarget.style.color = "#8b1a1a")
                          }
                          onMouseLeave={(e) =>
                            (e.currentTarget.style.color = "#1a1410")
                          }
                        >
                          {value}
                        </a>
                      ) : (
                        <p
                          style={{
                            fontSize: "13.5px",
                            color: "#1a1410",
                            lineHeight: 1.6,
                            whiteSpace: "pre-line",
                          }}
                        >
                          {value}
                        </p>
                      )}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* Map */}
            <FadeIn delay={0.3}>
              <div
                className="overflow-hidden rounded-xl"
                style={{
                  border: "1px solid rgba(60,40,20,0.1)",
                  boxShadow: "0 2px 12px rgba(60,40,20,0.08)",
                  position: "relative",
                }}
              >
                <iframe
                  title="Factory Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.9!2d77.0574!3d28.6269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d053835572cc5%3A0x5d15f5756e6ab2d0!2sSantosh%20Park%2C%20Uttam%20Nagar%2C%20New%20Delhi%2C%20Delhi%20110059!5e0!3m2!1sen!2sin!4v1718688000000"
                  width="100%"
                  height="220"
                  style={{
                    border: 0,
                    display: "block",
                    filter: "grayscale(20%) contrast(1.05)",
                  }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                {/* Open in Maps overlay button */}
                <a
                  href="https://maps.google.com/?q=Santosh+Park+Uttam+Nagar+New+Delhi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 font-semibold transition-opacity duration-200 hover:opacity-80"
                  style={{
                    background: "#ffffff",
                    color: "#1a73e8",
                    fontSize: "12px",
                    padding: "6px 12px",
                    borderRadius: "4px",
                    boxShadow: "0 1px 6px rgba(0,0,0,0.15)",
                  }}
                >
                  Open in Maps
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              </div>
            </FadeIn>
          </div>

          {/* ── RIGHT COLUMN — Form Card ── */}
          <FadeIn delay={0.15}>
            <div
              className="rounded-2xl p-8 md:p-10"
              style={{
                background: "#ffffff",
                border: "1px solid rgba(60,40,20,0.08)",
                boxShadow: "0 4px 24px rgba(60,40,20,0.07)",
              }}
            >
              <h2
                className="font-serif font-semibold mb-7"
                style={{
                  fontSize: "clamp(1.4rem, 2vw, 1.8rem)",
                  color: "#1a1410",
                  letterSpacing: "-0.01em",
                }}
              >
                Send us a Message
              </h2>

              {status === "sent" ? (
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center justify-center text-center py-16"
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                    style={{ background: "rgba(139,26,26,0.08)" }}
                  >
                    <Mail size={26} style={{ color: "#8b1a1a" }} />
                  </div>
                  <h3
                    className="font-serif font-semibold text-xl mb-2"
                    style={{ color: "#1a1410" }}
                  >
                    Message Sent!
                  </h3>
                  <p style={{ fontSize: "14px", color: "#8a7060" }}>
                    We'll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  {/* Row 1: Name + Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label style={labelStyle}>Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                        style={inputStyle}
                        onFocus={(e) =>
                          (e.currentTarget.style.borderColor = "#8b1a1a")
                        }
                        onBlur={(e) =>
                          (e.currentTarget.style.borderColor =
                            "rgba(60,40,20,0.15)")
                        }
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                        style={inputStyle}
                        onFocus={(e) =>
                          (e.currentTarget.style.borderColor = "#8b1a1a")
                        }
                        onBlur={(e) =>
                          (e.currentTarget.style.borderColor =
                            "rgba(60,40,20,0.15)")
                        }
                      />
                    </div>
                  </div>

                  {/* Row 2: Phone + Subject */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label style={labelStyle}>Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 99999 99999"
                        style={inputStyle}
                        onFocus={(e) =>
                          (e.currentTarget.style.borderColor = "#8b1a1a")
                        }
                        onBlur={(e) =>
                          (e.currentTarget.style.borderColor =
                            "rgba(60,40,20,0.15)")
                        }
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Subject</label>
                      <select
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        style={{ ...inputStyle, cursor: "pointer" }}
                        onFocus={(e) =>
                          (e.currentTarget.style.borderColor = "#8b1a1a")
                        }
                        onBlur={(e) =>
                          (e.currentTarget.style.borderColor =
                            "rgba(60,40,20,0.15)")
                        }
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

                  {/* Message */}
                  <div>
                    <label style={labelStyle}>Message *</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell us about your requirements..."
                      style={{ ...inputStyle, resize: "none" }}
                      onFocus={(e) =>
                        (e.currentTarget.style.borderColor = "#8b1a1a")
                      }
                      onBlur={(e) =>
                        (e.currentTarget.style.borderColor =
                          "rgba(60,40,20,0.15)")
                      }
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full uppercase font-semibold tracking-widest transition-opacity duration-200 hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed"
                    style={{
                      background: "#8b1a1a",
                      color: "#ffffff",
                      padding: "1rem",
                      fontSize: "12px",
                      letterSpacing: "0.18em",
                      border: "none",
                      borderRadius: "6px",
                    }}
                  >
                    {status === "sending" ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}

/* ── Shared input styles ── */
const labelStyle = {
  display: "block",
  fontSize: "9px",
  fontWeight: 600,
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  color: "rgba(26,20,16,0.5)",
  marginBottom: "6px",
};

const inputStyle = {
  width: "100%",
  background: "#f5f2ee",
  border: "1px solid rgba(60,40,20,0.15)",
  borderRadius: "6px",
  padding: "0.75rem 1rem",
  fontSize: "13.5px",
  color: "#1a1410",
  outline: "none",
  transition: "border-color 0.18s ease",
  fontFamily: "inherit",
};
