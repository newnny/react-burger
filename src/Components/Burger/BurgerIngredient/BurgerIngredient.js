import React, { Component } from 'react';
import classes from './BurgerIngredient.css'
import PropTypes from 'prop-types'; 
//PropTypes:checking the types passed in the props object against a specification we set beforehand 
//and to raise a warning if the types passed don't match the types expected.

class BurgerIngredient extends Component {
    render () {
        let ingredient = null; // initially, we're not going to render
            //using switch to analyze type of ingredient (type = the property that I want to receive)
            switch (this.props.type) {
                case ('bread-bottom'):
                    ingredient = <div className = {classes.BreadBottom}> </div>;
                    break;

                case ('bread-top'):
                    ingredient = (
                        <div className = {classes.BreadTop}>                            
                            <div className = {classes.Seeds1}></div>
                            <div className = {classes.Seeds2}></div>
                        </div>
                    );
                    break;

                case ('salad'):
                ingredient = <div className = {classes.Salad}></div>;
                    break;

                case ('cheese'):
                    ingredient = <div className = {classes.Cheese}></div>;
                    break;

                case ('meat'):
                    ingredient = <div className = {classes.Meat}></div>;                   
                    break;

                case ('bacon'):
                    ingredient = <div className = {classes.Bacon}></div>;
                    break;

                default:
                    ingredient = null;
            }

            return ingredient;
    };
};

//prop type validation by taking our class name, adding the prop types property with a lowercase p
// and setting it equal to a Javascript object and there configure the type property using the prop types we imported 
//from that prop types package, then make sure the type should be a 'string' and we can chain another condition 'is required'.
//So if we ever try to use the ingredient component without passing a type, we will get an error.

BurgerIngredient.proptypes = {
    type: PropTypes.string.isRequired
}

export default BurgerIngredient;