import { useState } from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import Contact from "../data/Contact";

export default function Home() {
  const [copied, setCopied] = useState(false);
  const navigate = useNavigate();

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText("sparshguha4057@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <Layout>
      <main className="min-h-screen bg-zinc-900 text-white px-6 py-16 max-w-5xl mx-auto flex flex-col items-center">
        
        {/* Hero */}
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-center">
          Hi, I’m <span className="text-teal-400">Sparsh</span>{" "}
          <span role="img" aria-label="waving hand">👋</span>
        </h1>

        <p className="text-lg sm:text-xl text-zinc-300 max-w-2xl mb-8 text-center leading-relaxed">
          Building software at the intersection of{" "}
          <span className="text-blue-400 font-semibold">AI</span>,{" "}
          <span className="text-pink-400 font-semibold">Backend</span>, and{" "}
          <span className="text-yellow-400 font-semibold">Cybersecurity</span>.
        </p>

        {/* Navigation Pills */}
        <nav className="flex flex-wrap gap-3 mb-10 justify-center">
          {["projects", "experience", "skills", "education", "certifications", "contact"].map(
            (route) => (
              <button
                key={route}
                onClick={() => navigate(`/${route}`)}
                className="px-4 py-2 rounded-full bg-zinc-800 border border-zinc-700 text-sm text-zinc-200 hover:border-teal-400 hover:text-teal-400 transition"
              >
                {route.charAt(0).toUpperCase() + route.slice(1)}
              </button>
            )
          )}
        </nav>

        {/* About Card */}
        <section className="bg-zinc-800 border border-zinc-700 rounded-2xl p-6 max-w-3xl text-center shadow-lg mb-8">
          <h2 className="text-2xl font-bold mb-3 text-white">
            About Me
          </h2>
          <p className="text-zinc-300 leading-relaxed">
  I’m a Computer Science undergraduate at KIIT University focused on backend engineering,
  machine learning, and applied cybersecurity. I enjoy building scalable, secure systems and
  working on real-world ML-driven applications.
</p>

        </section>

        {/* Resume CTA */}
        <a
          href={Contact.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="mb-8 text-lg font-semibold text-teal-400 hover:text-teal-300 underline underline-offset-4 transition"
        >
          📄 View My Resume
        </a>

        {/* Social Links */}
        <nav className="flex gap-6 items-center text-lg justify-center mb-4">
          <a
            href="#"
            onClick={handleCopyEmail}
            className="hover:text-teal-400 transition focus:outline-none"
            aria-label="Copy email"
          >
            <Mail />
          </a>
          <a
            href="https://github.com/SG7504"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400 transition"
            aria-label="GitHub"
          >
            <Github />
          </a>
          <a
            href="https://www.linkedin.com/in/sparshguha75/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400 transition"
            aria-label="LinkedIn"
          >
            <Linkedin />
          </a>
        </nav>

        {/* Copied Toast */}
        {copied && (
          <div
            className="mt-2 px-4 py-2 rounded-lg bg-white text-zinc-900 font-semibold shadow-lg text-sm"
            role="status"
            aria-live="polite"
          >
            Email copied!
          </div>
        )}
        {/* Last Updated */}
<p className="mt-6 text-xs text-zinc-500 text-center">
  Last updated · January 2026
</p>

      </main>
    </Layout>
  );
}
