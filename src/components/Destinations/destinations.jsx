import React, { useEffect } from "react";
import './destination.css'



//Import icon

import { MdLocationPin } from "react-icons/md";
import { BsFillCreditCardFill } from "react-icons/bs";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { TiLocation } from "react-icons/ti";

//Import Photos

import Image1 from "../../Assest/Image1.jpg";
import Image2 from "../../Assest/Image2.jpg";
import Image3 from "../../Assest/Image3.jpg";
import Image4 from "../../Assest/Image4.jpg";
import Image5 from "../../Assest/Image5.jpg";
import Image6 from "../../Assest/Image6.jpg";
import Image7 from "../../Assest/Image7.jpg";
import Image8 from "../../Assest/Image8.jpg";

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
    location: "Greece",
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
    location: "Italy",
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
    location: "Canada",
    rating: 4.3,
  },
  {
    id: 8,
    img: Image8,
    name: "Giau Pass",
    location: "Italy",
    rating: 4.6,
  },
];

const Destinations = () => {
 
  return (
    <div name='destination' className="destination section conatiner">
      <div className="secContainer">
        <div className="secTitle">
          <span className="redText" data-aos="fade-up">
            EXPLORE NOW
          </span>
          <h3 data-aos="fade-up">Find Your Dream Destination</h3>
          <p data-aos="fade-up">
            Fill in fields below best spot for your next tour
          </p>
        </div>

        <div className="searchField grid ">
          <div className="inputField flex" data-aos="fade-up">
            <MdLocationPin className="icon" />
            <input type="text" placeholder="Location" />
          </div>

          <div className="inputField flex" data-aos="fade-up">
            <BsFillCreditCardFill className="icon" />
            <input type="text" placeholder="Budget" />
          </div>

          <div className="inputField flex" data-aos="fade-up">
            <BsFillCalendarDateFill className="icon" />
            <input type="text" placeholder="Date" />
          </div>

          <button className="btnb flex" data-aos="fade-up">
            <BiSearchAlt className="icon" />
            Search
          </button>
        </div>

        <div className="secMenu">
          <ul className="flex">
            <li className="active" data-aos="fade-up">
              All
            </li>
            <li data-aos="fade-up" >Recommened</li>
            <li data-aos="fade-up">Beach</li>
            <li data-aos="fade-up">Park</li>
            <li data-aos="fade-up">Nature</li>
            <li data-aos="fade-up">Mountain</li>
          </ul>
        </div>

        <div className="destinationContainer grid">
          {destinations.map((destination) => {
            return (
              <div
                className="singleDestination"
                key={destination.id}
                data-aos="fade-up"
              >
                <div className="imgDiv" data-aos="fade-up">
                  <img src={destination.img} alt="" />

                  <div className="descInfo flex">
                    <div className="text">
                      <span className="name">{destination.name}</span>
                      <p className="flex">
                        <TiLocation className="icon" />
                        {destination.location}
                      </p>
                    </div>
                    <span className="rating">{destination.rating}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Destinations;
