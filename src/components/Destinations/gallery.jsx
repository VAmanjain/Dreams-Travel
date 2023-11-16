import React, { useEffect, useState } from "react";
import { NavLink as RouterLink } from "react-router-dom";
import Data from "./destinationData";
import { useParams } from "react-router-dom";
import { TiLocation } from "react-icons/ti";
import { useLocation, useNavigate } from "react-router-dom";
import * as Scroll from "react-scroll";

const Gallery = () => {
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [justifyActive, setJustifyActive] = useState("tab1");

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }
  };

  const { id } = useParams();
  const selectedDestination = Data.find((item) => item.id === parseInt(id));

  if (!selectedDestination) {
    // Handle the case when the destination with the specified ID is not found.
    return <div>Destination not found</div>;
  }

  return (
    <div name="destination" className="destination section container gallery">
      <div className="secTitle mt-[2rem] hero  text-center head  ">
        <h1 className="mb-2">{selectedDestination.location}</h1>
        <span className="redText text-center ">Popular Places </span>
      </div>
      <div className="secContainer">
        <div className="destinationContainer grid">
          <div className="singleDestination" key={selectedDestination.id}>
            <div className="imgDiv">
              <img src={selectedDestination.img1} alt="" />

              <div className="descInfo flex">
                <div className="text">
                  <span className="name">{selectedDestination.name}</span>
                  <p className="flex">
                    <TiLocation className="icon" />
                    {selectedDestination.title1}
                  </p>
                </div>
                {/* <span className="rating">{selectedDestination.rating}</span> */}
              </div>
            </div>
          </div>
          <div className="singleDestination" key={selectedDestination.id}>
            <div className="imgDiv">
              <img src={selectedDestination.img2} alt="" />

              <div className="descInfo flex">
                <div className="text">
                  <span className="name">{selectedDestination.name}</span>
                  <p className="flex">
                    <TiLocation className="icon" />
                    {selectedDestination.title2}
                  </p>
                </div>
                {/* <span className="rating">{selectedDestination.rating}</span> */}
              </div>
            </div>
          </div>
          <div className="singleDestination" key={selectedDestination.id}>
            <div className="imgDiv">
              <img src={selectedDestination.img3} alt="" />

              <div className="descInfo flex">
                <div className="text">
                  <span className="name">{selectedDestination.name}</span>
                  <p className="flex">
                    <TiLocation className="icon" />
                    {selectedDestination.title3}
                  </p>
                </div>
                {/* <span className="rating">{selectedDestination.rating}</span> */}
              </div>
            </div>
          </div>
          <div className="singleDestination" key={selectedDestination.id}>
            <div className="imgDiv">
              <img src={selectedDestination.img4} alt="" />

              <div className="descInfo flex">
                <div className="text">
                  <span className="name">{selectedDestination.name}</span>
                  <p className="flex">
                    <TiLocation className="icon" />
                    {selectedDestination.title4}
                  </p>
                </div>
                {/* <span className="rating">{selectedDestination.rating}</span> */}
              </div>
            </div>
          </div>
          <div className="singleDestination" key={selectedDestination.id}>
            <div className="imgDiv">
              <img src={selectedDestination.img5} alt="" />

              <div className="descInfo flex">
                <div className="text">
                  <span className="name">{selectedDestination.name}</span>
                  <p className="flex">
                    <TiLocation className="icon" />
                    {selectedDestination.title5}
                  </p>
                </div>
                {/* <span className="rating">{selectedDestination.rating}</span> */}
              </div>
            </div>
          </div>
          <div className="singleDestination" key={selectedDestination.id}>
            <div className="imgDiv">
              <img src={selectedDestination.img6} alt="" />

              <div className="descInfo flex">
                <div className="text">
                  <span className="name">{selectedDestination.name}</span>
                  <p className="flex">
                    <TiLocation className="icon" />
                    {selectedDestination.title6}
                  </p>
                </div>
                {/* <span className="rating">{selectedDestination.rating}</span> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ------------------our trips---------------------------- */}
      <div className="Our-trip  ">
        <h1 className="text-center head">Our Trips</h1>
     <div className="plans grid">

        {/* -----------------------First trips---------------- */}
        <div className=" card ">
          <h2>Glimpse of {selectedDestination.location}</h2>
          <h4>Duration: {selectedDestination.duration1}</h4>
          <span className="">
            time period : <i> {selectedDestination.period1}</i>
          </span>

          <div className="highlight">
            <b>Locations:</b>
            <p>{selectedDestination.highlights1}</p>
          </div>
          <div className="par">
            <b>Description:</b>
            <p>{selectedDestination.des1}</p>
          </div>
          <div className=" redText text-center ">
            <RouterLink to="/book" className="ticket">
              Book You Ticket
            </RouterLink>
          </div>
        </div>
        <hr />
        {/* -------------------------second Trip-------------------- */}
        <div className="card">
          <h2> New year vacation in {selectedDestination.location}</h2>
          <h4>Duration: {selectedDestination.duration2}</h4>
          <span className="my-[1rem]">
            time period : <i> {selectedDestination.period2}</i>
          </span>

          <div className="highlight">
            <b>Locations:</b>
            <p>{selectedDestination.highlights2}</p>
          </div>
          <div className="par">
            <b>Description:</b>
            <p>{selectedDestination.des2}</p>
          </div>
          <div className=" redText text-center ">
            <RouterLink to="/book" className="ticket">
              Book You Ticket
            </RouterLink>
          </div>
        </div>
        <hr />
        {/* ----------------------third trip------------------------ */}
        <div className="card">
          <h2> {selectedDestination.location} in January</h2>
          <h4>Duration: {selectedDestination.duration3}</h4>
          <span className="my-[1rem]">
            time period : <i> {selectedDestination.period3}</i>
          </span>

          <div className="highlight">
            <b>Locations:</b>
            <p>{selectedDestination.highlights3}</p>
          </div>
          <div className="par">
            <b>Description:</b>
            <p>{selectedDestination.des3}</p>
          </div>
          <div className=" redText text-center ">
            <RouterLink to="/book" className="ticket">
              Book You Ticket
            </RouterLink>
          </div>
        </div>
     </div>

      </div>
    </div>
  );
};

export default Gallery;
