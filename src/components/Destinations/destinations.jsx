import React, { useEffect } from "react";
import "./destination.css";
import {
  NavLink as RouterLink,
  useLocation,
  useNavigate,
} from "react-router-dom";
import * as Scroll from "react-scroll";
import { TiLocation } from "react-icons/ti";

//Import Photos

import Image1 from "../../Assest/canada.jpg";
import Image2 from "../../Assest/Ausetralia.jpg";
import Image3 from "../../Assest/Itlay.jpg";
import Image4 from "../../Assest/Turky.jpg";
import Image5 from "../../Assest/london.jpg";
import Image6 from "../../Assest/Iceland.jpg";
import Image7 from "../../Assest/India.jpg";

//lets create an array that is gonna contain all destination data and we loop through

const destinations = [
  {
    id: 1,
    img: Image1,
    location: "canada",
  },
  {
    id: 2,
    img: Image2,
    location: "Austeralia",
  },
  {
    id: 3,
    img: Image3,
    location: "Itlay",
  },
  {
    id: 4,
    img: Image4,
    location: "Turky",
  },
  {
    id: 5,
    img: Image5,
    location: "London",
  },
  {
    id: 6,
    img: Image6,
    location: "Iceland",
  },
  {
    id: 7,
    img: Image7,
    location: "India",
  },
];

const Destinations = ({ destination, index, destinationData }) => {
  const path = useLocation().pathname;
  const location = path.split("/")[1];
  const navigate = useNavigate();
  const scroller = Scroll.scroller;

  const goToPageAndScroll = async (selector) => {
    await navigate("/");
    await scroller.scrollTo(selector, {
      duration: 500,
      smooth: true,
      offset: -75,
      spy: true,
    });
  };
  return (
    <div name="destination" className="destination section conatiner">
      <div className="secContainer">
        <div className="secTitle">
          <span className="redText">EXPLORE NOW</span>
          <h3>Find Your Dream Destination</h3>
          <p> Best spot for your next tour</p>
        </div>
        <div className="destinationContainer grid">
          {destinations.map((destination) => {
            return (
              <div key={destination.id}>
                <>
                  <RouterLink
                    to={`/dest/${destination.id}`}
                    key={destination.id}
                    className="text-white"
                  >
                    <div className="singleDestination">
                      <div className="imgDiv">
                        <img src={destination.img} alt="" />
                        <div className="descInfo flex">
                          <div className="text">
                            <p
                              className="flex"
                              onClick={() => goToPageAndScroll("gallery")}
                            >
                              <TiLocation className="icon" />
                              {destination.location}
                            </p>
                          </div>
                          {/* <span className="rating">{destination.rating}</span> */}
                        </div>
                      </div>
                    </div>
                  </RouterLink>
                </>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Destinations;
