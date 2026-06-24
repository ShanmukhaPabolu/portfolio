"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiUsers, FiUserPlus, FiBook, FiStar } from "react-icons/fi";
import { site } from "@/data/site";
import SectionEyebrow from "./SectionEyebrow";

function StatCard({ icon: Icon, label, value, loading }) {
  return (
    <div className="glass rounded-xl p-5 flex items-center gap-4">
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-signal-400/15 text-signal-600 dark:text-signal-300">
        <Icon size={18} />
      </span>
      <div>
        <p className="font-display text-xl font-semibold leading-none">
          {loading ? "—" : value}
        </p>
        <p className="font-mono text-xs text-slate-500 dark:text-paper/50 mt-1">
          {label}
        </p>
      </div>
    </div>
  );
}

export default function GithubDashboard() {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [status, setStatus] = useState("loading"); // loading | ready | error

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${site.githubUsername}`),
          fetch(
            `https://api.github.com/users/${site.githubUsername}/repos?per_page=100`
          ),
        ]);
        if (!userRes.ok || !reposRes.ok) throw new Error("GitHub API error");
        const userData = await userRes.json();
        const reposData = await reposRes.json();
        if (cancelled) return;
        setUser(userData);
        setRepos(Array.isArray(reposData) ? reposData : []);
        setStatus("ready");
      } catch (err) {
        if (!cancelled) setStatus("error");
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  const totalStars = repos.reduce((sum, r) => sum + (r.stargazers_count || 0), 0);
  const languageCounts = repos.reduce((acc, r) => {
    if (r.language) acc[r.language] = (acc[r.language] || 0) + 1;
    return acc;
  }, {});
  const topLanguages = Object.entries(languageCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  return (
    <section id="github" className="section">
      <SectionEyebrow index="07">Live Stats</SectionEyebrow>
      <h2 className="font-display text-3xl sm:text-4xl font-semibold mt-3 mb-10">
        GitHub Analytics
      </h2>

      {status === "error" && (
        <p className="glass rounded-xl p-5 font-mono text-sm text-amber-600 dark:text-amber-400">
          Couldn&rsquo;t reach the GitHub API right now (rate limit or offline) —
          set <code>githubUsername</code> in <code>src/data/site.js</code> and try
          again later.
        </p>
      )}

      {status !== "error" && (
        <>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            <StatCard
              icon={FiBook}
              label="Public Repos"
              value={user?.public_repos}
              loading={status === "loading"}
            />
            <StatCard
              icon={FiUsers}
              label="Followers"
              value={user?.followers}
              loading={status === "loading"}
            />
            <StatCard
              icon={FiUserPlus}
              label="Following"
              value={user?.following}
              loading={status === "loading"}
            />
            <StatCard
              icon={FiStar}
              label="Total Stars"
              value={totalStars}
              loading={status === "loading"}
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="glass rounded-2xl p-6">
              <p className="font-mono text-xs uppercase tracking-wide text-signal-600 dark:text-signal-400 mb-4">
                Most Used Languages
              </p>
              {status === "loading" && (
                <p className="text-sm text-slate-500 font-mono">loading…</p>
              )}
              {status === "ready" && topLanguages.length === 0 && (
                <p className="text-sm text-slate-500 font-mono">
                  No language data found.
                </p>
              )}
              <div className="space-y-3">
                {topLanguages.map(([lang, count], i) => (
                  <motion.div
                    key={lang}
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                  >
                    <div className="flex justify-between text-sm mb-1">
                      <span>{lang}</span>
                      <span className="font-mono text-xs text-slate-500">
                        {count} repos
                      </span>
                    </div>
                    <div className="h-1.5 rounded-full bg-slate-900/5 dark:bg-white/10 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-signal-400"
                        style={{
                          width: `${(count / (topLanguages[0]?.[1] || 1)) * 100}%`,
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="glass rounded-2xl p-6 flex flex-col">
              <p className="font-mono text-xs uppercase tracking-wide text-signal-600 dark:text-signal-400 mb-4">
                Top Repositories
              </p>
              <ul className="space-y-3 flex-1">
                {(status === "loading" ? Array.from({ length: 3 }) : repos)
                  .sort((a, b) => (b?.stargazers_count || 0) - (a?.stargazers_count || 0))
                  .slice(0, 3)
                  .map((r, i) => (
                    <li key={r?.id ?? i} className="flex items-center justify-between text-sm">
                      <span className="font-medium truncate pr-3">
                        {r?.name || "loading…"}
                      </span>
                      <span className="font-mono text-xs text-slate-500 flex items-center gap-1 shrink-0">
                        <FiStar size={12} /> {r?.stargazers_count ?? "—"}
                      </span>
                    </li>
                  ))}
              </ul>
              <a
                href={site.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-xs font-mono text-signal-600 dark:text-signal-400"
              >
                <FiGithub size={14} /> View full profile
              </a>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
