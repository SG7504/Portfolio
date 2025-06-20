import { useRef } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function ProjectCard({ title, description, stack, code, index }) {
  const liveRegionRef = useRef(null);

  // Utility to announce card content
  const announceCard = () => {
    if (liveRegionRef.current) {
      liveRegionRef.current.textContent =
        `${title}. ${description}. Skills: ${stack.join(", ")}.` +
        (code ? " Code link available." : "");
      // Optionally clear after a delay for repeated announcements
      setTimeout(() => {
        if (liveRegionRef.current) liveRegionRef.current.textContent = "";
      }, 2000);
    }
  };

  return (
    <>
      {/* Visually hidden live region for announcements */}
      <div
        ref={liveRegionRef}
        aria-live="polite"
        aria-atomic="true"
        style={{
          position: "absolute",
          left: "-9999px",
          width: "1px",
          height: "1px",
          overflow: "hidden",
        }}
      />

      <motion.article
        className="bg-zinc-800 p-6 rounded-2xl shadow-lg border border-zinc-700"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.04, borderColor: "#14b8a6" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        viewport={{ once: true }}
        role="article"
        aria-labelledby={`project-title-${index}`}
        aria-describedby={`project-desc-${index}`}
        tabIndex={0}
        // Announce all content on focus or click
        onFocus={announceCard}
        onClick={announceCard}
        onKeyDown={e => {
          if (e.key === "Enter" || e.key === " ") {
            announceCard();
          }
        }}
      >
        <h3 id={`project-title-${index}`} className="text-2xl font-semibold mb-2 text-white">
          {title}
        </h3>
        <section className="mb-4 bg-zinc-700/40 rounded-xl p-4">
          <h4 className="text-lg font-semibold mb-2 text-teal-400">
            Skills and Description
          </h4>
          <p id={`project-desc-${index}`} className="text-sm text-zinc-300 mb-4">
            {description}
          </p>
          <ul className="flex flex-col gap-2" aria-label="Technology stack">
            {stack.map((tech, i) => (
              <li key={i}>
                <span className="bg-zinc-700 text-zinc-100 text-xs px-3 py-1 rounded-full shadow-sm hover:bg-teal-600 transition">
                  {tech}
                </span>
              </li>
            ))}
          </ul>
        </section>
        {code && (
          <a
            href={code}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-teal-400 hover:text-white hover:underline text-sm font-medium transition"
            aria-label="View project code"
          >
            View Code <ExternalLink size={14} aria-hidden="true" />
          </a>
        )}
      </motion.article>
    </>
  );
}
