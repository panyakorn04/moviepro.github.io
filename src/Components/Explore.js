import React from "react";
import Card from "./Card";
import "./Explore.css";
import Poster from "./Poster";
import Products from "./Products";

function Explore() {
  return (
    <>
      <>
        <div className="Explore">
          <div className="ContentRow">
            <div className="ContentRow__title">New Releases</div>
            <div className="ContentRow__items">
              <div className="ContentRow__spacer"></div>
              <Poster />
            </div>
          </div>
          <div className=".ContentRow__Trending">
            <div className="ContentRow__title">Trending</div>
            <div className="ContentRow__items">
              <div className="ContentRow__spacer"></div>
              <Card />
            </div>
          </div>

          {/* //Random Movie */}
          <div className=".ContentRow__Trending">
            <div className="ContentRow__title">Random</div>
            <div className="ContentRow__items">
              <div className="ContentRow__spacer"></div>
              <Products src="https://api.lorem.space/image/movie?w=1280&h=1920&t=1" />
            </div>
          </div>
        </div>
      </>
    </>
  );
}

export default Explore;
