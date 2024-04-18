import React from "react";
import GetStarted from "../../comonents/GetStarted";
import img from "../../assets/first.png";

function GetStart() {
  const informationSet = [
    {
      title: "Track Your Goal",
      content: `Don’t worry if you have trouble determining your goals, We can help
          you determine your goals and track your goals`,
    },
  ];
  return (
    <div className="w-full h-screen">
      <GetStarted img={img} info={informationSet[0]} />
    </div>
  );
}

export default GetStart;
