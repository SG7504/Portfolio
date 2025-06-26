import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import Contact from "../data/Contact";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const liveRegionRef = useRef(null);

  const handleCopy = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(Contact.email).then(() => {
      setCopied(true);
      if (liveRegionRef.current) {
        liveRegionRef.current.textContent = "Email copied to clipboard!";
        setTimeout(() => {
          setCopied(false);
          if (liveRegionRef.current) liveRegionRef.current.textContent = "";
        }, 2000);
      }
    });
  };

  return (
    <motion.section
      id="contact"
      className="flex flex-col justify-center items-center px-2 py-8 bg-zinc-900 text-white"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      aria-labelledby="contact-heading"
      role="region"
      style={{ minHeight: "100vh" }}
    >
      {/* Visually hidden live region for announcements */}
      <div
        ref={liveRegionRef}
        aria-live="polite"
        aria-atomic="true"
        style={{
          position: "absolute",
          left: "-9999px",
          width: "1px",
          height: "1px",
          overflow: "hidden",
        }}
      />

      {/* Compact white box with more spacing and less padding */}
      <div className="bg-white/5 backdrop-blur-md rounded-2xl shadow-xl p-6 w-full max-w-xl text-center border border-white/10 flex flex-col space-y-4">
        <h2
          id="contact-heading"
          className="text-3xl font-bold"
          tabIndex={0}
        >
          Let's Connect
        </h2>
        <p className="text-base text-zinc-300">
          Click an icon to reach out or view my resume below.
        </p>

        <nav
          className="flex justify-center gap-10"
          aria-label="Contact methods"
        >
          <motion.button
            type="button"
            onClick={handleCopy}
            aria-label="Copy email address to clipboard"
            className="text-cyan-400 hover:text-red-500 transition-transform text-[2.5rem] bg-transparent border-none focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded"
            whileHover={{ scale: 1.15 }}
            animate={{ y: [0, -4, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            tabIndex={0}
          >
            <FaEnvelope aria-hidden="true" focusable="false" />
          </motion.button>

          <motion.a
            href={Contact.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile (opens in new tab)"
            className="text-cyan-400 hover:text-red-500 transition-transform text-[2.5rem] focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded"
            whileHover={{ scale: 1.15 }}
            animate={{ y: [0, -4, 0] }}
            transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
            tabIndex={0}
          >
            <FaGithub aria-hidden="true" focusable="false" />
          </motion.a>

          <motion.a
            href={Contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile (opens in new tab)"
            className="text-cyan-400 hover:text-red-500 transition-transform text-[2.5rem] focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded"
            whileHover={{ scale: 1.15 }}
            animate={{ y: [0, -4, 0] }}
            transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
            tabIndex={0}
          >
            <FaLinkedin aria-hidden="true" focusable="false" />
          </motion.a>
        </nav>

        {/* Live announcement for clipboard copy */}
        <AnimatePresence>
          {copied && (
            <motion.div
              key="copied"
              className="text-green-400 text-sm font-medium"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.3 }}
              role="status"
              aria-live="polite"
            >
              Email copied to clipboard!
            </motion.div>
          )}
        </AnimatePresence>

        {/* Resume Button - less margin, more compact */}
        <a
          href={Contact.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-5 py-2 bg-red-600 text-white rounded-xl hover:bg-red-700 transition focus:outline-none focus:ring-2 focus:ring-red-400 text-base font-semibold mt-2"
          aria-label="View resume (opens in new tab)"
        >
          View Resume
        </a>
      </div>
    </motion.section>
  );
}
