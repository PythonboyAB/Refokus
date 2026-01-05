import React, { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const Work = () => {
  const [images, setImage] = useState([
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/667c85a1151f26218228b9d3_Refokus.webp",
      top: "41%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://images.unsplash.com/photo-1599385549907-a8a47fb6e402?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      top: "56%",
      left: "44%",
      isActive: false,
    },
    {
      url: "https://images.unsplash.com/photo-1740249590541-baede809588a?q=80&w=911&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      top: "45%",
      left: "56%",
      isActive: false,
    },
    {
      url: "https://images.unsplash.com/photo-1586959316833-89e1d3e27255?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      top: "60%",
      left: "53%",
      isActive: false,
    },
    {
      url: "https://images.unsplash.com/photo-1551647152-eb24b93db57b?q=80&w=883&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      top: "45%",
      left: "45%",
      isActive: false,
    },
  ]);

  const { scrollYProgress } = useScroll();

  scrollYProgress.on("change", (data) => {
    function imagesShow(arr) {
      setImage((prev) =>
        prev.map((item, index) =>
          arr.indexOf(index) == -1
            ? { ...item, isActive: false }
            : { ...item, isActive: true }
        )
      );
    }
    switch (Math.floor(data * 100)) {
      case 0:
        imagesShow([]);
        break;
      case 1:
        imagesShow([0]);
        break;
      case 2:
        imagesShow([0, 1]);
        break;
      case 3:
        imagesShow([0, 1, 2]);
        break;
      case 4:
        imagesShow([0, 1, 2, 3]);
        break;
      case 5:
        imagesShow([0, 1, 2, 3, 4]);
        break;
      case 6:
        imagesShow([0, 1, 2, 3, 4, 5]);
        break;
    }
  });

  return (
    <div className="w-full mt-10">
      <div className="max-w-screen-xl mx-auto text-center relative ">
        <h1 className="text-[30vw] leading-none text-gray-100 select-none ">
          Work
        </h1>
        <div className="absolute top-0 w-full h-full ">
          {images.map(
            (ele, index) =>
              ele.isActive && (
                <img
                  key={index}
                  className="w-60 h-52 object-cover rounded-lg absolute -translate-x-[50%] -translate-y-[50%]"
                  style={{ top: ele.top, left: ele.left }}
                  src={ele.url}
                  alt={index}
                />
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Work;
