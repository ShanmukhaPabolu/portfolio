"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { projects } from "@/data/projects";
import SectionEyebrow from "./SectionEyebrow";

export default function ProjectArchive() {
  const archiveProjects = projects.filter((p) => !p.featured);

  return (
    <section id="archive" className="section">
      <SectionEyebrow index="02">Project Archive</SectionEyebrow>
      <div className="flex flex-wrap items-end justify-between gap-6 mt-3 mb-10">
        <h2 className="font-display text-3xl sm:text-4xl font-semibold">
          More Projects
        </h2>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {archiveProjects.map((p) => (
            <motion.div
              key={p.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="glass rounded-xl p-6 flex flex-col hover:-translate-y-1 hover:shadow-glow transition-all duration-300"
            >
              <span className="font-mono text-[11px] uppercase tracking-wide text-signal-600 dark:text-signal-400">
                {p.category}
              </span>
              <h3 className="font-display font-semibold text-lg mt-2">{p.name}</h3>
              <p className="text-sm text-slate-600 dark:text-paper/60 mt-2 leading-relaxed flex-1">
                {p.subtitle}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.stack.slice(0, 3).map((s) => (
                  <span
                    key={s}
                    className="font-mono text-[11px] px-2 py-0.5 rounded-full bg-signal-400/10 text-signal-700 dark:text-signal-300"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex gap-2">
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${p.name} GitHub repository`}
                    className="p-2 rounded-full border border-slate-900/15 dark:border-white/15 hover:border-signal-400 hover:text-signal-500 transition-colors"
                  >
                    <FiGithub size={14} />
                  </a>
                )}
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${p.name} live demo`}
                    className="p-2 rounded-full border border-slate-900/15 dark:border-white/15 hover:border-signal-400 hover:text-signal-500 transition-colors"
                  >
                    <FiExternalLink size={14} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
