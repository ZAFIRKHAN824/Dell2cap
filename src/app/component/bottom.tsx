import React from "react";

const Bottom: React.FC = () => {
  return (
    <div>
      <footer className="font-sans bg-primary font-normal text-center text-sm text-white md:text-base md:py-1">
        <div className="text-start ">
          <div className="px-20 pt-10">
            <div className="text-3xl mb-4"> Navis Investment Group</div>
            <div> abc New York, NY 10022 contact@jainglobal.com</div>
            <div>abc@gmail.com</div>
          </div>
          <div className="px-16 py-6">
            <a
              href="/TermCondition.html"
              className="text-white  mx-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms of Use
            </a>
            |
            <a
              href="/TermCondition.html"
              className="text-white  mx-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy Policy
            </a>
            |
            <a
              href="/TermCondition.html"
              className="text-white  mx-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              CPRA Notice
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Bottom;
