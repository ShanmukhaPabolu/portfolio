"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiSend } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import { site } from "@/data/site";
import SectionEyebrow from "./SectionEyebrow";

const cards = [
  { icon: FiMail, label: "Email", value: site.email, href: `mailto:${site.email}` },
  { icon: FiPhone, label: "Phone", value: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}` },
  { icon: FiLinkedin, label: "LinkedIn", value: "Connect", href: site.social.linkedin },
  { icon: FiGithub, label: "GitHub", value: "Follow", href: site.social.github },
  { icon: SiLeetcode, label: "LeetCode", value: "View Profile", href: site.social.leetcode },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    try {
      // Lazy-import so EmailJS only loads when someone actually submits.
      const emailjs = (await import("@emailjs/browser")).default;

      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS env vars are not configured yet.");
      }

      await emailjs.send(
        serviceId,
        templateId,
        { from_name: form.name, from_email: form.email, message: form.message },
        { publicKey }
      );

      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="section">
      <SectionEyebrow index="08">Get In Touch</SectionEyebrow>
      <h2 className="font-display text-3xl sm:text-4xl font-semibold mt-3 mb-12">
        Let&rsquo;s Connect
      </h2>

      <div className="grid lg:grid-cols-5 gap-8">
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
          {cards.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              whileHover={{ y: -3 }}
              className="glass rounded-xl p-4 flex items-center gap-4 hover:shadow-glow transition-shadow"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-signal-400/15 text-signal-600 dark:text-signal-300">
                <c.icon size={17} />
              </span>
              <div className="min-w-0">
                <p className="font-mono text-[11px] uppercase tracking-wide text-slate-500 dark:text-paper/50">
                  {c.label}
                </p>
                <p className="text-sm font-medium truncate">{c.value}</p>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="lg:col-span-3 glass rounded-2xl p-6 sm:p-8 space-y-5"
        >
          <div>
            <label className="font-mono text-xs text-slate-500 dark:text-paper/50">
              Name
            </label>
            <input
              required
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              className="mt-1 w-full bg-transparent border-b border-slate-900/15 dark:border-white/15 py-2 outline-none focus:border-signal-400 transition-colors"
            />
          </div>
          <div>
            <label className="font-mono text-xs text-slate-500 dark:text-paper/50">
              Email
            </label>
            <input
              required
              type="email"
              value={form.email}
              onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
              className="mt-1 w-full bg-transparent border-b border-slate-900/15 dark:border-white/15 py-2 outline-none focus:border-signal-400 transition-colors"
            />
          </div>
          <div>
            <label className="font-mono text-xs text-slate-500 dark:text-paper/50">
              Message
            </label>
            <textarea
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
              className="mt-1 w-full bg-transparent border-b border-slate-900/15 dark:border-white/15 py-2 outline-none focus:border-signal-400 transition-colors resize-none"
            />
          </div>

          <motion.button
            type="submit"
            disabled={status === "sending"}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="btn-primary w-full sm:w-auto justify-center disabled:opacity-60"
          >
            <FiSend size={16} />
            {status === "sending" ? "Sending…" : "Send Message"}
          </motion.button>

          {status === "sent" && (
            <p className="font-mono text-xs text-signal-600 dark:text-signal-400">
              Message sent — thank you, I&rsquo;ll reply soon.
            </p>
          )}
          {status === "error" && (
            <p className="font-mono text-xs text-amber-600 dark:text-amber-400">
              Couldn&rsquo;t send right now — configure EmailJS in .env.local, or
              email directly at {site.email}.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
