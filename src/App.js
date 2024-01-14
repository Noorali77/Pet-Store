import React, { useState } from "react";
import Home from "./pages/home/home";
import "./App.css";
import AppRouting from "./router/router";
import Footer from "./components/footer/footer";
import AppProvider from "./Context";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  return (
    <AppProvider>
      <div>
        <AppRouting
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Footer />
      </div>
    </AppProvider>
  );
}

export default App;
