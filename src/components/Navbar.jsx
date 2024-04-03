import React from "react";
import hostelBirdIcon from "../assets/hostelBirdIcon.svg";
import destinationIcon from "../assets/destinationIcon.svg";
import propertyIcon from "../assets/propertyIcon.svg";
import userIcon from "../assets/userIcon.svg";

function Navbar() {
  return (
    <div className="flex py-8 px-10 border-b border-white">
      <div className="flex-1">
        <img src={hostelBirdIcon} alt="main-logo" />
      </div>
      <ul className="flex flex-1 items-center">
        <li className="flex-[2] flex items-center justify-center border-e">
          <span className="text-white">About</span>
        </li>
        <li className="flex flex-[3] items-center justify-center border-e gap-4">
          <img src={destinationIcon} alt="destination-icon" />
          <span className="text-white">Destinations</span>
        </li>
        <li className="flex flex-[5] items-center justify-end gap-8">
          <img src={propertyIcon} alt="property-icon" />
          <span className="text-white">List your property</span>
          <img src={userIcon} alt="user-icon" />
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
