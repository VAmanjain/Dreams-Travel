import React from "react";
import './protfolio.css'


import icon1 from "../../Assest/protection.png";
import icon2 from "../../Assest/distance.png";
import icon3 from "../../Assest/24-hours-support.png";
import image from "../../Assest/gridImage.png";

const Protfolio = () => {
  return (
  
    <div className="portifolio section container" name="protfolio">
      <div className="secContainer grid">
        <div className="leftContent">
          <div className="secHeading">
            <h3>Why Should You Choose Us</h3>
            <p>
              We have extensive knowledge and experience in the travel industry
            </p>
          </div>

          <div className="grid">
            <div className="singlePortifolio flex">
              <div className="iconDiv">
                <img src={icon1} alt="Icon Image" />
              </div>

              <div className="infor">
                <h4>Safety and support</h4>
                <p>
                  Our priority is Safety and well-being of our clients.we
                  maintain high Safety standards and have emergency support
                  available during the trip.
                </p>
              </div>
            </div>
            <div className="singlePortifolio flex">
              <div className="iconDiv">
                <img src={icon2} alt="" />
              </div>

              <div className="infor">
                <h4>Diverse Range and Destinations</h4>
                <p>
                  Our priority is a Safety and well-being of our clients .We
                  maintain high Safety standards and emergency support available
                  during the trip.
                </p>
              </div>
            </div>
            <div className="singlePortifolio flex">
              <div className="iconDiv">
                <img src={icon3} alt="" />
              </div>

              <div className="infor">
                <h4>24/7 Customer Support</h4>
                <p>
                  Our dedicated Customer team is available round the clock to
                  address any queries or concerns before ,during , and after the
                  trip.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="rightContent">
          <img src={image} alt="" width="150px" height="150px" />
        </div>
      </div>
    </div>
  );
};

export default Protfolio;
