function About() {
  return (
    <section
      className="p-10 max-w-4xl mx-auto text-center"
      aria-labelledby="about-heading"
      tabIndex={-1} // allows focus for screen reader navigation
    >
      <h2 id="about-heading" className="text-3xl font-bold mb-4">
        About Me
      </h2>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
        Hi! I'm a deeply passionate developer currently pursuing a B.Tech in Computer Science at KIIT University.
        My primary interests lie in full-stack web development, particularly with React and Tailwind CSS.
        I'm also deeply engaged in <span className="font-medium">Machine Learning</span> and <span className="font-medium">Cybersecurity</span>,
        exploring ways to combine smart systems with secure and scalable applications.
        I love building dynamic and responsive interfaces, and I’m always open to learning and collaborating on exciting tech projects.
      </p>
    </section>
  );
}

export default About;
