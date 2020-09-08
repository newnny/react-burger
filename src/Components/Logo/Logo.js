import React from 'react';
import classes from './Logo.css';

import burgerLogo from '../../assets/images/burger-logo.png';
//IMOPORTANT
//the source folder is only the folder we're working in. 
//In the end, webpack will take all these files, bundle them together and create a new output folder.
//We can see that here because we're in development mode where all of that will happen in memory
//but once we do publish our app, we will get a real different folder where all the optimized, compiled and bundled assets are contained in. 
//Now therefore these assets folder here to the source folder will not be shipped to any real server,
//the whole source folder won't be shipped there.
//Hence we should also make webpack aware of that
// we're using this image and we're actually doing that by importing the image into our javascript file.
//simply import burger logo from the path to the image,
//so in assets images, add the file. And burger logo here will in the end just receive the path off the image where webpack will copy it to.

const logo = (props) => (
    <div className = {classes.Logo} style = {{height: props.height}}>
        <img src = {burgerLogo} alt = "MyBurger"/>
    </div>
)

export default logo;