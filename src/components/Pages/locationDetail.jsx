import React, { useState } from "react";
import { Link } from "react-router-dom";
import MapComponent from "./MapComponent";
import Header from "./Header";

const LocationDetail = () => {
  const [locality, setLocality] = useState("");

  const handleLocalityChange = (e) => {
    setLocality(e.target.value);
  };

  return (
    <>
      <div className="sm:m-20 sm:mx-72 sm:overflow-y-scroll sm:h-96 sm:shadow-xl sm:rounded-xl sm:border sm:border-gray-200">
        <Header />
        <form className="sm:ml-10">
          <div className="sm:flex sm:mt-4">
            <h2>Building/society Name</h2>
            <h2 className="sm:ml-72">Locality/Area</h2>
          </div>
          <div className="sm:flex">
            <input
              type="text"
              placeholder="Enter Apartment Name"
              name="building"
              className="sm:w-60 sm:border-2 sm:rounded-md sm:border-slate-500"
            />
            <input
              type="text"
              placeholder="Eg: Sheetal nagar"
              name="locality"
              value={locality}
              onChange={handleLocalityChange}
              className="sm:ml-52 sm:w-60 sm:border-2 sm:rounded-md sm:border-slate-500"
            />
          </div>
          <br />
          <div className="sm:flex">
            <h2>Landmark/Street Name</h2>
            <h2 className="sm:ml-72">City</h2>
          </div>
          <div className="sm:flex">
            <input
              type="text"
              className="sm:w-60 sm:border-2 sm:rounded-md sm:border-slate-500"
              placeholder="Prominent Landmark"
              name="landmark"
            />
            <input
              type="text"
              placeholder="Eg : Mumbai , Maharashtra"
              className="sm:ml-52 sm:w-60 sm:border-2 sm:rounded-md sm:border-slate-500"
              name="city"
            />
          </div>
          <br />
          <div>
            <h2>Mark Locality on Map</h2>
            <MapComponent locality={locality} />
          </div>
        </form>
        <div className="sm:flex sm:bg-blue-800 sm:p-4 sm:text-white sm:sticky sm:top-0 sm:bottom-0 sm:left-0 sm:right-0">
          <h2>Need help? Call 1800-600-200</h2>
          <button
            type="submit"
            className="sm:ml-96 sm:border-2 sm:px-8 sm:rounded-md"
          >
            <Link to="/pages/features">Next</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default LocationDetail;
