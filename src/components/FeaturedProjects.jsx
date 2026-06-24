"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { featuredProjects } from "@/data/projects";
import SectionEyebrow from "./SectionEyebrow";

export default function FeaturedProjects() {
  return (
    <section id="projects" className="section">
      <SectionEyebrow index="01">Featured Work</SectionEyebrow>
      <h2 className="font-display text-3xl sm:text-4xl font-semibold mt-3 mb-12">
        Featured Projects
      </h2>

      <div className="grid gap-8 md:grid-cols-2">
        {featuredProjects.map((p, i) => (
          <motion.article
            key={p.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -6 }}
            className="bracket-corners group glass rounded-2xl p-6 sm:p-8 flex flex-col hover:shadow-glow transition-shadow duration-300"
          >
            <div className="relative mb-6 aspect-[16/9] overflow-hidden rounded-xl bg-gradient-to-br from-signal-500/20 via-ink/40 to-amber-500/10 dark:from-signal-400/15 dark:via-white/5 dark:to-amber-400/10 flex items-center justify-center">
              {p.image ? (
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority={i < 2}
                />
              ) : (
                <span className="font-display text-4xl font-semibold text-signal-600 dark:text-signal-400 transition-transform duration-500 group-hover:scale-110">
                  {p.name}
                </span>
              )}
            </div>

            <h3 className="font-display text-xl font-semibold">{p.name}</h3>
            <p className="text-sm text-signal-600 dark:text-signal-400 font-mono mt-1">
              {p.subtitle}
            </p>
            <p className="mt-4 text-sm text-slate-600 dark:text-paper/65 leading-relaxed flex-1">
              {p.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="font-mono text-xs px-2.5 py-1 rounded-full bg-signal-400/10 text-signal-700 dark:text-signal-300"
                >
                  {s}
                </span>
              ))}
            </div>

            <div className="mt-6 flex gap-3">
              {p.github && (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost !py-2 !px-4 text-xs"
                >
                  <FiGithub size={14} /> Code
                </a>
              )}
              {p.demo ? (
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary !py-2 !px-4 text-xs"
                >
                  <FiExternalLink size={14} /> Live Demo
                </a>
              ) : (
                <span className="font-mono text-xs px-4 py-2 rounded-full border border-dashed border-slate-900/15 dark:border-white/15 text-slate-400 dark:text-paper/40">
                  demo not deployed
                </span>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
