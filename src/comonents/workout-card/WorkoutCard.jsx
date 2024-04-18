import React, { useState } from "react";
import "../../App.css";
import image from "../../assets/fullbody.png";

const WorkoutCard = ({ data }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="w-[90%] h-28 bg-white   border shadow-xl rounded-xl flex  p-3 ">
      <div className="w-3/4 h-full flex gap-4 items-center justify-start object-cover ">
        <img
          src={data?.image || image}
          className="w-16 rounded-full bg-blue-100  "
        />
        <div>
          <h4 className="font-sans font-semibold text-sm ">
            {data?.title || "fetching..."}
          </h4>
          <p className="text-sm opacity-65">
            {data?.time || "Thursday 6.00 pm"}
          </p>
        </div>
      </div>
      <div className=" w-[40%]  xs:w-[25%] grid place-items-center">
        <div
          className={
            !toggle
              ? "w-[70%] h-10 bg-blue-400 rounded-full make-it-toggle "
              : "w-[70%] h-10 bg-blue-400 rounded-full active-set-button "
          }
          onClick={() => setToggle((prev) => !prev)}
        ></div>
      </div>
    </div>
  );
};

export default WorkoutCard;
