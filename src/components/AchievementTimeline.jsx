"use client";

import { motion } from "framer-motion";
import { timeline } from "@/data/timeline";
import SectionEyebrow from "./SectionEyebrow";

export default function AchievementTimeline() {
  return (
    <section id="timeline" className="section">
      <SectionEyebrow index="03">Journey So Far</SectionEyebrow>
      <h2 className="font-display text-3xl sm:text-4xl font-semibold mt-3 mb-14">
        Achievement Timeline
      </h2>

      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-[7px] sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-signal-500/60 via-signal-500/20 to-transparent sm:-translate-x-1/2" />

        <div className="space-y-12">
          {timeline.map((item, i) => {
            const leftSide = i % 2 === 0;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: leftSide ? -24 : 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5 }}
                className={`relative pl-8 sm:pl-0 sm:grid sm:grid-cols-2 sm:gap-10 ${
                  leftSide ? "" : ""
                }`}
              >
                <span className="absolute left-0 sm:left-1/2 top-1.5 h-3.5 w-3.5 -translate-x-1/2 rounded-full bg-signal-400 shadow-glow ring-4 ring-paper dark:ring-ink" />

                <div className={`sm:contents`}>
                  <div
                    className={`${
                      leftSide
                        ? "sm:text-right sm:col-start-1"
                        : "sm:col-start-2"
                    }`}
                  >
                    <div className="glass bracket-corners inline-block rounded-xl px-5 py-4 text-left">
                      <span className="font-mono text-xs text-signal-600 dark:text-signal-400">
                        {item.year}
                      </span>
                      <h3 className="font-display font-semibold mt-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-paper/60 mt-1.5 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
