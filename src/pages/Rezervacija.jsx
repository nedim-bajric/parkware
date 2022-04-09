import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import Mapbox from "../components/Mapbox/Mapbox";
import Res2 from "../components/Res2/Res2";
import Res3 from "../components/Res3/Res3";

const Rezervacija = () => {
  const data = useSelector((state) => state.reservation.data);
  const reservation = useSelector((state) => state.reservation.reserved);
  const navigate = useNavigate();
  const [latt2, setLat] = useState(null);
  const [lng2, setLng] = useState(null);
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
  console.log(lng2, latt2);
  useEffect(() => {
    getLocation();
  }, []);
  return (
    <div className="w-screen h-screen relative">
      <div className="absolute inset-x-0 text-white z-50 w-scren h-screen bg-black/50 p-3 flex flex-col space-y-40">
        <div
          className="bg-main_purple w-12 flex items-center justify-center rounded-full p-2"
          onClick={() => navigate("/home")}
        >
          <IoIosArrowBack size={30} />
        </div>
        {reservation ? <Res3 /> : <Res2 />}
      </div>
      {status !== "Done" ? undefined : (
        <Mapbox size="100vh" size2="100vw" latt2={latt2} lng2={lng2} />
      )}
    </div>
  );
};

export default Rezervacija;
