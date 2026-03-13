// import { motion } from "framer-motion";

// export default function RevealText({ children, className = "", delay = 0 }) {
//   return (
//     <div className={`overflow-hidden ${className}`}>
//       <motion.div
//         initial={{ y: "110%", opacity: 0 }}
//         whileInView={{ y: 0, opacity: 1 }}
//         viewport={{ once: true, margin: "-50px" }}
//         transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
//       >
//         {children}
//       </motion.div>
//     </div>
//   );
// }

import { motion } from "framer-motion";

export default function RevealText({ children, className = "", delay = 0 }) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "0px" }}
        transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}
