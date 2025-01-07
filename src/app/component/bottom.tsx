import React from "react";

const Bottom: React.FC = () => {
  return (
    <div>
      <footer className="font-sans bg-primary font-normal text-center text-sm text-white md:text-base py-10">
        <div className="text-start ">
          <div className="px-10 sm:px-20 ">
            <div className="text-3xl mb-6"> Navis Investment Group</div>
            <div className=" mb-2"> abc New York, NY 10022</div>
            <div>
              <a href="mailto:Contact@navisinvestmentgroup.com">
                contact@navisinvestmentgroup.com
              </a>
            </div>

            <div className="mt-6 ">
              <a
                href="/terms-of-use.pdf"
                className="text-white mr-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                Terms of Use
              </a>
              |
              <a
                href="/privacy-policy.pdf"
                className="text-white mx-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </a>
              |
              <a
                href="/cpra-website-notice.pdf"
                className="text-white ml-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                CPRA Notice
              </a>
            </div>
            <div className="mt-2">
              Copyright © Navis Investment Group LLC {new Date().getFullYear()}{" "}
              | All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Bottom;
