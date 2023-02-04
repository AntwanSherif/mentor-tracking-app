import React from "react";
import { Route, Routes, Redirect, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import TrackShipment from "./components/TrackShipment/TrackShipment";

const AllRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/tracking-shipments" element={<TrackShipment />} />
    </Routes>
  );
};
export default AllRoutes;
