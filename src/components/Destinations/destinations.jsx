import React, { useEffect } from "react";
import "./destination.css";

import {
  NavLink as RouterLink,
  useLocation,
  useNavigate,
} from "react-router-dom";

import { Link as ScrollLink } from "react-scroll";
import * as Scroll from "react-scroll";

//Import icon

import { MdLocationPin } from "react-icons/md";
import { BsFillCreditCardFill } from "react-icons/bs";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { TiLocation } from "react-icons/ti";

//Import Photos

import Image1 from "../../Assest/Image1.jpg";
import Image2 from "../../Assest/Ausetralia.jpg";
import Image3 from "../../Assest/Image3.jpg";
import Image4 from "../../Assest/Image4.jpg";
import Image5 from "../../Assest/london.jpg";
import Image6 from "../../Assest/Image6.jpg";
import Image7 from "../../Assest/India.jpg";
import Image8 from "../../Assest/Dreams.jpg";
import Data from "./destinationData";

//lets create an array that is gonna contain all destination data and we loop through

const destinations = [
  {
    id: 1,
    img: Image1,
    name: "Banff National Park",
    location: "canada",
    rating: 4.7,
  },
  {
    id: 2,
    img: Image2,
    name: "Santorini",
    location: "Austeralia",
    rating: 4.9,
  },
  {
    id: 3,
    img: Image3,
    name: "Pragser Wildsee",
    location: "Itlay",
    rating: 4.5,
  },
  {
    id: 4,
    img: Image4,
    name: "Cappadocia",
    location: "Turky",
    rating: 4.8,
  },
  {
    id: 5,
    img: Image5,
    name: "San Quirico d'Orcia",
    location: "London",
    rating: 4.6,
  },
  {
    id: 6,
    img: Image6,
    name: "Seljalandsfoss Waterfall",
    location: "Iceland",
    rating: 4.5,
  },
  {
    id: 7,
    img: Image7,
    name: "Yoho National Park, Field",
    location: "India",
    rating: 4.3,
  },
  {
    id: 8,
    img: Image8,
    location: "Your Dreams Travel",
    rating: "Plan",
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
          <p>Fill in fields below best spot for your next tour</p>
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
                          <span className="rating">{destination.rating}</span>
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
