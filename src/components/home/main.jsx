import React from "react";
import './main.css'
import Video from "../../Assest/video2.mp4";

const main = () => {
  return (
    <div className="home" name="home">
      <div className="videoBg " >
        <video src={Video} autoPlay loop muted ></video>
      </div>

      <div className="sectionText"  data-aos="fade-right"
    data-aos-offset="200"
    data-aos-delay="200"
    data-aos-duration="1000">
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
