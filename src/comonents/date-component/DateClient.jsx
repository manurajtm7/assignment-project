import React from "react";

const DateClient = ({ dateFormatted }) => {
  return <div>{dateFormatted[1] + " " + dateFormatted[3]}</div>;
};

export default DateClient;
