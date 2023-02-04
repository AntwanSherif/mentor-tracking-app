import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import TrackShipment from "./components/TrackShipment/TrackShipment";
import { Route } from "react-router-dom";
import AllRoutes from "./AllRoutes";

function App() {
  return (
    <BrowserRouter>
      <AllRoutes />
    </BrowserRouter>
  );
}

export default App;
