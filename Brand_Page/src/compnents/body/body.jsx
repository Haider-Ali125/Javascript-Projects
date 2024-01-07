// import React from 'react'
import "./body.css";
import Shoes from "../../assets/shoes.svg";
import Flip from "../../assets/flip1.svg";
import Amazon from "../../assets/Amazon.svg";
const Main = () => {
  return (
    <div className="main_body">
      <div className="main-1">
        <h1 className="main-head">Your feet deserves the best</h1>
        <p className="main-par">
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES
        </p>
        <div className="btn">
          <button className="btn-1">Shop Now</button>
          <button className="btn-2">Category</button>
        </div>
        <p className="main-p2">Also Available On </p>
        <div className="img">
          <img className="img-1" src={Flip} alt="Flowers in Chania" />
          <img className="img-2" src={Amazon} />
        </div>
      </div>
      <div className="main-2">
        <img src={Shoes} />
      </div>
    </div>
  );
};

export default Main;
