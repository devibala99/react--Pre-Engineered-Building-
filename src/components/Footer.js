import React from 'react'
import "../stylesheets/footer.css"
import { FaArrowRightLong } from "react-icons/fa6";
import logo from "../images/nobackground.png";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter, } from "react-icons/fa6";
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div class="footer-sticky-bottom">
            <div className='footer'>
                <div className='center-section'>
                    <button className='quote-btn-center' id='quote-btn-center'>Get Quote
                        <FaArrowRightLong className='arrowRight' /></button>
                </div>
                <br /><br /><br />
                <div className="sections">

                    <div className="main-section">
                        <div className='first-section'>
                            <div>
                                <img src={logo} alt="sklogo" />
                            </div>
                            <div className='first-section-text'>
                                <h4>Build with Trust <br /> & <br /> Never Compromising Quality</h4>
                            </div>
                        </div>
                        <div className='second-section'>
                            <h2>Company</h2>
                            <ul>
                                <li><Link id="link-id" to="/" style={{ textDecoration: "none", color: "white", }}>Home</Link></li>
                                <li><Link to="/about" style={{ textDecoration: "none", color: "white" }}>About Us</Link></li>
                                <li><Link to="/service" style={{ textDecoration: "none", color: "white" }}>Services</Link></li>
                                <li><Link to="/project" style={{ textDecoration: "none", color: "white" }}>Projects</Link></li>
                                <li><Link to="/contact" style={{ textDecoration: "none", color: "white" }}>Contact Us</Link></li>
                                <li><Link to="/review" style={{ textDecoration: "none", color: "white" }}>Reviews</Link></li>
                            </ul>
                        </div>
                        <div className='third-section'>
                            <h2>Engineering Solutions</h2>
                            <ul>
                                <li><Link to="/service" style={{ textDecoration: "none", color: "white" }}>Infrastructure</Link></li>
                                <li><Link to="/service" style={{ textDecoration: "none", color: "white" }}>Industrial</Link></li>
                                <li><Link to="/service" style={{ textDecoration: "none", color: "white" }}>Warehousing</Link></li>
                            </ul>
                        </div>
                        <div className='fourth-section'>
                            <h2>Our Services</h2>

                            <ul>
                                <li><Link to="/service" style={{ textDecoration: "none", color: "white" }}>Ceiling</Link></li>
                                <li><Link to="/service" style={{ textDecoration: "none", color: "white" }}>Clading</Link></li>
                                <li><Link to="/service" style={{ textDecoration: "none", color: "white" }}>Pre-Engineered Buildings</Link></li>
                                <li><Link to="/service" style={{ textDecoration: "none", color: "white" }}>Roofs and Walls</Link></li>

                            </ul>
                        </div>
                        <div className='fifth-section'>
                            <ul>
                                <li><FaFacebook /></li>
                                <li><FaXTwitter /></li>
                                <li><FaInstagram /></li>
                                <li><FaLinkedin /></li>
                                <li><FaYoutube /></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer
