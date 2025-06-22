import { useState } from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import About from "./About";
import Layout from "../components/Layout";
import { motion } from "framer-motion";

export default function Home() {
  const [copied, setCopied] = useState(false);
  const navigate = useNavigate();

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText("sparshguha4057@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <Layout>
      <main
        className="min-h-screen bg-zinc-900 text-white px-10 py-14 max-w-5xl mx-auto flex flex-col justify-center animate-fade-in"
        aria-label="Homepage main content"
      >
        {/* Hero Section */}
        <motion.h1
          className="text-5xl sm:text-6xl font-extrabold mb-4 leading-tight"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          tabIndex={0}
        >
          Hey, I’m <span className="text-teal-400">Sparsh</span> <span aria-label="waving hand emoji" role="img">👋</span>
        </motion.h1>

        <motion.p
          className="text-xl sm:text-2xl text-gray-300 max-w-2xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          tabIndex={0}
        >
          Building intelligent software at the intersection of{" "}
          <span className="text-blue-400 font-semibold">AI</span>,{" "}
          <span className="text-pink-400 font-semibold">React</span>, and{" "}
          <span className="text-yellow-400 font-semibold">Cybersecurity</span>.
        </motion.p>

        {/* Navigation Buttons */}
        <nav aria-label="Main navigation" className="flex flex-wrap gap-4 mb-10">
          {["projects", "skills", "education", "certifications", "contact"].map((route) => (
            <motion.button
              key={route}
              onClick={() => navigate(`/${route}`)}
              whileHover={{ scale: 1.05 }}
              className="px-5 py-2 bg-teal-700 rounded-md text-white hover:bg-teal-600 transition focus:outline-none focus:ring-2 focus:ring-teal-400"
              aria-label={`Go to ${route.charAt(0).toUpperCase() + route.slice(1)} page`}
            >
              {route.charAt(0).toUpperCase() + route.slice(1)}
            </motion.button>
          ))}
        </nav>

        {/* Divider */}
        <motion.hr
          className="border-gray-700 mb-10"
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 0.8 }}
          aria-hidden="true"
        />

        {/* About Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <About />
        </motion.div>

        {/* Divider */}
        <motion.hr
          className="border-gray-700 mt-12 mb-6"
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 0.8 }}
          aria-hidden="true"
        />

        {/* Social Icons */}
        <nav aria-label="Social links" className="flex gap-6 mt-6 items-center text-xl">
          <motion.a
            href="#"
            onClick={handleCopyEmail}
            whileHover={{ scale: 1.2 }}
            className="relative hover:text-teal-400 transition focus:outline-none focus:ring-2 focus:ring-teal-400"
            aria-label="Copy email address to clipboard"
            tabIndex={0}
            role="button"
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") handleCopyEmail(e);
            }}
          >
            <Mail aria-hidden="true" focusable="false" />
            {copied && (
              <span
                className="absolute text-white text-xs bg-gray-800 px-2 py-1 rounded-md top-8 left-1/2 -translate-x-1/2 whitespace-nowrap shadow-md z-10"
                role="status"
                aria-live="polite"
              >
                Email copied!
              </span>
            )}
          </motion.a>

          <motion.a
            href="https://github.com/SG7504"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="hover:text-teal-400 transition focus:outline-none focus:ring-2 focus:ring-teal-400"
            aria-label="Visit my GitHub profile"
          >
            <Github aria-hidden="true" focusable="false" />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/sparshguha75/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="hover:text-teal-400 transition focus:outline-none focus:ring-2 focus:ring-teal-400"
            aria-label="Visit my LinkedIn profile"
          >
            <Linkedin aria-hidden="true" focusable="false" />
          </motion.a>
        </nav>

        {/* Resume CTA */}
        <motion.a
          href="https://drive.google.com/file/d/1lG9lbAbShlpNkfapearw97irjEgLiWSt/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-10 px-6 py-3 bg-teal-600 rounded-xl hover:bg-teal-700 transition shadow-lg hover:shadow-teal-400/50 focus:outline-none focus:ring-2 focus:ring-teal-400"
          whileHover={{ scale: 1.05 }}
          aria-label="View my resume (opens in a new tab)"
        >
          📄 View Resume
        </motion.a>
      </main>
    </Layout>
  );
}
