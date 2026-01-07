import React from "react";
import { motion } from "framer-motion";

const Marquee = ({ urls }) => {
  return (
    <div className="flex w-full overflow-hidden  ">
      <motion.div
        initial={{ x: "0" }}
        animate={{ x: "-100%" }}
        transition={{ ease: "linear", duration: 10 }}
        className="flex shrink-0 gap-40 py-10 pr-40"
      >
        {urls.map((url, index) => (
          <img src={url} key={index} className="h-10 shrink-0"></img>
        ))}
      </motion.div>
      <motion.div
        initial={{ x: "0" }}
        animate={{ x: "-100%" }}
        transition={{ ease: "linear", duration: 10 }}
        className="flex shrink-0 gap-40 py-10 pr-40"
      >
        {urls.map((url, index) => (
          <img src={url} key={index} className="h-10 shrink-0"></img>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
