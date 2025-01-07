"use client";
import React from "react";

const HeroSection: React.FC = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById("form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full lg:min-h-screen bg-primary-light ">
      <div className="absolute top-6 right-10"></div>
      {/* Logo Section */}
      <div className="flex flex-wrap justify-between items-center px-24 py-10 ">
        <img
          src="/Navis-logo.png"
          alt="Logo"
          className="w-[80px] h-[80px] mt-4 md:w-[250px] md:h-[80px]"
        />
        <div className="text-lg text-primary-dark">
          <a className="mr-14" href="mailto:Contact@navisinvestmentgroup.com">
            Contact{" "}
          </a>
          <span className="cursor-pointer" onClick={scrollToForm}>
            Investor Inquiries{" "}
          </span>
        </div>
      </div>

      <div className="justify-center  flex mt-20 flex-wrap gap-10 items-center lg:justify-between px-3 sm:px-24 ">
        {/* Content Section */}
        <div className="text-primary-dark order-2 px-4 sm:px-0 lg:order-1 w-[500px]  sm:ml-0  flex flex-col gap-10 justify-center items-start ">
          <div className="text-4xl font-semibold mb-2  ">
            We are a global investment management firm.
          </div>

          <button
            className="border-2 mb-6 w-80 rounded-xl font-bold  h-12 bg-primary  hover:bg-primary-dark text-white text-lg  md:text-xl transition"
            onClick={scrollToForm}
          >
            Investor Inquiries
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
