import React from "react";
import "./subscribe.css";
import Image from "../../Assest/ladycalling-rb.png";

const Subscribe = () => {
  return (
    <div className="subscribe section container">
      <div className="secContainer grid">
        <img src={Image} alt="Div Iamge" />

        <div className="textDiv">
          <h4 >Best way to start your journey</h4>
          <p >
            We offer personalized itinearies tailored to individual perfernces
            and interests.
          </p>
          <span>Subscribe Our Newsletter</span>
          <form action="" className="form ">
            <div className="formContent flex">
            <input type="email" placeholder="Enter Your email address" className="input" />
          <button className="btn">Login</button>
            </ div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
