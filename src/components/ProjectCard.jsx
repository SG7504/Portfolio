import { useRef } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function ProjectCard({ title, description, stack, code, index }) {
  const liveRegionRef = useRef(null);

  const announceCard = () => {
    if (liveRegionRef.current) {
      liveRegionRef.current.textContent =
        `${title}. ${description}. Skills: ${stack.join(", ")}.` +
        (code ? " Code link available." : "");

      // Clear after a short delay so repeated focus works
      setTimeout(() => {
        if (liveRegionRef.current) liveRegionRef.current.textContent = "";
      }, 2000);
    }
  };

  return (
    <>
      {/* Visually hidden live region for screen reader announcements */}
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
        className="bg-zinc-800 p-6 rounded-2xl shadow-lg border border-zinc-700 relative overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.04, borderColor: "#14b8a6" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        viewport={{ once: true }}
        role="article"
        aria-labelledby={`project-title-${index}`}
        aria-describedby={`project-desc-${index}`}
        tabIndex={0}
        onFocus={announceCard}
        onClick={announceCard}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            announceCard();
          }
        }}
      >
        {/* Title */}
        <h3
          id={`project-title-${index}`}
          className="text-2xl font-semibold mb-4 text-white"
        >
          {title}
        </h3>

        {/* Description + Skills Section */}
        <section className="mb-6 bg-zinc-700/40 rounded-xl p-4">
          <h4 className="text-lg font-semibold mb-2 text-teal-400">
            Skills and Description
          </h4>

          <p
            id={`project-desc-${index}`}
            className="text-sm text-zinc-300 mb-4 leading-relaxed"
          >
            {description}
          </p>

          <ul className="flex flex-wrap gap-2" aria-label="Technology stack">
            {stack.map((tech, i) => (
              <li key={i}>
                <span className="bg-zinc-700 text-zinc-100 text-xs px-3 py-1 rounded-full shadow-sm hover:bg-teal-600 transition">
                  {tech}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* Footer / Action Row */}
        {code && (
          <div className="mt-4 pt-4 border-t border-zinc-700 flex justify-end">
            <a
              href={code}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-teal-400 hover:text-white text-sm font-medium transition"
              aria-label="View project code"
            >
              View Code <ExternalLink size={14} aria-hidden="true" />
            </a>
          </div>
        )}
      </motion.article>
    </>
  );
}
