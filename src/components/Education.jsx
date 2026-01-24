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
      className="py-20 px-4 sm:px-6 max-w-5xl mx-auto"
      aria-labelledby="education-heading"
      role="region"
    >
      <h2
        id="education-heading"
        className="text-3xl font-bold text-center mb-12 text-white"
      >
        Education
      </h2>

      <div className="space-y-12">
        {education.map((edu, index) => (
          <motion.article
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03, borderColor: "#14b8a6" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="bg-zinc-800 rounded-2xl p-7 shadow-lg border border-zinc-700"
            tabIndex={0}
          >
            {/* School */}
            <div className="flex items-center gap-2 text-zinc-200 mb-3">
              <FaUniversity className="text-teal-400" />
              <h3 className="text-xl font-semibold">
                {edu.School}
              </h3>
            </div>

            {/* Meta info */}
            <div className="space-y-2 mb-5">
              <div className="flex items-center gap-2 text-zinc-400 text-sm">
                <GiGraduateCap />
                <span>{edu.Degree}</span>
              </div>

              <div className="flex items-center gap-2 text-zinc-400 text-sm">
                <LuCalendarDays />
                <span>{edu.Year}</span>
              </div>

              <div className="flex items-center gap-2 text-zinc-400 text-sm">
                <GoLocation />
                <span>{edu.Location}</span>
              </div>

              {edu.GPA && (
                <div className="flex items-center gap-2 text-zinc-400 text-sm">
                  <FaChartLine />
                  <span>{edu.GPA}</span>
                </div>
              )}
            </div>

            {/* Achievements */}
            {edu.Achievements && edu.Achievements.length > 0 ? (
              <div className="bg-zinc-700/40 rounded-xl p-4">
                <h4 className="mb-2 font-medium text-teal-400">
                  Achievements
                </h4>

                <ul className="space-y-2 text-zinc-200">
                  {edu.Achievements.map((ach, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 hover:text-teal-400 transition"
                    >
                      <span className="w-1.5 h-1.5 mt-2 rounded-full bg-teal-400 shrink-0" />
                      {ach}
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              /* Spacer for cards without achievements (keeps rhythm) */
              <div className="h-6" />
            )}
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Education;
