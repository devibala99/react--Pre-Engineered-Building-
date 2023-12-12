import React from "react"
import Footer from "./Footer"
import "../stylesheets/project.css"
import ImageGrid from "./ImageGrid"

const Project = () => {



    return (

        <div className='project-container'>
            <br /><br /><br /><br /><br />

            <div className="gallery-container">
                <ImageGrid />
            </div>
            <Footer />
        </div>
    )
}

export default Project
