import { useState } from "react";
import TechImg from "../assets/Tech.png";
import DigitalImg from "../assets/Digital.png";
import DesignImg from "../assets/Design.png";
import TechBusinessImg from "../assets/TechBusiness.png";
import GoogleImg from "../assets/Google.png";
import AppleImg from "../assets/Apple.png";

import DisabledCompanyCard from "../components/DisabledCompanyCard";
import DisabledCompanyModal from "../components/DisabledCompanyModal";

function DisabledPage() {
  const [selectedCompany, setSelectedCompany] = useState(null);

  const companies = [
    {
      id: 1,
      name: "Tech Solutions",
      description: "We provide modern web and mobile app solutions.",
      service: "Web Development",
      price: "$500 - $2000",
      image: TechImg,
    },
    {
      id: 2,
      name: "Digital Marketing Pro",
      description: "Grow your business with SEO and social media marketing.",
      service: "Digital Marketing",
      price: "$300 - $1500",
      image: DigitalImg,
    },
    {
      id: 3,
      name: "Design Studio",
      description: "Creative UI/UX and graphic design services.",
      service: "UI/UX Design",
      price: "$200 - $1000",
      image: DesignImg,
    },

    {
      id: 4,
      name: "Tech Business",
      description: "We provide innovative tech solutions and consulting.", // updated description
      service: "Software Development & Consulting", // updated service
      price: "$600 - $2500", // updated price
      image: TechBusinessImg,
    },
    {
      id: 5,
      name: "Google",
      description:
        "Google provides innovative technology solutions including search engines, cloud services, AI tools, and digital advertising platforms.",
      service: "Cloud Computing, AI & Digital Services",
      price: "$1000 - $5000",
      image: GoogleImg,
    },
    {
      id: 6,
      name: "Apple",
      description: "Apple provides innovative hardware and software solutions for personal computing and mobile devices.",
      service: "Hardware & Software Development",
      price: "$800 - $3000",
      image: AppleImg,
    },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-extrabold mb-3 text-gray-800 text-center">
        Disabled
      </h1>
      <p className="text-lg mb-8 text-gray-600 text-center">
        Explore our featured companies
      </p>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {companies.map((company) => (
          <DisabledCompanyCard
            key={company.id}
            company={company}
            onViewDetails={setSelectedCompany}
          />
        ))}
      </div>

      {/* Modal */}
      <DisabledCompanyModal
        company={selectedCompany}
        onClose={() => setSelectedCompany(null)}
      />
    </div>
  );
}

export default DisabledPage;
    