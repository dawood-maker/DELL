import { FaChartLine, FaUsers, FaTasks } from "react-icons/fa";

function Home() {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-5xl font-bold text-gray-800 mb-2">Welcome Back!</h1>
        <p className="text-gray-600 text-lg">
          Here’s an overview of your dashboard and latest stats.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-lg p-6 hover:scale-105 transition-transform duration-300">
          <div className="flex items-center gap-4">
            <FaChartLine className="text-indigo-600 text-3xl" />
            <div>
              <p className="text-gray-500">Total Sales</p>
              <p className="text-2xl font-bold text-gray-800">$12,450</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 hover:scale-105 transition-transform duration-300">
          <div className="flex items-center gap-4">
            <FaUsers className="text-green-500 text-3xl" />
            <div>
              <p className="text-gray-500">New Users</p>
              <p className="text-2xl font-bold text-gray-800">1,245</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 hover:scale-105 transition-transform duration-300">
          <div className="flex items-center gap-4">
            <FaTasks className="text-purple-600 text-3xl" />
            <div>
              <p className="text-gray-500">Tasks Completed</p>
              <p className="text-2xl font-bold text-gray-800">325</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Recent Activity
        </h2>
        <ul className="space-y-3 text-gray-700">
          <li className="p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors">
            User <span className="font-semibold">John Doe</span> signed up.
          </li>
          <li className="p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors">
            New order received for{" "}
            <span className="font-semibold">Product X</span>.
          </li>
          <li className="p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors">
            Task <span className="font-semibold">“Update Dashboard”</span>{" "}
            completed.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
