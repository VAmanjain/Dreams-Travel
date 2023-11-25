import React from "react";
import "./footer.css";

import {
  NavLink as RouterLink,
  useLocation,
  useNavigate,
} from "react-router-dom";

import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import ConnectingAirportsIcon from "@mui/icons-material/ConnectingAirports";

const Footer = () => {
  return (
    <div className="footer">
      <div className="secContaine container grid">
        <div className="logoDiv">
          <ConnectingAirportsIcon className="icon" />
          <span>Dreams-Travel</span>
          <div className="social flex ">
            <a href="/">
              <FacebookIcon className="icon" />
            </a>
            <a href="">
              <TwitterIcon className="icon" />
            </a>
            <a href="">
              <InstagramIcon className="icon" />
            </a>
          </div>
        </div>

        <div className="footerLinks" data-aos="fade-up">
          <span className="linkTitle">Information</span>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Explore</a>
          </li>
          <li>
            <a href="#">Travel</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </div>

        <div className="footerLinks" data-aos="fade-up">
          <span className="linkTitle">Helpful Links</span>
          <li>
            <a href="#">Destination</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
          <li>
            
            <RouterLink
              to="/term"
              className="text-white"
            
            >
              Terms & Condition
            </RouterLink>
          </li>
          <li>
            <a href="#">Privacy</a>
          </li>
        </div>

        <div className="footerLinks" data-aos="fade-up">
          <span className="linkTitle">Contact Details</span>
          <span className="email">vaman.jain17@gmail.com</span>
          <span className="phone">123-123-1234</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
