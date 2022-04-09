import React from "react";
import { RiMenu5Line } from "react-icons/ri";
import LokacijeCard from "../components/LokacijeCard/LokacijeCard";
import Mapbox from "../components/Mapbox/Mapbox";
import lokacije from "../utils/lokacije";
const Homepage = () => {
  return (
    <div className="w-screen min-h-screen bg-dark_blue">
      <div className="w-full h-full text-white px-5 flex flex-col space-y-10">
        <div className="w-full h-14 flex items-center justify-between">
          <h1 className="text-2xl font-medium">Pozdrav Vedad</h1>
          <div className="bg-main_purple p-2 rounded-full ">
            <RiMenu5Line size={25} />
          </div>
        </div>
        <Mapbox size="35vh" size2="45vh" />
        <div className="w-full flex flex-col space-y-5 pt-64">
          <h1 className="w-full text-center text-gray_disable underline underline-offset-8 decoration-main_purple/80 text-xs">
            Parking lokacije
          </h1>
          {lokacije.map((item) => (
            <LokacijeCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
