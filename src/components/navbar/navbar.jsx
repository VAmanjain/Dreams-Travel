import React, { useState } from "react";
import './navbar.css';
import ConnectingAirportsIcon from "@mui/icons-material/ConnectingAirports";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";




const Navbar = () => {
  // state to track and update navbar
  const [navBar,setNavBar]=useState("menu");
  
  //Function to show navBar
  
  const showNavBar = () =>{
    setNavBar(" menu showNavbar");
  }
  //Function to remove navbar
  const removeNavBar = () =>{
    setNavBar(" menu ");
  }
  return (
  //   <div className="navBar ">
  //     <div className="logoDiv">
  //       <ConnectingAirportsIcon className="icon" />
  //       <span>Dreams-Travel</span>
  //     </div>

  //     <div className={navBar}>
  //       <ul className=" ">
  //         <li>
  //           <a href="/">Home</a>
  //         </li>
  //         <li>
  //           <a href="/">About</a>
  //         </li>
  //         <li>
  //           <a href="/">Destinations</a>
  //         </li>
  //         <li>
  //           <a href="/">Contact</a>
  //         </li>
  //       </ul>
  //     </div>
  //     <CloseIcon className="icon closeIcon" onClick={removeNavBar} />

  //     <div className="signUp" >
  //       <button className="btn" >
  //         <a href="#">SignUp</a>
  //       </button>
  //     </div>
  //     <MenuIcon className="icon menuIcon" onClick={showNavBar} />

  //   </div>
  // );
  <div className="navBar ">
      <div className="logoDiv">
        <ConnectingAirportsIcon className="icon"/>
        <span>Drems-Travel</span>
      </div>

      <div className={navBar}>
        <ul>
          <li className="navList">
          Home
            
            </li>
          <li className="navList">Destinations</li>
          <li className="navList">About</li>
          <li className="navList">Contact</li>
        </ul>

        {/* Icons to remove Navbar */}

        <CloseIcon className='icon closeIcon' onClick={removeNavBar} />
      </div>
      <button className="signUpBtn btn">Sign Up </button>
      <MenuIcon className='icon menuIcon' onClick={showNavBar}/>

    </div>);
};

export default Navbar;
