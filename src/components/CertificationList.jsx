import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

export default function CertificationList({ certifications }) {
  return (
    <section
      className="w-full px-4 sm:px-8 py-10 max-w-3xl mx-auto overflow-x-hidden box-border"
      aria-label="Certifications"
      role="region"
    >
      {/* Add this section title */}
      <h2 
        className="text-2xl sm:text-3xl font-extrabold text-center mb-10 text-blue-400"
        tabIndex={0}
      >
        Certifications
      </h2>
      <div className="grid grid-cols-1 gap-4" role="list">
        {certifications.map((cert, idx) => {
          const uniqueId = `cert-${idx}`;
          return (
            <motion.article
              key={`${cert.title}-${cert.issuer}-${idx}`}
              className="bg-zinc-800/90 backdrop-blur p-4 rounded-xl shadow-lg border border-zinc-700 flex flex-col h-full transition-all relative"
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{
                scale: 1.03,
                borderColor: '#14b8a6',
                boxShadow: '0 8px 24px -6px rgba(20,184,166,0.15), 0 2px 8px 0 rgba(0,0,0,0.10)',
                zIndex: 10,
              }}
              transition={{
                duration: 0.28,
                ease: [0.25, 1, 0.5, 1],
              }}
              viewport={{ once: true, margin: '-60px' }}
              role="listitem"
              aria-labelledby={`${uniqueId}-title`}
              aria-describedby={`${uniqueId}-details`}
              tabIndex={0}
              style={{ zIndex: 1 }}
            >
              <header className="flex flex-col items-start">
                <h3 
                  id={`${uniqueId}-title`} 
                  className="text-base font-bold mb-2 text-teal-300 leading-tight break-words"
                >
                  {cert.title}
                </h3>
                <div className="text-xs text-zinc-400 font-medium mb-1">
                  <span className="text-zinc-300 sr-only">Issued by: </span>
                  <span aria-hidden="true">Company:</span> {cert.issuer}
                </div>
                <div className="text-xs text-zinc-400 mb-3">
                  <span className="text-zinc-300 sr-only">Date earned: </span>
                  <span aria-hidden="true">Date:</span> {cert.date}
                </div>
              </header>

              <div 
                id={`${uniqueId}-details`}
                className="mb-3"
              >
                <h4 className="sr-only">Credential Details</h4>
                <ul 
                  className="text-xs text-zinc-200 list-disc pl-5 space-y-1"
                  role="list"
                  aria-label="Credential details"
                >
                  {cert.credential.split(',').map((item, idx2) => (
                    <li 
                      key={`item-${idx2}`}
                      role="listitem"
                      aria-label={item.trim()}
                    >
                      {item.trim()}
                    </li>
                  ))}
                </ul>
              </div>

              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View credential for ${cert.title} (opens in new tab)`}
                  className="mt-auto inline-flex items-center gap-1.5 text-teal-400 hover:text-teal-300 hover:underline text-xs font-medium transition group break-all focus:outline-none focus:ring-2 focus:ring-teal-400 focus:rounded"
                >
                  View Credential
                  <ExternalLink
                    size={13}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    aria-hidden="true"
                  />
                </a>
              )}
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
