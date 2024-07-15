import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

const PriceDetail = () => {
  return (
    <>
      <div className="sm:m-20 sm:mx-72 sm:overflow-y-scroll sm:h-96 sm:shadow-xl sm:rounded-xl sm:border sm:border-gray-200">
        <Header />
        <form className="sm:ml-12 sm:mt-8" action="" method="">
          <div className="sm:flex">
            <h2 className="sm:font-bold">Rent</h2>
            <h2 className="sm:ml-80 sm:font-bold">Security</h2>
          </div>
          <div className="sm:flex">
            <input
              type="text"
              name="rent"
              placeholder="Rs"
              className="sm:border-2 sm:border-slate-500 sm:w-60"
            />
            <input
              type="text"
              name="security"
              placeholder="Rs"
              className="sm:ml-28 sm:w-60 sm:border-2 sm:border-slate-500"
            />
          </div>
          <br />
          <div className="sm:flex">
            <h2 className="sm:font-bold">Maintenance</h2>
            <h2 className="sm:font-bold sm:ml-52">Maintenance</h2>
          </div>
          <div className="sm:flex">
            <select
              className="sm:w-48 sm:border-2 sm:border-slate-500"
              name="maintenance"
            >
              <option vlaue="select">Select</option>
              <option value="Included in Rent">Included in Rent</option>
              <option value="Extra Mantenance">Extra Maintenance</option>
            </select>
            <input
              type="text"
              placeholder="Rs"
              className="sm:w-48 sm:border-2 sm:ml-28 sm:border-slate-500"
              name="maintenance"
            />
            <select
              className="sm:w-48 sm:ml-6 sm:border-2 sm:border-slate-500"
              name="maintenance"
            >
              <option vlaue="select">Select</option>
              <option value="monthly">Monthly</option>
              <option value="quarterly">Quarterly</option>
              <option value="annualy">Annualy</option>
            </select>
          </div>
          <br />
          <h2 className="sm:font-bold">
            Additional Pricing details to convey to agent
          </h2>
          <textarea
            name="concerns"
            className="sm:mt-2 border-2 border-slate-500 sm:w-full sm:h-44"
            placeholder="Do you have any concerns regarding pricing of your property? Tell us here"
          />
        </form>
        <div className="sm:flex sm:bg-blue-800 sm:p-4 sm:text-white sm:sticky sm:top-0 sm:bottom-0 sm:left-0 sm:right-0">
          <h2>Need help? Call 1800-600-200</h2>
          <button
            type="submit"
            className="sm:ml-96 sm:border-2 sm:px-8 sm:rounded-md"
          >
            <Link to="/pages/property-images">Next</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default PriceDetail;
