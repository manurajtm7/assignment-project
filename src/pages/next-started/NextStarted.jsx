import React from "react";
import GetStarted from "../../comonents/GetStarted";
import img from "../../assets/second.png";

function NextStarted() {
  const informationSet = [
    {
      title: "Get Burn",
      content: `Let’s keep burning to achieve your goals, it hurts only temporarily, if you give up now you will be in pain forever`,
    },
  ];
  return (
    <div className="w-full h-screen">
      <GetStarted img={img} info={informationSet[0]} route={"/create-account"} />
    </div>
  );
}

export default NextStarted;
