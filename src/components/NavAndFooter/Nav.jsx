import "./Nav.scss";
import logo from "../Images/logo.png";
import { useState, useRef } from "react";
import { BiSearch } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { new_value } from "../../redux/shipment";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

const NavBar = () => {
  const [modal, setModal] = useState(false);
  const [shipmentValue, setShipmentValue] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
    // <div style={{ display: "grid" }}>
    //   <nav
    //     style={{
    //       display: "grid",
    //       gridTemplateColumns: "0.7fr 1fr 1fr",
    //       gap: " 20px",
    //       width: "90%",
    //       justifySelf: "center",
    //     }}
    //   >
    //     <img
    //       style={{ width: "50%", justifySelf: "start", alignSelf: "center" }}
    //       src={logo}
    //       alt=""
    //     />
    //     <div
    //       style={{
    //         display: "grid",
    //         gridTemplateColumns: "1fr 1fr 1fr 1fr",
    //         alignItems: "center",
    //         gap: "20px",
    //         justifySelf: "center",
    //       }}
    //     >
    //       <p className="shipments">Products</p>
    //       <p className="shipments">Integrations</p>
    //       <p className="shipments">Use Cases</p>
    //       <p href="https://www.bosta.co/pricing" className="shipments">
    //         Pricing
    //       </p>
    //     </div>
    //     <div
    //       style={{
    //         display: "grid",
    //         gridTemplateColumns: "1fr 0.3fr 0.7fr 0.7fr",
    //         alignItems: "center",
    //         gap: "15px",
    //         justifySelf: "end",
    //       }}
    //     >
    //       <Link
    //         onMouseOver={showModal}
    //         className="shipments"
    //         to="/tracking-shipments"
    //       >
    //         Track Shipments
    //       </Link>

    //       <select name="" id="" className="shipments">
    //         <option value="English" className="shipments">
    //           En
    //         </option>
    //         <option value="Arabic" className="shipments">
    //           Ar
    //         </option>
    //       </select>
    //       <button className="nav-buttons shipments">Sign In</button>
    //       <button className="nav-buttons shipments">Sign Up</button>
    //     </div>
    //   </nav>
    //   {modal && (
    //     <div className="modal-container" onMouseLeave={closeModal}>
    //       <p>Track Your Shipment</p>
    //       <input
    //         type="text"
    //         placeholder="Tracking No."
    //         className="inputNav"
    //         onChange={(event) => setShipmentValue(event.target.value)}
    //       />
    //       <button
    //         className="searchNav"
    //         onClick={() => {
    //           dispatch(new_value(shipmentValue));
    //           navigate("/tracking-shipments");
    //         }}
    //       >
    //         <BiSearch className="icon" />
    //       </button>
    //     </div>
    //   )}
    // </div>
    <>
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img
              style={{
                width: "50%",
                justifySelf: "start",
                alignSelf: "center",
              }}
              src={logo}
              alt=""
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown
                title="Products"
                id="collasible-nav-dropdown"
                className="shipments"
              >
                <NavDropdown.Item href="">Solutions</NavDropdown.Item>
                <NavDropdown.Item href="">Dashboard</NavDropdown.Item>
                <NavDropdown.Item href="">Mobile App</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="Integrations"
                id="collasible-nav-dropdown"
                className="shipments"
              >
                <NavDropdown.Item href="#action/3.1">Shopify</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  WooCommerce
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Custom APIs
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="Use Cases"
                id="collasible-nav-dropdown"
                className="shipments"
              >
                <NavDropdown.Item href="">Businesses</NavDropdown.Item>
                <NavDropdown.Item href="">SMEs</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="" className="shipments">
                Pricing
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link
                href="/tracking-shipments"
                onMouseOver={showModal}
                className="shipments"
              >
                Track Shipments
              </Nav.Link>
              <select name="" id="" className="shipments">
                <option value="English" className="shipments">
                  En
                </option>
                <option value="Arabic" className="shipments">
                  Ar
                </option>
              </select>
              <button className="nav-buttons shipments">SignIn</button>
              <button className="nav-buttons shipments">SignUp</button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {modal && (
        <div className="modal-container" onMouseLeave={closeModal}>
          <p>Track Your Shipment</p>
          <input
            type="text"
            placeholder="Tracking No."
            className="inputNav"
            onChange={(event) => setShipmentValue(event.target.value)}
          />
          <button
            className="searchNav"
            onClick={() => {
              dispatch(new_value(shipmentValue));
              navigate("/tracking-shipments");
            }}
          >
            <BiSearch className="icon" />
          </button>
        </div>
      )}
    </>
  );
};

export default NavBar;
