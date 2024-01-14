import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Home from "../pages/home/home";
import Category from "../pages/categories/index";
import Errorpage from "../pages/errorPage/errorpage";
import AddItems from "../pages/addItems/addItems";
import UpdateItems from "../pages/update Items";
import AppProvider from "../Context";
import Login from "../pages/login/login";
import Signup from "../pages/signup/signup";
import Feed from "../pages/feed/feed";
import ProtectedRoutes from "./protectedRoutes";
import NavbarMain from "../components/navbar/navbar";

export default function AppRouting(props) {
  const { selectedCategory, setSelectedCategory } = props;
  const isAuthenticated = !!localStorage.getItem("token"); // Check if token is present in local storage
  return (
    <Router>
      <div>
        <NavbarMain
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/category/:category">
            <Category />
          </Route>

          <Route path="/update-items/:category/:id">
            <UpdateItems />
          </Route>

          <Route path="/add-items">
            <AddItems />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/login">
            {isAuthenticated ? <Redirect to="/" /> : <Login />}
          </Route>
          <Route path="/signup">
            {isAuthenticated ? <Redirect to="/" /> : <Signup />}
          </Route>
          <ProtectedRoutes path="/posts">
            <Feed
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          </ProtectedRoutes>

          <Route path="*">
            <Errorpage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
