"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSearch, FiRefreshCw } from "react-icons/fi";
import { FaJava } from "react-icons/fa";
import { TbBrandVscode } from "react-icons/tb";
import * as SiIcons from "react-icons/si";
import { skills, skillCategories, islands } from "@/data/skills";
import SectionEyebrow from "./SectionEyebrow";

// Define category colors and style properties
const categoryThemes = {
  Programming: {
    color: "#06b6d4", // Cyan
    textClass: "text-cyan-500 dark:text-cyan-400",
    borderClass: "border-cyan-500/30 hover:border-cyan-400",
    bgClass: "bg-cyan-500/5",
    glowClass: "shadow-[0_0_15px_rgba(6,182,212,0.15)] hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]",
    solidBg: "bg-cyan-500",
    label: "SYS.PRG",
  },
  Frontend: {
    color: "#10b981", // Emerald
    textClass: "text-emerald-500 dark:text-emerald-400",
    borderClass: "border-emerald-500/30 hover:border-emerald-400",
    bgClass: "bg-emerald-500/5",
    glowClass: "shadow-[0_0_15px_rgba(16,185,129,0.15)] hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]",
    solidBg: "bg-emerald-500",
    label: "SYS.FNT",
  },
  Backend: {
    color: "#8b5cf6", // Violet
    textClass: "text-violet-500 dark:text-violet-400",
    borderClass: "border-violet-500/30 hover:border-violet-400",
    bgClass: "bg-violet-500/5",
    glowClass: "shadow-[0_0_15px_rgba(139,92,246,0.15)] hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]",
    solidBg: "bg-violet-500",
    label: "SYS.BCK",
  },
  Database: {
    color: "#f59e0b", // Amber
    textClass: "text-amber-500 dark:text-amber-400",
    borderClass: "border-amber-500/30 hover:border-amber-400",
    bgClass: "bg-amber-500/5",
    glowClass: "shadow-[0_0_15px_rgba(245,158,11,0.15)] hover:shadow-[0_0_20px_rgba(245,158,11,0.3)]",
    solidBg: "bg-amber-500",
    label: "SYS.DB",
  },
  Tools: {
    color: "#94a3b8", // Slate
    textClass: "text-slate-400",
    borderClass: "border-slate-500/30 hover:border-slate-400",
    bgClass: "bg-slate-500/5",
    glowClass: "shadow-[0_0_15px_rgba(148,163,184,0.15)] hover:shadow-[0_0_20px_rgba(148,163,184,0.3)]",
    solidBg: "bg-slate-400",
    label: "SYS.TOL",
  },
};

// Map skill names to BrandIcons
const iconMap = {
  "Java": FaJava,
  "Python": SiIcons.SiPython,
  "C": SiIcons.SiC,
  "JavaScript": SiIcons.SiJavascript,
  "HTML": SiIcons.SiHtml5,
  "Tailwind CSS": SiIcons.SiTailwindcss,
  "React.js": SiIcons.SiReact,
  "Next.js": SiIcons.SiNextdotjs,
  "Node.js": SiIcons.SiNodedotjs,
  "Express.js": SiIcons.SiExpress,
  "Flask": SiIcons.SiFlask,
  "MongoDB": SiIcons.SiMongodb,
  "MySQL": SiIcons.SiMysql,
  "PostgreSQL": SiIcons.SiPostgresql,
  "Git": SiIcons.SiGit,
  "GitHub": SiIcons.SiGithub,
  "VS Code": TbBrandVscode,
  "Postman": SiIcons.SiPostman,
};

// Single 3D Flip Card Component
function SkillCard({ skill, isFlipped, onFlip }) {
  const theme = categoryThemes[skill.category] || categoryThemes.Tools;
  const BrandIcon = iconMap[skill.name];

  // Projects map lookup
  const relatedProjects = useMemo(() => {
    return (
      islands.find((isl) =>
        isl.techs.some((t) => t.toLowerCase() === skill.name.toLowerCase())
      )?.projects || []
    );
  }, [skill]);

  return (
    <motion.div
      layout
      onClick={onFlip}
      className={`flip-card w-full h-[230px] rounded-2xl cursor-pointer ${
        isFlipped ? "flipped" : ""
      }`}
    >
      <div className="flip-card-inner relative w-full h-full transition-transform duration-500">
        
        {/* CARD FRONT FACE */}
        <div
          className={`flip-card-front absolute inset-0 rounded-2xl border p-5 flex flex-col justify-between overflow-hidden bg-slate-950/80 dark:bg-ink/80 backdrop-blur-md transition-all duration-300 ${theme.borderClass} ${theme.glowClass}`}
        >
          {/* Futuristic corner grid watermark */}
          <div className="absolute inset-0 bg-grid-white/[0.01] pointer-events-none" />
          <div className="absolute top-2 right-2 h-1.5 w-1.5 rounded-full" style={{ backgroundColor: theme.color }} />
          
          <div className="flex justify-between items-start">
            <span className="font-mono text-[9px] text-slate-500 dark:text-paper/40 tracking-wider">
              {theme.label}
            </span>
            <span className="font-mono text-[8px] px-2 py-0.5 rounded bg-white/5 text-slate-400">
              ID_{skill.name.substring(0, 3).toUpperCase()}
            </span>
          </div>

          <div className="flex flex-col items-center justify-center py-4">
            {BrandIcon ? (
              <BrandIcon
                size={48}
                className="transition-transform duration-300 group-hover:scale-110 mb-3"
                style={{ color: theme.color }}
              />
            ) : (
              <div
                className="h-12 w-12 rounded-full border border-dashed flex items-center justify-center font-display font-semibold text-lg mb-3"
                style={{ borderColor: theme.color, color: theme.color }}
              >
                {skill.name[0]}
              </div>
            )}
            <h3 className="font-display font-bold text-base text-center mt-1 text-slate-800 dark:text-white truncate max-w-full px-2">
              {skill.name}
            </h3>
          </div>

          <div className="flex justify-between items-center text-[9px] font-mono text-slate-500 dark:text-paper/40">
            <span className="uppercase tracking-wider">[{skill.category}]</span>
          </div>
        </div>

        {/* CARD BACK FACE */}
        <div
          className={`flip-card-back absolute inset-0 rounded-2xl border p-5 flex flex-col justify-between bg-slate-950 dark:bg-ink/95 backdrop-blur-md transition-all duration-300`}
          style={{ borderColor: theme.color }}
        >
          <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />

          <div>
            <div className="flex justify-between items-center mb-4">
              <span className="font-mono text-[9px] text-slate-400 dark:text-paper/40">
                MODULE STATUS
              </span>
              <span className={`font-mono text-[9px] font-semibold ${theme.textClass}`}>
                {skill.level === "Proficient" ? "PRO_GRADE" : "SYS_CORE"}
              </span>
            </div>

            <div className="space-y-3">
              <div>
                <h4 className="font-display text-sm font-bold text-white leading-tight">
                  {skill.name}
                </h4>
                <span className="font-mono text-[8px] text-slate-400 uppercase tracking-widest">
                  {skill.category} Subsystem
                </span>
              </div>
            </div>
          </div>

          <div className="mt-2 space-y-2 pt-2 border-t border-white/[0.06] flex-1 flex flex-col justify-end">
            <div className="flex justify-between items-center text-[9px] font-mono text-slate-500 pt-1">
              <span>STATUS: ONLINE</span>
            </div>
          </div>

        </div>

      </div>
    </motion.div>
  );
}

export default function SkillsTable() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  
  // Track which cards are flipped (store flipped skill names)
  const [flippedCards, setFlippedCards] = useState({});

  const handleFlip = (skillName) => {
    setFlippedCards((prev) => ({
      ...prev,
      [skillName]: !prev[skillName],
    }));
  };

  const filteredSkills = useMemo(() => {
    return skills.filter((s) => {
      const matchesCategory = category === "All" || s.category === category;
      const matchesQuery = s.name.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  return (
    <section id="skills" className="section">
      <SectionEyebrow index="05">Tech Arsenal</SectionEyebrow>
      <h2 className="font-display text-3xl sm:text-4xl font-semibold mt-3 mb-4">
        Interactive Skill Deck
      </h2>
      <p className="text-slate-600 dark:text-paper/60 max-w-xl mb-10">
        A custom inventory deck of technology cards. Filter the catalog, scan skill tags, and flip individual cards to inspect module power ratings and integration telemetry.
      </p>

      {/* CSS 3D Flip Styles embedded natively */}
      <style dangerouslySetInnerHTML={{__html: `
        .flip-card {
          perspective: 1000px;
        }
        .flip-card-inner {
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          transform-style: preserve-3d;
        }
        .flip-card.flipped .flip-card-inner {
          transform: rotateY(180deg);
        }
        .flip-card-front, .flip-card-back {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .flip-card-back {
          transform: rotateY(180deg);
        }
      `}} />

      {/* Control Deck */}
      <div className="flex flex-col sm:flex-row gap-4 mb-10">
        <div className="relative flex-1">
          <FiSearch
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            size={16}
          />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="SCAN INVENTORY FOR TECH CARD…"
            className="w-full glass rounded-full py-3 pl-11 pr-4 text-sm font-mono outline-none focus:shadow-glow transition-shadow uppercase tracking-wider placeholder-slate-400 dark:placeholder-white/30"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {skillCategories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`font-mono text-xs px-4 py-2 rounded-full border transition-colors ${
                category === c
                  ? "bg-signal-500 text-ink border-signal-500 shadow-glow"
                  : "border-slate-900/15 dark:border-white/15 hover:border-signal-400"
              }`}
            >
              {c.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* 3D Cards Grid Deck */}
      <motion.div 
        layout
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5"
      >
        <AnimatePresence>
          {filteredSkills.map((s) => (
            <SkillCard
              key={s.name}
              skill={s}
              isFlipped={!!flippedCards[s.name]}
              onFlip={() => handleFlip(s.name)}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredSkills.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center font-mono text-sm text-slate-400 dark:text-paper/40 py-16 border border-dashed border-slate-200 dark:border-white/5 rounded-2xl mt-4"
        >
          LOG_ERROR: NO MATCHING TECH CARDS IN DECK SCAN.
        </motion.div>
      )}
    </section>
  );
}
