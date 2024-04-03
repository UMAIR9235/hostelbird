import React from "react";
import image1 from "../assets/section2-image1.jpg";

function FeaturedPropertiesCard() {
  return (
    <div className="relative z-10 h-[366px] min-w-[230px] flex flex-col rounded-lg border overflow-hidden">
      <button className="absolute top-5 right-5 text-xs bg-white px-3 py-1 rounded-[10px] font-bold">
        FEATURED
      </button>
      <div className="flex-1">
        <img
          className="w-full h-full object-cover"
          src={image1}
          alt="card-image"
        />
      </div>
      <div className="flex-1 flex flex-col py-3 px-[10px] gap-3 backdrop-blur-[10px]">
        <h4 className="text-lg font-bold text-white">
          Introducing Hostel Jodhpur
        </h4>
        <p className="text-sm text-white">
          Welcoming you in our second hostel in the land of camels and castles.
        </p>
        <button className="text-lg bg-[#F65656] rounded-lg text-white py-2">
          Book Now
        </button>
      </div>
    </div>
  );
}

export default FeaturedPropertiesCard;
