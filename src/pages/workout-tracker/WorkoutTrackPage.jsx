import React from "react";
import ToolBar from "../../comonents/tool-bar/ToolBar";
import { AlertTriangle, BarChart, ChevronLeft } from "lucide-react";
import WorkoutCard from "../../comonents/workout-card/WorkoutCard";
import image from "../../assets/fullbody.png";
import image2 from "../../assets/workout.png";
import cardImgage from "../../assets/logo.png";
import BarChartClient from "../../comonents/bar-chart/BarChartClient";

const WorkoutTrackPage = () => {
  const workoutData = [
    {
      image: image,
      title: "Full body workout",
      time: "Today 3pm",
    },
    {
      image: image2,
      title: "Upper body workout",
      time: "4 feb 3.30pm",
    },
  ];

  const chartData = {
    labels: ["8:00 AM", "10:00 AM", "12:00 PM", "2:00 PM", "4:00 PM"], // Example time labels
    values: [200, 300, 400, 250, 350], // Example calorie values
  };
  return (
    <div className="w-full h-screen">
      <ToolBar />
      <div className="w-full text-center flex items-center justify-center  relative  ">
        <h2 className="text-2xl font-medium   pt-12 ">Work out tracker</h2>
        <div className="  absolute top-1/2 pt-12 left-4  xs:left-9 -translate-y-1/2 ">
          <div className="bg-zinc-200 p-1  rounded-md">
            <ChevronLeft />
          </div>
        </div>
        {/* head section end */}
      </div>
      {/* place the graph here */}
      <div className="w-full h-1/4 xs:h-1/5   border mt-5 p-3   xs:p-10   ">
        <BarChartClient data={chartData} />
      </div>
      {/* place the graph here */}
      <div className="w-full h-max flex items-center justify-center">
        <div className=" w-[90%] h-20 bg-gradient-to-r from-blue-200 to-zinc-100 px-5 mt-5  rounded-xl flex gap-5 items-center justify-start shadow ">
          <AlertTriangle color="#8099FF" size={35} />
          <h2 className="text-sm w-[70%] ">
            You've burned fewer calories than yesterday. Time to get moving!{" "}
          </h2>
        </div>
      </div>
      {/* notifiaction section end */}
      <div className="w-full h-1/2 mt-5 ">
        <div className="w-full flex items-center justify-between">
          <h2 className="text-xl text-zinc-600  font-medium pl-8">
            Upcoming Workout
          </h2>
          <span className=" text-zinc-600 opacity-60 pr-8 ">see more</span>
        </div>

        {/* card section starts */}
        <div className="w-full h-1/2 grid  gap-3 grid-cols-1 justify-items-center  mt-10 p-3  overflow-auto ">
          {workoutData.map((data, index) => (
            <WorkoutCard data={data} key={index} />
          ))}
        </div>
        {/* card section starts */}

        {/* botton ssction  */}
        <div className="w-full mt-5 grid place-items-center ">
          <div className="w-[90%] text-start text-lg font-sans font-semibold ">
            <h2>What do you want to want to train?</h2>
          </div>
          <div className="w-[90%] h-52 bg-blue-200 rounded-2xl mt-3 flex ">
            <div className="w-1/2 p-3 px-8 pt-6">
              <h2 className=" w-max text-sm xs:text-base  font-sans font-medium  ">full body workout</h2>
              <ul className="text-xs xs:text-base ">
                <li>Arms</li>
                <li>Chest</li>
                <li>legs</li>
              </ul>
            </div>
            <div className="w-1/2 p-7">
              <img src={cardImgage} className="bg-blue-100 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutTrackPage;
