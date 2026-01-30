import companyImg from "../assets/company.png";
import { NavLink } from "react-router-dom";

function Sideber() {
  return (
    <aside className="h-screen w-64 bg-gradient-to-b from-indigo-700 to-purple-800 text-white shadow-2xl">
      <div className="flex flex-col h-full px-6 py-8">
        {/* Logo */}
        <div className="mb-8">
          <img
            src={companyImg}
            alt="Logo"
            className="w-32 h-32 mx-auto rounded-full border-4 border-white/30 shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Menu */}
        <ul className="flex flex-col gap-3 flex-1">
          {[
            { to: "/", label: "Home", icon: "🏠" },
            { to: "/link", label: "Link", icon: "🔗" },
            { to: "/disabled", label: "Disabled", icon: "🚫" },
          ].map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 transform 
                  ${
                    isActive
                      ? "bg-white/30 font-semibold scale-105 shadow-lg"
                      : "hover:bg-white/20 hover:scale-105 hover:shadow-md"
                  }`
                }
              >
                <span className="text-lg">{item.icon}</span>
                <span className="text-base">{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Footer */}
        <footer className="mt-auto text-center text-white/70 text-sm py-4">
          © 2025 Dell Technologies. All rights reserved.
        </footer>
      </div>
    </aside>
  );
}

export default Sideber;
