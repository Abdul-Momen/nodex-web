/** @format */

import React from "react";
import { motion } from "framer-motion";
const WebAppMainCompo = () => {
  return (
    <div className="w-full py-3 flex flex-col justify-center sm:justify-center items-center">
      <div className="w-full flex flex-col justify-center items-center">
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.3,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 2,
          }}
          className="flex justify-center mt-3 mx-auto">
          <h1 className="text-6xl text-designColor font-abelPro">
            We are ready to meet{" "}
            <span className="text-6xl text-[#241468] font-abelPro">
              your challenges
            </span>
          </h1>
        </motion.div>
        <div className="w-1/2 justify-start items-center p-3 mx-3 mt-5">
          <p className="text-xl text-[#999999] font-abelPro leading-normal">
            We work with agile frameworks, which are perfect for building apps
            from job boards to marketplaces and social media platforms.
            Brocoders offers a full-service web development and the expertise
            you may rely on.
          </p>
        </div>

        <div className="w-full gap-10 flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col max-sm:flex-col justify-center items-center p-3 mx-2 ">
          <div className=" w-[400px] h-[300px] flex flex-col shadow-2xl rounded-2xl mx-2 p-5 hover:translate-x-1">
            <h1 className="text-xl sm:text-xl text-designColor font-abelPro font-bold leading-normal mb-2 p-2">
              <span className="text-7xl ">F</span>ront-end development
            </h1>
            <p className="text-[#999999] font-abelPro leading-normal">
              Create an application with an intuitive visual interface, or a
              responsive, SEO-optimized website with a clear human-centered
              design. We use progressive tools and technologies to build
              websites and web apps in alignment with your business purposes and
              brand, as well as stand up to design challenges of any complexity.
            </p>
          </div>
          <div className=" w-[400px] h-[300px] flex flex-col shadow-2xl rounded-2xl mx-2 p-5 hover:translate-x-1">
            <h1 className="text-xl sm:text-xl text-designColor font-abelPro font-bold leading-normal mb-2 p-2">
              <span className="text-7xl ">B</span>Back-end development
            </h1>
            <p className="text-[#999999] font-abelPro leading-normal">
              Drive your product performance to new heights with powerful,
              stable, reliable, and scalable back-end systems. We apply best
              practices in web application architecture to ensure the coherence
              of business logic realization and secure you from any troubles on
              the server side or in the system core.
            </p>
          </div>
        </div>
        {/* 1 */}

        <div className="w-full gap-10 flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col max-sm:flex-col justify-center items-center p-3 mx-2 ">
          <div className=" w-[400px] h-[300px] flex flex-col shadow-2xl rounded-2xl mx-2 p-5 hover:translate-x-1">
            <h1 className="text-xl sm:text-xl text-designColor font-abelPro font-bold leading-normal mb-2 p-2">
              <span className="text-7xl ">D</span>
              evOps and cloud infrastructure
            </h1>
            <p className="text-deepBlue font-abelPro leading-normal">
              Accelerate your business’ response to challenges of the modern
              business environment, where workload agility, efficiency, and
              flawless performance have become absolute necessities, and
              optimize testing and deployment costs significantly with DevOps
              services and cloud adoption.
            </p>
          </div>
          <div className=" w-[400px] h-[300px] flex flex-col shadow-2xl rounded-2xl mx-2 p-5 hover:translate-x-1">
            <h1 className="text-xl sm:text-xl text-designColor font-abelPro font-bold leading-normal mb-2 p-2">
              <span className="text-7xl ">Q</span>uality assurance
            </h1>
            <p className="text-deepBlue font-abelPro leading-normal">
              Bring the top-notch user experience by assuring the seamless and
              bug-free performance of your web application. Throughout the
              development cycle, we provide QA and all sorts of software testing
              of a product and its separate features to ensure its stability and
              efficiency along with proactivity in risk prediction,
              identification, and prevention.
            </p>
          </div>
        </div>
        {/* 2 */}
      </div>
    </div>
  );
};

export default WebAppMainCompo;
