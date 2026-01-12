import React from "react";
import Stripe from "./Stripe";
import airbnb from "../assets/crazy.png";

const Stripes = () => {
  const data = [
    {
      url: "https://www.cssdesignawards.com/imgs/content/2025/red-collar-logo.svg",
      number: 2,
    },
    {
      url: airbnb,
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
    <div className="flex items-center mt-20">
      {data.map((elem, index) => (
        <Stripe key={index} val={elem} />
      ))}
    </div>
  );
};

export default Stripes;
