import { motion } from 'framer-motion';

export default function Projects({ title, description, stack, code }) {
  return (
    <motion.div
      className="bg-zinc-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
    >
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="mb-3 text-sm text-zinc-300">{description}</p>
      <div className="flex flex-wrap gap-2 mb-3">
        {stack.map((tech, i) => (
          <span key={i} className="bg-zinc-700 text-xs px-2 py-1 rounded-full">{tech}</span>
        ))}
      </div>
      {code && (
        <a href={code} target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:underline text-sm">
          View Code
        </a>
      )}
    </motion.div>
  );
}
