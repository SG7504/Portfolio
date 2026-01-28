import Navbar from "./Navbar";
import { motion } from "framer-motion";

export default function Layout({ children }) {
  return (
    <div className="bg-zinc-900 text-white min-h-screen scroll-smooth">
      <Navbar />

      <motion.main
        id="main-content"
        className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto pt-20 pb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        tabIndex={-1} // Allows skip link to focus main content
        aria-label="Main content"
      >
        {children}
      </motion.main>

      <footer className="text-center text-sm text-zinc-500 py-6 border-t border-zinc-800 mt-10">
        &copy; {new Date().getFullYear()} Sparsh Guha. All rights reserved. Last Update: Jan 2026
      </footer>
    </div>
  );
}