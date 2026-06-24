"use client";

import { motion } from "framer-motion";
import { FiDownload, FiExternalLink, FiAward, FiBookOpen, FiCpu } from "react-icons/fi";
import { site } from "@/data/site";
import SectionEyebrow from "./SectionEyebrow";

export default function ResumeCenter() {
  const highlights = [
    {
      icon: FiBookOpen,
      title: "Academic Track",
      desc: "B.Tech in IoT & Cyber Security with a 9.31 CGPA at SRKR Engineering College.",
      color: "#5EEAD4", // cyan
    },
    {
      icon: FiAward,
      title: "Hackathon & Contests",
      desc: "Vedic Vision 2K24 Hackathon Winner (Special Prize) & HackSprint 4th Place.",
      color: "#FBBF24", // amber
    },
    {
      icon: FiCpu,
      title: "Core Competencies",
      desc: "Full-stack web development (React/Flask/Next.js) & Embedded systems/IoT.",
      color: "#2DD4BF", // soft cyan
    },
  ];

  return (
    <section id="resume" className="section">
      <SectionEyebrow index="06">Resume</SectionEyebrow>
      <h2 className="font-display text-3xl sm:text-4xl font-semibold mt-3 mb-12">
        Resume Center
      </h2>

      <div className="grid gap-12 lg:grid-cols-12 items-center">
        {/* Left Side: Summary & Highlights */}
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold font-display text-slate-850 dark:text-paper">
              Professional Snapshot
            </h3>
            <p className="text-slate-600 dark:text-paper/70 leading-relaxed max-w-xl">
              An overview of my academic achievements, hackathon victories, and technical expertise. 
              Download the full PDF for a detailed look at my experience, projects, and coursework.
            </p>
          </div>

          {/* Highlights List */}
          <div className="space-y-4">
            {highlights.map((h, idx) => {
              const Icon = h.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="flex gap-4 p-4 rounded-xl glass border border-slate-900/5 dark:border-white/5 hover:border-signal-500/30 transition-colors duration-300"
                >
                  <div 
                    className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center bg-signal-500/10"
                    style={{ color: h.color }}
                  >
                    <Icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-slate-800 dark:text-paper">{h.title}</h4>
                    <p className="text-xs text-slate-600 dark:text-paper/60 mt-1 leading-relaxed">{h.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href={site.resumeFile}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center gap-2 px-6 py-3 rounded-full hover:shadow-glow transition-shadow"
            >
              <FiExternalLink size={16} /> View Full Resume
            </a>
            <a
              href={site.resumeFile}
              download="Shanmukha_Rani_Resume.pdf"
              className="btn-ghost flex items-center gap-2 px-6 py-3 rounded-full border border-slate-900/15 dark:border-white/15 hover:border-signal-400 transition-colors"
            >
              <FiDownload size={16} /> Download PDF
            </a>
          </div>
        </div>

        {/* Right Side: High-Fidelity Resume Mockup */}
        <motion.div 
          className="lg:col-span-5 flex justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative group w-full max-w-[320px] aspect-[1/1.414] rounded-2xl p-6 sm:p-8 flex flex-col justify-between overflow-hidden glass border border-slate-900/15 dark:border-white/15 shadow-2xl transition-all duration-500 hover:shadow-glow hover:border-signal-500/40 bg-gradient-to-b from-ink-soft/30 to-ink-deep/50 dark:from-slate-850/40 dark:to-ink/85">
            
            {/* Ambient glowing background circles */}
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-signal-500/10 rounded-full blur-3xl group-hover:bg-signal-500/20 transition-colors duration-500" />
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-amber-500/5 rounded-full blur-3xl group-hover:bg-amber-500/15 transition-colors duration-500" />

            {/* Stylized Document Layout */}
            <div className="space-y-6 pointer-events-none z-10">
              {/* Mock Resume Header */}
              <div className="space-y-2">
                <div className="h-4 w-3/4 rounded bg-slate-900/10 dark:bg-white/10" />
                <div className="h-2 w-1/2 rounded bg-signal-500/40" />
              </div>

              {/* Mock Resume Line groups representing sections */}
              <div className="space-y-4 pt-4 border-t border-dashed border-slate-900/10 dark:border-white/10">
                <div className="space-y-2">
                  <div className="h-2.5 w-1/3 rounded bg-slate-900/20 dark:bg-white/20" />
                  <div className="h-2 w-full rounded bg-slate-900/10 dark:bg-white/10" />
                  <div className="h-2 w-5/6 rounded bg-slate-900/10 dark:bg-white/10" />
                </div>
                <div className="space-y-2">
                  <div className="h-2.5 w-1/4 rounded bg-slate-900/20 dark:bg-white/20" />
                  <div className="h-2 w-full rounded bg-slate-900/10 dark:bg-white/10" />
                  <div className="h-2 w-2/3 rounded bg-slate-900/10 dark:bg-white/10" />
                </div>
                <div className="space-y-2">
                  <div className="h-2.5 w-1/2 rounded bg-slate-900/20 dark:bg-white/20" />
                  <div className="h-2 w-full rounded bg-slate-900/10 dark:bg-white/10" />
                </div>
              </div>
            </div>

            {/* Hover Glass Overlay Action */}
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-ink/30 dark:bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px]">
              <a
                href={site.resumeFile}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-signal-500 text-ink flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 hover:shadow-glow"
                aria-label="View Resume"
              >
                <FiExternalLink size={24} />
              </a>
              <span className="font-mono text-xs text-signal-400 mt-3 tracking-wider font-semibold">
                OPEN INTERACTIVE PDF
              </span>
            </div>

            {/* Bottom styling watermark */}
            <div className="font-mono text-[10px] text-slate-400 dark:text-paper/30 border-t border-slate-900/10 dark:border-white/10 pt-4 z-10">
              Pabolu_Resume_v1.0.pdf
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
