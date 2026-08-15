/* ============================================================
   TRUST BAR — now a separate, standalone highlighted section
   ============================================================ */
import { motion } from "framer-motion";
export function TrustBar() {
  const stats = [
    { num: "20+", label: "Years Experience" },
    { num: "150+", label: "Products" },
    { num: "30+", label: "Countries Exports" },
    { num: "10K+", label: "Happy Clients" },
  ];

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ background: "#7a1616" }}
    >
      {/* subtle grain, matches hero texture */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-16 py-10 lg:py-14">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map(({ num, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center py-4 lg:py-0"
              style={{
                borderLeft:
                  i !== 0 ? "1px solid rgba(255,255,255,0.15)" : "none",
                paddingLeft: i !== 0 ? "1.5rem" : "0",
              }}
            >
              <div
                className="flex items-center justify-center rounded-full flex-shrink-0"
                style={{
                  width: "58px",
                  height: "58px",
                  background: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.28)",
                }}
              >
                <StatIcon index={i} light />
              </div>
              <div>
                <p
                  className="font-serif font-bold leading-none"
                  style={{
                    fontSize: "clamp(1.7rem, 2.8vw, 2.5rem)",
                    color: "#fff",
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  {num}
                </p>
                <p
                  className="text-xs sm:text-sm font-medium uppercase mt-1.5"
                  style={{
                    color: "rgba(255,255,255,0.72)",
                    letterSpacing: "0.1em",
                  }}
                >
                  {label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatIcon({ index, light = false }) {
  const stroke = light ? "#ffffff" : "#8b1a1a";
  const icons = [
    <svg
      key={0}
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke={stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>,
    <svg
      key={1}
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke={stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>,
    <svg
      key={2}
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke={stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>,
    <svg
      key={3}
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke={stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>,
  ];
  return icons[index] ?? null;
}
