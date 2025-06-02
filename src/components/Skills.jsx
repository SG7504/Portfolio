import skills from "../data/Skills"; // Note the capital 'S' here

function Skills() {
  return (
    <section
      id="skills"
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
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
