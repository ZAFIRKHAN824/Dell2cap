import React from "react";

const Bottom: React.FC = () => {
  return (
    <div>
      <footer className="font-sans text-primary bg-white font-normal text-center text-sm  md:text-base py-10">
        <div className="text-start ">
          <div className="px-10 sm:px-20 ">
            <div className="text-3xl mb-6">
              {" "}
              <img
                src="/Navis-logo.png"
                alt="Logo"
                className="w-[150px]  md:w-[150px] lg:w-[250px] "
              />
            </div>
            <div>
              <a href="mailto:ir@del2cap.com">ir@del2cap.com</a>
            </div>

            <div className="mt-6 ">
              <a
                href="/TermsOfUse_NavisInvestmentGroup.pdf"
                className=" mr-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                Terms of Use
              </a>
              |
              <a
                href="/PrivacyPolicy_NavisInvestmentGroup.pdf"
                className=" mx-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </a>
              |
              <a
                href="/CPRA_NavisInvestmentGroup.pdf"
                className=" mx-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                CPRA Notice
              </a>
              |
              <a
                href="/EEU_UK_PrivacyNotice_NavisInvestmentGroup.pdf"
                className=" ml-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Notice for EU and UK
              </a>
            </div>
            <div className="mt-2">
              Copyright © Del2 Cap LLC {new Date().getFullYear()} | All rights
              reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Bottom;
