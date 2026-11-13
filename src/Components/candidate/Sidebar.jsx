import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation();

  const links = [
    { to: "/candidate/dashboard", label: "Dashboard" },
    { to: "/candidate/applied-jobs", label: "Applied Jobs" },
    { to: "/candidate/profile", label: "Profile" },
  ];

  return (
    <aside className="w-64 bg-gray-900 text-gray-200 min-h-screen p-4">
      <h2 className="text-lg font-bold mb-6 text-white">Candidate Panel</h2>
      <nav className="flex flex-col gap-2">
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={`px-4 py-2 rounded ${
              location.pathname === link.to
                ? "bg-blue-600 text-white"
                : "hover:bg-gray-800"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;