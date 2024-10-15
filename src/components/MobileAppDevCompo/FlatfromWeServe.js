/** @format */

import React from "react";
import {
  MoD_hybridApp,
  MoD_nativeApp,
  MoD_webMobApp,
  MoD_WearableApp,
} from "../../assets/index";

const FlatfromWeServe = () => {
  return (
    <div className="w-full flex justify-center items-center bg-[#000412] py-0 p-5 ">
      <div className=" flex flex-col justify-center items-center  p-3">
        <div className="flex flex-col justify-center items-center ml-5">
          <h1 className="text-4xl text-designColor font-abelPro font-bold text-left mb-3 p-2">
            MOBILE APPLICATION DEVELOPMENT{" "}
            <span className="text-4xl text-white font-abelPro font-bold">
              SERVICES FOR VARIOUS PLATFORMS
            </span>{" "}
          </h1>
          <p className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-[95vw] sm:w-[98vw] max-sm:w-[98vw] text-center">
            It is important to choose the right technology stack for building
            mobile app solutions for your enterprise or startup idea. Our
            experts vast experience in designing and developing medium to large
            scale mobile app solutions that deliver performance, usability,
            security and scalability.
          </p>
        </div>
        {/* end */}
        <div className="flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col max-sm:flex-col gap-5 justify-center items-center mx-3 p-11">
          <div className="flex flex-col p-3 mx-2 justify-start items-start">
            <div className=" flex justify-center items-center mb-2  p-3 h-[100px] w-[100px] rounded-full">
              <img src={MoD_nativeApp} alt="" className=" w-[80px] h-[80px]" />
            </div>
            <h2 className="text-xl text-white font-abelPro font-semibold mb-2">
              Native Mobile App Development
            </h2>
            <p>
              Our mobile app developers can build high-quality native apps for
              both Android and iOS systems aligned with your business and
              security requirements.
            </p>
          </div>
          {/* end of item 1=> */}
          <div className="flex flex-col p-3 mx-2 justify-start items-start">
            <div className=" flex justify-center items-center mb-2  p-3 h-[100px] w-[100px] rounded-full ">
              <img src={MoD_hybridApp} alt="" className=" w-[80px] h-[80px]" />
            </div>
            <h2 className="text-xl text-white font-abelPro font-semibold mb-2">
              Hybrid Mobile App Development
            </h2>
            <p>
              Cross-platform apps that can work in different environments thanks
              to a unique blend of native and web app technologies.
            </p>
          </div>
          {/* end of item 2 */}
          <div className="flex flex-col p-3 mx-2 justify-start items-start">
            <div className=" flex justify-center items-center mb-2  p-3 h-[100px] w-[100px] rounded-full">
              <img src={MoD_webMobApp} alt="" className=" w-[80px] h-[80px]" />
            </div>
            <h2 className="text-xl text-white font-abelPro font-semibold mb-2">
              Progressive Web App Development
            </h2>
            <p>
              With Progressive Web Apps, we deliver native-like capabilities and
              installability while reaching anyone, anywhere, on any device with
              a single codebase.
            </p>
          </div>
          {/* end of item 3=> */}
          <div className="flex flex-col p-3 mx-2 justify-start items-start">
            <div className=" flex justify-center items-center mb-2  p-3 h-[100px] w-[100px] rounded-full">
              <img
                src={MoD_WearableApp}
                alt=""
                className=" w-[80px] h-[80px]"
              />
            </div>
            <h2 className="text-xl text-white font-abelPro font-semibold mb-2">
              Wearables and Embedded Software
            </h2>
            <p>
              We can create companion apps for a number of wearable devices,
              integrate with smart devices or proprietary peripherals.
            </p>
          </div>
          {/* end of item 4 */}
        </div>
      </div>
    </div>
  );
};

export default FlatfromWeServe;
