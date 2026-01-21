"use client";
import React from "react";
import SideBar from "./sideBar";

const HeroSection: React.FC = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById("form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      id="heroSection"
      className={`bg-[url('/bg-img.webp')] bg-cover bg-center min-h-screen relative w-full lg:min-h-screen px-10 sm:px-24`}
    >
      {/* Logo Section */}
      <div className="flex flex-wrap justify-between items-center py-10 ">
        <div className="">
          {" "}
          <img
            src="/Navis-logo.png"
            alt="Logo"
            className="w-[120px]  md:w-[200px] lg:w-[280px]"
          />
        </div>

        <div className="md:text-lg text-base text-primary-dark flex flex-col md:flex-row justify-end items-center ">
          <div className="block sm:hidden">
            <SideBar scrollToForm={scrollToForm} />
          </div>
          <div className="hidden sm:block">
            <a href="mailto:ir@del2cap.com">Contact </a>
          </div>
        </div>
      </div>

      <div className=" text-2xl  justify-start  flex mt-[11vh] flex-wrap gap-10 items-center lg:justify-between ">
        {/* Content Section */}
        <div className="text-primary-dark font-extrabold order-2  lg:order-1 w-[400px]  md:w-[600px]  sm:ml-0  flex flex-col gap-14 md:gap-10 justify-center items-start ">
          <div className="   mb-2  ">
            We specialize in developing automated and algorithmic solutions to
            trade global equity markets using artificial intelligence and
            machine learning techniques
          </div>

          <button
            className="mb-6  w-60 h-14  md:w-80 rounded-xl  sm:h-12 bg-primary-dark  hover:bg-primary-dark text-white  text-xl  transition"
            onClick={scrollToForm}
          >
            Investor Questions
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
