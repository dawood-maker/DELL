import React from "react";

function DisabledCompanyCard({ company, onViewDetails }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1 hover:scale-102 border border-gray-200">
      <img
        src={company.image}
        alt={company.name}
        className="rounded-t-2xl w-full h-48 object-cover"
      />

      <div className="p-5">
        <h2 className="text-2xl font-bold mb-2 text-gray-900">
          {company.name}
        </h2>

        <button
          onClick={() => onViewDetails(company)}
          className="w-full py-2 rounded-lg text-white font-semibold bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 transition-all shadow"
        >
          View Details
        </button>
      </div>
    </div>
  );
}

export default DisabledCompanyCard;
