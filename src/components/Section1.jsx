import React from "react";
import image1 from "../assets/section1-image1.png";
import image2 from "../assets/section1-image2.png";
import image3 from "../assets/section1-image3.png";

function Section1() {
  return (
    <div className="flex items-start justify-between px-10 py-20">
      <div className="flex flex-col gap-9">
        <h1 className="text-[40px] font-bold">Why Stay With Us</h1>
        <div>
          <img src={image1} alt="" />
          <img src={image3} alt="" />
        </div>
      </div>
      <div>
        <img src={image2} alt="boy-playing-guitar" />
      </div>
    </div>
  );
}

export default Section1;
