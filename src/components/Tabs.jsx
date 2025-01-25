import React, { useState } from "react";
import Education from "./Education";
import WorkHistory from "./WorkHistory";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("education");

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="relative mb-8">
        <div className="flex justify-center">
          <button
            className={`px-4 py-2 mx-2 font-medium transition-colors ${
              activeTab === "education" ? "text-blue-600" : "text-gray-500"
            }`}
            onClick={() => setActiveTab("education")}
          >
            Education
          </button>
          <button
            className={`px-4 py-2 mx-2 font-medium transition-colors ${
              activeTab === "Work History" ? "text-blue-600" : "text-gray-500"
            }`}
            onClick={() => setActiveTab("Work History")}
          >
            Work History
          </button>
        </div>

        {/* Connecting line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200">
          {/* Animated indicator */}
          <div
            className={`absolute h-full w-1/2 bg-blue-600 transition-all duration-300 ${
              activeTab === "education" ? "left-0" : "left-1/2"
            }`}
          />
        </div>
      </div>

      <div className="p-6 border rounded-lg bg-white shadow-sm">
        {activeTab === "education" && <Education />}
        {activeTab === "Work History" && <WorkHistory />}
      </div>
    </div>
  );
};

export default Tabs;
