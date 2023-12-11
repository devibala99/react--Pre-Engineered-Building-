import React, { useState } from 'react'
import Footer from './Footer'
import "../stylesheets/quote.css"
import "../stylesheets/aboutPage.css"
const Quote = () => {

    const [clientName, setClientName] = useState("");
    const [clientEmail, setClientEmail] = useState("");
    const [clientMobile, setClientMobile] = useState("");
    const [clientCompany, setClientCompany] = useState("");
    const [clientCity, setClientCity] = useState("");
    const [clientMessage, setClientMessgee] = useState("");

    const [queryDetails, setQueryDetails] = useState([]);
    const handleSubmit = () => {
        const queryClientDetails = {
            name: clientName,
            email: clientEmail,
            mobile: clientMobile,
            company: clientCompany,
            city: clientCity,
            msg: clientMessage
        };
        setQueryDetails([...queryDetails, {
            name: clientName,
            email: clientEmail,
            mobile: clientMobile,
            company: clientCompany,
            city: clientCity,
            msg: clientMessage
        }]);

        console.log(queryClientDetails);

        setClientName("");
        setClientEmail("");
        setClientMobile("");
        setClientCompany("");
        setClientCity("");
        setClientMessgee("");
    }


    console.log(queryDetails);
    return (
        <div className='quote-container'>

            <div className="quote-box">
                <div className="quote-image">
                    <h1 id="quote-heading">GET QUOTE</h1>
                </div>
                <div className="quote-form">
                    <h3>We Provide Assistance and Solutions for Our Pre Engineered Buildings.</h3>
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
            <Footer />
        </div>
    )
}

export default Quote
