import React from "react";
import data from "../Data/Newdata";
import "./Poster.css";

function Card() {
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

export default Card;
