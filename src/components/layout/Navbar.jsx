import { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "../../lib/utils";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Products",
    dropdown: [
      { label: "Home Tandoors", href: "/products/home-tandoors" },
      { label: "Restaurant Tandoors", href: "/products/restaurant-tandoors" },
      { label: "Premium Tandoors", href: "/products/premium-tandoors" },
      { label: "Accessories", href: "/products/accessories" },
      {
        label: "Wood Fire Brick Ovens",
        href: "/products/wood-fire-brick-ovens",
      },
      {
        label: "Utensils",
        sub: [
          { label: "Clay Utensils", href: "/products/clay-tandoors" },
          { label: "Copper Utensils", href: "/products/copper-tandoors" },
        ],
      },
    ],
  },
  { label: "Certifications", href: "/certifications" },
  { label: "Contact", href: "/contact" },
];

function DropdownItem({ item, closeAll }) {
  const [subOpen, setSubOpen] = useState(false);
  const subTimeoutRef = useRef(null);

  const handleSubEnter = () => {
    clearTimeout(subTimeoutRef.current);
    setSubOpen(true);
  };

  const handleSubLeave = () => {
    subTimeoutRef.current = setTimeout(() => setSubOpen(false), 150);
  };

  if (item.sub) {
    return (
      <div
        className="relative"
        onMouseEnter={handleSubEnter}
        onMouseLeave={handleSubLeave}
      >
        <button
          className={`w-full flex items-center justify-between gap-3 px-5 py-3 text-sm transition-colors ${
            subOpen
              ? "text-brand bg-clay-50"
              : "text-charcoal hover:text-brand hover:bg-clay-50"
          }`}
        >
          {item.label}
          <ChevronDown size={13} className="-rotate-90" />
        </button>

        <AnimatePresence>
          {subOpen && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.2 }}
              className="absolute left-full top-0 -ml-1 w-52 bg-white shadow-xl border-t-2 border-brand z-50"
              onMouseEnter={handleSubEnter}
              onMouseLeave={handleSubLeave}
            >
              {item.sub.map((s) => (
                <Link
                  key={s.href}
                  to={s.href}
                  onClick={closeAll}
                  className="block px-5 py-3 text-sm text-charcoal hover:text-brand hover:bg-clay-50 transition-colors"
                >
                  {s.label}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <Link
      to={item.href}
      onClick={closeAll}
      className="block px-5 py-3 text-sm text-charcoal hover:text-brand hover:bg-clay-50 transition-colors"
    >
      {item.label}
    </Link>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  const timeoutRef = useRef(null);

  const handleMouseEnter = (label) => {
    clearTimeout(timeoutRef.current);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 120);
  };

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const isHome = location.pathname === "/";
  const isVisible = !isHome || scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    setScrolled(window.scrollY > 60);
    return () => window.removeEventListener("scroll", onScroll);
  }, [location.pathname]);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isVisible
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-clay-200/50 py-3"
            : "bg-transparent py-5",
        )}
      >
        <div className="container-site flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex flex-col leading-none group">
            <span
              className={cn(
                "font-display text-xl font-bold tracking-tight transition-colors duration-300",
                isVisible ? "text-charcoal" : "text-white",
              )}
            >
              A-One Tandoor
            </span>
            <span
              className={cn(
                "text-[9px] tracking-ultra uppercase transition-colors duration-300",
                isVisible ? "text-brand" : "text-white/70",
              )}
            >
              Since 2005
            </span>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li
                key={link.label}
                className="relative"
                onMouseEnter={() =>
                  link.dropdown && handleMouseEnter(link.label)
                }
                onMouseLeave={() => link.dropdown && handleMouseLeave()}
              >
                {link.href ? (
                  <NavLink
                    to={link.href}
                    className={({ isActive }) =>
                      cn(
                        "text-sm font-medium tracking-wider uppercase transition-colors duration-200",
                        isVisible
                          ? isActive
                            ? "text-brand"
                            : "text-charcoal hover:text-brand"
                          : isActive
                            ? "text-brand-muted"
                            : "text-white/90 hover:text-white",
                      )
                    }
                  >
                    {link.label}
                  </NavLink>
                ) : (
                  <button
                    className={cn(
                      "flex items-center gap-1 text-sm font-medium tracking-wider uppercase transition-colors duration-200",
                      isVisible
                        ? "text-charcoal hover:text-brand"
                        : "text-white/90 hover:text-white",
                    )}
                  >
                    {link.label}
                    <ChevronDown
                      size={14}
                      className={cn(
                        "transition-transform duration-300",
                        activeDropdown === link.label && "rotate-180",
                      )}
                    />
                  </button>
                )}

                {/* Dropdown */}
                {link.dropdown && (
                  <AnimatePresence>
                    {activeDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        transition={{
                          duration: 0.22,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-60"
                        onMouseEnter={() => clearTimeout(timeoutRef.current)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <div className="bg-white shadow-2xl border-t-2 border-brand">
                          {link.dropdown.map((item) => (
                            <DropdownItem
                              key={item.label}
                              item={item}
                              closeAll={() => setActiveDropdown(null)}
                            />
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </li>
            ))}
          </ul>

          {/* CTA + Burger */}
          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className={cn(
                "hidden lg:inline-flex items-center gap-2 px-5 py-2 text-xs font-medium tracking-widest uppercase border transition-all duration-300",
                isVisible
                  ? "border-brand text-brand hover:bg-brand hover:text-white"
                  : "border-white/60 text-white hover:bg-white hover:text-charcoal",
              )}
            >
              Get a Quote
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={cn(
                "lg:hidden p-2 transition-colors",
                isVisible ? "text-charcoal" : "text-white",
              )}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-charcoal pt-24 overflow-y-auto"
          >
            <div className="container-site py-8 flex flex-col gap-1">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                >
                  {link.href ? (
                    <Link
                      to={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-4 border-b border-white/5 text-white/90 font-display text-2xl hover:text-brand transition-colors"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <MobileDropdown
                      link={link}
                      close={() => setMobileOpen(false)}
                    />
                  )}
                </motion.div>
              ))}
              <div className="mt-8">
                <Link
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="w-full bg-brand text-white py-4 flex items-center justify-center text-sm font-bold tracking-widest uppercase hover:bg-brand-dark transition-colors"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function MobileDropdown({ link, close }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/5">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-white/90 font-display text-2xl hover:text-brand transition-colors"
      >
        {link.label}
        <ChevronDown
          size={18}
          className={cn("transition-transform", open && "rotate-180")}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pb-4 flex flex-col gap-1 pl-4">
              {link.dropdown.map((item) =>
                item.sub ? (
                  <div key={item.label}>
                    <p className="py-2 text-white/40 text-xs uppercase tracking-widest pt-4">
                      {item.label}
                    </p>
                    {item.sub.map((s) => (
                      <Link
                        key={s.href}
                        to={s.href}
                        onClick={close}
                        className="block py-2 pl-4 text-white/70 hover:text-brand transition-colors text-base"
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={close}
                    className="block py-2 text-white/70 hover:text-brand transition-colors text-base"
                  >
                    {item.label}
                  </Link>
                ),
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
