import education from "../data/education";

function Education() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 max-w-4xl mx-auto border-b border-gray-300 dark:border-gray-700">
      <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
      {education.map((edu, index) => (
        <div key={index} className="mb-10">
          <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">{edu.School}</h3>
          <p className="text-gray-700 dark:text-gray-300">{edu.Degree}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{edu.Year}</p>
          <ul className="list-disc list-inside text-gray-800 dark:text-gray-200 space-y-1">
            {edu.Achievements.map((ach, i) => (
              <li key={i}>{ach}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default Education;
