import React from "react";
import Stripe from "./Stripe";

const Stripes = () => {
  var data = [
    {
      url: "https://www.cssdesignawards.com/imgs/logo.svghttps://www.cssdesignawards.com/imgs/logo.svg",
      number: 48,
    },
    {
      url: "https://www.cssdesignawards.com/imgs/content/2025/red-collar-logo.svg",
      number: 2,
    },
    { url: "", number: 11 },
    { url: "", number: 48 },
    { url: "", number: 2 },
    { url: "", number: 11 },
  ];

  return (
    <div>
      <Stripe />
      <img src="https://www.cssdesignawards.com/imgs/logo.svg" alt="" />
      <img
        src="https://www.cssdesignawards.com/imgs/content/2025/red-collar-logo.svg"
        alt=""
      />
      <img
        src="https://www.cssdesignawards.com/imgs/content/2025/red-collar-logo.svg"
        alt=""
      />
    </div>
  );
};

export default Stripes;
