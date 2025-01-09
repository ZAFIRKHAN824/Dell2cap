import Link from "next/link";
import React from "react";

const Thankyou: React.FC = () => {
  return (
    <div>
      <div className="bg-primary-dark flex items-center justify-center min-h-screen">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-md text-center">
          <div className="flex flex-col justify-center items-center mb-4 gap-4"></div>

          <p className="text-primary-dark mb-6">
            Your submission has been received. Thank you for your inquiry
          </p>
          <Link href="#heroSection">
            <button
              onClick={() => window.location.reload()}
              className=" rounded-md  text-white bg-primary w-40 h-12 "
            >
              {" "}
              Back to Home
            </button>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Thankyou;
