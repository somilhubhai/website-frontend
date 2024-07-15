import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPersonMilitaryPointing,
  faShop,
  faCar,
  faBicycle,
  faWater,
  faDumbbell,
  faHouse,
  faTree,
  faFire,
} from "@fortawesome/free-solid-svg-icons";
import { faIntercom } from "@fortawesome/free-brands-svg-icons";
import Header from "./Header";

const Feature = () => {
  return (
    <>
      <div className="sm:m-20 sm:mx-72 sm:overflow-y-scroll sm:h-96 sm:shadow-xl sm:rounded-xl sm:border sm:border-gray-200">
        <Header />
        <form className="sm:ml-14 sm:mt-10">
          <h2 className="sm:font-bold">General Features</h2>
          <br />
          <h2 className="sm:font-bold">Non-veg</h2>
          <br />
          <input type="radio" name="non-veg" className="sm:mr-2" />
          {"  "}Allowed
          <input type="radio" name="non-veg" className="sm:ml-60 sm:mr-2" />
          {"  "}Not Allowed
          <h2 className="sm:mt-5 sm:font-bold">Pets Allowed</h2>
          <br />
          <input className="sm:mr-2" type="radio" name="pets" />
          {"  "}Yes
          <input type="radio" name="pets" className="sm:ml-72" />
          {"  "}No
          <h2 className="sm:font-bold sm:mt-5">Electricity</h2>
          <input type="radio" name="electricity" className="sm:mt-6" />
          {"  "}Rare/No Powercut
          <input type="radio" name="electricity" className="sm:ml-48" />
          {"  "}Frequent Powercut
          <h2 className="sm:font-bold sm:mt-5">Water supply</h2>
          <input type="radio" name="water" className="sm:mt-6" />
          {"  "}Municipal Corporation
          <input type="radio" name="water" className="sm:ml-16" />
          {"  "}Borewell
          <input type="radio" name="water" className="sm:ml-24" />
          {"  "}Both
          <h2 className="sm:font-bold sm:mt-5">Furnishing</h2>
          <input type="checkbox" name="furnishing" className="sm:mt-6" />
          {"  "}Fully Furnished
          <input type="checkbox" name="furnishing" className="sm:ml-28" />
          {"  "}Semi Furnished
          <input type="checkbox" name="furnishing" className="sm:ml-28" />
          {"  "}Unfurnished
          <h2 className="sm:font-bold sm:mt-5">Additional features</h2>
          <input type="checkbox" name="feature" className="sm:mt-6" />
          {"  "}Air Conditioning
          <input type="checkbox" name="feature" className="sm:ml-32" />
          {"  "}Ceiling Fans
          <input type="checkbox" name="feature" className="sm:ml-32" />
          {"  "}Refrigerator
          <br />
          <input type="checkbox" name="feature" className="sm:mt-6" />
          {"  "}Washing machine
          <input type="checkbox" name="feature" className="sm:ml-32" />
          {"  "}Microwave
          <input type="checkbox" name="feature" className="sm:ml-32" />
          {"  "}Oven
          <h2 className="sm:font-bold sm:mt-5">Tiles</h2>
          <input type="checkbox" name="tiles" className="sm:mt-6" />
          {"  "}Normal White Tile
          <input type="checkbox" name="tiles" className="sm:ml-32" />
          {"  "}Marble
          <input type="checkbox" name="tiles" className="sm:ml-32" />
          {"  "}Vitrified Tiles
          <h2 className="sm:font-bold sm:mt-5">Safety</h2>
          <input type="checkbox" name="safety" className="sm:mt-6" />
          {"  "}24/7 security personnel <br />
          (Gated Security)
          <input type="checkbox" name="safety" className="sm:ml-32" />
          {"  "}Security Systems-CCTV
          <h2 className="sm:font-bold sm:mt-5">Society Amenities</h2>
          <div className="sm:flex">
            <FontAwesomeIcon
              icon={faPersonMilitaryPointing}
              className="sm:h-10 sm:w-10 sm:mt-6"
            />
            <FontAwesomeIcon
              icon={faCar}
              className="sm:h-8 sm:w-8 sm:mt-6 sm:ml-36"
            />
            <FontAwesomeIcon
              icon={faWater}
              className="sm:h-8 sm:w-8 sm:mt-6 sm:ml-36"
            />
            <FontAwesomeIcon
              icon={faTree}
              className="sm:h-8 sm:w-8 sm:mt-6 sm:ml-36"
            />
          </div>
          <div className="sm:flex">
            <p className="sm:font-semibold sm:-ml-4">24/7 security</p>
            <p className="sm:font-semibold sm:ml-12">Reserve Parking</p>
            <p className="sm:font-semibold sm:ml-16">Swimming pool</p>
            <p className="sm:font-semibold sm:ml-20">Garden/Park</p>
          </div>
          <div>
            <input type="checkbox" name="security" className="sm:ml-6" />
            <input type="checkbox" name="parking" className="sm:ml-40" />
            <input type="checkbox" name="pool" className="sm:ml-40" />
            <input type="checkbox" name="park" className="sm:ml-40" />
          </div>
          <div className="sm:mt-6">
            <FontAwesomeIcon icon={faHouse} className="sm:w-8 sm:h-8 sm:ml-3" />
            <FontAwesomeIcon icon={faShop} className="sm:w-8 sm:h-8 sm:ml-36" />
            <FontAwesomeIcon
              icon={faDumbbell}
              className="sm:w-8 sm:h-8 sm:ml-36"
            />
            <FontAwesomeIcon
              icon={faIntercom}
              className="sm:w-8 sm:h-8 sm:ml-36"
            />
          </div>
          <div className="sm:flex">
            <p className="sm:font-semibold">Club house</p>
            <p className="sm:font-semibold sm:ml-20">Shopping</p>
            <p className="sm:font-semibold sm:ml-32">Gym</p>
            <p className="sm:font-semibold sm:ml-32">Intercom</p>
          </div>
          <div>
            <input type="checkbox" name="security" className="sm:ml-6" />
            <input type="checkbox" name="parking" className="sm:ml-40" />
            <input type="checkbox" name="pool" className="sm:ml-40" />
            <input type="checkbox" name="park" className="sm:ml-40" />
          </div>
          <div className="sm:flex sm:mt-6">
            <FontAwesomeIcon
              icon={faBicycle}
              className="sm:w-8 sm:h-8 sm:ml-2"
            />
            <FontAwesomeIcon icon={faFire} className="sm:w-8 sm:h-8 sm:ml-56" />
          </div>
          <div className="sm:flex">
            <p className="sm:font-semibold sm:ml-2">Fun</p>
            <p className="sm:font-semibold sm:ml-56 ">Safety</p>
          </div>
          <div>
            <input type="checkbox" name="fun" className="sm:ml-4" />
            <input type="checkbox" name="safety" className="sm:ml-60" />
          </div>
        </form>
        <div className="sm:flex sm:bg-blue-800 sm:p-4 sm:text-white sm:sticky sm:top-0 sm:bottom-0 sm:left-0 sm:right-0">
          <h2>Need help? Call 1800-600-200</h2>
          <button
            type="submit"
            className="sm:ml-96 sm:border-2 sm:px-8 sm:rounded-md"
          >
            <Link to="/pages/price-detail">Next</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Feature;
