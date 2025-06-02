import { Mail, Github, Linkedin } from 'lucide-react';

export default function Home() {
  return (
    <section className="min-h-screen bg-zinc-900 text-white px-6 py-10 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-2">Hey, I'm Sparsh 👋</h1>
      <p className="text-lg">
        Building really intelligent software at the intersection of AI, React, and Cybersecurity.
      </p>

      <div className="flex gap-4 mt-4">
        <a href="mailto:sparshguha4057@gmail.com" target="_blank" rel="noopener noreferrer">
          <Mail />
        </a>
        <a href="https://github.com/SG7504" target="_blank" rel="noopener noreferrer">
          <Github />
        </a>
        <a href="https://www.linkedin.com/in/sparshguha75/" target="_blank" rel="noopener noreferrer">
          <Linkedin />
        </a>
      </div>

      <a
        href="https://drive.google.com/file/d/1lG9lbAbShlpNkfapearw97irjEgLiWSt/view?usp=drive_link"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 px-4 py-2 bg-teal-600 rounded-xl hover:bg-teal-700 transition"
      >
        View Resume
      </a>
    </section>
  );
}
