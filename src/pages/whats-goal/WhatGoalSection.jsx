import React from "react";
import { useNavigate } from "react-router-dom";

const WhatGoalSection = () => {
  const navigate = useNavigate();
  const GoalsData = [
    "Weight loss",
    "Muscle gain",
    "Flexibility and mobility",
    "General fitness",
    "Event - specific training",
    "Mindfulness and mental health",
  ];
  return (
    <div className="w-full h-screen">
      <div className="w-full text-center  ">
        <h2 className="text-2xl font-bold pt-12 font-sans ">
          What are your goals?
        </h2>
      </div>
      <div className="w-full h-[60%] flex gap-6 flex-col items-center justify-center">
        {GoalsData.map((data, index) => (
          <div
            key={index}
            className="w-[90%] h-16 bg-zinc-100  flex items-center justify-between rounded-2xl "
          >
            <h2 className=" font-medium pl-7">{data}</h2>
            <input type="checkbox" className="w-16 h-6" />
          </div>
        ))}
      </div>
      <div className="w-full text-center grid place-items-center ">
        <div
          onClick={() => navigate("/workout-track")}
          className="w-[90%] h-14 bg-gradient-to-r from-blue-300 to-blue-500 grid place-items-center  rounded-2xl   "
        >
          <h1 className="text-lg font-semibold text-white ">Confirm</h1>
        </div>
      </div>
    </div>
  );
};

export default WhatGoalSection;
