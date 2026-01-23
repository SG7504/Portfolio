import { useRef } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export default function ProjectCard({ title, description, stack, code, index }) {
  const liveRegionRef = useRef(null);

  const announceCard = () => {
    if (liveRegionRef.current) {
      liveRegionRef.current.textContent =
        `${title}. ${description}. Skills: ${stack.join(", ")}.` +
        (code ? " Code link available." : "");

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
        className="bg-zinc-800 p-6 rounded-2xl shadow-lg border border-zinc-700 relative"
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

        {/* Description + Skills */}
        <section className="bg-zinc-700/40 rounded-xl p-4">
          <h4 className="text-lg font-semibold mb-2 text-teal-400">
            Skills and Description
          </h4>

          <p
            id={`project-desc-${index}`}
            className="text-sm text-zinc-300 mb-4 leading-relaxed"
          >
            {description}
          </p>

          {/* Tech Stack Pills */}
          <div className="mt-2 mb-4">
  <p className="text-sm text-zinc-400 mb-2">Tech Stack:</p>
  <ul className="flex flex-col gap-1">
    {stack.map((tech, i) => (
      <li
        key={i}
        className="text-sm text-zinc-300 flex items-center gap-2"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
        {tech}
      </li>
    ))}
  </ul>
</div>




          {/* Repo Button (under tech stack, icon style) */}
          {code && (
            <div className="mt-2">
              <a
                href={code}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-zinc-600 text-sm text-teal-400 hover:text-white hover:border-teal-500 hover:bg-zinc-800 transition"
                aria-label="View project repository"
              >
                <Github size={16} aria-hidden="true" />
                View Code
                <ExternalLink size={14} aria-hidden="true" />
              </a>
            </div>
          )}
        </section>
      </motion.article>
    </>
  );
}
