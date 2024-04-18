import React from "react";
import { Camera, Home, LineChart, Search, User } from "lucide-react";
import { NavLink } from "react-router-dom";

const ToolBar = () => {
  return (
    <nav className="w-full xs:w-full h-24 bg-zinc-50  fixed bottom-2 flex items-center justify-center z-50 ">
      <ul className="w-[90%]    h-full flex gap-9  xs:gap-12   items-center justify-center ">
        <li>
          <NavLink to={"/"}>
            <Home size={34} color="#7F7F7F" />
          </NavLink>
        </li>
        <li>
          <NavLink to={"/workout-schedule"}>
            <LineChart size={34} color="#7F7F7F" />
          </NavLink>
        </li>
        <li className=" w-12 h-12 bg-gradient-to-r  from-blue-200 to-blue-400 grid place-items-center scale-150 -translate-y-4   rounded-full   ">
          <NavLink to={"/workout-track"}>
            <Search size={34} color="#ffffff" className="p-1" />
          </NavLink>
        </li>
        <li>
          <Camera size={34} color="#7F7F7F" />
        </li>
        <li>
          <User size={34} color="#7F7F7F" />
        </li>
      </ul>
    </nav>
  );
};

export default ToolBar;
