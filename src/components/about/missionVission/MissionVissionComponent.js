/** @format */

import React from "react";
import { motion } from "framer-motion";
import { vissionImg, missionImg, valuesImg } from "../../../assets/index";

const MissionVissionComponent = () => {
  return (
    <section className="w-full py-3 flex flex-col items-center  ">
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
        className="flex flex-col 2xl:flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col max-sm:flex-col justify-center p-10">
        <div className="w-full 2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-full sm:w-full max-sm:w-full flex flex-col justify-center mx-0 2xl:mx-10 xl:mx-10 lg:mx-10 p-5 ">
          <h1 className="text-5xl 2xl:text-6xl xl:text-6xl lg:text-6xl text-designColor font-abelPro font-bold leading-normal">
            Our{" "}
            <span className="text-5xl 2xl:text-6xl xl:text-6xl lg:text-6xl text-deepBlue font-abelPro font-bold leading-normal">
              Vission
            </span>
          </h1>
          <p className="comonnPragraph ">
            At Nodex Systems, we believe the promise of technology is boundless,
            but complicated with technical jargon and unknowns. We aim to
            simplify complex operations, create meaningful user experiences, and
            deliver scalable, enduring business value. We believe success is a
            combination of satisfied customers, fulfilled employees, and useful
            solutions. Everything we do is intended to find the right balance of
            outcomes for the common benefits of all.
          </p>
        </div>
        {/* end of text */}
        <div className="w-full 2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-full sm:w-full max-sm:w-full flex items-center justify-center">
          <img
            src={vissionImg}
            alt=""
            className="w-full max-w-xs 2xl:max-w-none xl:max-w-none lg:max-w-none"
          />
        </div>
        {/* end of photo */}
      </motion.div>

      {/* end of vission */}

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
        className="flex flex-col lg:flex-row justify-center p-10">
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
          <img src={missionImg} alt="" className="h-64 lg:h-80" />
        </div>

        <div className="w-full lg:w-1/2 flex flex-col justify-center mx-0 lg:mx-10 p-5">
          <h1 className="text-5xl lg:text-6xl text-designColor font-abelPro font-bold leading-normal">
            Our{" "}
            <span className="text-5xl lg:text-6xl text-[#193E65] font-abelPro font-bold leading-normal">
              Mission
            </span>
          </h1>
          <p className="comonnPragraph">
            We are a team of driven experts. We are passionately committed to
            wrestling with the most complex business problems and applying
            technology systematically to solve them. We don't take a
            transactional approach to our engagements. Rather, we foster
            personalized relationships built on trust and perpetual delivery of
            benefit over time. At Nextzensoft, we empower through technology.
          </p>
        </div>
      </motion.div>

      {/* end of mission */}
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
        className="flex flex-col 2xl:flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col max-sm:flex-col justify-center p-10">
        <div className="w-full 2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-full sm:w-full max-sm:w-full flex flex-col justify-center mx-0 2xl:mx-10 xl:mx-10 lg:mx-10 p-5">
          <h1 className="text-5xl 2xl:text-6xl xl:text-6xl lg:text-6xl md:text-5xl sm:text-5xl max-sm:text-5xl text-designColor font-abelPro font-bold leading-normal">
            Our{" "}
            <span className="text-5xl 2xl:text-6xl xl:text-6xl lg:text-6xl md:text-5xl sm:text-5xl max-sm:text-5xl text-[#193E65] font-abelPro font-bold leading-normal">
              Values
            </span>
          </h1>
          <div className="flex flex-col justify-start items-start p-2 gap-2">
            <div className="flex flex-row gap-2 items-start">
              <p className="comonnPragraph ">
                Our spirit of innovation keeps us motivated and constantly
                nudges us towards upgrading our skills to serve our clients
                better.
              </p>
            </div>
            {/* end 1 */}
            <div className="flex flex-row gap-2 items-start">
              <p className="comonnPragraph ">
                Our sense of commitment empowers us to create technological
                solutions that truly serve our clients.
              </p>
            </div>
            {/* end 2 */}
            <div className="flex flex-row gap-2 items-start">
              <p className="comonnPragraph ">
                As we are always in pursuit of excellence, we extend our
                limitations with an open mind to work with any tech stacks and
                app development methods.
              </p>
            </div>
            {/* end 3 */}
            <div className="flex flex-row gap-2 items-start">
              <p className="comonnPragraph ">
                We are constantly endeavoring to create a community of IT
                experts and businesses to nurture an everlasting ecosystem of
                sustainable and holistic prosperity.
              </p>
            </div>
            {/* end 4 */}
          </div>
        </div>
        {/* end of text */}
        <div className="w-full 2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-full sm:w-full max-sm:w-full flex items-center justify-center">
          <img
            src={valuesImg}
            alt=""
            className="w-full max-w-xs 2xl:max-w-none xl:max-w-none lg:max-w-none"
          />
        </div>
        {/* end of photo */}
      </motion.div>

      {/* end of value */}
    </section>
  );
};

export default MissionVissionComponent;
