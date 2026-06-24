"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
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
        scrolled ? "py-3" : "py-5"
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
        </div>
      </div>
    </motion.header>
  );
}
