import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md border-b">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">

        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center gap-3"
        >
          <div className="w-11 h-11 bg-blue-600 rounded-xl flex items-center justify-center text-white text-2xl font-bold">
            A
          </div>

          <div>
            <h1 className="text-2xl font-bold">
              AKTU <span className="text-blue-600">Helper</span>
            </h1>

            <p className="text-xs text-gray-500">
              By Tushar Sharma
            </p>
          </div>
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-semibold">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600"
                : "hover:text-blue-600"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/papers"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600"
                : "hover:text-blue-600"
            }
          >
            Papers
          </NavLink>

          <NavLink
            to="/upload"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600"
                : "hover:text-blue-600"
            }
          >
            Upload
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600"
                : "hover:text-blue-600"
            }
          >
            About
          </NavLink>

          <NavLink
            to="/papers"
            className="bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700"
          >
            Explore Papers
          </NavLink>

        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t">

          <NavLink
            to="/"
            onClick={closeMenu}
            className="block px-6 py-4 hover:bg-gray-100"
          >
            Home
          </NavLink>

          <NavLink
            to="/papers"
            onClick={closeMenu}
            className="block px-6 py-4 hover:bg-gray-100"
          >
            Papers
          </NavLink>

          <NavLink
            to="/upload"
            onClick={closeMenu}
            className="block px-6 py-4 hover:bg-gray-100"
          >
            Upload
          </NavLink>

          <NavLink
            to="/about"
            onClick={closeMenu}
            className="block px-6 py-4 hover:bg-gray-100"
          >
            About
          </NavLink>

          <div className="p-6">
            <NavLink
              to="/papers"
              onClick={closeMenu}
              className="block bg-blue-600 text-white text-center py-3 rounded-xl"
            >
              Explore Papers
            </NavLink>
          </div>

        </div>
      )}
    </nav>
  );
}

export default Navbar;