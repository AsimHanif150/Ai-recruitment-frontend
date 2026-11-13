import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, BriefcaseBusiness } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Jobs", path: "/jobs" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-slate-800 bg-slate-950/70 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center">
            <BriefcaseBusiness size={20} className="text-white" />
          </div>

          <div className="flex flex-col leading-none">
            <span className="text-lg font-semibold text-white">
              AI Recruit
            </span>
            <span className="text-xs text-slate-500">
              Recruitment Platform
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `transition font-medium ${
                  isActive
                    ? "text-blue-500"
                    : "text-slate-400 hover:text-white"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/login"
            className="text-slate-300 hover:text-white transition font-medium"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="bg-blue-600 hover:bg-blue-500 px-5 py-2.5 rounded-xl text-white font-medium transition"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-slate-300"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-slate-800 bg-slate-950">
          <div className="flex flex-col px-6 py-6 gap-5">
            {navLinks.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `font-medium ${
                    isActive
                      ? "text-blue-500"
                      : "text-slate-300 hover:text-white"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

            <div className="border-t border-slate-800 pt-5 flex flex-col gap-3">
              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="text-center border border-slate-700 py-2.5 rounded-xl text-slate-300 hover:border-slate-600 transition"
              >
                Login
              </Link>

              <Link
                to="/register"
                onClick={() => setMenuOpen(false)}
                className="text-center bg-blue-600 hover:bg-blue-500 py-2.5 rounded-xl text-white transition"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;