import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import { site } from "@/data/site";
import ScrollToTop from "./ScrollToTop";

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

const socials = [
  { icon: FiGithub, href: site.social.github, label: "GitHub" },
  { icon: FiLinkedin, href: site.social.linkedin, label: "LinkedIn" },
  { icon: SiLeetcode, href: site.social.leetcode, label: "LeetCode" },
  { icon: FiMail, href: `mailto:${site.email}`, label: "Email" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-900/5 dark:border-white/[0.08]">
      <div className="section !py-12 flex flex-col sm:flex-row items-center justify-between gap-8">
        <div className="text-center sm:text-left">
          <p className="font-display font-semibold text-lg">
            {site.shortName.split(" ")[0]}
            <span className="text-signal-500">.</span>
          </p>
          <p className="font-mono text-xs text-slate-500 dark:text-paper/50 mt-1">
            Built with Next.js &amp; Tailwind
          </p>
        </div>

        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 font-mono text-xs text-slate-500 dark:text-paper/50">
          {quickLinks.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-signal-500 transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex gap-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={s.label}
              className="flex h-9 w-9 items-center justify-center rounded-full glass hover:text-signal-500 hover:shadow-glow transition-all"
            >
              <s.icon size={15} />
            </a>
          ))}
        </div>
      </div>

      <p className="text-center font-mono text-[11px] text-slate-400 dark:text-paper/30 pb-8">
        © 2026 {site.shortName}. All rights reserved.
      </p>

      <ScrollToTop />
    </footer>
  );
}
