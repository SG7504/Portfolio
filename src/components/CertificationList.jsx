import { useRef } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Award } from "lucide-react";

export default function CertificationList({ certifications }) {
  return (
    <div className="grid gap-8 sm:grid-cols-2">
      {certifications.map((cert, index) => (
        <CertificationCard key={index} cert={cert} index={index} />
      ))}
    </div>
  );
}

function CertificationCard({ cert, index }) {
  const liveRegionRef = useRef(null);

  const announceCard = () => {
    if (liveRegionRef.current) {
      liveRegionRef.current.textContent =
        `${cert.title}. Issued by ${cert.issuer}. Date: ${cert.date}.` +
        (cert.credential ? ` Credential ID: ${cert.credential}.` : "") +
        (cert.link ? " Credential link available." : "");

      setTimeout(() => {
        if (liveRegionRef.current) liveRegionRef.current.textContent = "";
      }, 2000);
    }
  };

  return (
    <>
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

      <motion.article
        className="bg-zinc-800 p-6 rounded-2xl shadow-lg border border-zinc-700 relative"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.04, borderColor: "#14b8a6" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        viewport={{ once: true }}
        role="article"
        aria-labelledby={`cert-title-${index}`}
        aria-describedby={`cert-desc-${index}`}
        tabIndex={0}
        onFocus={announceCard}
        onClick={announceCard}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            announceCard();
            const link = e.currentTarget.querySelector("a");
            if (link) link.click();
          }
        }}
      >
        {/* Title */}
        <h3
          id={`cert-title-${index}`}
          className="text-2xl font-semibold mb-4 text-white"
        >
          {cert.title}
        </h3>

        {/* Issuer & Details */}
        <section
          id={`cert-desc-${index}`}
          className="bg-zinc-700/40 rounded-xl p-4"
        >
          <h4 className="text-lg font-semibold mb-2 text-teal-400">
            Issuer & Details
          </h4>

          <p className="text-sm text-zinc-300 mb-1">
            {cert.issuer}
          </p>

          <p className="text-xs text-zinc-400 mb-2">
            {cert.date}
          </p>

          {cert.credential && (
            <p className="text-xs text-zinc-400 mb-3">
              Credential ID: {cert.credential}
            </p>
          )}

          {/* Credential Button — inside content, under details */}
          {cert.link && (
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-zinc-600 text-sm text-teal-400 hover:text-white hover:border-teal-400 hover:bg-teal-500/10 transition"
              aria-label="View credential"
            >
              <Award size={16} aria-hidden="true" />
              View Credential
              <ExternalLink size={14} aria-hidden="true" />
            </a>
          )}
        </section>
      </motion.article>
    </>
  );
}
