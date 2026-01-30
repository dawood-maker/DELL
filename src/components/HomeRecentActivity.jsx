
import React from "react";

function HomeRecentActivity({ activities }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
        Recent Activity
      </h2>
      <ul className="space-y-3 text-gray-700">
        {activities.map((activity, index) => (
          <li
            key={index}
            className="p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors"
          >
            {activity.split(" ").map((word, i) => {
              if (["John", "Doe", "Product", "X", "Update", "Dashboard"].includes(word)) {
                return <span key={i} className="font-semibold">{word} </span>;
              }
              return word + " ";
            })}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomeRecentActivity;
