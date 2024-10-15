/** @format */

import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { c_call, c_email, c_clock } from "../../assets/index";

const ContactUsLeftInfo = () => {
  return (
    <div className="w-full md:w-[35%] h-full p-4 md:p-8 rounded-lg bg-[#f4f4f4] gap-4 flex flex-col justify-center ">
      <div className="flex flex-col gap-3">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-abelPro font-bold text-[#f80400] mb-3">
          Get in touch with us
        </h2>
        <p className="text-base md:text-lg lg:text-xl text-[#848484] font-abelPro mb-4">
          Have a revolutionary business idea? Let’s hit the market together!
          Don’t Hesitate to contact with us for any kind of information.
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 mt-2">
          <img
            src={c_email}
            alt=""
            height={30}
            width={30}
            className="rounded-full "
          />

          <div>
            <p className="text-base md:text-lg text-coralred font-abelPro">
              info@nodexsystem.com
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <img
            src={c_call}
            alt=""
            height={30}
            width={30}
            className="rounded-full"
          />

          <div>
            <p className="text-base md:text-lg text-coralred font-abelPro">
              +8801314986798
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <img
            src={c_clock}
            alt=""
            height={30}
            width={30}
            className="rounded-full"
          />

          <div>
            <h3 className="text-base md:text-lg font-abelPro font-bold text-[#848484]">
              Sunday - Thursday{" "}
              <span className="text-coralred font-abelPro">
                9.00am - 18.00pm
              </span>
            </h3>
            <p className="text-base md:text-lg text-coralred font-abelPro">
              Friday, Saturday Closed
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-sm md:text-base uppercase p-2 font-titleFont mb-2 md:mb-4">
          Find Us in
        </h2>
        <div className="flex gap-2">
          <span
            className="bannerIcon"
            onClick={() =>
              window.open(
                "https://www.facebook.com/NodexSystem?mibextid=ZbWKwL",
                "_blank"
              )
            }>
            <FaFacebookF />
          </span>

          <span
            className="bannerIcon"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/company/nodexsystem/",
                "_blank"
              )
            }>
            <FaLinkedinIn />
          </span>
          <span className="bannerIcon">
            <FaTwitter />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactUsLeftInfo;
