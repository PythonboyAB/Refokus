import React from "react";
import Stripe from "./Stripe";

const Stripes = () => {
  var data = [
    {
      url: "https://www.cssdesignawards.com/imgs/content/2025/red-collar-logo.svg",
      number: 2,
    },
    {
      url: "https://www.cssdesignawards.com/imgs/content/2025/red-collar-logo.svg",
      number: 2,
    },
    {
      url: "https://www.cssdesignawards.com/imgs/content/2025/red-collar-logo.svg",
      number: 2,
    },
    {
      url: "https://www.cssdesignawards.com/imgs/content/2025/red-collar-logo.svg",
      number: 2,
    },
    {
      url: "https://www.cssdesignawards.com/imgs/content/2025/red-collar-logo.svg",
      number: 2,
    },
    {
      url: "https://www.cssdesignawards.com/imgs/content/2025/red-collar-logo.svg",
      number: 2,
    },
  ];

  return (
    <div className="flex items-center justify-between mt-20">
      {data.map((elem, index) => (
        <Stripe val={elem} />
      ))}
    </div>
  );
};

export default Stripes;
