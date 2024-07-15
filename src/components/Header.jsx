import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  return (
    <>
      <header>
        <nav className="sm:flex sm:justify-end sm:bg-red-50">
          <ul className="flex sm:justify-end sm:gap-10 p-4">
            <a href="https://github.com/somilhubhai/" target="_blank">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <li className="text-sm font-bold mx-8 hover:sm:text-orange-500 hover:sm:animate-pulse">
              PROPERTIES
            </li>
            <li className="text-sm font-bold mx-8 hover:sm:text-orange-500 hover:sm:an imate-pulse">
              MYDASHBOARD/ACTIVITY
            </li>
            <li className="text-sm font-bold mx-8 hover:sm:text-orange-500 hover:sm:an imate-pulse">
              <Link to="/list-your-property">LIST YOUR PROPERTY</Link>
            </li>
            <li className="text-sm font-bold mx-8 hover:sm:text-orange-500 hover:sm:animate-pulse">
              CONTACT US
            </li>
            <li className="text-sm font-bold mr-28 hover:sm:text-orange-500 hover:sm:animate-pulse">
              MORE
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
