import React from "react";
import Infocard from "../components/InfoCard/Infocard";
import Mapbox from "../components/Mapbox/Mapbox";

const Parking = () => {
  return (
    <div className="w-screen max-h-scree relative">
      <Infocard />
      <Mapbox size="100vh" size2="100vw" />
    </div>
  );
};

export default Parking;
