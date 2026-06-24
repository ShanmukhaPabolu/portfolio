"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiMapPin } from "react-icons/fi";
import { islands } from "@/data/skills";
import SectionEyebrow from "./SectionEyebrow";

export default function SkillExplorer() {
  const [active, setActive] = useState(null);
  const activeIsland = islands.find((isl) => isl.id === active);

  return (
    <section id="explorer" className="section">
      <SectionEyebrow index="06">Skill Explorer</SectionEyebrow>
      <h2 className="font-display text-3xl sm:text-4xl font-semibold mt-3 mb-4">
        Chart the Skill Map
      </h2>
      <p className="text-slate-600 dark:text-paper/60 max-w-xl mb-10">
        Five islands, five disciplines. Click one to see what&rsquo;s been built there.
      </p>

      <div className="glass rounded-2xl relative aspect-[16/10] sm:aspect-[16/9] overflow-hidden">
        {/* contour-style map background */}
        <svg
          className="absolute inset-0 h-full w-full opacity-40"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 Q25,20 50,38 T100,30"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.3"
            className="text-signal-500"
          />
          <path
            d="M0,70 Q30,55 55,72 T100,65"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.3"
            className="text-signal-500"
          />
          <path
            d="M0,10 Q40,2 70,12 T100,5"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.2"
            className="text-amber-500"
          />
        </svg>

        {islands.map((isl) => (
          <motion.button
            key={isl.id}
            onClick={() => setActive(isl.id)}
            style={{ top: `${isl.y}%`, left: `${isl.x}%` }}
            className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
          >
            <motion.span
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-signal-400/15 border border-signal-400/40 text-signal-600 dark:text-signal-300 group-hover:bg-signal-400/30 group-hover:shadow-glow transition-all"
            >
              <FiMapPin size={22} />
            </motion.span>
            <span className="mt-2 font-mono text-[10px] sm:text-xs px-2 py-0.5 rounded-full glass whitespace-nowrap">
              {isl.name}
            </span>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {activeIsland && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center p-5 bg-ink/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 16 }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
              onClick={(e) => e.stopPropagation()}
              className="bracket-corners relative w-full max-w-md rounded-2xl glass bg-paper dark:bg-ink p-7"
            >
              <button
                onClick={() => setActive(null)}
                aria-label="Close"
                className="absolute right-4 top-4 text-slate-400 hover:text-signal-500"
              >
                <FiX size={20} />
              </button>

              <span className="eyebrow">{activeIsland.id}</span>
              <h3 className="font-display text-2xl font-semibold mt-2">
                {activeIsland.name}
              </h3>
              <p className="text-sm text-slate-600 dark:text-paper/60 mt-2">
                {activeIsland.level}
              </p>

              <div className="mt-5">
                <p className="font-mono text-xs uppercase tracking-wide text-signal-600 dark:text-signal-400 mb-2">
                  Technologies
                </p>
                <div className="flex flex-wrap gap-2">
                  {activeIsland.techs.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-xs px-2.5 py-1 rounded-full bg-signal-400/10 text-signal-700 dark:text-signal-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-5">
                <p className="font-mono text-xs uppercase tracking-wide text-signal-600 dark:text-signal-400 mb-2">
                  Used in
                </p>
                <ul className="space-y-1 text-sm text-slate-600 dark:text-paper/70">
                  {activeIsland.projects.map((p) => (
                    <li key={p}>— {p}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
