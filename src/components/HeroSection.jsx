import React from "react";
import classes from "./HeroSection.module.css";
import Navbar from "./Navbar";
import hosteIcon from "../assets/hostelIcon.svg";
import communityIcon from "../assets/communityIcon.svg";
import locationIcon from "../assets/locationIcon.svg";
import guestsIcon from "../assets/guestsIcon.svg";
import calendarIcon from "../assets/calendarIcon.svg";
import arrowIcon from "../assets/arrowIcon.svg";

function HeroSection() {
  return (
    <div className={`${classes.herosectionBg} w-full h-screen`}>
      <Navbar />
      <div className="w-full flex flex-col items-center justify-center py-28 gap-36 ">
        <h1 className="text-7xl font-bold text-white">Find Your Tribe</h1>
        <div className="flex flex-col border rounded-lg w-[70%] px-10 backdrop-blur-[3px]">
          <div className="flex py-4 border-b border-white border-opacity-30">
            <div className="flex flex-[4] items-center justify-center gap-6 border-white border-opacity-30 border-e ">
              <img src={hosteIcon} alt="" />
              <span className="text-white text-xl font-semibold">HOSTELS</span>
            </div>
            <div className="flex flex-[6] items-center justify-center gap-6">
              <img src={communityIcon} alt="" />
              <span className="text-white text-xl font-semibold">
                CO-LIVING LONG STAYS
              </span>
            </div>
          </div>
          <div className="flex py-4">
            <div className="flex flex-[3] items-center gap-6 pe-4">
              <img
                className="w-[20px]"
                src={locationIcon}
                alt="location-icon"
              />
              <div className="flex flex-col justify-center">
                <span className="text-white opacity-50 text-[16px] font-semibold">
                  Where do you want to go?
                </span>
                <span className="text-white opacity-50 text-[16px] font-semibold">
                  New Delhi, India
                </span>
              </div>
            </div>
            <div className="flex flex-[1] items-center justify-start gap-6 border-s border-e border-white border-opacity-30 px-6">
              <img className="w-[20px]" src={guestsIcon} alt="guests-icon" />
              <div className="flex flex-col justify-center">
                <span className="text-white opacity-50 text-[16px] font-semibold">
                  Guests
                </span>
                <span className="text-white opacity-50 text-[16px] font-semibold">
                  2
                </span>
              </div>
            </div>
            <div className="flex flex-[6] ps-6">
              <div className="flex flex-1 items-center gap-6">
                <img
                  className="w-[20px]"
                  src={calendarIcon}
                  alt="calendar-icon"
                />
                <div className="flex flex-col justify-center">
                  <span className="text-white opacity-50 text-[16px] font-semibold">
                    Check-in
                  </span>
                  <span className="text-white opacity-50 text-[16px] font-semibold">
                    20,Feb
                  </span>
                </div>
              </div>
              <div className="flex flex-1 items-center gap-6">
                <img src={arrowIcon} alt="arrow-icon" />
                <div className="flex flex-col justify-center">
                  <span className="text-white opacity-50 text-[16px] font-semibold">
                    Check-out
                  </span>
                  <span className="text-white opacity-50 text-[16px] font-semibold">
                    22,Feb
                  </span>
                </div>
              </div>
              <button className=" flex-1 text-[22px] font-semibold bg-[#F65656] rounded-lg text-white py-2 px-4">
                Let's Go!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
