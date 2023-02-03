import "./Nav.css";
import logo from "../Images/logo.png";
import { useState, useRef } from "react";
import { BiSearch } from "react-icons/bi";

const NavBar = () => {
  const [modal, setModal] = useState(false);

  const showModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  return (
    <div style={{ display: "grid" }}>
      <nav
        style={{
          display: "grid",
          gridTemplateColumns: "0.7fr 1fr 1fr",
          gap: " 20px",
          width: "90%",
          justifySelf: "center",
        }}
      >
        <img
          style={{ width: "50%", justifySelf: "start", alignSelf: "center" }}
          src={logo}
          alt=""
        />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            alignItems: "center",
            gap: "20px",
            justifySelf: "center",
          }}
        >
          <p>Products</p>
          <p>Integrations</p>
          <p>Use Cases</p>
          <p href="https://www.bosta.co/pricing">Pricing</p>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 0.3fr 0.5fr 0.7fr",
            alignItems: "center",
            gap: "15px",
            justifySelf: "end",
          }}
        >
          <p onMouseOver={showModal}>Track Shipment</p>
          <select name="" id="">
            <option value="English">En</option>
            <option value="Arabic">Ar</option>
          </select>
          <p>Sign In</p>
          <p>Sign Up</p>
        </div>
      </nav>

      {modal && (
        <div className="modal">
          <div className="modal-content" onMouseLeave={closeModal}>
            <p>Track Your Shipment</p>
            <input type="text" placeholder="Tracking No." className="input" />
            <button className="search">
              <BiSearch className="icon" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
