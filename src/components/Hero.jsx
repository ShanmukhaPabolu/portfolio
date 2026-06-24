"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiArrowDown, FiDownload } from "react-icons/fi";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiMongodb,
  SiPython,
  SiFlask,
  SiTailwindcss,
  SiJavascript,
} from "react-icons/si";
import CircuitBackground from "./CircuitBackground";
import { site } from "@/data/site";

const floatingIcons = [
  { Icon: SiReact, top: "18%", left: "12%", delay: 0 },
  { Icon: SiNextdotjs, top: "68%", left: "8%", delay: 0.6 },
  { Icon: SiNodedotjs, top: "24%", left: "85%", delay: 1.1 },
  { Icon: SiMongodb, top: "76%", left: "88%", delay: 0.3 },
  { Icon: SiPython, top: "10%", left: "55%", delay: 1.5 },
  { Icon: SiFlask, top: "85%", left: "48%", delay: 0.9 },
  { Icon: SiTailwindcss, top: "45%", left: "5%", delay: 1.8 },
  { Icon: SiJavascript, top: "50%", left: "92%", delay: 0.4 },
];

function useTypingEffect(words, speed = 65, pause = 1400) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    let timeout;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), speed);
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), speed / 2);
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setIndex((i) => i + 1);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, index, words, speed, pause]);

  return text;
}

export default function Hero() {
  const typed = useTypingEffect(site.typingWords);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <CircuitBackground />

      {/* floating tech icons */}
      <div className="pointer-events-none absolute inset-0 hidden sm:block">
        {floatingIcons.map(({ Icon, top, left, delay }, i) => (
          <motion.div
            key={i}
            className="absolute text-signal-500/30 dark:text-signal-400/25"
            style={{ top, left }}
            animate={{ y: [0, -14, 0] }}
            transition={{
              duration: 5 + (i % 3),
              repeat: Infinity,
              ease: "easeInOut",
              delay,
            }}
          >
            <Icon size={32} />
          </motion.div>
        ))}
      </div>

      <div className="section relative z-10 !py-0 text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="eyebrow justify-center mb-5 flex"
        >
          available for full-stack &amp; AI engineering roles
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display font-semibold text-balance text-4xl sm:text-6xl md:text-7xl tracking-tight"
        >
          {site.shortName}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 font-display text-xl sm:text-2xl text-signal-600 dark:text-signal-400"
        >
          {site.role}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-6 h-8 font-mono text-base sm:text-lg text-slate-600 dark:text-paper/70"
        >
          I build{" "}
          <span className="text-signal-600 dark:text-signal-400 font-medium">
            {typed}
          </span>
          <span className="inline-block w-[2px] h-5 align-middle bg-signal-500 ml-1 animate-blink" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mx-auto mt-6 max-w-xl text-balance text-slate-600 dark:text-paper/60"
        >
          {site.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a href="#projects" className="btn-primary">
            View Projects
          </a>
          <a href={site.resumeFile} download className="btn-ghost">
            <FiDownload size={16} /> Download Resume
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#projects"
        aria-label="Scroll to projects"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-signal-500"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <FiArrowDown size={22} />
      </motion.a>
    </section>
  );
}
