<<<<<<< HEAD
import skills from "../data/Skills";
import { motion } from "framer-motion";
=======
import skills from "../data/Skills"; // Note the capital 'S' here
>>>>>>> a02a0676c48326b9145a40ddaf4739f3526b72be

function Skills() {
  return (
    <section
      id="skills"
<<<<<<< HEAD
      className="py-20 px-4 sm:px-6 max-w-4xl mx-auto border-b border-gray-300 dark:border-gray-700"
      aria-labelledby="skills-heading"
    >
      <motion.h2
        id="skills-heading"
        className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        tabIndex={0} // Make focusable for screen readers
      >
        Skills & Technologies
      </motion.h2>

      <div className="space-y-12">
        {Object.entries(skills).map(([category, items], index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            role="region"
            aria-labelledby={`category-${index}`}
          >
            <h3 
              id={`category-${index}`}
              className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4 border-b border-gray-300 dark:border-gray-600 pb-2"
            >
              {category}
            </h3>

            <ul 
              className="space-y-2 pl-4"
              role="list"
              aria-label={`${category} skills`}
            >
              {items.map((skill, i) => (
                <motion.li
                  key={i}
                  whileHover={{ scale: 1.02, x: 6 }}
                  className="bg-gray-100 dark:bg-zinc-800 px-4 py-2 rounded-md text-gray-900 dark:text-gray-100 shadow-sm transition-all cursor-default hover:bg-blue-100 dark:hover:bg-blue-600 hover:text-blue-800 dark:hover:text-white"
                  role="listitem"
                  tabIndex={0} // Make each skill focusable
                  aria-label={`Skill: ${skill}`}
=======
      className="py-20 px-4 sm:px-6 max-w-6xl mx-auto border-b border-gray-300 dark:border-gray-700"
    >
      <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {Object.entries(skills).map(([category, items], index) => (
          <div key={index}>
            <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
              {category}
            </h3>
            <ul className="space-y-2">
              {items.map((skill, i) => (
                <li
                  key={i}
                  className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-md text-gray-800 dark:text-gray-200"
>>>>>>> a02a0676c48326b9145a40ddaf4739f3526b72be
                >
                  {skill}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
