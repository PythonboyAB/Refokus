import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";

const Products = () => {
  var productData = [
    {
      id: 1,
      title: "CloudSync",
      description:
        "Experience crystal-clear audio with our latest wireless earbuds featuring active noise cancellation and 32-hour battery life. The ergonomic design ensures all-day comfort, while touch controls let you manage calls and music effortlessly.",
      live: true,
      case: false,
    },
    {
      id: 2,
      title: "ErgoLux ",
      description:
        "Transform any workspace into an ergonomic powerhouse with this adjustable standing desk converter. Featuring a smooth gas-spring lift mechanism, it transitions seamlessly between sitting and standing positions in seconds.",
      live: true,
      case: false,
    },
    {
      id: 3,
      title: "PureGlow",
      description:
        "Illuminate your beauty routine with this Hollywood-style vanity mirror featuring adjustable LED lighting in three color modes. The 10X magnification spot mirror ensures flawless makeup application.",
      live: true,
      case: true,
    },
    {
      id: 4,
      title: "AeroFit",
      description:
        "Monitor your health journey with precision using this advanced fitness tracker that goes beyond step counting. Track heart rate, blood oxygen levels, sleep quality, and 20+ workout modes with medical-grade accuracy.",
      live: true,
      case: true,
    },
  ];

  const [pos, setPos] = useState(0);
  const mover = (val) => {
    setPos(val * 20);
  };

  return (
    <div className="my-32 relative">
      {productData.map((product, index) => (
        <Product count={index} val={product} mover={mover} />
      ))}
      <div className="absolute top-0 w-full h-full pointer-events-none ">
        <motion.div
          initial={{ y: pos, x: "-50%" }}
          animate={{ y: pos + `rem` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
          className="absolute w-[28rem] h-[20rem]  left-[44%] overflow-hidden "
        >
          <video
            autoPlay
            muted
            loop
            className="h-full w-full"
            src="https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/arqitel-169.webm"
          ></video>
          <motion.div
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            animate={{ y: -pos + `rem` }}
            className="w-full h-full  ]"
          >
            <video
              src="https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/cula-169.webm"
              className="h-full w-full"
              autoPlay
              loop
              muted
            ></video>
          </motion.div>
          <motion.div
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            animate={{ y: -pos + `rem` }}
            className="w-full h-full ]"
          >
            <video
              src="https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/layoutland-169.webm"
              loop
              autoPlay
              muted
              className="h-full"
            ></video>
          </motion.div>
          <motion.div
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            animate={{ y: -pos + `rem` }}
            className="w-full h-full ]"
          >
            {" "}
            <video
              src="https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/arqitel-169.webm"
              loop
              autoPlay
              muted
              className="h-full"
            ></video>
          </motion.div>
          <motion.div
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            animate={{ y: -pos + `rem` }}
            className="w-full h-full  ]"
          >
            {" "}
            <video
              autoPlay
              muted
              loop
              className="h-full w-full"
              src="https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/arqitel-169.webm"
            ></video>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
