"use client";

import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { SiGithub, SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import { codingProfiles } from "@/data/timeline";
import { site } from "@/data/site";
import SectionEyebrow from "./SectionEyebrow";

const iconMap = {
  github: SiGithub,
  leetcode: SiLeetcode,
  gfg: SiGeeksforgeeks,
};

const linkMap = {
  github: site.social.github,
  leetcode: site.social.leetcode,
  gfg: "https://geeksforgeeks.org/",
};

export default function CodingProfiles() {
  return (
    <section id="profiles" className="section">
      <SectionEyebrow index="04">Track Record</SectionEyebrow>
      <h2 className="font-display text-3xl sm:text-4xl font-semibold mt-3 mb-12">
        Coding Profiles
      </h2>

      <div className="grid gap-6 sm:grid-cols-3">
        {codingProfiles.map((p, i) => {
          const Icon = iconMap[p.id];
          return (
            <motion.a
              key={p.id}
              href={linkMap[p.id]}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl p-6 flex flex-col items-start hover:shadow-glow transition-shadow"
            >
              <Icon size={30} style={{ color: p.color }} />
              <h3 className="font-display font-semibold mt-4">{p.name}</h3>
              <p className="font-mono text-xs text-signal-600 dark:text-signal-400 mt-1">
                @{p.username}
              </p>
              <p className="text-sm text-slate-600 dark:text-paper/60 mt-3">
                {p.stat}
              </p>
              <span className="mt-5 inline-flex items-center gap-1 text-xs font-mono text-signal-600 dark:text-signal-400">
                Open Profile <FiArrowUpRight size={14} />
              </span>
            </motion.a>
          );
        })}
      </div>
    </section>
  );
}
