import React from "react";
import "./footer.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import ConnectingAirportsIcon from "@mui/icons-material/ConnectingAirports";

const Footer = () => {
  return (
    <div className="footer">
      {/* <div className="imgBg">
            <img src={World} alt="" />
        </div> */}
      <div className="secContaine container grid">
        <div className="logoDiv">
          <ConnectingAirportsIcon className="icon" />
          <span>Dreams-Travel</span>
          <div className="social flex "></div>
          <FacebookIcon className="icon" />
          <TwitterIcon className="icon" />
          <InstagramIcon className="icon" />
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
          <span className="linkTitle">Helpgul Links</span>
          <li>
            <a href="#">Destinationn</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
          <li>
            <a href="#">Travel & Condition</a>
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
