import React from "react";

function DisabledCompanyModal({ company, onClose }) {
  if (!company) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-2xl w-11/12 max-w-lg relative">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl font-bold"
          onClick={onClose}
        >
          &times;
        </button>

        {/* Image */}
        <img
          src={company.image}
          alt={company.name}
          className="rounded-t-2xl w-full h-64 object-cover"
        />

        {/* Details */}
        <div className="p-6">
          <h2 className="text-3xl font-bold mb-2">{company.name}</h2>
          <p className="text-gray-600 mb-2">{company.description}</p>
          <p className="text-gray-700 mb-1">
            <span className="font-semibold">Service:</span> {company.service}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Price:</span> {company.price}
          </p>
        </div>
      </div>
    </div>
  );
}

export default DisabledCompanyModal;
