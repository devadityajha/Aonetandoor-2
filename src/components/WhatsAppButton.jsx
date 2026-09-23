// src/components/WhatsAppButton.jsx
import { motion } from "framer-motion";

const PHONE = "918851477202"; // country code + number, no +, no spaces
const MESSAGE = "Hi! I'd like to request a quote for a commercial tandoor.";

export default function WhatsAppButton() {
  const href = `https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg shadow-black/20 transition-shadow hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 md:h-16 md:w-16"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-ping" />
      <svg
        viewBox="0 0 32 32"
        fill="currentColor"
        className="relative h-7 w-7 text-white md:h-8 md:w-8"
        aria-hidden="true"
      >
        <path d="M16.004 0h-.008C7.174 0 .002 7.174.002 16c0 3.5 1.128 6.744 3.046 9.378L1.05 31.34l6.166-1.971A15.9 15.9 0 0 0 16.004 32C24.83 32 32 24.826 32 16S24.83 0 16.004 0zm9.31 22.594c-.386 1.09-1.918 1.994-3.14 2.258-.836.178-1.928.32-5.604-1.204-4.702-1.948-7.73-6.726-7.966-7.036-.226-.31-1.9-2.53-1.9-4.826 0-2.296 1.166-3.424 1.636-3.904.386-.394.892-.574 1.378-.574.157 0 .298.008.425.014.396.017.595.04.856.664.386.916 1.318 3.212 1.43 3.446.113.234.226.552.068.862-.148.32-.278.46-.512.73-.234.27-.456.476-.69.766-.214.252-.456.522-.186.988.27.456 1.2 1.976 2.568 3.194 1.766 1.572 3.198 2.074 3.712 2.288.383.159.84.121 1.12-.177.355-.383.794-1.018 1.24-1.643.317-.448.718-.504 1.138-.345.428.148 2.714 1.278 3.18 1.51.466.234.774.346.887.542.111.196.111 1.122-.275 2.212z" />
      </svg>
    </motion.a>
  );
}
