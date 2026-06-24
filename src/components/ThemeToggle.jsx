"use client";

import { motion } from "framer-motion";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "@/context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme();
  if (!mounted) return <div className="h-10 w-16" />;

  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle color theme"
      className="relative flex h-10 w-16 items-center rounded-full glass px-1 transition-colors"
    >
      <motion.span
        layout
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className="flex h-8 w-8 items-center justify-center rounded-full bg-signal-400 text-ink shadow-glow"
        style={{ marginLeft: isDark ? "auto" : 0 }}
      >
        {isDark ? <FiMoon size={16} /> : <FiSun size={16} />}
      </motion.span>
    </button>
  );
}
