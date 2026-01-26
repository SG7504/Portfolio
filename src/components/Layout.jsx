import Navbar from "./Navbar";
import { motion } from "framer-motion";

export default function Layout({ children }) {
  return (
    <div className="bg-zinc-900 text-white min-h-screen scroll-smooth flex flex-col">
      <Navbar />

      <motion.main
        id="main-content"
        className="flex-grow px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto pt-20 pb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        tabIndex={-1}
        aria-label="Main content"
      >
        {children}
      </motion.main>

      <footer className="text-center text-sm text-zinc-500 py-6 border-t border-zinc-800">
        <p className="mb-1 text-xs text-zinc-500">
          Last updated · January 2026
        </p>

        <p>
          &copy; {new Date().getFullYear()} Sparsh Guha. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
