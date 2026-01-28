import { motion } from "framer-motion";

export default function ExperienceCard({ role, company, date, location, points }) {
  return (
    <motion.article
      className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm shadow-lg"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03, borderColor: "#14b8a6" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      viewport={{ once: true }}
      role="article"
      tabIndex={0}
    >
      <h3 className="text-xl font-semibold text-white">{role}</h3>

      <p className="text-teal-400 font-medium mt-1">{company}</p>

      <p className="text-sm text-zinc-400 mt-1">
        {date} • {location}
      </p>

      <ul className="mt-4 list-disc list-inside space-y-2 text-sm text-zinc-300">
        {points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </motion.article>
  );
}