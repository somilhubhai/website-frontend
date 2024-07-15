import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckDouble } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import SendSMS from "./Pages/sendSms";

const Hero = () => {
  const [phoneNo, setPhoneNo] = useState("");
  const [next, setNext] = useState(false);

const savePhoneNo = (e) => {
  setPhoneNo(e.target.value);
};

return (
    <>
      <div className="bg-blue-900 min-h-screen text-white font-serif">
        <h1 className="text-white font-serif sm:text-2xl sm:pt-10 sm:pl-8">
          Sell or Rent your property For absolutely Free
        </h1>
        <br />
        <p className="sm:pl-8 text-white">
          Whether you'r ready to sell or looking for answers, we'll guide you
          with data and expertise specific to your <br /> needs
        </p>
        <div className="sm:flex">
          <ul className="sm:pl-44 sm:pt-10">
            <h3 className="text-2xl">Upload your property in 4 simple steps</h3>
            <li className="sm:py-2">
              <FontAwesomeIcon icon={faCheckDouble} />
              {"  "}Add your properties <b>Basic detail</b>
            </li>
            <li className="sm:py-2">
              <FontAwesomeIcon icon={faCheckDouble} />
              {"  "}Add property <b>Location</b>
            </li>
            <li className="sm:py-2">
              <FontAwesomeIcon icon={faCheckDouble} />
              {"  "}Add your properties <b>Feature and ameneties</b>
            </li>
            <li className="sm:py-2">
              <FontAwesomeIcon icon={faCheckDouble} />
              {"  "}Add your properties <b>Price detail</b>
            </li>
            <li className="sm:py-2">
              <FontAwesomeIcon icon={faCheckDouble} />
              {"  "}Add your best <b>Property Images</b>
            </li>
          </ul>
          <div className="bg-white sm:w-1/3 sm:ml-14 sm:rounded-xl sm:h-80 sm:overflow-y-scroll text-black font-semibold">
            <h3 className="text-blue-600 font-bold bg-orange-100 sm:pl-10 sm:py-2 sm:rounded-xl">
              LET'S GET YOU STARTED
            </h3>
            {!next ? (
              <form action="" method="post" className="sm:pl-10">
                I am :
                <br />
                <input type="radio" name="user" value="Owner" />
                {"  "}Owner
                <input
                  value="Builder"
                  type="radio"
                  className="sm:ml-48"
                  name="user"
                />{" "}
                Builder
                <br />
                <br />
                You'r name :
                <br />
                <input
                  type="text"
                  name="name"
                  className="border-brown border-2"
                />
                <br />
                <br />
                Country :
                <br />
                <input
                  type="text"
                  name="country"
                  className="border-brown border-2"
                />
                <br />
                <br />
                Phone :
                <br />
                <select className="bg-slate-200">
                  <option className="bg-slate-200" value="+91">
                    +91
                  </option>
                  <option className="bg-slate-200" value="+1">
                    +1
                  </option>
                  <option className="bg-slate-200" value="+44">
                    +44
                  </option>
                </select>
                <input
                  type="phone"
                  name="phone"
                  className="border-brown border-2 sm:h-6 sm:ml-2"
                  onChange={savePhoneNo}
                />
                <br />
                <br />
                OR
                <br />
                <br />
                Email :
                <br />
                <input
                  type="email"
                  name="email"
                  className="border-brown border-2"
                />
              </form>
            ) : (
              <>
              <SendSMS />
                <p>Enter OTP sent on {phoneNo}</p>
                <input
                  className="sm:w-60 sm:border-2 sm:mt-4 sm:ml-4 sm:border-black"
                  type="text"
                  name="otp"
                  placeholder="Enter OTP"
                />
                <br />
              </>
            )}
            <div className="bg-orange-100 sm:w-full sm:sticky sm:top-0 sm:bottom-0 sm:left-0 sm:right-0">
              <p className="sm:mt-4">Need help? Call 1800-600-200</p>
              <button
                type="button"
                onClick={() => {
                  setNext(true);
                }}
                className="bg-blue-600 text-white sm:ml-80 sm:mb-2 sm:w-24 sm:rounded-md hover:bg-blue-800 hover:cursor-pointer hover:animate-pulse"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
