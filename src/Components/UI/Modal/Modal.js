import React from 'react';
import classes from './Modal.css'
import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop'

//where should add modal??
//add it in a place where we want to show it because that is the logical place
//where it belongs and where we probably have the state and the methods to control that display.

const modal = (props) => (
    <Aux>
        <Backdrop show={props.show} clicked = {props.modalClosed}/>
        <div 
            className = {classes.Modal} 
            style = {{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)', 
                /* vh is a special unit which refers to the viewport height, so it will simply slide it outside of the screen.*/
                opacity: props.show ? '1' : '0'}}>
            {props.children}
        </div>
    </Aux>
);

export default modal;