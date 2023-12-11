import React from 'react'
import Footer from './Footer'
import "../stylesheets/aboutPage.css"
import KnowUs from './KnowUs'
import ques from "../images/ques4.jpg"
import plant from "../images/envr.jpg"
import quality from "../images/q3.jpeg"
import legal from "../images/legalstamp.jpeg"
const AboutPage = () => {
    return (
        <div className='about-container'>
            <br /><br /><br /><br />
            <div className="aboutPage">
                <div className="img-half">
                    <h1 id="about-heading">ABOUT US</h1>
                </div>
                <div className="first-half">
                    <KnowUs />
                </div>
                <div className="second-half">
                    <div className="second-half-left">
                        <div className="border-image" id="border-image">
                            <img src={ques} alt="service" />
                        </div>
                    </div>
                    <div className='second-half-right'>
                        <h2>WHY S.K ENGINEERS</h2>
                        <ul>
                            <li><span>Customer Oriented:</span> We provide services based on customer's preferences. We ensure great services to our customer.
                            </li>
                            <li><span>Client-Focused: </span>
                                We give high priority to our clients and reassure everlasting relationship.
                            </li>
                            <li><span>People: </span>We care for our people and treat everyone with respect.</li>
                            <li><span>Commitment: </span>We are result-driven basically focus on outputs. We deliver quality of products and service in time.</li>
                            <li><span>Cost Effective: </span>We provide services in very cost effective manner.</li>
                            <li><span>Innovation: </span>We create designs with integrity and flexibility.</li>
                            <li><span>Service: </span>We provide services in future and we upgrage technologies in time.</li>
                        </ul></div>
                </div>

                <div className="third-half">
                    <div className='text-fast'>
                        <h2>OUR POLICIES</h2>
                        <p>We are very concious about our policies we follow in our company.</p>
                    </div>

                    <div className='cards-fast'>
                        <div className='card' id="card1">
                            <img src={plant} alt="environment" style={{ height: "225px", border: "2px solid #cd1e2d" }} />
                            <div className='card-text' id="card-text1">
                                <h3>Environment</h3>
                                <p>
                                    Our environmental policy is the impactful process. We limit hazardous wastes and material for the cause of avoid polluting the environment in anyways.
                                </p>
                            </div>
                        </div>
                        <div className='card' id="card2">
                            <img src={quality} alt="environment" style={{ height: "225px", border: "2px solid #cd1e2d" }} />
                            <div className='card-text' id="card-text2">
                                <h3>Quality</h3>
                                <p>
                                    Quality is our policy we never risk. We provide products with great quality and service with our team. We value people and time.
                                </p>
                            </div>
                        </div>
                        <div className='card' id="card3">
                            <img src={legal} alt="honest" style={{ height: "225px", border: "2px solid #cd1e2d" }} />
                            <div className='card-text' id="card-text3">
                                <h3>Legal</h3>
                                <p>
                                    We follow standard construction contracts and procedures to avoid legal complications. It builds trust between our customer's and us.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AboutPage

