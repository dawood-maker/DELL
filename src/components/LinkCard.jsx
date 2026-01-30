import React from "react";

function LinkCard({ name, url, description, disabled }) {
  return (
    <a
      href={disabled ? "#" : url}
      className={`block p-4 rounded-xl shadow-md transition-transform duration-200 transform
        ${disabled
          ? "bg-gray-200 text-gray-500 cursor-not-allowed"
          : "bg-blue-500 text-white hover:bg-blue-600 hover:scale-105"
      }`}
      onClick={(e) => disabled && e.preventDefault()}
    >
      <h2 className="text-xl font-semibold">{name}</h2>
      {description && (
        <p className={`text-sm mt-1 ${disabled ? "text-gray-500" : "text-gray-100"}`}>
          {description}
        </p>
      )}
    </a>
  );
}

export default LinkCard;
