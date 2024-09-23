import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

function TabSection() {
  return (
    <div className="bg-[#235daef9] rounded-2xl p-6 md:p-10 flex flex-col sm-md:flex-row items-center sm-md:items-start space-y-6 sm-md:space-y-0 sm-md:space-x-10">
      <div className="w-full sm-md:w-1/2 h-full">
        <img
          src="\assets\warehouse.jpg"
          alt="Warehouse"
          className="rounded-2xl w-full h-full"
        />
      </div>

      <div className="w-full h-full sm-md:w-1/2 text-white px-2 ml-2">
        <h3 className="text-lg font-semibold mt-6 mb-12">OUR WAREHOUSES FEATURE:</h3>
        <ul className="space-y-3 text-sm xl:text-xl flex flex-col gap-6 h-full justify-around font-light">
          <li className="flex items-center">
            <span className="text-blue-400 mr-2">
              <IoMdCheckmarkCircleOutline />
            </span>
            <span>5 temperature zones (-25°C to +25°C)</span>
          </li>
          <li className="flex items-center">
            <span className="text-blue-400 mr-2">
              <IoMdCheckmarkCircleOutline />
            </span>
            <span>G+4, G+5 Racking system</span>
          </li>
          <li className="flex items-center">
            <span className="text-blue-400 mr-2">
              <IoMdCheckmarkCircleOutline />
            </span>
            <span>Multi-chamber facilities</span>
          </li>
          <li className="flex items-center">
            <span className="text-blue-400 mr-2">
              <IoMdCheckmarkCircleOutline />
            </span>
            <span>Dock-levelers for smoother operations</span>
          </li>
          <li className="flex items-center">
            <span className="text-blue-400 mr-2">
              <IoMdCheckmarkCircleOutline />
            </span>
            <span>Battery operated forklifts and reach-trucks</span>
          </li>
          <li className="flex items-center">
            <span className="text-blue-400 mr-2">
              <IoMdCheckmarkCircleOutline />
            </span>
            <span>24 hours power backup</span>
          </li>
          <li className="flex items-center">
            <span className="text-blue-400 mr-2">
              <IoMdCheckmarkCircleOutline />
            </span>
            <span>Separate Quarantine zones</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TabSection;
