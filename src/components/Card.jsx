import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const Card = ({ width, start, para, hover = "none" }) => {
  return (
    <div
      className={`text-white flex flex-col justify-between bg-zinc-800 p-5 rounded-xl ${width} hover:${hover} min-h-120`}
    >
      <div className="w-full ">
        <div className="w-full flex justify-between items-center">
          <h3>one heading</h3>
          <IoIosArrowRoundForward />
        </div>
        <h1 className="text-3xl font-medium">Whatever heading..</h1>
      </div>
      <div className="down w-full">
        {start && (
          <>
            <h1 className="text-6xl font-semibold tracking-tight leading-none">
              Start a project
            </h1>
            <button className="rounded-full py-2 px-5 border border-zinc-50 ">
              contact Us
            </button>
          </>
        )}

        {para && (
          <p className="text-sm text-zinc-500 font-medium">
            Lorem ipsum dolor sit amet, consectetur adipisicing.
          </p>
        )}
      </div>
    </div>
  );
};

export default Card;
