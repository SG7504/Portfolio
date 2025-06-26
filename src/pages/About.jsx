function About() {
  return (
    <section
      className="p-10 max-w-4xl mx-auto text-center"
      aria-labelledby="about-heading"
      tabIndex={-1}
    >
      <h2 id="about-heading" className="text-3xl font-bold mb-4">
        About Me
      </h2>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
        I’m a B.Tech Computer Science student at KIIT University, passionate about full-stack web development, machine learning, and cybersecurity. I enjoy building responsive, secure applications and love collaborating on innovative tech projects.
      </p>
    </section>
  );
}

export default About;
