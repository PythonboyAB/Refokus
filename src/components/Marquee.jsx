import React from "react";
import { motion } from "framer-motion";

const Marquee = ({ urls, direction }) => {
  return (
    <div className="flex w-full overflow-hidden  ">
      {/* First loop */}
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
        className="flex shrink-0 gap-40 py-10 pr-40"
      >
        {urls.map((url, index) => (
          <img src={url} key={index} className="h-10 shrink-0"></img>
        ))}
      </motion.div>

      {/* second loop */}
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
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
