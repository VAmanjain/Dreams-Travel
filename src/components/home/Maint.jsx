import React from 'react'
import './main.css'
import Image from   '../../Assest/back.jpg'
import { Link as ScrollLink } from "react-scroll";
const Maint = () => {
  return (
        <>
        <div className="home" name="home">
      <div className="videoBg " >
       <img src={Image} alt="image" />
      </div>

      <div className="sectionText">
        <h1>Enjoy your Dream's vactions with Us !!</h1>
        <p>
          Complete your travel dreams with your partner , freinds , family life is short for travel.
        </p>

        <ScrollLink
              to="destination"
              spy={true}
              smooth={true}
              offset={-75}
              duration={500}
              className=" text-[1.6rem] text-white btn"
            >
              Let's Travel
            </ScrollLink>


      </div>
    </div>
        </>
  )
}

export default Maint