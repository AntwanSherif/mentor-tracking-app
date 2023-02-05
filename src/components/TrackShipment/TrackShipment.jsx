import logo from "../Images/logo.png";
import { format } from "date-fns";
import { useState, useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import { FiAlertTriangle } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { new_value } from "../../redux/shipment";
import axios from "axios";
import "./TrackShipment.scss";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";

const TrackShipment = () => {
  const { shipment_no } = useSelector((state) => state.shipment);
  const [shipment_info, setShipmentInfo] = useState();
  const [shipmentValue, setShipmentValue] = useState(shipment_no);
  const [language, setLanguage] = useState("En");
  const [errorFlag, setErrorFlag] = useState(false);
  const dispatch = useDispatch();
  const handleFetchInfo = async () => {
    const response = await axios
      .get(`https://tracking.bosta.co/shipments/track/${shipmentValue}`)

      .catch((error) => {
        setErrorFlag(true);
        console.log(error);
      });
    if (errorFlag) {
      return;
    }
    setShipmentInfo(response.data);
    console.log(shipment_info);
  };

  useEffect(() => {
    if (shipment_no !== 0) {
      handleFetchInfo();
      setErrorFlag(false);
    }
  }, [shipment_no]);

  function shipmentStatus(state) {
    if (state === "DELIVERED") {
      return "Delivered";
    } else if (state === "DELIVERED_TO_SENDER") {
      return "Returned";
    }
  }

  function statusBar(state) {
    if (state === "DELIVERED") {
      return (
        <div className="statusBar-container">
          <hr className="statusBar firstBar delivered" />
          <hr className="statusBar delivered" />
          <hr className="statusBar lastBar delivered" />
        </div>
      );
    } else if (state === "DELIVERED_TO_SENDER") {
      return (
        <div className="statusBar-container">
          <hr className="statusBar firstBar delivered" />
          <hr className="statusBar delivered" />
          <hr className="statusBar lastBar returned" />
        </div>
      );
    }
  }

  function statusInfo(status) {
    // let today = new Date().format("mm/dd/yyyy");
    // let last_date = new Date(status.timestamp).format("mm/dd/yyyy");
    // let Difference_In_Time = today.getTime() - last_date.getTime();
    // let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    // console.log(Difference_In_Days);
    let date = new Date(status.timestamp).toString();
    date = `${date.slice(0, 3)}, ${new Intl.DateTimeFormat("en-GB", {
      year: "numeric",
      month: "long",
      day: "2-digit",
    }).format(new Date(status.timestamp))}`;
    console.log(date.slice(0, date.length - 4));
    if (status.state === "DELIVERED") {
      return (
        <>
          <p className="statusInfo">
            Your shipper requested a pickup. Bosta will pick it up soon{" "}
            <span style={{ color: "#0098a5" }}> {`${date}`} </span>
          </p>
          <hr className="line-break" />
        </>
      );
    } else if (status.state === "DELIVERED_TO_SENDER") {
      return (
        <>
          <p className="statusInfo">
            Order is canceled and it will be returned back to the shipper{" "}
            <span style={{ color: "#0098a5" }}> {`${date}`} </span>
          </p>
          <p>(Last update since 928 day ago.)</p>
          <hr style={{ width: "90%", border: "0.2px #e4e7ec solid" }} />
        </>
      );
    }
  }

  function getDate(ship_date) {
    let date = new Date(ship_date).toString();
    date = `${date.slice(0, 3)}, ${new Intl.DateTimeFormat("en-GB", {
      year: "numeric",
      month: "long",
      day: "2-digit",
    }).format(new Date())}`;
    return date.slice(0, date.length - 4);
  }

  function getTrackInfo(status) {
    const hours = new Date(status.timestamp).toLocaleTimeString("en-US", {
      timeZone: "UTC",
      hour12: true,
      hour: "numeric",
      minute: "numeric",
    });
    if (status.state === "DELIVERED") {
      return (
        <div className="wrapper">
          <p className="activity-status">
            Your shipper requested a pickup. Bosta will pick it up soon
          </p>
          <p className="activity-hours  ">{hours}</p>
        </div>
      );
    } else if (status.state === "DELIVERED_TO_SENDER") {
      return (
        <div className="wrapper">
          <p className="activity-status">
            Order is canceled and it will be returned back to the shipper
          </p>
          <p className="activity-hours  ">{hours}</p>
        </div>
      );
    }
  }

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
                width: "30%",
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
              gridTemplateColumns: "0.7fr",
              alignItems: "center",
              gap: "15px",
              justifySelf: "end",
            }}
          >
            <select name="Language" id="">
              <option value="En" onClick={() => setLanguage("En")}>
                En
              </option>
              <option value="Ar" onClick={() => setLanguage("Ar")}>
                Ar
              </option>
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
      {errorFlag === true ? (
        <div style={{ display: "grid" }}>
          <br />

          <p className="shipment-no">{`Shipment No. ${shipment_no}`}</p>

          <div className="error-wrapper">
            <FiAlertTriangle className="error-icon" />
            <p className="error-message">
              No record of this tracking number can be found at this time,
              please check the number and try again later. For further
              assistance, please contact Customer Service.
            </p>
          </div>
        </div>
      ) : shipment_info ? (
        <div style={{ display: "grid" }}>
          <div className="info-container">
            <p className="shipment-no">
              {`Shipment No. ${shipment_info.TrackingNumber}`}
            </p>
            <p className="stateTitle">
              {shipmentStatus(shipment_info.CurrentStatus.state)}
            </p>
            <>{statusBar(shipment_info.CurrentStatus.state)}</>
            <>{statusInfo(shipment_info.CurrentStatus)}</>
          </div>
          <div className="track_info">
            <p className="track_title">ACTIVITY LOG</p>
            <ul className="ul-style">
              <li className="li-style">
                <p className="activity-date">
                  {getDate(shipment_info.CurrentStatus.timestamp)}
                </p>
                <>{getTrackInfo(shipment_info.CurrentStatus)}</>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default TrackShipment;
