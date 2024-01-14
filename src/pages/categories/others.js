import React from "react";
import Wave from "../../assests/wave.png";
import "./index.css";

import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Food1 from "../../assests/food/product1.jpg";
import Food2 from "../../assests/food/product2.jpg";
import Food3 from "../../assests/food/product3.jpg";

function Others() {
  return (
    <div>
      <div className="healthCareDivBackground">
        <h1>HealthCare List</h1>
      </div>
      <div className="mainDivWave">
        <img src={Wave} alt="wave" />
      </div>

      <div className="mainDivWave">
        <img src={Wave} alt="wave" />
        <div className="cardMainClass">
          <Container>
            <Row>
              <Col sm={4}>
                {" "}
                <div className="cardClass">
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={Food1} />
                    <Card.Body>
                      <Card.Title>Air Dried Beef</Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>Category: Food</ListGroup.Item>
                      <ListGroup.Item>In Stock</ListGroup.Item>
                    </ListGroup>
                  </Card>
                </div>
              </Col>
              <Col sm={4}>
                {" "}
                <div className="cardClass">
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={Food2} />
                    <Card.Body>
                      <Card.Title>Air Dried Beef</Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>Category: Food</ListGroup.Item>
                      <ListGroup.Item>In Stock</ListGroup.Item>
                    </ListGroup>
                  </Card>
                </div>
              </Col>
              <Col sm={4}>
                {" "}
                <div className="cardClass">
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={Food3} />
                    <Card.Body>
                      <Card.Title>Air Dried Beef</Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>Category: Food</ListGroup.Item>
                      <ListGroup.Item>In Stock</ListGroup.Item>
                    </ListGroup>
                  </Card>
                </div>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row>
              <Col sm={4}>
                {" "}
                <div className="cardClass">
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={Food1} />
                    <Card.Body>
                      <Card.Title>Air Dried Beef</Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>Category: Food</ListGroup.Item>
                      <ListGroup.Item>In Stock</ListGroup.Item>
                    </ListGroup>
                  </Card>
                </div>
              </Col>
              <Col sm={4}>
                {" "}
                <div className="cardClass">
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={Food2} />
                    <Card.Body>
                      <Card.Title>Air Dried Beef</Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>Category: Food</ListGroup.Item>
                      <ListGroup.Item>In Stock</ListGroup.Item>
                    </ListGroup>
                  </Card>
                </div>
              </Col>
              <Col sm={4}>
                {" "}
                <div className="cardClass">
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={Food3} />
                    <Card.Body>
                      <Card.Title>Air Dried Beef</Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>Category: Food</ListGroup.Item>
                      <ListGroup.Item>In Stock</ListGroup.Item>
                    </ListGroup>
                  </Card>
                </div>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row>
              <Col sm={4}>
                {" "}
                <div className="cardClass">
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={Food1} />
                    <Card.Body>
                      <Card.Title>Air Dried Beef</Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>Category: Food</ListGroup.Item>
                      <ListGroup.Item>In Stock</ListGroup.Item>
                    </ListGroup>
                  </Card>
                </div>
              </Col>
              <Col sm={4}>
                {" "}
                <div className="cardClass">
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={Food2} />
                    <Card.Body>
                      <Card.Title>Air Dried Beef</Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>Category: Food</ListGroup.Item>
                      <ListGroup.Item>In Stock</ListGroup.Item>
                    </ListGroup>
                  </Card>
                </div>
              </Col>
              <Col sm={4}>
                {" "}
                <div className="cardClass">
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={Food3} />
                    <Card.Body>
                      <Card.Title>Air Dried Beef</Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>Category: Food</ListGroup.Item>
                      <ListGroup.Item>In Stock</ListGroup.Item>
                    </ListGroup>
                  </Card>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default Others;
