"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import ThemeToggle from "./ThemeToggle";
import { site } from "@/data/site";

const links = [
  { href: "#home", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-white/80 dark:bg-ink/85 backdrop-blur-md border-b border-slate-900/5 dark:border-white/[0.06] shadow-sm"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="section !py-0 flex items-center justify-between">
        <a
          href="#home"
          className="font-display font-semibold text-lg tracking-tight"
        >
          {site.shortName.split(" ")[0]}
          <span className="text-signal-500">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 rounded-full glass px-2 py-1.5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-4 py-1.5 rounded-full text-sm font-medium text-slate-700 dark:text-paper/80 hover:text-signal-600 dark:hover:text-signal-400 hover:bg-signal-400/10 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="#contact" className="hidden sm:inline-flex btn-ghost !py-2 !px-4 text-xs">
            Let&rsquo;s talk
          </a>
          <ThemeToggle />
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-full glass text-slate-700 dark:text-paper hover:text-signal-500 transition-colors"
            aria-label="Toggle Menu"
          >
            {open ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-down Navigation */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden absolute top-full inset-x-0 bg-white/95 dark:bg-ink/95 backdrop-blur-xl border-b border-slate-900/10 dark:border-white/10 shadow-lg overflow-hidden"
          >
            <div className="section py-6 flex flex-col gap-3 text-center">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="py-2.5 rounded-xl text-sm font-semibold text-slate-700 dark:text-paper/85 hover:text-signal-600 dark:hover:text-signal-400 hover:bg-signal-400/10 transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="btn-primary justify-center py-2.5 mt-2 text-xs"
              >
                Let&rsquo;s talk
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
