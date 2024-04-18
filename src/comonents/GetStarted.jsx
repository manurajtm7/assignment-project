import React from "react";
import { ChevronRight } from "lucide-react";

const GetStarted = ({ info, img, route }) => {
  return (
    <div className="w-full h-screen bg-zinc-50">
      <div className="w-full  text-end ">
        <span className="text-blue-400 text-xl block p-5 ">skip</span>
      </div>
      <div className="h-1/2 mt-5">
        <img src={img} className="mix-blend-multiply" />
      </div>
      <div className="w-full ">
        <div className="mx-10 mt-10 sx:mt-0 flex gap-3 flex-col  ">
          <h2 className="text-lg font-bold">{info?.title}</h2>
          <p className="opacity-50">{info.content}</p>
        </div>
      </div>
      <div className="w-full h-1/4  grid place-items-end ">
        <a
          href={route}
          className=" w-20 h-20  text-zinc-50 bg-gradient-to-r from-zinc-100 to-blue-500 text-4xl  mr-8  border-4 border-zinc-100  border-t-4 border-r-blue-400  flex items-center justify-center sx:fixed bottom-20 right-5   rounded-full"
        >
          <ChevronRight size={40} />
        </a>
      </div>
    </div>
  );
};

export default GetStarted;
