import projects from './data/Projects';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <nav className="shadow fixed top-0 w-full z-50 bg-transparent">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Sparsh</h1>
          <ul className="flex space-x-6 text-sm font-medium">
            <li><a href="#home" className="hover:text-[var(--color-accent)]">Home</a></li>
            <li><a href="#projects" className="hover:text-[var(--color-accent)]">Projects</a></li>
            <li><a href="#skills" className="hover:text-[var(--color-accent)]">Skills</a></li>
            <li><a href="#education" className="hover:text-[var(--color-accent)]">Education</a></li>
            <li><a href="#contact" className="hover:text-[var(--color-accent)]">Contact</a></li>
          </ul>
        </div>
      </nav>

      <main className="pt-24">
        <header
          id="home"
          className="max-w-4xl mx-auto text-center mb-20 border-b border-gray-700 pb-12 px-4"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Hello, I am Sparsh Guha 👋
          </h1>
          <p className="text-base sm:text-lg mb-8 text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            A student, problem-solver, and aspiring software engineer passionate about AI, React, and Cybersecurity.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#projects"
              className="bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white px-6 py-2 rounded-xl transition-all"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-white px-6 py-2 rounded-xl transition-all"
            >
              Contact Me
            </a>
          </div>
        </header>

        <section
          id="projects"
          className="py-20 px-4 sm:px-6 max-w-6xl mx-auto border-b border-gray-700"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
          <div className="grid gap-10 md:grid-cols-2">
            {projects.map((project, index) => (
              <Projects key={index} {...project} />
            ))}
          </div>
        </section>

        <Skills />
        <Education />
        <Contact />
      </main>
    </div>
  );
}

export default App;
