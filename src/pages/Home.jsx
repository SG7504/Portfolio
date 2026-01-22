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
      <main
        className="min-h-screen bg-zinc-900 text-white px-4 py-5 max-w-5xl mx-auto flex flex-col items-center"
        aria-label="Homepage main content"
        style={{ minHeight: "100vh" }}
      >
        {/* Hero Section */}
        <h1
          className="text-4xl sm:text-5xl font-extrabold mb-2 leading-tight text-center"
          tabIndex={0}
        >
          Hey, I’m <span className="text-teal-400">Sparsh</span>{" "}
          <span aria-label="waving hand emoji" role="img">
            👋
          </span>
        </h1>

        <p
          className="text-lg sm:text-xl text-gray-300 max-w-2xl mb-2 text-center"
          tabIndex={0}
        >
          Building software at the intersection of{" "}
          <span className="text-blue-400 font-semibold">AI</span>,{" "}
          <span className="text-pink-400 font-semibold">React</span>, and{" "}
          <span className="text-yellow-400 font-semibold">Cybersecurity</span>.
        </p>

        {/* Navigation Buttons */}
<nav
  aria-label="Main navigation"
  className="flex flex-wrap gap-2 mb-2"
>
  {["experience", "projects", "skills", "education", "certifications", "contact"].map(
    (route) => (
      <button
        key={route}
        onClick={() => navigate(`/${route}`)}
        className="px-2 py-1 bg-teal-700 rounded text-white hover:bg-teal-600 transition focus:outline-none focus:ring-2 focus:ring-teal-400 text-sm border border-zinc-800 shadow"
        aria-label={`Go to ${route.charAt(0).toUpperCase() + route.slice(1)} page`}
      >
        {route.charAt(0).toUpperCase() + route.slice(1)}
      </button>
    )
  )}
</nav>

        {/* Divider */}
        <hr className="border-gray-700 mb-0 mt-0 w-full" aria-hidden="true" />

        {/* About Section - Compact, No Extra Margin */}
        <section
          className="max-w-4xl mx-auto text-center p-0 m-0"
          aria-labelledby="about-heading"
          tabIndex={-1}
        >
          <h2 id="about-heading" className="text-2xl font-bold m-0 p-0 leading-tight">
            About Me
          </h2>
          <p className="text-gray-400 dark:text-gray-300 text-base m-0 p-0 leading-tight">
            I’m a B.Tech Computer Science student at KIIT University, passionate about full-stack web development, machine learning, and cybersecurity. I enjoy building responsive, secure applications and love collaborating on innovative tech projects.
          </p>
        </section>
        {/* Resume CTA */}
        <a
  href={Contact.resume}
  target="_blank"
  rel="noopener noreferrer"
  className="mt-1 mb-3 text-xl font-bold text-teal-400 underline underline-offset-4 hover:text-teal-300 transition text-center"
  aria-label="View my resume (opens in a new tab)"
  style={{ letterSpacing: "0.01em" }}
>
  📄 View My Resume
</a>

        {/* Divider - No gap above */}
        <hr className="border-gray-700 mt-0 mb-1 w-full" aria-hidden="true" />

        {/* Social Icons - Footer, Tighter Spacing */}
        <nav
          aria-label="Social links"
          className="flex gap-3 mt-1 mb-2 items-center text-base justify-center"
        >
          <a
            href="#"
            onClick={handleCopyEmail}
            className="relative hover:text-teal-400 transition focus:outline-none focus:ring-2 focus:ring-teal-400"
            aria-label="Copy email address to clipboard"
            tabIndex={0}
            role="button"
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") handleCopyEmail(e);
            }}
          >
            <Mail aria-hidden="true" focusable="false" />
          </a>
          <a
            href="https://github.com/SG7504"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400 transition focus:outline-none focus:ring-2 focus:ring-teal-400"
            aria-label="Visit my GitHub profile"
          >
            <Github aria-hidden="true" focusable="false" />
          </a>
          <a
            href="https://www.linkedin.com/in/sparshguha75/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400 transition focus:outline-none focus:ring-2 focus:ring-teal-400"
            aria-label="Visit my LinkedIn profile"
          >
            <Linkedin aria-hidden="true" focusable="false" />
          </a>
        </nav>
        {/* Email Copied Message */}
        {copied && (
          <div
            className="mt-1 mb-2 px-4 py-1 rounded-lg bg-white text-zinc-900 font-semibold shadow-lg text-sm text-center transition"
            role="status"
            aria-live="polite"
            style={{ minWidth: "120px", display: "inline-block" }}
          >
            Email copied!
          </div>
        )}
      </main>
    </Layout>
  );
}
