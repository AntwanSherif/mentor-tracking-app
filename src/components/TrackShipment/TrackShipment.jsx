import logo from "../Images/logo.png";
import { Router } from "react-router-dom";
import { useState, useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { new_value } from "../../redux/shipment";
import axios from "axios";
import "./TrackShipment.css";
import { Link, useNavigate } from "react-router-dom";

const TrackShipment = () => {
  const { shipment_no } = useSelector((state) => state.shipment);
  const [shipment_info, setShipmentInfo] = useState(null);
  const [shipmentValue, setShipmentValue] = useState(shipment_no);
  const dispatch = useDispatch();
  const handleFetchInfo = async () => {
    const response = await axios.get(
      `https://tracking.bosta.co/shipments/track/${shipmentValue}`
    );
    setShipmentInfo(response.data);
    console.log(shipment_info);
  };

  useEffect(() => {
    if (shipment_no !== 0) {
      handleFetchInfo();
    }
  }, [shipment_no]);

  return (
    <>
      <div style={{ display: "grid", alignSelf: "start" }}>
        <nav
          style={{
            display: "grid",
            gridTemplateColumns: "0.7fr 1fr",
            gap: " 20px",
            width: "90%",
            justifySelf: "center",
          }}
        >
          <Link to="/">
            <img
              style={{
                width: "50%",
                justifySelf: "start",
                alignSelf: "center",
              }}
              src={logo}
              alt=""
            />
          </Link>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 0.3fr 0.5fr 0.7fr",
              alignItems: "center",
              gap: "15px",
              justifySelf: "end",
            }}
          >
            <select name="" id="">
              <option value="English">En</option>
              <option value="Arabic">Ar</option>
            </select>
          </div>
        </nav>
      </div>

      <div className="input-container">
        <h4 className="title">Track Your Shipments</h4>
        <span>
          <input
            type="text"
            placeholder="Tracking No."
            className="input"
            onChange={(event) => setShipmentValue(event.target.value)}
          />
          <button
            className="search"
            onClick={() => {
              dispatch(new_value(shipmentValue));
              handleFetchInfo(shipmentValue);
            }}
          >
            <BiSearch className="icon" />
          </button>
        </span>
      </div>
      {shipment_info && (
        <p> {`Shipment No. ${shipment_info.TrackingNumber}`}</p>
      )}
    </>
  );
};

export default TrackShipment;
