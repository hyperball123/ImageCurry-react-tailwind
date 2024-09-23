import React from "react";
import { FaWarehouse, FaTruckMoving, FaServer } from "react-icons/fa";
import TabSection from "./TabSection";

function Tabs() {
  const tabs = [
    {
      id: "warehousing",
      title: "Warehousing",
      content:
        "Our Warehouses Feature: 5 temperature zones, multi-chamber facilities...",
      icon: <FaWarehouse />,
      bgColor: "bg-[#235daef9]",
      textColor: "text-white",
    },
    {
      id: "distribution",
      title: "Distribution",
      icon: <FaTruckMoving />,
      bgColor: "bg-[#f3f4f6]",
      textColor: "text-black",
    },
    {
      id: "it",
      title: "IT Infrastructure",
      icon: <FaServer />,
      bgColor: "bg-[#f3f4f6]",
      textColor: "text-black",
    },
  ];

  return (
    <>
      <h2 className="text-center text-red-500 font-bold text-2xl pt-20 pb-6">
        Tab Section
      </h2>

      {/* Static tab buttons */}
      <div className="flex justify-between gap-2 md:gap-8 uppercase text-[0.8rem] md:text-sm cursor-pointer mb-10 overflow-x-hidden">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`flex flex-col items-center justify-center p-4 md:p-6 ${tab.bgColor} ${tab.textColor} rounded-xl md:w-40 md:h-36 w-26 h-22`}
          >
            <div className="text-xl md:text-3xl mb-2">{tab.icon}</div>
            <span className="font-semibold text-center">{tab.title}</span>
          </div>
        ))}
      </div>

      <TabSection />
    </>
  );
}

export default Tabs;
