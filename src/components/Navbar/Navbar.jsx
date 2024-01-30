import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import {images} from "../../constants";

import "./Navbar.css";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar_logo">
        <img src={images.gericht} alt="logo" />
      </div>
      <ul className="navbar_links">
        <li className="p__opensans">
          <a href="#home" >
          Home
          </a>
        </li>
        <li className="p__opensans">
          <a href="#About" >
          About
          </a>
        </li>
        <li className="p__opensans">
          <a href="#Menu" >
          Menu
          </a>
        </li>
        <li className="p__opensans">
          <a href="#Awards" >
          Awards
          </a>
        </li>
        <li className="p__opensans">
          <a href="#Contact" >
          Contact
          </a>
        </li>
      </ul>
      <div className="navbar_login">
        <a href="#login" className="p__opensans">
          Log In / Register
        </a>
        <div />
        <a href="/" className="p__opensans">
          Book a Table
        </a>
      </div>
      <div className="smallscreen_navbar">
        <GiHamburgerMenu
          className="layout_open"
          color="#fff"
          fontSize={27}
          onClick={() => setToggle(true)}
        />

        
        {toggle && (
          <div className="smallscreen_navbar_overlay flex__center slide-bottom">
          <MdOutlineRestaurantMenu
            className="overlay_close"
            color="#fff"
            fontSize={27}
            onClick={() => setToggle(false)}
          />
          <ul className="smallscreen_navbar_links">
          <li className="p__opensans">
          <a href="#home" >
          Home
          </a>
        </li>
        <li className="p__opensans">
          <a href="#About" >
          About
          </a>
        </li>
        <li className="p__opensans">
          <a href="#Menu" >
          Menu
          </a>
        </li>
        <li className="p__opensans">
          <a href="#Awards" >
          Awards
          </a>
        </li>
        <li className="p__opensans">
          <a href="#Contact" >
          Contact
          </a>
        </li>
          </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
