import React from "react";
import "./App.css";
import Hero from "./Components/Hero";
import Explore from "./Components/Explore";

function App() {
  return (
    <>
      <div className="Home">
        <Hero />
        <Explore />
      </div>
    </>
  );
}

export default App;
