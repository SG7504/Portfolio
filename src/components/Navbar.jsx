import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);
  const [showProgress, setShowProgress] = useState(true);
  const progressRef = useRef(null);
  const firstNavLinkRef = useRef(null);
  const menuButtonRef = useRef(null);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/projects", label: "Projects" },
    { to: "/experience", label: "Experience" },
    { to: "/skills", label: "Skills" },
    { to: "/education", label: "Education" },
    { to: "/certifications", label: "Certifications" },
    { to: "/contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setHasShadow(window.scrollY > 10);

      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setShowProgress(docHeight > 100);

      const progress = (scrollTop / docHeight) * 100;
      if (progressRef.current) {
        progressRef.current.style.width = `${progress}%`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    if (isOpen && firstNavLinkRef.current) {
      firstNavLinkRef.current.focus();
    }
    if (!isOpen && menuButtonRef.current) {
      menuButtonRef.current.focus();
    }
  }, [isOpen]);

  return (
    <>
      {/* Skip to content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only absolute top-2 left-2 bg-teal-700 text-white px-4 py-2 rounded z-50"
      >
        Skip to main content
      </a>

      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-[9999] pointer-events-none">
        <div
          ref={progressRef}
          className={`h-1 bg-teal-400 shadow-[0_0_10px_#14b8a6] transition-all duration-200 ease-out ${
            showProgress ? "opacity-100" : "opacity-0"
          }`}
          style={{ width: "0%" }}
        ></div>
      </div>

      {/* Navbar */}
      <header>
        <nav
          className={`bg-zinc-900 text-white sticky top-0 z-50 transition-shadow duration-300 ${
            hasShadow ? "shadow-lg shadow-zinc-800/30 backdrop-blur" : ""
          }`}
          aria-label="Main navigation"
        >
          <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
            <div className="flex items-center justify-between w-full md:w-auto min-h-[40px]">
              <Link to="/" className="flex items-center gap-2 min-h-[40px]">
                <img
                  src={`${import.meta.env.BASE_URL}logo.svg`}
                  alt="Sparsh Guha logo"
                  className="h-7 w-7 sm:h-8 sm:w-8 hover:scale-105 transition-transform duration-300"
                />
                <span className="text-base font-semibold tracking-wide hidden sm:inline-block">
                  Sparsh Guha
                </span>
              </Link>
              <button
                ref={menuButtonRef}
                className="md:hidden text-white ml-auto focus:outline-none focus:ring-2 focus:ring-teal-400"
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex gap-6 text-sm font-semibold tracking-wide uppercase">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`relative group transition duration-200 ${
                    location.pathname === link.to
                      ? "text-teal-400"
                      : "text-white hover:text-teal-400"
                  }`}
                >
                  <span className="transition-transform group-hover:scale-105 duration-200">
                    {link.label}
                  </span>
                  <span
                    className={`absolute left-0 -bottom-1 h-0.5 w-full bg-teal-400 scale-x-0 group-hover:scale-x-100 transform transition-transform origin-left ${
                      location.pathname === link.to ? "scale-x-100" : ""
                    }`}
                  ></span>
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Nav */}
          {isOpen && (
            <div
              id="mobile-menu"
              className="md:hidden px-6 pb-6 pt-2 space-y-3 text-sm font-semibold tracking-wide uppercase transition-all duration-300 ease-in-out"
              role="menu"
              aria-label="Mobile navigation"
            >
              {navLinks.map((link, i) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={`block transition duration-200 ${
                    location.pathname === link.to
                      ? "text-teal-400 underline underline-offset-4"
                      : "hover:text-teal-400"
                  }`}
                  role="menuitem"
                  tabIndex={0}
                  ref={i === 0 ? firstNavLinkRef : null}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}
        </nav>
      </header>
    </>
  );
}

export default Navbar;
