import React from 'react'

const PageNotFound = () => {
    return (
        <div style={{
            position: "absolute", top: "50%", left: "50%", height: "80vh",
            backgroundColor: "red", color: "white",
            transform: "translate(-50%, -50%)", paddingTop: "10rem"
        }}>
            Page not found
        </div>
    )
}

export default PageNotFound