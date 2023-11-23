import React from "react";
import "./About.css";

import AboutImg from "../../Assest/Adventure.jpg";

const about = () => {
  return (
    <div className="about container ">
      <div className="  section">
        <h1>Welcome to Dreams Travel</h1>
        <div className="grid">
          <div className="secHeading">
            At Dreams Travel, we believe that every journey is an opportunity to
            live out your dreams. Our passion for exploration, coupled with a
            commitment to delivering exceptional experiences, drives us to
            curate unforgettable adventures in nature's finest landscapes.
          </div>
          <div className="imgDiv">
            <img src={AboutImg} alt="" />
          </div>
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default about;
