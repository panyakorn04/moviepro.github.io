import React from "react";
import "./App.css";
import Explore from "./Components/Explore";
import Hero from "./Components/Hero";
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
