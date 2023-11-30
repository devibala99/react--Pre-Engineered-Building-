import React from 'react'
import '../stylesheets/knowus.css'
import img from '../images/construction-silhouette.jpg'
import { AnimatedOnScroll } from "react-animated-css-onscroll";


const KnowUs = () => {
    return (
        <AnimatedOnScroll animationIn="fadeIn" >
            <div className='aboutSection'>
                <div className="container">
                    <div className="content-column">
                        <h2>About Us</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque quas sed quisquam voluptates facilis ex cum at accusamus exercitationem eveniet tenetur debitis, commodi fugit in enim perspiciatis corrupti omnis asperiores, veniam ipsum modi. Nam, iusto laborum possimus illo vitae at.
                            <br />
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur laborum quasi, ea facere tempore autem ullam aliquam nulla eligendi. Molestiae odit sequi nesciunt ipsum velit sit quibusdam laudantium debitis accusantium!</p>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat molestiae, rerum aspernatur sequi maxime quos? Fugiat vero error quasi possimus voluptate assumenda quis! Reprehenderit, deserunt.</p>
                        </p>
                    </div>
                    <div className="image-column">
                        <div className="border-image">
                            <img src={img} alt="aboutus" />
                        </div>
                    </div>
                </div>
            </div>


        </AnimatedOnScroll>
    )
}

export default KnowUs
