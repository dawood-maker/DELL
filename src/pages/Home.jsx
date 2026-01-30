import { FaChartLine, FaUsers, FaTasks } from "react-icons/fa";
import HomeStatsCard from "../components/HomeStatsCard";
import HomeRecentActivity from "../components/HomeRecentActivity";

function Home() {
  const stats = [
    {
      id: 1,
      icon: <FaChartLine />,
      title: "Total Sales",
      value: "$12,450",
      color: "text-indigo-600",
    },
    {
      id: 2,
      icon: <FaUsers />,
      title: "New Users",
      value: "1,245",
      color: "text-green-500",
    },
    {
      id: 3,
      icon: <FaTasks />,
      title: "Tasks Completed",
      value: "325",
      color: "text-purple-600",
    },
  ];

  const activities = [
    "User John Doe signed up.",
    "New order received for Product X.",
    "Task “Update Dashboard” completed.",
  ];

  return (
    <div className="p-4 sm:p-8 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl sm:text-5xl font-bold text-gray-800 mb-2">
          Welcome Back!
        </h1>
        <p className="text-gray-600 text-sm sm:text-lg">
          Here’s an overview of your dashboard and latest stats.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {stats.map((stat) => (
          <HomeStatsCard
            key={stat.id}
            icon={stat.icon}
            title={stat.title}
            value={stat.value}
            color={stat.color}
          />
        ))}
      </div>

      {/* Recent Activity */}
      <HomeRecentActivity activities={activities} />
    </div>
  );
}

export default Home;
