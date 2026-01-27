import { motion } from "framer-motion";

export default function ExperienceCard({
  company,
  role,
  duration,
  location,
  points,
  index,
}) {
  return (
    <motion.article
      className="bg-zinc-800 p-6 rounded-2xl shadow-lg border border-zinc-700 relative transition-shadow"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}

      /* 🔥 SAME SUBTLE HOVER AS PROJECT CARD */
      whileHover={{
        scale: 1.015,
        borderColor: "#14b8a6",
        boxShadow: "0 0 0 1px rgba(20,184,166,0.4), 0 10px 25px rgba(0,0,0,0.4)",
      }}

      transition={{ duration: 0.25, ease: "easeOut" }}
      viewport={{ once: true }}
      role="article"
      aria-labelledby={`exp-company-${index}`}
      tabIndex={0}
    >
      {/* Company */}
      <h3
        id={`exp-company-${index}`}
        className="text-2xl font-semibold text-white mb-1"
      >
        {company}
      </h3>

      {/* Role */}
      <p className="text-teal-400 font-medium mb-1">
        {role}
      </p>

      {/* Duration + Location */}
      <p className="text-sm text-zinc-400 mb-4">
        {duration} {location && `• ${location}`}
      </p>

      {/* Responsibilities Section (same style as project description box) */}
      <section className="bg-zinc-700/40 rounded-xl p-4">
        <h4 className="text-lg font-semibold mb-3 text-teal-400">
          Responsibilities & Contributions
        </h4>

        {/* Bullet Points — fixed spacing + alignment */}
        <ul className="space-y-3 text-zinc-300">
          {points.map((point, i) => (
            <li
              key={i}
              className="flex items-start gap-3 leading-relaxed"
            >
              <span className="w-1.5 h-1.5 mt-2 rounded-full bg-teal-400 flex-shrink-0" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </section>
    </motion.article>
  );
}
