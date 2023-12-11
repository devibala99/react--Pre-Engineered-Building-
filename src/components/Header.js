import React from 'react'
import logo from "../images/nobackground.png";
// import { FaPhone, FaXTwitter, FaEnvelope } from "react-icons/fa6";
// import { FaStar, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link, Outlet } from 'react-router-dom';
import "../stylesheets/header.css"
const Header = () => {

    return (
        <div className='header'>
            <div className='brand' to="/home">
                <img src={logo} alt="light-logo" />
            </div>
            <div id="link-menu">
                <Link to="/" className="menu-list" id="menu-list" style={{ textDecoration: "none" }}>Home</Link>
                <Link to="/about" className="menu-list" id="menu-list" style={{ textDecoration: "none" }}>About US</Link>
                <Link to="/service" className="menu-list" id="menu-list" style={{ textDecoration: "none" }}>Services</Link>
                <Link to="/project" className="menu-list" id="menu-list" style={{ textDecoration: "none" }}>Projects</Link>
                <Link to="/" className="menu-list" id="menu-list" style={{ textDecoration: "none" }}>Career</Link>
                <Link to="/contact" className="menu-list" id="menu-list" style={{ textDecoration: "none" }}>Contact us</Link>
            </div>
            <button className='quote-btn'>
                <Link to="/quote" style={{ color: "white", textDecoration: "none" }}>Get Quote</Link>
            </button>
            <Outlet />
        </div>
    )
}

export default Header


