import { motion } from "framer-motion";
import education from "../data/Education.js";
import { FaUniversity, FaChartLine } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";
import { LuCalendarDays } from "react-icons/lu";
import { GoLocation } from "react-icons/go";

function Education() {
  return (
    <section
      id="education"
      className="py-16 px-6 max-w-6xl mx-auto"
      aria-labelledby="education-heading"
      role="region"
    >
      {/* Section Title */}
      <h2
        id="education-heading"
        className="text-4xl font-bold text-center mb-12 text-white"
        tabIndex={0}
      >
        Education
      </h2>

      {/* Cards container — same rhythm as Projects */}
      <div className="grid gap-10">
        {education.map((edu, index) => (
          <motion.article
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03, borderColor: "#14b8a6" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="bg-zinc-800 rounded-2xl p-8 shadow-lg border border-zinc-700 max-w-3xl mx-auto"
            aria-labelledby={`school-${index}`}
            role="listitem"
            tabIndex={0}
          >
            {/* School */}
            <div className="flex items-center gap-3 text-zinc-200 mb-3">
              <FaUniversity className="text-teal-400 text-lg" aria-hidden="true" />
              <h3
                id={`school-${index}`}
                className="text-2xl font-semibold"
              >
                {edu.School}
              </h3>
            </div>

            {/* Meta info block */}
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-3 text-zinc-400 text-sm">
                <GiGraduateCap aria-hidden="true" />
                <span>{edu.Degree}</span>
              </div>

              <div className="flex items-center gap-3 text-zinc-400 text-sm">
                <LuCalendarDays aria-hidden="true" />
                <span>{edu.Year}</span>
              </div>

              <div className="flex items-center gap-3 text-zinc-400 text-sm">
                <GoLocation aria-hidden="true" />
                <span>{edu.Location}</span>
              </div>

              {edu.GPA && (
                <div className="flex items-center gap-3 text-zinc-400 text-sm">
                  <FaChartLine aria-hidden="true" />
                  <span>{edu.GPA}</span>
                </div>
              )}
            </div>

            {/* Achievements */}
            {edu.Achievements && edu.Achievements.length > 0 && (
              <div className="mt-6 bg-zinc-700/40 rounded-xl p-5">
                <h4 className="mb-3 font-semibold text-teal-400">
                  Achievements
                </h4>

                <ul className="space-y-2 text-zinc-200">
                  {edu.Achievements.map((ach, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 hover:text-teal-400 transition"
                    >
                      <span className="w-1.5 h-1.5 mt-2 rounded-full bg-teal-400 shrink-0" />
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
