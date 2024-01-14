import { collection, getDocs } from "firebase/firestore";
import React, { createContext, useEffect, useState } from "react";
import { db } from "../firebase.config";

export const AppContext = createContext();

export const withAppContext = (Component) => (props) =>
  (
    <AppContext.Consumer>
      {(value) => <Component {...value} {...props} />}
    </AppContext.Consumer>
  );

const AppProvider = ({ children }) => {
  const [Categories, setCategories] = useState([]);

  async function GetCategories() {
    const docSnap = await getDocs(collection(db, "Categories"));
    const Category = [...Categories];
    docSnap.forEach((doc) => {
      if (Category.filter((a) => a?.id == doc?.id).length == 0) {
        Category.push({ id: doc?.id, ...doc.data() });
      }
    });
    setCategories(Category);
  }

  useEffect(() => {
    GetCategories();
  }, {});

  return (
    <AppContext.Provider
      value={{
        Categories,
        GetCategories,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
