"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiTerminal, FiX } from "react-icons/fi";
import { site } from "@/data/site";
import { projects } from "@/data/projects";
import { skills } from "@/data/skills";

const COMMANDS = ["whoami", "skills", "projects", "contact", "help", "clear"];

function runCommand(raw) {
  const cmd = raw.trim().toLowerCase();

  switch (cmd) {
    case "whoami":
      return [site.shortName, site.role, site.location];
    case "skills":
      return Array.from(new Set(skills.map((s) => s.name)));
    case "projects":
      return projects.map((p) => `${p.name} — ${p.subtitle}`);
    case "contact":
      return [`email  ${site.email}`, `phone  ${site.phone}`, `github ${site.social.github}`];
    case "help":
      return [`available commands: ${COMMANDS.join(", ")}`];
    case "":
      return [];
    default:
      return [`command not found: ${cmd}  (try "help")`];
  }
}

export default function EasterEggTerminal() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [lines, setLines] = useState([
    "shanmukha-rani-portfolio v1.0.0",
    'type "help" to see available commands',
  ]);
  const inputRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    function onKeyDown(e) {
      if (e.ctrlKey && e.shiftKey && (e.key === "T" || e.key === "t")) {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 50);
  }, [open]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [lines]);

  function handleSubmit(e) {
    e.preventDefault();
    if (input.trim().toLowerCase() === "clear") {
      setLines([]);
      setInput("");
      return;
    }
    const output = runCommand(input);
    setLines((prev) => [...prev, `$ ${input}`, ...output]);
    setInput("");
  }

  return (
    <>
      {/* subtle hint so recruiters can discover it without docs */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Open hidden terminal"
        className="fixed bottom-6 left-6 z-40 flex h-11 w-11 items-center justify-center rounded-full glass text-signal-600 dark:text-signal-400 hover:shadow-glow transition-shadow"
        title="Ctrl + Shift + T"
      >
        <FiTerminal size={18} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/80 backdrop-blur-sm p-4"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-xl rounded-xl overflow-hidden border border-signal-400/30 bg-[#060A14] shadow-glow"
            >
              <div className="flex items-center justify-between px-4 py-2.5 bg-white/5 border-b border-white/10">
                <div className="flex items-center gap-2 font-mono text-xs text-paper/60">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-signal-400/70" />
                  <span className="ml-2">guest@portfolio: ~</span>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close terminal"
                  className="text-paper/50 hover:text-paper"
                >
                  <FiX size={16} />
                </button>
              </div>

              <div
                ref={scrollRef}
                className="h-72 overflow-y-auto px-4 py-3 font-mono text-sm text-signal-300 space-y-1"
              >
                {lines.map((line, i) => (
                  <div key={i} className={line.startsWith("$") ? "text-paper" : ""}>
                    {line}
                  </div>
                ))}
              </div>

              <form
                onSubmit={handleSubmit}
                className="flex items-center gap-2 px-4 py-3 border-t border-white/10"
              >
                <span className="font-mono text-signal-400 text-sm">$</span>
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-1 bg-transparent outline-none font-mono text-sm text-paper placeholder:text-paper/30"
                  placeholder="type a command…"
                  autoComplete="off"
                  spellCheck={false}
                />
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
