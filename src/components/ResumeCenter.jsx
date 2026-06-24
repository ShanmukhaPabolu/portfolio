"use client";

import { FiDownload, FiExternalLink } from "react-icons/fi";
import { site } from "@/data/site";
import SectionEyebrow from "./SectionEyebrow";

export default function ResumeCenter() {
  return (
    <section id="resume" className="section">
      <SectionEyebrow index="08">Resume</SectionEyebrow>
      <h2 className="font-display text-3xl sm:text-4xl font-semibold mt-3 mb-10">
        Resume
      </h2>

      <div className="flex flex-wrap gap-4">
        <a
          href={site.resumeFile}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          <FiExternalLink size={16} /> View Resume
        </a>
        <a
          href={site.resumeFile}
          download="Shanmukha_Rani_Resume.pdf"
          className="btn-ghost"
        >
          <FiDownload size={16} /> Download Resume
        </a>
      </div>
    </section>
  );
}
