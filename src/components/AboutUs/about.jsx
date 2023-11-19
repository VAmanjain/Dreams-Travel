import React from "react";
import "./about.css";
import Image1 from "../../Assest/team.jpg";
import Image2 from "../../Assest/motive.jpg";

const About = () => {
  return (
    <div className="about" name="about">
      <div className=" header flex ">
        <h1>About Us </h1>
        <p></p>
      </div>
      <div className="subscribe section container">
        <div className="secContainer grid">
          <div className="Imge">
            <img src={Image1} alt="Div Iamge" className="imge-1" />
          </div>

          <div className="textDiv">
            <h4 > Who We Are</h4>
            <p>
              We are a team of passionate travelers, explorers, and dreamers
              ourselves. We understand the profound impact of travel on personal
              growth and the lasting memories it creates. Our goal is to enable
              you to embark on journeys that go beyond mere vacations, enriching
              your life with moments of wonder, discovery, and connection.
            </p>
          </div>
        </div>
        <div className="secContainer grid">
          <div className="textDiv">
            <h4>OUR MOTIVE</h4>
            <p>
              <ul>
                <li >
                  <span>Inspiration</span>: We inspire you to dream bigger,
                  venture farther, and seek out the extraordinary.
                </li>
                <li>
                  <span>Transformation</span>:We aim to transform your travel
                  dreams into vivid, life-altering experiences.
                </li>
                <li>
                  <span>Memories</span>: We're here to help you craft memories
                  that you'll cherish for a lifetime.
                </li>
              </ul>
            </p>
          </div>
          <div className="Imge">
            <img src={Image2} alt="Div Iamge" style={{ width: "100%"  }} className="imge-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
