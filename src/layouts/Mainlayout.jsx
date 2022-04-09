import React from "react";
import { Routes, Route } from "react-router-dom";
import Drawer from "../components/Drawer/Drawer";
import routes from "../utils/routes";

const Mainlayout = () => {
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      return <Route path={prop.path} key={key} element={<prop.element />} />;
    });
  };

  return (
    <div className="relative">
      <Drawer />
      <Routes>{getRoutes(routes)}</Routes>
    </div>
  );
};

export default Mainlayout;
