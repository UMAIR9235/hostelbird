import React from "react";
import TopDestinationsCard from "./TopDestinationsCard";
import karnataka from "../assets/karnataka.png";
import kerela from "../assets/kerela.png";

import kumaon from "../assets/kumaon.png";

import delhi from "../assets/delhi.png";

import jaipur from "../assets/jaipur.png";

import jaisalmer from "../assets/jaisalmer.png";

import amritsar from "../assets/amritsar.png";
import agra from "../assets/agra.png";

function TopDestinations() {
  return (
    <div className="flex flex-col px-10 py-20 gap-10">
      <h1 className="font-bold text-[40px]">Top Destinations</h1>
      <div className="grid grid-cols-4 grid-rows-2  gap-10 ">
        <TopDestinationsCard imageUrl={karnataka} heading="Karnataka" />
        <TopDestinationsCard imageUrl={kerela} heading="Kerela" />
        <TopDestinationsCard imageUrl={jaisalmer} heading="Jaisalmer" />
        <TopDestinationsCard imageUrl={agra} heading="Agra" />
        <TopDestinationsCard imageUrl={jaipur} heading="Jaipur" />
        <TopDestinationsCard imageUrl={delhi} heading="Delhi" />
        <TopDestinationsCard imageUrl={kumaon} heading="Kumaon" />
        <TopDestinationsCard imageUrl={amritsar} heading="Amritsar" />
      </div>
    </div>
  );
}

export default TopDestinations;
