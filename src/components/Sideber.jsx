import { useState } from "react";
import { NavLink } from "react-router-dom";
import companyImg from "../assets/company.png";

function Sidebar() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { to: "/", label: "Home", icon: "🏠" },
    { to: "/link", label: "Link", icon: "🔗" },
    { to: "/disabled", label: "Disabled", icon: "🚫" },
  ];

  return (
    <div className="flex">
      {/* ================= MOBILE HEADER ================= */}
      <header className="fixed top-0 left-0 right-0 h-16 bg-indigo-700 flex items-center px-4 z-40 md:hidden">
        <button
          onClick={() => setOpen(true)}
          className="text-white text-3xl"
        >
          ☰
        </button>
        <h1 className="ml-4 text-white font-semibold text-lg">
          Dashboard
        </h1>
      </header>

      {/* ================= OVERLAY ================= */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* ================= SIDEBAR ================= */}
      <aside
        className={`fixed top-0 left-0 h-screen w-64
        bg-gradient-to-b from-indigo-700 to-purple-800
        text-white shadow-2xl z-50
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0`}
      >
        {/* Close button (mobile) */}
        <button
          className="absolute top-4 right-4 text-2xl md:hidden"
          onClick={() => setOpen(false)}
        >
          ✖
        </button>

        {/* Logo */}
        <div className="mt-16 md:mt-8 mb-8 flex justify-center">
          <img
            src={companyImg}
            alt="Logo"
            className="w-28 h-28 rounded-full border-4 border-white/30 shadow-lg"
          />
        </div>

        {/* Menu */}
        <ul className="flex flex-col gap-3 px-4 flex-1">
          {menuItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-xl transition
                  ${
                    isActive
                      ? "bg-white/30 font-semibold"
                      : "hover:bg-white/20"
                  }`
                }
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Footer */}
        <footer className="text-center text-white/70 text-sm py-4">
          © 2025 Dell Technologies
        </footer>
      </aside>

      {/* ================= PAGE CONTENT ================= */}
      <main className="flex-1 min-h-screen bg-gray-100
        pt-16 md:pt-4
        md:ml-64 p-4">
        {/* Yahan apna dashboard / routes render karo */}
      </main>
    </div>
  );
}

export default Sidebar;
