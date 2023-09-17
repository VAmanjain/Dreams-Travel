import React, { useEffect } from "react";
import './main.css'
import Image from '../../Assest/back3.jpg'

const Main = () => {

  return (
    <div className="home" name="home">
      <div className="videoBg " >
       <img src={Image} alt="" />
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

export default Main;
