"use client";
import React, { useCallback, useState } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";

interface FieldData {
  name: string;
  email: string;
  number: string;
  companyName: string;
  investorType: string;
  companyAum: string;
  captcha: string;
}

const UserForm: React.FC = () => {
  const [fieldData, setFieldData] = useState<FieldData>({
    name: "",
    email: "",
    number: "",
    companyName: "",
    investorType: "",
    companyAum: "",
    captcha: "",
  });

  const handleChange = useCallback(
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => {
      const { name, value } = e.target;
      setFieldData((prevData) => ({ ...prevData, [name]: value }));
    },
    []
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch(process.env.NEXT_PUBLIC_APP_SCRIPT_URL!, {
        redirect: "follow",
        method: "POST",
        body: JSON.stringify([
          fieldData.name,
          fieldData.email,
          fieldData.number,
          fieldData.companyName,
          fieldData.investorType,
          fieldData.companyAum,
        ]),
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
      });
      await fetch("/api/sendEmail", {
        method: "POST",
        body: JSON.stringify(fieldData),
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div
      id="form"
      className="flex items-center justify-center bg-primary-dark p-4 sm:p-10"
    >
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-[700px] p-4 sm:p-10 bg-white shadow-lg rounded-lg space-y-6"
      >
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-4 text-primary-dark">
            Inquiry Form
          </h2>
          <p className="text-primary-dark">
            If you are interested in learning more about Navis Investment Group,
            please inquire here.
          </p>
        </div>
        {/* Name Input */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-primary-dark"
          >
            Name:
          </label>
          <input
            required
            placeholder="Your Name"
            type="text"
            name="name"
            id="name"
            className="mt-1 block border w-full mb-8 p-2 text-primary-dark rounded-md"
            value={fieldData.name}
            onChange={handleChange}
          />
        </div>
        {/* Email Input */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-primary-dark"
          >
            Email:
          </label>
          <input
            required
            placeholder="Your Email"
            type="email"
            name="email"
            id="email"
            className="mt-1 block border w-full mb-8 p-2 text-primary-dark rounded-md"
            value={fieldData.email}
            onChange={handleChange}
          />
        </div>
        {/* Number Input */}
        <div>
          <label
            htmlFor="number"
            className="block text-sm font-semibold text-primary-dark"
          >
            Whatsapp Number:
          </label>
          <input
            required
            placeholder="Your Number"
            type="text"
            name="number"
            id="number"
            className="mt-1 block border w-full mb-8 p-2 text-primary-dark rounded-md"
            value={fieldData.number}
            onChange={handleChange}
          />
        </div>
        {/* Company Name Input */}
        <div>
          <label
            htmlFor="companyName"
            className="block text-sm font-semibold text-primary-dark"
          >
            Company Name:
          </label>
          <input
            required
            placeholder="Your Company Name"
            type="text"
            name="companyName"
            id="companyName"
            className="mt-1 block border w-full mb-8 p-2 text-primary-dark rounded-md"
            value={fieldData.companyName}
            onChange={handleChange}
          />
        </div>
        {/* Investor Type Dropdown */}
        <div>
          <label
            htmlFor="investorType"
            className="block text-sm font-semibold text-primary-dark"
          >
            Investor Type:
          </label>
          <select
            name="investorType"
            id="investorType"
            value={fieldData.investorType}
            onChange={handleChange}
            required
            className={`mt-1 block w-full mb-8 p-2 pr-10 text-primary-dark border rounded-md appearance-none ${
              fieldData.investorType === ""
                ? "text-slate-400"
                : "text-primary-dark"
            }`}
            style={{
              background: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 20 20' fill='currentColor'><path d='M10 12l-6-6h12l-6 6z'/></svg>") no-repeat right 12px center`,
              backgroundColor: "white",
              backgroundSize: "1em",
            }}
          >
            <option disabled value="">
              Which type of investor are you?
            </option>
            <option value="Advisor / Consultant">Advisor / Consultant</option>
            <option value="Endowment / Foundation">
              Endowment / Foundation
            </option>
            <option value="Fund of Funds Manager">Fund of Funds Manager</option>
            <option value="Insurance Company">Insurance Company</option>
            <option value="Outsourced CIO">Outsourced CIO</option>
            <option value="Multi-Family Office">Multi-Family Office</option>
            <option value="Private Bank">Private Bank</option>
            <option value="Private Sector Pension Fund">
              {" "}
              Private Sector Pension Fund
            </option>
            <option value="Public Pension Fund">Public Pension Fund</option>
            <option value="Single Family Office">Single Family Office</option>
            <option value="Sovereign Wealth Fund">Sovereign Wealth Fund</option>
            <option value=" Superannuation Scheme">
              Superannuation Scheme
            </option>
          </select>
        </div>
        {/* Company AUM Dropdown */}
        <div>
          <label
            htmlFor="companyAum"
            className="block text-sm font-semibold text-primary-dark"
          >
            Company AUM:
          </label>
          <select
            name="companyAum"
            id="companyAum"
            value={fieldData.companyAum}
            onChange={handleChange}
            required
            className={`mt-1 block w-full mb-8 p-2 pr-10 text-primary-dark border rounded-md appearance-none ${
              fieldData.companyAum === ""
                ? "text-slate-400"
                : "text-primary-dark"
            }`}
            style={{
              background: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 20 20' fill='currentColor'><path d='M10 12l-6-6h12l-6 6z'/></svg>") no-repeat right 12px center`,
              backgroundColor: "white",
              backgroundSize: "1em",
            }}
          >
            <option disabled value="">
              Input your company AUM
            </option>
            <option value="<$1bn">$1bn</option>
            <option value="$1-5bn">$1-5bn</option>
            <option value="$5-10bn">$5-10bn</option>
            <option value="$10-25bn">$10-25bn</option>
            <option value="$25-100bn">$25-100bn</option>
            <option value="$100bn+">$100bn+</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="captcha"
            className="block text-sm font-semibold text-primary-dark"
          ></label>
          <HCaptcha
            sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY!}
            onVerify={(token) => console.log("Captcha token:", token)}
          />
        </div>

        {/* Submit Button */}
        <div className="relative">
          <button
            type="submit"
            className="w-full mt-8 py-2 rounded-lg bg-primary text-white hover:bg-primary-dark focus:ring-4"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
