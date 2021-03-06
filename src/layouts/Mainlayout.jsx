import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Drawer from "../components/Drawer/Drawer";
import routes from "../utils/routes";

const Mainlayout = () => {
  const navigate = useNavigate();
  const getRoutes = routes => {
    return routes.map((prop, key) => {
      return <Route path={prop.path} key={key} element={<prop.element />} />;
    });
  };

  const unknownRoute = () => {
    return (
      <Route
        path="*"
        element={
          <>
            <p>Nema ništa na ovoj ruti!</p>
            <button onClick={() => navigate("/")}>
              Kliknite ovdje da se vratite na početnu
            </button>
          </>
        }
      />
    );
  };

  return (
    <div className="relative">
      <Drawer />
      <Routes>
        {getRoutes(routes)} {unknownRoute()}
      </Routes>
    </div>
  );
};

export default Mainlayout;
