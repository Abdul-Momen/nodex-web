/** @format */

import React from "react";
import { MoD_ImageOne } from "../../assets/index";

const MobAppService = () => {
  return (
    <div className="w-full flex justify-center items-center py-0 mb-10 ">
      <div className="2xl:w-[60vw] xl:w-[60vw] lg:w-[60vw] md:w-[90vw] sm:w-[98vw] max-sm:w-[98vw] flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col max-sm:flex-col shadow-2xl rounded-2xl p-4 justify-center items-center ">
        <div className="w-1/2 flex justify-center items-center flex-col mx-2">
          <h1 className="text-3xl text-designColor font-abelPro font-bold">
            Mobile App{" "}
            <span className="text-3xl text-deepBlue font-abelPro font-bold">
              {" "}
              Development
            </span>
          </h1>
          <p className="text-deepBlue font-abelPro ">
            We provide mobile app development services for both native and
            hybrid apps. You can rely on us for comprehensive design
            documentation, agile development and testing, and post-launch
            support.
          </p>
        </div>
        {/* end ==> */}

        <div className=" w-1/2 flex justify-center items-center">
          <img src={MoD_ImageOne} alt="" className="" />
        </div>
      </div>
    </div>
  );
};

export default MobAppService;
