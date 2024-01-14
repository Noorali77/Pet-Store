import React, { useEffect, useState } from "react";
import Wave from "../../assests/wave.png";
import "./index.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useParams } from "react-router-dom";
import { db } from "../../firebase.config";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { useHistory } from "react-router-dom";

function Food() {
  const { category } = useParams();
  const [data, setData] = useState([]);
  const [CategoryName, setCategoryName] = useState([]);

  async function GetCategoryName() {
    const docRef = doc(db, "Categories", category);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setCategoryName(docSnap.data()?.Name);
    }
  }

  useEffect(
    () => {
      GetCategoryName();
    },
    { category }
  );

  async function GetData() {
    const docSnap = await getDocs(collection(db, category));
    const Product = [...data];
    docSnap.forEach((doc) => {
      if (Product.filter((a) => a?.id == doc?.id).length == 0) {
        Product.push({ id: doc?.id, ...doc.data() });
      }
    });
    setData(Product);
  }

  useEffect(() => {
    GetData();
  }, {});

  const history = useHistory();

  return (
    <div>
      <div className="foodDivBackground">
        <h1>{CategoryName} List</h1>
      </div>
      <div className="mainDivWave">
        <img src={Wave} alt="wave" />
      </div>
      <div className="cardMainClass">
        <Container>
          <Row>
            {data?.length > 0 ? (
              data.map((a) => {
                return (
                  <Col sm={4} key={a?.id}>
                    {" "}
                    <div
                      className="cardClass"
                      onClick={() =>
                        history.push(`/update-items/${category}/${a?.id}`)
                      }
                    >
                      <Card style={{ width: "18rem" }}>
                        <Card.Img
                          variant="top"
                          style={{
                            width: "100%",
                            height: "300px",
                            objectFit: "contain",
                          }}
                          onClick={() =>
                            history.push(`/update-items/${category}/${a?.id}`)
                          }
                          src={`https://firebasestorage.googleapis.com/v0/b/pet-website-2f3f5.appspot.com/o/images%2F${a?.image}?alt=media`}
                        />
                        <Card.Body>
                          <Card.Title>{a?.name}</Card.Title>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                          <ListGroup.Item>
                            Category: {a?.category}
                          </ListGroup.Item>
                          <ListGroup.Item>
                            {a?.inStock ? "In " : "Out of "} Stock
                          </ListGroup.Item>
                        </ListGroup>
                      </Card>
                    </div>
                  </Col>
                );
              })
            ) : (
              <h1>No Data Found For This Category</h1>
            )}
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Food;
