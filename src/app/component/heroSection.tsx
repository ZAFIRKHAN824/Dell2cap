"use client";

import React from "react";

interface Props {}

const HeroSection: React.FC<Props> = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById("form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full lg:min-h-screen bg-primary-light bg-[url('/Second-background.jpg')] bg-cover bg-center">
      {/* Logo Section */}
      <div className="flex justify-start px-24 py-10">
        <img
          src="navis-logo.png"
          alt="Logo"
          className="w-[80px] h-[80px] mt-4 md:w-[250px] md:h-[80px]"
        />
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
            Inquire Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
