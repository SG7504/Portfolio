import { useState } from 'react';
import projects from './data/Projects';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur shadow">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          {/* Desktop Links */}
          <ul className="hidden sm:flex space-x-6 text-sm font-medium">
            <li>
              <a
                href="#home"
                className="hover:text-red-500 active:text-red-600"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-red-500 active:text-red-600"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="hover:text-red-500 active:text-red-600"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#education"
                className="hover:text-red-500 active:text-red-600"
              >
                Education
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-red-500 active:text-red-600"
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Mobile Toggle Button */}
          <button
            className="sm:hidden focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Links */}
        {menuOpen && (
          <ul className="sm:hidden flex flex-col space-y-2 px-4 pb-4 text-sm font-medium">
            <li>
              <a
                href="#home"
                className="hover:text-red-500 active:text-red-600"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-red-500 active:text-red-600"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="hover:text-red-500 active:text-red-600"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#education"
                className="hover:text-red-500 active:text-red-600"
              >
                Education
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-red-500 active:text-red-600"
              >
                Contact
              </a>
            </li>
          </ul>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-28 sm:pt-24">
        <header
          id="home"
          className="max-w-4xl mx-auto text-center mb-20 border-b border-gray-300 pb-12 px-4"
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
          className="pt-28 sm:pt-24 py-20 px-4 sm:px-6 max-w-6xl mx-auto border-b border-gray-300"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
          <div className="grid gap-10 grid-cols-1 sm:grid-cols-2">
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
