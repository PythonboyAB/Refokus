import React from "react";

const Marquee = ({ urls }) => {
  return (
    <div className="flex w-full gap-20 overflow-hidden py-10 ">
      {urls.map((url, index) => (
        <img src={url} key={index} className="h-10 shrink-0"></img>
      ))}
      {urls.map((url, index) => (
        <img src={url} key={index} className="h-10"></img>
      ))}
    </div>
  );
};

export default Marquee;
