/** @format */

import React from "react";
import { motion } from "framer-motion";
import { customSoftImg } from "../../assets/index";

const CustomSoft = () => {
  return (
    <div className="w-full py-3 flex flex-col justify-center sm:justify-center items-center">
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
        className="flex flex-col sm:flex-row justify-center p-5 sm:p-10 bg-blue-200 ">
        <div className="w-full sm:w-1/2 mx-5 sm:mx-10 p-5">
          <h1 className="text-3xl sm:text-5xl text-designColor font-abelPro font-bold leading-normal mb-2 p-2">
            Custom{" "}
            <span className="text-3xl sm:text-5xl sm:mx-4 text-[#193E65] font-abelPro font-bold leading-normal">
              Software Development
            </span>
          </h1>
          <p className="comonnPragraph">
            Custom software is essential for businesses in the modern era. It
            offers tailored solutions, a competitive edge, scalability,
            integration capabilities, enhanced security, cost-effectiveness,
            ownership and control, dedicated support, data insights, and
            improved customer satisfaction. This strategic approach empowers
            businesses to adapt, innovate, and succeed in a rapidly evolving
            technological landscape.
          </p>
        </div>
        {/* end of text */}
        <div className="w-full sm:w-1/2">
          <img
            src={customSoftImg}
            alt=""
            className="w-full h-auto max-w-screen-md mx-auto"></img>
        </div>
        {/* end of photo */}
      </motion.div>
      {/* end */}
      <div className="w-[90vw] flex flex-col justify-center items-cente mb-5">
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
            Why Custom{" "}
            <span className="text-6xl text-[#241468] font-abelPro">
              Software?
            </span>
          </h1>
        </motion.div>
        {/* end of heading */}
        <div className="grid max-xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 max-sm:grid-cols-1 gap-5 mx-5 justify-center items-center mt-5">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.3,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 2,
            }}
            className="whyCustomSoftwareCard">
            <h1 className="text-xl sm:text-xl text-black font-abelPro font-bold leading-normal mb-2 p-2">
              Competitive Advantage
            </h1>
            <p className="text-black font-abelPro leading-normal">
              Custom software can provide a significant competitive advantage.
              Businesses can create software that is innovative, efficient, and
              tailored to their industry, setting them apart from competitors.
            </p>
          </motion.div>

          <div className="whyCustomSoftwareCard">
            <h1 className="text-xl sm:text-xl text-black font-abelPro font-bold leading-normal mb-2 p-2">
              Cost-Effective
            </h1>
            <p className="text-black font-abelPro leading-normal">
              While the initial investment in custom software development can be
              higher than off-the-shelf solutions, it can be more cost-effective
              in the long run. Custom software eliminates the need for ongoing
              licensing fees and reduces the time and resources spent on
              workarounds or adaptations.
            </p>
          </div>

          <div className="whyCustomSoftwareCard">
            <h1 className="text-xl sm:text-xl text-black font-abelPro font-bold leading-normal mb-2 p-2">
              Ownership and Control
            </h1>
            <p className="text-black font-abelPro leading-normal">
              When a company develops custom software, they have full ownership
              and control over the system. This means they aren't dependent on
              third-party vendors for updates or support.
            </p>
          </div>

          <div className="whyCustomSoftwareCard">
            <h1 className="text-xl sm:text-xl text-black font-abelPro font-bold leading-normal mb-2 p-2">
              Scalability
            </h1>
            <p className="text-black font-abelPro leading-normal">
              Custom software can grow and evolve with a business. Companies can
              add new features and functionalities as they expand, ensuring that
              the software remains relevant and effective, helping businesses
              make data-driven decisions and improve their processes.
            </p>
          </div>

          <div className="whyCustomSoftwareCard">
            <h1 className="text-xl sm:text-xl text-black font-abelPro font-bold leading-normal mb-2 p-2">
              Security
            </h1>
            <p className="text-black font-abelPro leading-normal">
              Custom software can be developed with security in mind. Businesses
              can implement robust security features and stay ahead of potential
              threats and vulnerabilities.
            </p>
          </div>

          <div className=" whyCustomSoftwareCard">
            <h1 className="text-xl sm:text-xl text-black font-abelPro font-bold leading-normal mb-2 p-2">
              Support and Maintenance
            </h1>
            <p className="text-black font-abelPro leading-normal">
              Custom software can be maintained and supported by a dedicated
              team, ensuring that issues are addressed promptly and that updates
              are aligned with the business's needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomSoft;
