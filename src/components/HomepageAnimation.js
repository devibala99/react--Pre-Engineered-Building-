import React from 'react'
import myImage from '../images/num1.jpg';
import "../stylesheets/homeAnimation.css"
const HomepageAnimation = () => {
    const cursor = document.querySelector(".cb-cursor");
    window.onpointermove = event => {
        const { clientX, clientY } = event;
        if (cursor != null) {
            cursor.animate({
                left: `${clientX}px`,
                top: `${clientY}px`
            }, { duration: 1000, fill: "forwards" })
        }
    }
    const elements = [...document.querySelectorAll("h2 div")]

    elements.map((element, index) => {

        element.onmouseover = () => {
            cursor.classList.add("-video")
        }
        element.onmouseout = () => {
            cursor.classList.remove("-video")
        }

    })
    return (
        <div className='homeText__animation'>
            <section className="homeHero">
                <div className="homeHero--inner">
                    <h2 className="homeHero__title">
                        <div style={{ position: "relative", display: "inline-block" }}>Pre</div>
                        <br />
                        <div style={{ position: "relative", display: "inline-block" }}>Engineered</div>
                        <div style={{ position: "relative", display: "inline-block" }}>Buildings</div>

                    </h2>
                </div>
            </section>
            <div className="cb-cursor">
                <div className="cb-cursor-text"></div>
                <div className="cb-cursor-video">
                    <div>
                        <img src={myImage} alt="" className='cursor-clips' id="reel-clips" />
                    </div>
                </div>
            </div>

        </div>
    )

}

export default HomepageAnimation
