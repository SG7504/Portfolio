import { motion } from "framer-motion";

export default function ExperienceCard({ company, role, duration, location, points, index }) {
  return (
    <motion.article
      className="bg-zinc-800 p-6 rounded-2xl shadow-lg border border-zinc-700"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03, borderColor: "#14b8a6" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
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

      {/* Bullet Points */}
      <ul className="space-y-2 text-zinc-300">
        {points.map((point, i) => (
          <li
            key={i}
            className="flex items-start gap-2 leading-relaxed"
          >
            <span className="w-1.5 h-1.5 mt-2 rounded-full bg-teal-400 flex-shrink-0" />
            {point}
          </li>
        ))}
      </ul>
    </motion.article>
  );
}
