import { motion } from "framer-motion";

export default function ExperienceCard({
  role,
  company,
  date,
  location,
  points,
  logo,
  index,
}) {
  return (
    <motion.article
      className="bg-zinc-800 p-6 rounded-2xl shadow-lg border border-zinc-700 transition-shadow group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}

      /* 🔥 SAME PREMIUM HOVER SYSTEM AS PROJECTS / CERTS */
      whileHover={{
        scale: 1.015,
        borderColor: "#14b8a6",
        boxShadow:
          "0 0 0 1px rgba(20,184,166,0.4), 0 10px 25px rgba(0,0,0,0.4)",
      }}

      transition={{ duration: 0.25, ease: "easeOut" }}
      viewport={{ once: true }}
      role="article"
      aria-labelledby={`exp-company-${index}`}
      tabIndex={0}
    >
      {/* Company + Logo */}
      <div className="flex items-center gap-3 mb-2">
        {logo && (
          <img
            src={logo}
            alt={`${company} logo`}
            className="w-9 h-9 object-contain rounded-md bg-white p-1 grayscale opacity-80 transition group-hover:grayscale-0 group-hover:opacity-100"
            loading="lazy"
          />
        )}

        <h3
          id={`exp-company-${index}`}
          className="text-xl font-semibold text-white"
        >
          {company}
        </h3>
      </div>

      {/* Role */}
      <p className="text-teal-400 font-medium mb-1">
        {role}
      </p>

      {/* Meta */}
      <div className="flex flex-wrap gap-4 text-sm text-zinc-400 mb-4">
        <span>{date}</span>
        <span>{location}</span>
      </div>

      {/* Points */}
      <ul className="space-y-2 text-zinc-300">
        {points.map((point, i) => (
          <li
            key={i}
            className="flex items-start gap-2"
          >
            <span className="w-1.5 h-1.5 mt-2 rounded-full bg-teal-400 shrink-0" />
            {point}
          </li>
        ))}
      </ul>
    </motion.article>
  );
}
