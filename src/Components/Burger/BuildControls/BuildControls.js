import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';


// make a new const and have an array for which can loop to conveniently build all these build controls and render them. 
//So here I want to have a couple of javascript objects, 
//each should have a label like salad and then a type, also salad but with a lowercase
const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
    {label: 'Bacon', type: 'bacon'},

]

//So access controls, call map there and now map each control, so each element of this array into a build control, 
//a self-closing tag, where you set a key that's required. The key can't just be the label because that is a unique identifier,
//we never have a label more than once, and then also pass label to this build control component.
const buildControls = (props) => (
    <div className = {classes.BuildControls}>
        <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl => (
            <BuildControl 
                key= {ctrl.label} 
                label= {ctrl.label}
                //type = {ctrl.type} : to create ctrls to track of which type property this control aaray has
                //but instead of this, we can implement a click listener in the build control to just return everything back up.
                added = {()=> props.ingredientAdded(ctrl.type)} 
                removed = {()=> props.ingredientRemoved(ctrl.type)}
                disabled = {props.disabled[ctrl.type]}/>
                //execute props.ingredientAdded(),
                //so the function reference we're receiving in build controls and there, simply pass back control type.
        ))}
        <button 
        className = {classes.OrderButton} 
        disabled = {!props.purchasable}
        onClick = {props.ordered}>ORDER NOW</button>

    </div>
);

export default buildControls;
