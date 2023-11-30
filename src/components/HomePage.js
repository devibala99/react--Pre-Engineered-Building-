import React from 'react'
import '../stylesheets/homepage.css';
import HomeLayout from './HomeLayout';
import { Outlet } from 'react-router-dom';
const HomePage = () => {

    return (

        <div>
            <HomeLayout />
            <Outlet />
        </div>


    )
}

export default HomePage

//  <div id='img-section'></div>