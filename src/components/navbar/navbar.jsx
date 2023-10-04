import React, { useState } from "react";
import "./navbar.css";
import ConnectingAirportsIcon from "@mui/icons-material/ConnectingAirports";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import {
  NavLink as RouterLink,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import * as Scroll from "react-scroll";

const Navbar = () => {
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

  // state to track and update navbar
  const [navBar, setNavBar] = useState("menu");

  //Function to show navBar

  const showNavBar = () => {
    setNavBar(" menu showNavbar showNavBarC");
  };
  //Function to remove navbar
  const removeNavBar = () => {
    setNavBar(" menu ");
  };
  return (
    <div className="navBar ">
      <div className="logoDiv">
        <ConnectingAirportsIcon className="icon" />

        {location !== "test" ? (
          <span>
            {" "}
            <ScrollLink
              to="home"
              spy={true}
              smooth={true}
              offset={-75}
              duration={500}
              className=" text-[1.6rem] text-white "
            >
              Dreams Travel
            </ScrollLink>
          </span>
        ) : (
          <span onClick={() => goToPageAndScroll("home")}>Drems-Travel</span>
        )}
      </div>

      <div className={navBar}>
        <ul>
          {location === "test" || "contact" || "book" || "gallery" ? (
            <>
              <li className="navList" onClick={() => goToPageAndScroll("home")}>
                Home
              </li>
              <li
                className="navList"
                onClick={() => goToPageAndScroll("destination")}
              >
                Destinations
              </li>
              <li
                className="navList"
                onClick={() => goToPageAndScroll("about")}
              >
                About
              </li>
              <li className="navList">
                <RouterLink to="/contact" className="text-white">
                  contact
                </RouterLink>
              </li>
            </>
          ) : (
            <>
              <li className="navList">
                <ScrollLink
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-75}
                  duration={500}
                >
                  Home
                </ScrollLink>
              </li>
              <li className="navList">
                <ScrollLink
                  to="destination"
                  spy={true}
                  smooth={true}
                  offset={-75}
                  duration={500}
                >
                  Destinations
                </ScrollLink>
              </li>
              <li className="navList">
                <ScrollLink
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-75}
                  duration={500}
                >
                  About
                </ScrollLink>
              </li>
              <li className="navList">
                <RouterLink to="/contact" className="text-white">
                  Contact
                </RouterLink>
              </li>
            </>
          )}
        </ul>

        {/* Icons to remove Navbar */}

        <CloseIcon className="icon closeIcon" onClick={removeNavBar} />
      </div>
      <button className="signUpBtn btn">
        <RouterLink to="/test" className="text-white">
          SignUP
        </RouterLink>
      </button>
      <MenuIcon
        className="icon menuIcon"
        onClick={showNavBar}
        style={{ color: "white" }}
      />
    </div>
  );
};

export default Navbar;
