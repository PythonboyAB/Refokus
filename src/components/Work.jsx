import React from "react";

const Work = () => {
  const image = [
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/667c85a1151f26218228b9d3_Refokus.webp",
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
      top: "43%",
      left: "40%",
      isActive: false,
    },
  ];
  return (
    <div className="w-full mt-10">
      <div className="max-w-screen-xl mx-auto text-center relative ">
        <h1 className="text-[30vw] leading-none text-gray-100 select-none ">
          Work
        </h1>
        <div className="absolute top-0 w-full h-full ">
          {image.map(
            (ele, index) =>
              ele.isActive && (
                <img
                  className="w-60 h-full object-cover rounded-lg absolute -translate-x-[50%] -translate-y-[50%]"
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
