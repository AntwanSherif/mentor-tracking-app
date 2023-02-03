import NavBar from "../NavAndFooter/Nav";
import bosta from "../Images/bosta.jpeg";
import "./Home.css";

const Home = () => {
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
            <button>Start Now</button>
          </div>
          <img src={bosta} alt="" />
        </div>
      </section>
    </>
  );
};

export default Home;
