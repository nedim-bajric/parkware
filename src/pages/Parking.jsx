import React from "react";
import Infocard from "../components/InfoCard/Infocard";
import Mapbox from "../components/Mapbox/Mapbox";

const Parking = () => {
  return (
    <div className="w-screen max-h-screen bg-dark_blue relative">
      <Infocard />
      <Mapbox size="100vh" size2="100vh" />
    </div>
  );
};

export default Parking;
