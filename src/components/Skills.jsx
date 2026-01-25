import skills from "../data/Skills";
import { motion } from "framer-motion";

function Skills() {
  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 max-w-6xl mx-auto"
      aria-labelledby="skills-heading"
      role="region"
    >
      <h2
        id="skills-heading"
        className="text-4xl font-bold text-center mb-16 text-white"
        tabIndex={0}
      >
        Skills & Technologies
      </h2>

      {/* Grid of Skill Categories */}
      <div className="grid gap-8 sm:grid-cols-2">
        {Object.entries(skills).map(([category, items], index) => (
          <motion.article
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}

            /* 🔥 SAME PREMIUM HOVER SYSTEM */
            whileHover={{
              scale: 1.015,
              borderColor: "#14b8a6",
              boxShadow:
                "0 0 0 1px rgba(20,184,166,0.4), 0 10px 25px rgba(0,0,0,0.4)",
            }}

            transition={{ duration: 0.25, ease: "easeOut" }}
            className="bg-zinc-800 p-6 rounded-2xl shadow-lg border border-zinc-700 transition-shadow"
            role="article"
            aria-labelledby={`category-${index}`}
            tabIndex={0}
          >
            {/* Category Title */}
            <h3
              id={`category-${index}`}
              className="text-2xl font-semibold mb-4 text-teal-400"
            >
              {category}
            </h3>

            {/* Skills List */}
            <ul
              className="space-y-2"
              role="list"
              aria-label={`${category} skills`}
            >
              {items.map((skill, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 text-sm text-zinc-300"
                  role="listitem"
                  tabIndex={0}
                  aria-label={`Skill: ${skill}`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                  {skill}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Skills;
