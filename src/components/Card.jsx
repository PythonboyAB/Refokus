import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from "framer-motion";

const Card = ({ start, para, hover, width }) => {
  return (
    <motion.div
      whileHover={{
        backgroundColor: start && hover,
        padding: "25px",
      }}
      className={`group text-white flex flex-col justify-between bg-zinc-800 p-5 rounded-xl ${width} min-h-120`}
    >
      <div className="w-full ">
        <div className=" w-full flex justify-between items-center">
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
            <button className="rounded-full mt-5 py-2 px-5 border-none bg-[#7443ff] group-hover:bg-gray-900 transition-colors capitalize ">
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
    </motion.div>
  );
};

export default Card;
