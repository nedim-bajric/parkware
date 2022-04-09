import React from "react";
import { useSelector } from "react-redux";
import Infocard from "../components/InfoCard/Infocard";
import Mapbox from "../components/Mapbox/Mapbox";
import Reserved from "../components/Reserved/Reserved";

const Parking = () => {
  const reservation = useSelector((state) => state.reservation.reserved);

  return (
    <div className="w-screen max-h-scree relative">
      {reservation ? <Reserved /> : <Infocard />}
      <Mapbox size="100vh" size2="100vw" />
    </div>
  );
};

export default Parking;
