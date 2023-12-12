import React, { useState } from 'react'
import Footer from './Footer'
import "../stylesheets/contactPage.css"


const Contact = () => {
    const [clientName, setClientName] = useState("");
    const [clientEmail, setClientEmail] = useState("");
    const [clientMobile, setClientMobile] = useState("");
    const [clientCompany, setClientCompany] = useState("");
    const [clientCity, setClientCity] = useState("");
    const [clientMessage, setClientMessgee] = useState("");

    const [queryDetails, setQueryDetails] = useState([]);
    const handleSubmit = () => {
        setQueryDetails([...queryDetails, {
            name: clientName,
            email: clientEmail,
            mobile: clientMobile,
            company: clientCompany,
            city: clientCity,
            msg: clientMessage
        }]);

        setClientName("");
        setClientEmail("");
        setClientMobile("");
        setClientCompany("");
        setClientCity("");
        setClientMessgee("");
    }
    return (
        <div className='contact-container'>

            <div className='quote-container'>
                <div className="contact-box" >
                    <div className="quote-image" id="contact-img" >

                    </div>
                    <div className="quote-form">
                        <h3>Feel Free to Get In Touch With Us For Pre Engineered Building Services.</h3>
                        <form action="" className='form'>
                            <div className="form-list">
                                <label >Name</label>
                                <input type="text" value={clientName}
                                    accept=".json,application/json"
                                    onChange={(e) => setClientName(e.target.value)} required />
                            </div>
                            <div className="form-list">
                                <label >Email</label>
                                <input type="text" value={clientEmail}
                                    onChange={(e) => setClientEmail(e.target.value)} required />
                            </div>
                            <div className="form-list">
                                <label >Mobile</label>
                                <input type="text" value={clientMobile}
                                    onChange={(e) => setClientMobile(e.target.value)} required />
                            </div>
                            <div className="form-list">
                                <label >Company</label>
                                <input type="text" value={clientCompany}
                                    onChange={(e) => setClientCompany(e.target.value)} />
                            </div>
                            <div className="form-list">
                                <label >City</label>
                                <input type="text" value={clientCity}
                                    onChange={(e) => setClientCity(e.target.value)} required />
                            </div>
                            <div className="form-list">
                                <label >Message</label>
                                <textarea value={clientMessage}
                                    onChange={(e) => setClientMessgee(e.target.value)} />
                            </div>
                            <div className="form-list btn-cls">
                                <button id="sub-btn" onClick={handleSubmit}>Submit</button>
                            </div>
                        </form>
                    </div>

                </div>

            </div>
            <div className="company-location">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30848636.272120424!2d71.77394395548751!3d19.29529207914288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8584d03d410a3%3A0x79e8132c3d3cdf88!2sKitkat%20Software%20Technologies!5e0!3m2!1sen!2sin!4v1702288450105!5m2!1sen!2sin"

                    allowFullScreen=""
                    title="sk_map"
                    style={{ border: "0" }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                >
                </iframe>
            </div>
            <Footer />

        </div>
    )
}

export default Contact
