import React, { useEffect, useState } from "react";
import { RiMenu5Line } from "react-icons/ri";
import apiReq from "../api/apiReq";
import LokacijeCard from "../components/LokacijeCard/LokacijeCard";
import Mapbox from "../components/Mapbox/Mapbox";
const Homepage = () => {
  const [places, setPlaces] = useState([]);
  const [latt, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [status, setStatus] = useState(null);

  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus("Geolocation is not supported by your browser");
    } else {
      setStatus("Locating...");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setStatus("Done");
          setLat(position.coords.latitude);
          setLng(position.coords.longitude);
        },
        () => {
          setStatus("Unable to retrieve your location");
        }
      );
    }
  };
  const getPlaces = async () => {
    const response = await apiReq.get("/parkingLocations");
    setPlaces(response.data);
  };

  useEffect(() => {
    getPlaces();
    getLocation();
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
        {status !== "Done" ? (
          <span className="text-center pt-20  font-medium animate-bounce">
            Učitavanje Vaše lokacije ...
          </span>
        ) : (
          <Mapbox size="35vh" size2="95vw" latt={latt} lng={lng} />
        )}

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
