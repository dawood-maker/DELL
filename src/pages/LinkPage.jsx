import React from "react";
import LinkCard from "../components/LinkCard";

function LinkPage() {
  const links = [
    { name: "Home", url: "/", description: "Go to the homepage" },
    { name: "About", url: "/about", description: "Learn more about us" },
    { name: "Contact", url: "/contact", description: "Get in touch" },
    { name: "Disabled", url: "/disabled", description: "This link is disabled", disabled: true },
  ];

  return (
    <div className="p-8 max-w-md mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">
        My Links
      </h1>
      <p className="text-lg mb-8 text-center text-gray-600">
        Welcome to my link page! Click any link below to visit.
      </p>

      <ul className="space-y-4">
        {links.map((link, index) => (
          <li key={index}>
            <LinkCard
              name={link.name}
              url={link.url}
              description={link.description}
              disabled={link.disabled}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LinkPage;
