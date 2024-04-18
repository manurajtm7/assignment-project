import React from "react";
import ToolBar from "../../comonents/tool-bar/ToolBar";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import DateClient from "../../comonents/date-component/DateClient";

const WorkSchedule = () => {
  const date = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(date);
  const dateFormatted = formattedDate.split(" ");

  const decrement = 2;
  const increment = 0;
  const handleMakeDecision = (index) => {
    switch (index) {
      case 0:
        return <h2>{dateFormatted[2].split(",")[0] - 1}</h2>;
        break;
      case 1:
        return <h2>{dateFormatted[2].split(",")[0] - 2}</h2>;
        break;
      case 2:
        return <h2>{dateFormatted[2].split(",")[0] - 0}</h2>;
        break;
      case 3:
        return <h2>{parseInt(dateFormatted[2].split(",")[0]) + 1}</h2>;
        break;
      case 4:
        return <h2>{parseInt(dateFormatted[2].split(",")[0]) + 2}</h2>;
        break;
    }
  };
  return (
    <div className="w-full h-screen font-sans">
      <ToolBar />
      <div className="w-full text-center  relative ">
        <h2 className="text-2xl font-semibold pt-12 font-sans ">
          Workout schedule
        </h2>
        <div className="  absolute top-[30%] pt-12 left-4  xs:left-9 -translate-y-1/2 ">
          <div className="bg-zinc-200 p-1  rounded-md">
            <ChevronLeft />
          </div>
        </div>
        <div className="w-full text-center flex gap-3 items-center justify-center opacity-70 mt-5 ">
          <ChevronLeft />
          <DateClient dateFormatted={dateFormatted} />
          <ChevronRight />
        </div>
      </div>
      {/* central part */}
      <div className="w-full h-[11%]  border mt-5 grid place-items-center ">
        <div className="w-[90%] h-full  grid grid-cols-5 place-items-center ">
          {Array.from({ length: 5 }).map((d, index) => (
            <div
              className={
                index === 2
                  ? "w-20 h-[75%] text-white bg-gradient-to-tr from-blue-100 to-blue-500 grid place-items-center rounded-xl "
                  : "w-20 h-[75%]  text-zinc-700 bg-gradient-to-tr grid place-items-center rounded-xl "
              }
            >
              <h2 className="text-2xl font-bold  ">
                {handleMakeDecision(index)}
              </h2>
            </div>
          ))}
        </div>
      </div>
      {/* central part end */}
      <div className="w-full h-[65%] mt-5 grid gap-5 grid-cols-1 overflow-auto  ">
        {Array.from({ length: 24 }).map((data, index) => (
          <span className="w-full border-b-2 border-zinc-200 pl-5" key={index}>
            {index + 1 <= 12
              ? index + 1 + ":00 AM"
              : Math.abs(12 - index) + ":00 PM"}
          </span>
        ))}
        <div className="w-20 h-20 bg-gradient-to-r from-pink-200 to-purple-300 grid place-items-center fixed bottom-36 right-10  rounded-full">
          <Plus size={40} className="text-white" />
        </div>
      </div>
    </div>
  );
};

export default WorkSchedule;
