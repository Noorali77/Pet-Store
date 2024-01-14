import { React, useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { v4 as uuidv4 } from "uuid";

import { db, storage } from "../../firebase.config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./addItems.css";

import { collection, addDoc, Timestamp, doc, getDoc } from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";
import { useParams } from "react-router-dom";
import { withAppContext } from "../../Context";

const initialState = {
  name: "",
  price: "",
  category: "",
  inStock: false,
  image: "",
};
function AddItems({ Categories, GetCategories }) {
  const [data, setData] = useState(initialState);
  const [inStock, setinStock] = useState(false);
  useEffect(() => {
    GetCategories();
  }, []);

  useEffect(() => {
    setData({ ...data, category: Categories?.[0]?.id });
  }, [Categories]);

  const handleChange = (event) => {
    if (event)
      if (typeof event === "string" || !event) {
        setData({ ...data, [event.target.name]: event.target.value });
      } else {
        const { name, type, value } = event.target;
        if (type == "file") {
          setData({
            ...data,
            image: event.target.files[0],
          });
        } else if (type === "checkbox") {
          setinStock(!inStock);
          setData({
            ...data,
            [event.target.name]: !inStock,
          });
        } else {
          setData({
            ...data,
            [event.target.name]: event.target.value,
          });
        }
      }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
  };

  const handleSubmit = () => {
    try {
      const storageRef = ref(
        storage,
        `images/${Math.random() * 100} ${data?.image?.name}`
      );

      uploadBytes(storageRef, data?.image).then(async (snapshot) => {
        await addDoc(collection(db, data?.category), {
          name: data?.name,
          price: data?.price,
          category: data?.category,
          inStock: data?.inStock,
          image: snapshot.metadata.name,
          created: Timestamp.now(),
        })
          .then(() => {
            toast("Your Item Was Added");
            setData(initialState);
          })
          .catch((err) => toast(err));
      });
    } catch (err) {
      alert(err);
    }
  };
  return (
    <div className="container">
      <ToastContainer />
      <div className="AddItemsForm">
        <Form onSubmit={onSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Item Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Name"
              name="name"
              value={data.name}
              onChange={handleChange}
            />
            {/* <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text> */}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="text"
              placeholder="$XX"
              name="price"
              value={data.price}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Select
              aria-label="Default select example"
              name="category"
              onChange={handleChange}
              value={data.category}
            >
              {Categories?.map((a) => {
                return <option value={a?.id}>{a?.Name}</option>;
              })}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              checked={data.inStock}
              type="checkbox"
              label="Instock"
              name="inStock"
              //   value={data.inStock}
              //   onClick={() => setinStock(!inStock)}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Image Upload</Form.Label>
            <Form.Control
              type="file"
              name="image"
              onChange={handleChange}
              accept=".jpg,.png,.jpeg"
              required
              //   value={data.image}
            />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            onClick={() => handleSubmit()}
          >
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default withAppContext(AddItems);
