import React from "react";
import './main.css'
import Video from "../../Assest/video3.mp4";

const main = () => {
  return (
    <div className="home" name="home">
      <div className="videoBg ">
        <video src={Video} autoPlay loop muted></video>
      </div>

      <div className="sectionText">
        <h1>Enjoy you Dream's vactions with Us !!</h1>
        <p>
          Complete your travel dreams with your partner , freinds , family life is short for travel.
        </p>

<button className="btn"> 
Let's travel
</button>

      </div>
    </div>
  );
};

export default main;
