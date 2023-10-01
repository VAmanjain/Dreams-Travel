import React from "react";
import Image from "../../Assest/Dreams.jpg";
import {
  NavLink as RouterLink,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import * as Scroll from "react-scroll";

const Travel = () => {
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
    <div name="travel" className="travel">
      <div className="container">
        <div className="secTitle">
          Your Dream Travel
        </div>
        <RouterLink to="/trip" className="text-white">
        <div className="singleDestination">
          <div className="imgDiv">
            <img src={Image} alt="" />
            <div className="descInfo flex">
              <div className="text">
                <h6>Want to travel by you dream Destination??</h6>
                <h1
                  className="flex"
                  onClick={() => goToPageAndScroll("home")}
                >Plan Your Own trip With Us </h1>
              </div>
            </div>
          </div>
        </div>
                </RouterLink>
      </div>
    </div>
  );
};

export default Travel;
