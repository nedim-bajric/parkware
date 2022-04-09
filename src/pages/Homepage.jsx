import React, { useEffect, useState } from "react";
import { RiMenu5Line } from "react-icons/ri";
import apiReq from "../api/apiReq";
import LokacijeCard from "../components/LokacijeCard/LokacijeCard";
import Mapbox from "../components/Mapbox/Mapbox";
const Homepage = () => {
  const [places, setPlaces] = useState([]);

  const getPlaces = async () => {
    const response = await apiReq.get("/parkingLocations");

    setPlaces(response.data);
  };

  useEffect(() => {
    getPlaces();
  }, []);
  return (
    <div className="w-screen min-h-screen bg-dark_blue">
      <div className="w-full h-full text-white px-5 flex flex-col space-y-10">
        <div className="w-[90%] h-14 flex items-center justify-between fixed">
          <h1 className="text-2xl font-medium">Pozdrav Vedad</h1>
          <div className="bg-main_purple p-2 rounded-full ">
            <RiMenu5Line size={25} />
          </div>
        </div>
        <Mapbox size="35vh" size2="95vw" />
        <div className="w-full flex flex-col space-y-5 pt-80">
          <h1 className="w-full text-center text-gray_disable underline underline-offset-8 decoration-main_purple/80 text-xs lg:text-base">
            Parking lokacije
          </h1>
          <div className="lg:flex">
            {places?.map((item) => (
              <LokacijeCard key={item._id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
