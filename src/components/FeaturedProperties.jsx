import React from "react";
import classes from "./FeaturedProperties.module.css";
import FeaturedPropertiesCard from "./FeaturedPropertiesCard";

function FeaturedProperties() {
  return (
    <div className={`flex flex-col gap-12 relative  px-10 py-10`}>
      <div
        className={`absolute left-0 right-0 bottom-0 h-[50%] bg-green-700 ${classes.featuredPropertiesBg}`}
      ></div>
      <h1 className="font-bold text-[40px]">Featured Properties</h1>
      <div
        className={`${classes.featuredPropertiesCarousel} flex gap-10  overflow-x-scroll `}
      >
        <FeaturedPropertiesCard />
        <FeaturedPropertiesCard />
        <FeaturedPropertiesCard />
        <FeaturedPropertiesCard />
        <FeaturedPropertiesCard />
        <FeaturedPropertiesCard />
        <FeaturedPropertiesCard />
        <FeaturedPropertiesCard />
        <FeaturedPropertiesCard />
        <FeaturedPropertiesCard />
      </div>
    </div>
  );
}

export default FeaturedProperties;
