import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white dark:bg-gray-900 shadow px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold text-blue-600 dark:text-blue-400"
        >
          MyPortfolio
        </Link>
        <div className="space-x-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-semibold"
                : "text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-semibold"
                : "text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/education"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-semibold"
                : "text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
            }
          >
            Education
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-semibold"
                : "text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/skills"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-semibold"
                : "text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
            }
          >
            Skills
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-semibold"
                : "text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
            }
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
