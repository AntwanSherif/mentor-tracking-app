import NavBar from "../NavAndFooter/Nav";
import bosta from "../Images/bosta.jpeg";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const { shipment_no } = useSelector((state) => state.shipment);
  const dispatch = useDispatch();
  return (
    <>
      <NavBar />
      <section>
        <div className="content-container">
          <div>
            <p className="title-1">
              Join A New <br /> Generation Of <br />
              Logistics!
            </p>
            <p className="title-2">
              Redefining how you ship, track, collect, deliver
              <br /> all through innovative tech-solutions and
              <br /> efficient operations.
            </p>
            <button className="start-button">Start Now</button>
          </div>
          <img src={bosta} alt="" />
        </div>
      </section>
    </>
  );
};

export default Home;
