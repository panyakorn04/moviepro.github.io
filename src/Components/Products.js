import React from "react";
import "./Poster.css";
import data from "../Data/Randomdata";

function Products({ src }) {
  return (
    <>
      {data.map((Item, index) => {
        return (
          <>
            <div className="ContentTile" key={index}>
              <img src={Item.image} alt="img" />
            </div>
            <div className="ContentRow__spacer"></div>
          </>
        );
      })}
    </>
  );
}

export default Products;
