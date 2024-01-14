import { React, useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { v4 as uuidv4 } from "uuid";

import { db, storage } from "../../firebase.config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./updateItems.css";

import {
  collection,
  addDoc,
  Timestamp,
  doc,
  getDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

const initialState = {
  name: "",
  price: "",
  category: "",
  inStock: false,
  image: "",
};
function UpdateItems() {
  const [data, setData] = useState(initialState);
  const [inStock, setinStock] = useState(false);
  const { category, id } = useParams();

  async function GetData() {
    const docRef = doc(db, category, id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setData(docSnap.data());
    } else {
      // doc.data() will be undefined in this case
    }
  }

  useEffect(
    () => {
      GetData();
    },
    { id }
  );

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
        await updateDoc(doc(db, category, id), {
          name: data?.name,
          price: data?.price,
          inStock: data?.inStock,
          image: snapshot.metadata ? snapshot.metadata.name : data?.image,
          created: Timestamp.now(),
        })
          .then(() => {
            toast("Your Item Was Updated");
          })
          .catch((err) => toast(err));
      });
    } catch (err) {
      alert(err);
    }
  };
  const history = useHistory();

  return (
    <div className="container">
      <ToastContainer />
      <div className="updateItemsForm">
        <Button
          variant="primary"
          type="submit"
          onClick={async () => {
            await deleteDoc(doc(db, category, id))
              .then(() => {
                toast("Item Was Deleted");
                history.push(`/category/${category}`);
              })
              .catch((err) => toast(err));
          }}
        >
          Delete Item
        </Button>
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
              disabled
            >
              <option>Category</option>
              <option value="One">One</option>
              <option value="Two">Two</option>
              <option value="Three">Three</option>
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

export default UpdateItems;
