import { motion } from "framer-motion";

export default function CertificationList({ certifications }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {certifications.map((cert, index) => (
        <motion.div
          key={index}
          className="bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }}
        >
          <h3 className="text-lg font-semibold text-teal-400">
            {cert.title}
          </h3>

          <p className="text-sm text-zinc-300 mt-1">
            {cert.issuer}
          </p>

          <p className="text-xs text-zinc-400 mt-1">
            {cert.date}
          </p>

          <p className="text-xs text-zinc-400 mt-2">
            {cert.credential}
          </p>

          {cert.link && (
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-sm text-teal-400 hover:underline"
            >
              View Credential
            </a>
          )}
        </motion.div>
      ))}
    </div>
  );
}
