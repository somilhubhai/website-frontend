import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Pages/Header";
import axios from "axios";

const ListYourProperty = () => {
  const [residential, setResidential] = useState(false);
  const [commercial, setCommercial] = useState(false);

  // handle form data
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/list-your-property"
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const handleButtonClick = (e) => {
    e.target.style.backgroundColor = "lightgreen";
  };

  const handleRemoveColor = (e) => {
    e.target.style.backgroundColor = "";
  };
  return (
    <>
      <div className="sm:m-20 sm:mx-72 sm:overflow-y-scroll sm:h-96 sm:shadow-xl sm:rounded-xl sm:border sm:border-gray-200">
        <Header />
        <form
          className="sm:ml-16 sm:mt-8"
          method="POST"
          onSubmit={handleSubmit}
        >
          <label for="property">Property For :</label>
          <br />
          <input type="radio" required="true" name="property" />
          {"  "} Rent
          <input type="radio" required name="property" className="sm:ml-48" />
          {"  "} Sale <br />
          <br />
          Property Type:
          <br />
          <input
            type="radio"
            name="typeof"
            onDoubleClick={handleRemoveColor}
            onClick={() => {
              setCommercial(false);
              setResidential(true);
            }}
          />
          {"  "}Residential
          <input
            onDoubleClick={handleRemoveColor}
            onClick={() => {
              setCommercial(true);
              setResidential(false);
            }}
            type="radio"
            name="typeof"
            className="sm:ml-24"
          />
          {"  "}Commercial
          <input
            onDoubleClick={handleRemoveColor}
            onClick={() => {
              setCommercial(false);
              setResidential(false);
            }}
            type="radio"
            name="typeof"
            className="sm:ml-24"
          />
          {"  "}Land/Plot
          <br />
          <br />
          {residential && (
            <>
              <input
                onClick={handleButtonClick}
                onDoubleClick={handleRemoveColor}
                type="button"
                value="House/Villa"
                className="text-black sm:rounded-xl sm:border-spacing-8 sm:border-2 w-28 sm:px-4 sm:text-sm hover:cursor-pointer"
                readOnly
              />
              <input
                onClick={handleButtonClick}
                onDoubleClick={handleRemoveColor}
                type="button"
                value="Flat/Apartment"
                className="text-black sm:rounded-xl sm:border-spacing-8 sm:ml-24 sm:border-2 w-32 sm:px-3 sm:text-sm hover:cursor-pointer"
              />
            </>
          )}
          {commercial && (
            <>
              <input
                onClick={handleButtonClick}
                onDoubleClick={handleRemoveColor}
                type="button"
                value="Office space"
                className="text-black sm:rounded-xl sm:border-spacing-8 sm:border-2 w-32 sm:px-3 sm:text-sm hover:cursor-pointer"
              />
              <input
                onClick={handleButtonClick}
                onDoubleClick={handleRemoveColor}
                type="button"
                value="Co working"
                className="text-black sm:rounded-xl sm:border-spacing-8 sm:ml-14 sm:border-2 w-32 sm:px-3 sm:text-sm hover:cursor-pointer"
              />
              <input
                onClick={handleButtonClick}
                onDoubleClick={handleRemoveColor}
                type="button"
                value="Restaurant/Cafe"
                className="text-black sm:rounded-xl sm:border-spacing-8 sm:ml-14 sm:border-2 w-32 sm:px-3 sm:text-sm hover:cursor-pointer"
              />
              <br />
              <input
                onClick={handleButtonClick}
                onDoubleClick={handleRemoveColor}
                type="button"
                value="Shop/Showroom"
                className="text-black sm:rounded-xl sm:border-spacing-8 sm:mt-4 sm:border-2 w-32 sm:px-3 sm:text-sm hover:cursor-pointer"
              />
              <input
                onClick={handleButtonClick}
                onDoubleClick={handleRemoveColor}
                type="button"
                value="Industrial bldg"
                className="text-black sm:rounded-xl sm:border-spacing-8 sm:ml-8 sm:border-2 w-32 sm:px-3 sm:text-sm hover:cursor-pointer"
              />
              <input
                onClick={handleButtonClick}
                onDoubleClick={handleRemoveColor}
                type="button"
                value="Industrial Shed"
                className="text-black sm:rounded-xl sm:border-spacing-8 sm:ml-8 sm:border-2 w-32 sm:px-3 sm:text-sm hover:cursor-pointer"
              />
              <br />
              <input
                onClick={handleButtonClick}
                onDoubleClick={handleRemoveColor}
                type="button"
                value="Warehouse/Godown"
                className="text-black sm:rounded-xl sm:mt-4 sm:border-spacing-8 sm:border-2 w-38 sm:px-3 sm:text-sm hover:cursor-pointer"
              />
            </>
          )}
          <br />
          <br />
          <div className="sm:flex">
            <h2 className="sm:mr-4">Built up Area</h2>
            <h2 className="sm:ml-96">Carpet Area</h2>
          </div>
          <div className="sm:flex">
            <input
              type="number"
              placeholder="0 Sq. Ft."
              className="sm:border-2 sm:h-8 sm:w-64"
            />
            <input
              type="number"
              placeholder="0 Sq. Ft."
              className="sm:border-2 sm:ml-60 sm:h-8 sm:w-64"
            />
          </div>
          <br />
          <div className="sm:flex">
            <h2>Property on Floor</h2>
            <h2 className="sm:ml-20">Total Floors</h2>
            <h2 className="sm:ml-48">Property Facing</h2>
          </div>
          <div className="sm:flex">
            <input
              type="number"
              name="floor"
              placeholder="Floor"
              className="sm:border-2 sm:h-8 sm:w-40"
            />
            <input
              type="number"
              name="total-floor"
              placeholder="Total floor"
              className="sm:border-2 sm:ml-12 sm:h-8 sm:w-40"
            />
            <select
              name="facing"
              className="sm:border-2 sm:h-10 sm:ml-28 sm:w-72 sm:p-2"
            >
              <option value="select">Select</option>
              <option value="C-facing">C Facing</option>
              <option value="L-shape">L shape</option>
              <option value="square">square</option>
            </select>
          </div>
          <br />
          <h2>Property Age</h2>
          <input
            onClick={handleButtonClick}
            onDoubleClick={handleRemoveColor}
            type="button"
            value="Less than 1 year"
            className="text-black sm:ml-8 sm:rounded-xl sm:mt-4 sm:border-spacing-8 sm:border-2 w-38 sm:px-3 sm:text-sm hover:cursor-pointer"
          />
          <input
            onClick={handleButtonClick}
            onDoubleClick={handleRemoveColor}
            type="button"
            value="1-3 years"
            className="text-black sm:ml-8 sm:rounded-xl sm:mt-4 sm:border-spacing-8 sm:border-2 w-38 sm:px-3 sm:text-sm hover:cursor-pointer"
          />
          <input
            onClick={handleButtonClick}
            onDoubleClick={handleRemoveColor}
            type="button"
            value="3-5 years"
            className="text-black sm:ml-8 sm:rounded-xl sm:mt-4 sm:border-spacing-8 sm:border-2 w-38 sm:px-3 sm:text-sm hover:cursor-pointer"
          />
          <input
            onClick={handleButtonClick}
            onDoubleClick={handleRemoveColor}
            type="button"
            value="5-10 years"
            className="text-black sm:ml-8 sm:rounded-xl sm:mt-4 sm:border-spacing-8 sm:border-2 w-38 sm:px-3 sm:text-sm hover:cursor-pointer"
          />
          <input
            onClick={handleButtonClick}
            onDoubleClick={handleRemoveColor}
            type="button"
            value="Greater than 10 years"
            className="text-black sm:ml-8 sm:rounded-xl sm:mt-4 sm:border-spacing-8 sm:border-2 w-38 sm:px-3 sm:text-sm hover:cursor-pointer"
          />
          <h2 className="sm:mt-4">BHK Type</h2>
          <input
            onClick={handleButtonClick}
            onDoubleClick={handleRemoveColor}
            type="button"
            value="1 BHK"
            className="text-black sm:ml-8 sm:rounded-xl sm:mt-4 sm:border-spacing-8 sm:border-2 w-38 sm:px-3 sm:text-sm hover:cursor-pointer"
          />
          <input
            onClick={handleButtonClick}
            onDoubleClick={handleRemoveColor}
            type="button"
            value="2 BHK"
            className="text-black sm:ml-8 sm:rounded-xl sm:mt-4 sm:border-spacing-8 sm:border-2 w-38 sm:px-3 sm:text-sm hover:cursor-pointer"
          />
          <input
            onClick={handleButtonClick}
            onDoubleClick={handleRemoveColor}
            type="button"
            value="3 BHK"
            className="text-black sm:ml-8 sm:rounded-xl sm:mt-4 sm:border-spacing-8 sm:border-2 w-38 sm:px-3 sm:text-sm hover:cursor-pointer"
          />
          <input
            onClick={handleButtonClick}
            onDoubleClick={handleRemoveColor}
            type="button"
            value="4 BHK"
            className="text-black sm:ml-8 sm:rounded-xl sm:mt-4 sm:border-spacing-8 sm:border-2 w-38 sm:px-3 sm:text-sm hover:cursor-pointer"
          />
          <input
            onClick={handleButtonClick}
            onDoubleClick={handleRemoveColor}
            type="button"
            value="5 BHK+"
            className="text-black sm:ml-8 sm:rounded-xl sm:mt-4 sm:border-spacing-8 sm:border-2 w-38 sm:px-3 sm:text-sm hover:cursor-pointer"
          />
          <h2 className="sm:mt-4">Bathrooms/Toilet</h2>
          <input
            onClick={handleButtonClick}
            onDoubleClick={handleRemoveColor}
            type="button"
            value="1"
            className="text-black sm:ml-8 sm:rounded-xl sm:mt-4 sm:border-spacing-8 sm:border-2 w-38 sm:px-3 sm:text-sm hover:cursor-pointer"
          />
          <input
            onClick={handleButtonClick}
            onDoubleClick={handleRemoveColor}
            type="button"
            value="2"
            className="text-black sm:ml-8 sm:rounded-xl sm:mt-4 sm:border-spacing-8 sm:border-2 w-38 sm:px-3 sm:text-sm hover:cursor-pointer"
          />
          <input
            onClick={handleButtonClick}
            onDoubleClick={handleRemoveColor}
            type="button"
            value="3"
            className="text-black sm:ml-8 sm:rounded-xl sm:mt-4 sm:border-spacing-8 sm:border-2 w-38 sm:px-3 sm:text-sm hover:cursor-pointer"
          />
          <input
            onClick={handleButtonClick}
            onDoubleClick={handleRemoveColor}
            type="button"
            value="4"
            className="text-black sm:ml-8 sm:rounded-xl sm:mt-4 sm:border-spacing-8 sm:border-2 w-38 sm:px-3 sm:text-sm hover:cursor-pointer"
          />
          <input
            onClick={handleButtonClick}
            onDoubleClick={handleRemoveColor}
            type="button"
            value="5"
            className="text-black sm:ml-8 sm:rounded-xl sm:mt-4 sm:border-spacing-8 sm:border-2 w-38 sm:px-3 sm:text-sm hover:cursor-pointer"
          />
          <input
            onClick={handleButtonClick}
            onDoubleClick={handleRemoveColor}
            type="button"
            value="6+"
            className="text-black sm:ml-8 sm:rounded-xl sm:mt-4 sm:border-spacing-8 sm:border-2 w-38 sm:px-3 sm:text-sm hover:cursor-pointer"
          />
          <h2 className="sm:mt-4">Balcony</h2>
          <input
            onClick={handleButtonClick}
            onDoubleClick={handleRemoveColor}
            type="button"
            value="1"
            className="text-black sm:ml-8 sm:rounded-xl sm:mt-4 sm:border-spacing-8 sm:border-2 w-38 sm:px-3 sm:text-sm hover:cursor-pointer"
          />
          <input
            onClick={handleButtonClick}
            onDoubleClick={handleRemoveColor}
            type="button"
            value="2"
            className="text-black sm:ml-8 sm:rounded-xl sm:mt-4 sm:border-spacing-8 sm:border-2 w-38 sm:px-3 sm:text-sm hover:cursor-pointer"
          />
          <input
            onClick={handleButtonClick}
            onDoubleClick={handleRemoveColor}
            type="button"
            value="3"
            className="text-black sm:ml-8 sm:rounded-xl sm:mt-4 sm:border-spacing-8 sm:border-2 w-38 sm:px-3 sm:text-sm hover:cursor-pointer"
          />
          <input
            onClick={handleButtonClick}
            onDoubleClick={handleRemoveColor}
            type="button"
            value="4+"
            className="text-black sm:ml-8 sm:rounded-xl sm:mt-4 sm:border-spacing-8 sm:border-2 w-38 sm:px-3 sm:text-sm hover:cursor-pointer"
          />
          <h2 className="sm:mt-4">Tenant Preference{"  "}(Only for Rent)</h2>
          <input
            onClick={handleButtonClick}
            onDoubleClick={handleRemoveColor}
            type="button"
            value="Any"
            className="text-black sm:ml-8 sm:rounded-xl sm:mt-4 sm:border-spacing-8 sm:border-2 w-38 sm:px-3 sm:text-sm hover:cursor-pointer"
          />
          <input
            onClick={handleButtonClick}
            onDoubleClick={handleRemoveColor}
            type="button"
            value="Family"
            className="text-black sm:ml-8 sm:rounded-xl sm:mt-4 sm:border-spacing-8 sm:border-2 w-38 sm:px-3 sm:text-sm hover:cursor-pointer"
          />
          <input
            onClick={handleButtonClick}
            onDoubleClick={handleRemoveColor}
            type="button"
            value="Bachelor(men)"
            className="text-black sm:ml-8 sm:rounded-xl sm:mt-4 sm:border-spacing-8 sm:border-2 w-38 sm:px-3 sm:text-sm hover:cursor-pointer"
          />
          <input
            onClick={handleButtonClick}
            onDoubleClick={handleRemoveColor}
            type="button"
            value="Bachelor(Women)"
            className="text-black sm:ml-8 sm:rounded-xl sm:mt-4 sm:border-spacing-8 sm:border-2 w-38 sm:px-3 sm:text-sm hover:cursor-pointer"
          />
          <h2 className="sm:mt-4">Availability</h2>
          <input
            onClick={handleButtonClick}
            onDoubleClick={handleRemoveColor}
            type="button"
            value="Immediate"
            className="text-black sm:ml-8 sm:rounded-xl sm:mt-4 sm:border-spacing-8 sm:border-2 w-38 sm:px-3 sm:text-sm hover:cursor-pointer"
          />
          <input
            onClick={handleButtonClick}
            onDoubleClick={handleRemoveColor}
            type="button"
            value="With in 15 days"
            className="text-black sm:ml-8 sm:rounded-xl sm:mt-4 sm:border-spacing-8 sm:border-2 w-38 sm:px-3 sm:text-sm hover:cursor-pointer"
          />
          <input
            onClick={handleButtonClick}
            onDoubleClick={handleRemoveColor}
            type="button"
            value="with in 1 month"
            className="text-black sm:ml-8 sm:rounded-xl sm:mt-4 sm:border-spacing-8 sm:border-2 w-38 sm:px-3 sm:text-sm hover:cursor-pointer"
          />
          <input
            onClick={handleButtonClick}
            onDoubleClick={handleRemoveColor}
            type="button"
            value="with in 2 months"
            className="text-black sm:ml-8 sm:rounded-xl sm:mt-4 sm:border-spacing-8 sm:border-2 w-38 sm:px-3 sm:text-sm hover:cursor-pointer"
          />
          <h2 className="sm:mt-4">Property Description</h2>
          <textarea
            name="desc"
            className="sm:w-full sm:h-24 sm:border-spacing-8 sm:border-2"
          />
        </form>
        <div className="sm:flex sm:bg-blue-800 sm:p-4 sm:text-white sm:sticky sm:top-0 sm:bottom-0 sm:left-0 sm:right-0">
          <h2>Need help? Call 1800-600-200</h2>
          <button
            type="submit"
            className="sm:ml-96 sm:border-2 sm:px-8 sm:rounded-md"
          >
            <Link to="/pages/location-details">Next</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default ListYourProperty;
