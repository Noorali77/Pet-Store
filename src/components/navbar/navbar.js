import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./navbar.css";
import AddIcon from "../../assests/add.svg";

import logo from "../../assests/logo.png";
import { withAppContext } from "../../Context";
import Contact from "../../pages/categories/contact";

import { db } from "../../firebase.config";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useLocation, useHistory } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

function NavbarMain({
  Categories,
  GetCategories,
  selectedCategory,
  setSelectedCategory,
}) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [location.pathname]);
  useEffect(() => {
    GetCategories();
  }, {});

  const logoutBtnStyles = {
    backgroundColor: "transparent",
    fontWeight: "bold",
    border: "none",
    padding: "10px 20px",
    color: "#000",
  };


  const logOutHandler = () => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem("token");
        history.push("/login");
      })
      .catch((error) => {
        console.error("Error signing out:", error.message);
      });
  };
  return (
    <Navbar className="mainNavBar" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{ alignItems: "center" }}>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#link">Blog</Nav.Link>
            <NavDropdown
              title="Elements"
              id="basic-nav-dropdown"
              className="navbarCollapse"
            >
              {Categories?.map((a) => {
                return (
                  <div key={a?.id}>
                    <NavDropdown.Item href={`/category/${a?.id}`}>
                      {a?.Name}
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                  </div>
                );
              })}
            </NavDropdown>
            {!isLoggedIn ? (
              <Nav.Link href="/login">Login/Signup</Nav.Link>
            ) : (
              <Nav.Link href="/posts">Posts</Nav.Link>
            )}

            <Nav.Link href="/add-items">
              {/* ADD */}
              <img
                style={{
                  width: "40px",
                  alignItems: "center",
                  alignContent: "center",
                }}
                src={AddIcon}
                alt="Add"
              />
            </Nav.Link>

            {window.location.pathname == "/posts" && (
              <Nav.Item>
                <div style={{ width: "160px", position: "relative" }}>
                  <input
                    type="text"
                    // name="name"
                    className="form-control mt-1"
                    placeholder="e.g Jane Doe"
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  />
                  <div
                    style={{
                      position: "absolute",
                      right: "4px",
                      top: "7px",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 50 50"
                      width="20px"
                      height="20px"
                    >
                      <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z" />
                    </svg>
                  </div>
                </div>
              </Nav.Item>
            )}

            {isLoggedIn && (
              <button style={logoutBtnStyles} onClick={logOutHandler}>
                Logout
              </button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default withAppContext(NavbarMain);
