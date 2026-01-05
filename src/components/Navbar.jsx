import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto p-4 flex items-center justify-between text-gray-100 border-b border-zinc-700">
        <div className="flex items-center">
          <img
            className="w-8 h-8"
            src="https://cdn.prod.website-files.com/611ece0ac2a6d6fcfce278bb/61803a587a007d6202dac6a4_Refokus.png"
            alt="logo"
          />
          <div className="links flex gap-14 ml-20 ">
            {["Home", "Work", "Culture", "", "News"].map((ele, index) => (
              <a
                key={index}
                className="text-sm flex items-center gap-2 font-semibold"
                href="#"
              >
                {index === 1 ? (
                  <span
                    style={{ boxShadow: "0 0 0 0.15em #00FF19" }}
                    className="w-1 h-1 rounded-full bg-green-300  inline-block"
                  ></span>
                ) : (
                  ""
                )}
                {ele.length === 0 ? (
                  <span className=" w-0.5 h-7 bg-zinc-700 "></span>
                ) : (
                  ""
                )}

                {ele}
              </a>
            ))}
          </div>
        </div>
        <Button />
      </div>
    </>
  );
};

export default Navbar;
