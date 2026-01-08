import React from "react";

const Stripe = ({ val }) => {
  return (
    <div className="w-[16.66%] h-16  text-gray-100  px-4 py-3 border-t-2 border-r-2 border-b-2 border-zinc-700 flex justify-between items-center">
      <img src={val.url} alt="" className="invert object-fit object-cover  " />
      <span>{val.number}</span>
    </div>
  );
};

export default Stripe;
