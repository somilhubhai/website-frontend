import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <div className="sm:bg-red-50 sm:border-b-4 ">
        <ul className="sm:flex sm:justify-between sm:p-4">
          <li>
            <Link to="/list-your-property">PROPERTY DETAILS</Link>
          </li>
          <li>
            <Link to="/pages/location-details">LOCATION DETAILS</Link>
          </li>
          <li>
            <Link to="/pages/features">FEATURE & AMENITIES</Link>
          </li>
          <li>
            <Link to="/pages/price-detail">PRICE DETAILS</Link>
          </li>
          <li>
            <Link to="/pages/property-images">PROPERTY IMAGES</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;