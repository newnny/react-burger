import React from 'react';
import classes from './Button.css'



const button = (props) => (
    <button
        className = {[classes.Button, classes[props.btnType]].join(' ')}
        //what we passed to class has to be a string, right now it's an array of strings though.
        //So let's change this by joining this with a whitespace to have a list of classes which is a string in the end.
        onClick={props.clicked}>{props.children}</button>
);

export default button;