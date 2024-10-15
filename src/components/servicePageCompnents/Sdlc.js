/** @format */

import React from "react";
import { sdlc } from "../../assets/index";

const Sdlc = () => {
  return (
    <div className=" w-[90vw] h-[95vh]  rounded-2xl p-10">
      <div className="w-[95vw] h-full bg-sdlcBg bg-cover bg-center  rounded-2xl shadow-2xl  ">
        <div className=" w-full h-full bg-black bg-opacity-50 flex flex-col items-center justify-around  rounded-2xl ">
          <div className=" w-[70%] justify-center items-center">
            <h1 className=" capitalize font-abelPro text-4xl font-bold text-designColor text-center mb-5">
              Intelligent software development{" "}
              <span className=" capitalize font-abelPro text-4xl font-bold text-white text-center mb-5">
                {" "}
                production cycle
              </span>
            </h1>
          </div>
          <div className=" w-[70%] h-[65%]  flex items-center justify-center relative  ">
            <div className=" w-[100vw] scale-90 hover:scale-100 transition-all duration-300 p-5 mb-10">
              <img src={sdlc} alt="image1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sdlc;
