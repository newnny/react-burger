//we're using class-based components due to for state management

import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../Components/Burger/Burger';
import BuildControls from '../../Components/Burger/BuildControls/BuildControls';
import Modal from '../../Components/UI/Modal/Modal'
import OrderSummary from '../../Components/Burger/OrderSummary/OrderSummary'

const INGREDIENT_PRICES = {  //typically name constants you want to use as global constants in all capital characters.
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

class BurgerBuilder extends Component {
    //constructor(props) {
        //sper(props);
        //this.state = {...}
    //}

    //we have to convert ingredient object in Burger.js to state arry here, check Burger.js
    //we have to convert ingredient object into an array of the values of the ingredients.
    //keys = ingredients, value = amount
    state = {
        ingredients: {
            salad: 0,
            cheese: 0,
            meat: 0,
            bacon: 0
        },
        totalPrice: 4,
        purchasable: false, //purchasable will be set to false initially.
        //it will turn true once we can buy this burger(purchasable) when it's at least one ingredient is or more
        purchasing: false
        // to disply the ordersummary when we only buy sth, when we click the order btn.
    }
    
//call this updatePurchaseState method at the end of addIngredient and removeIngredientHandler 
//to then simply check whether we need to or whether we should turn purchasable to true or to false.
    updatePurchaseState (ingredients) {
        const sum = Object.keys(ingredients) //take javascript object object and there use keys again 
        //and pass ingredients to it and this will create an array of string entries,
            .map(ingKey => { // map this above array into the array we need, 
                //The map method still receives the key and then this is used in or 
                //the function we passed to the map method receives the key(amonut of ingredients)
                return ingredients[ingKey];//return new value and replace the old value which was the property name(salad) with that new value.
            })
            .reduce((sum, el) => {
            //2) a function which is executed on each element in this mapped array. 
            //In this function, get new sum and the individual element 
            //sum simply is the constantly updated current sum up until the current iteration where this function is executed
            //once this function was executed on all array elements, sum is the final result.
                return sum + el; //3) return the current sum + the element (element is a number because it is the value we accessed here)
            }, 0); //1) start number of 0
        this.setState({purchasable: sum > 0});
    }

    addIngredientHandler = (type)=> {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount +1;
        const updatedIngredients = {    //distribute the properties of the old ingredients state into the new object I'm creating here.
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount; //taking my updatedIngredients object, 
        //access the type for which I have to update the ingredients
        //and set the count, the value which is just the amount of ingredients equal to updated, updatedCount

        const PriceAddition = INGREDIENT_PRICES[type]; //So for that type, I can fetch the price
        //and since I always add one unit at a time, I don't need to multiply these with anything.
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + PriceAddition;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        //the old count of a given ingredient should be greater than zero to deduct ingredients
        if (oldCount <= 0) { //if old count is smaller or equal than 0, then I essentially want to return
            return ;
        }
        const updatedCount = oldCount -1
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;

        const PriceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - PriceDeduction;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
        this.updatePurchaseState(updatedIngredients);
    }

    purchaseHandler = () => {
        this.setState({purchasing: true}); //only if purchasing is true the modal should be visible.
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    }

    purchaseContinueHandler = () => {
        alert('You Continue!');
    }

    render() {
        //pass some information about which button should be enabled and which button should be disabled to my build controls.
        const disabledInfo = {
            ...this.state.ingredients // create a new object where I will distribute the properties of this.state.
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0 // loop through all the keys in disableInfo 
            //and it will simply check if this is zero or less and it will update the disableInfo key,
            //disableInfo key is the value of each key, so zero in all these cases at the start, 
            //and this check here will turn true or false.
            //So we will update this in our copied object with true or false, not in the original one.
        }
        return (
            <Aux>
                <Modal show = {this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {/*only if purchasing is true the modal should be visible.*/}
                    <OrderSummary 
                        ingredients = {this.state.ingredients}
                        price = {this.state.totalPrice}
                        purchaseCancelled = {this.purchaseCancelHandler}
                        purchaseContinued = {this.purchaseContinueHandler}/>
                </Modal>
                <Burger ingredients = {this.state.ingredients}/> {/*passing the state array to Burger*/}
                {/*To hook this addIngredientHandler in build controls.
                1) pass a property to the build controls 
                2) there I will simply add ingredientAdded property which holds a reference to this addIngredientHandler. 
                3) Now inside build controls, need to distribute this correctly.*/}
                <BuildControls //including below properties
                    ingredientAdded = {this.addIngredientHandler}
                    ingredientRemoved = {this.removeIngredientHandler} 
                    disabled = {disabledInfo}
                    purchasable = {this.state.purchasable}
                    ordered = {this.purchaseHandler}
                    price = {this.state.totalPrice}/>
                    {/*Now with that, we can pass the disableInfo, the disableInfo to the build controls component here.*/}
            </Aux>
        );
    }
}

export default BurgerBuilder;
