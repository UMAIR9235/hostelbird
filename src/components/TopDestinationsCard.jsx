import React from "react";

function TopDestinationsCard({ imageUrl, heading }) {
  return (
    <div className="relative bg-black rounded-lg">
      <h1 className="absolute left-5 top-[40%] text-3xl text-white font-bold">
        {heading}
      </h1>
      <button className="absolute bottom-5 right-5 text-white text-[15px] font-bold rounded-[25px] border-4 px-3 py-1">
        Explore
      </button>
      <img
        className="w-full h-full rounded-lg"
        src={imageUrl}
        alt="karnataka-view"
      />
    </div>
  );
}

export default TopDestinationsCard;
