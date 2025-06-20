import { motion } from 'framer-motion';
import education from "../data/education";
import { FaUniversity, FaChartLine } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";
import { LuCalendarDays } from "react-icons/lu";
import { GoLocation } from "react-icons/go";

function Education() {
  return (
    <section
      id="education"
      className="py-20 px-4 sm:px-6 max-w-4xl mx-auto border-b border-gray-300 dark:border-gray-700"
      aria-labelledby="education-heading"
      role="region"
    >
      <h2 
        id="education-heading"
        className="text-3xl font-bold text-center mb-12 text-white"
        tabIndex={0} // Make focusable for screen readers
      >
      </h2>

      <div className="space-y-12" role="list">
        {education.map((edu, index) => (
          <motion.article
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-zinc-800 rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300"
            aria-labelledby={`school-${index}`}
            role="listitem"
            tabIndex={0} // Make each card focusable
          >
            {/* School */}
            <div className="flex items-center gap-2 text-zinc-300 mb-1">
              <FaUniversity className="text-blue-400" aria-hidden="true" />
              <h3 
                id={`school-${index}`}
                className="text-xl font-semibold"
      aria-label={`School: ${edu.School}`}
              >
                {edu.School}
              </h3>
            </div>

            {/* Degree */}
            <div className="flex items-center gap-2 text-zinc-400 text-sm">
              <GiGraduateCap aria-hidden="true" />
              <span aria-label={`Degree: ${edu.Degree}`}>
                {edu.Degree}
              </span>
            </div>

            {/* Year */}
            <div className="flex items-center gap-2 text-zinc-400 text-sm">
              <LuCalendarDays aria-hidden="true" />
              <span aria-label={`Years attended: ${edu.Year}`}>
                {edu.Year}
              </span>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 text-zinc-400 text-sm">
              <GoLocation aria-hidden="true" />
              <span aria-label={`Location: ${edu.Location}`}>
                {edu.Location}
              </span>
            </div>

            {/* GPA */}
            {edu.GPA && (
              <div className="flex items-center gap-2 text-zinc-400 text-sm">
                <FaChartLine aria-hidden="true" />
                <span aria-label={`GPA: ${edu.GPA}`}>
                  {edu.GPA}
                </span>
              </div>
            )}

            {/* Achievements */}
            {edu.Achievements && edu.Achievements.length > 0 && (
              <div>
                <h4 className="mt-4 mb-2 font-medium text-zinc-300" id={`achievements-${index}`}>
                  Achievements
                </h4>
                <ul 
                  className="list-disc list-inside space-y-2 text-zinc-200"
                  aria-labelledby={`achievements-${index}`}
                  role="list"
                >
                  {edu.Achievements.map((ach, i) => (
                    <li 
                      key={i} 
                      className="hover:text-teal-400 transition"
                      role="listitem"
                      aria-label={`Achievement: ${ach}`}
                    >
                      {ach}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Education;
