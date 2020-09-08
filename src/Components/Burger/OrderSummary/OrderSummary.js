import React from 'react';
import Aux from '../../../hoc/Aux'
import Button from '../../UI/Button/Button';


const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients) 
    //take the ingredients we get here and again use object keys to transform this into an array of the keys of salad and so on.  
    .map(ingKey => { //map this into an array of jsx elements at the end.
        return  (
            <li key = {ingKey}>
                <span style = {{textTransform: 'capitalize'}}>{ingKey}</span>: {props.ingredients[ingKey]}
            </li>)
    });
//we got the ingredients keys here as an input and we want to return
//well basically this list item I just defined here, so grab the list item and add it here.
//Now how do we get the salad there or the ingredient name?
//Now that's just our ingredient key and the value is just props.ingredients and then access the ingredient key and that's all.
//double curly braces, the outer pair is for marking a dynamic entry and the inner curly braces are the javascript object,
   return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType="Danger" clicked={props.purchaseCancelled} >CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
        </Aux>
    )
};

export default orderSummary;