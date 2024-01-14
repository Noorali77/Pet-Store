import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import homeDog from "../../assests/homeDog.png";
import HomeBookButton from "../../assests/homeBookButton.png";
import HomeTwo from "../../assests/homeTwo.png";
import HomeTwoFood from "../../assests/homeTwoFood.png";
import "./home.css";

function Home() {
  return (
    <div className="homeMainDiv">
      <div>
        <Row className="gridClass">
          <Col sm={5}>
            <div className="divOne">
              <h1>
                <span style={{ color: "#ed6436" }}>Welcome to the </span> <br />
                <span>store</span>
              </h1>
              <div>
                <img src={HomeBookButton} alt="home" />
              </div>
            </div>
          </Col>
          <Col sm={7} style={{ padding: "0px" }}>
            <div className="divTwo">
              <img src={homeDog} alt="home" />
            </div>
          </Col>
        </Row>
      </div>
      <div>
        <Row className="gridClassOne">
          <Col sm={7} style={{ margin: "0px", padding: "0px" }}>
            <div className="divOne">
              <div className="imageOne">
                <img src={HomeTwo} alt="home" />
              </div>
              <div className="imageTwo">
                <img src={HomeTwoFood} alt="home" />
              </div>
            </div>
          </Col>
          <Col sm={5} style={{ margin: "0px", padding: "0px" }}>
            <div className="divTwo">
              <h1>
                <span>We can keep </span> <br />
                <span style={{ color: "#ed6436" }}>them happy</span>
              </h1>
              <p>
                From the time our friends sniff their way through the door in
                the morning until they wag their weary, but satisfied tails out
                in the afternoon, we cater to their nature.
              </p>
              <div>
                <button>View Details</button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Home;
