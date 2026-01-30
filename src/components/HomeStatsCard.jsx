import React from "react";

function HomeStatsCard({ icon, title, value, color }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 flex items-center gap-4 hover:shadow-xl hover:scale-105 transition-transform duration-300">
      <div className={`${color} text-3xl sm:text-4xl`}>{icon}</div>
      <div>
        <p className="text-gray-500 text-sm sm:text-base">{title}</p>
        <p className="text-xl sm:text-2xl font-bold text-gray-800">{value}</p>
      </div>
    </div>
  );
}

export default HomeStatsCard;
