import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';


//using { } = can add some logic before returning jsx

const burger = (props) => {
    //transform an object of key value pairs into an array of burger ingredients
    //the value of that object decide how many ingredients I need and the keys for which type of ingredient I need.
    
    //in the burger component(here), ingredients is a props 
    //but in the state of the burger builder, it's an object (inside { cheese: 1} ), it's not an array
    //so we can't use map on that or loop through that. we have to transform this object into an array

    //Object has a keys method which extracts the keys of a given object and turns that into an array,
    //so it gives you an array of the keys. So there pass props.ingredients  ==> it doesn't have value!! only key
    
    //if you want to add paragraph in trasnfored ingredient, you have to change const to let(variable)
    let transformedIngredients = Object.keys(props.ingredients)
        .map(ingKey => {  
        //map execute a function on each keys(=elements in array =properties like salad) return as an array
        //ingKey(=argument) that we receive in the function for ingredient key because that's part of the array, like salad
        //transform the string(object of state) value into an array(ingKey)
            return [...Array(props.ingredients[ingKey])].map((_, i) => {
            //spread new array that I'll construct
            //Array() : gives you a certain length of array, in here, the length = the amount of the given ingredient.
            //will access the given key(ingkey) I have here 
            //because we're in that function of map method which runs on an array which contains all our keys.
            //there I also return an array where I now want to map the elements.
            //use the underscore as an argument name for element to indicate that it's a blank and use i( for the index)
                return <BurgerIngredient key = {ingKey + i} type = {ingKey} />;
                //creates a unique key for each ingredient 
                //assign a key because it's an array. we return, an array of jsx elements to ingKey + i. 
                //Now ingKey is like salad and i is 1, 2, 3 and so on.
            });
        })
        //using reduce() for flatten array to make sure we pull out the values of these inner arrays 
        //and trade one array only which contains all these values,
        //reduecd  transform an array into something else.
        .reduce((arr, el) => { // 2 arguments: previous value , current value
            return arr.concat(el) //return updated value(take element and add to array)
        }, []); //[] is initial value as an empty array
        //console.log(transformedIngredients);

        if (transformedIngredients.length === 0) {
            transformedIngredients = <p> Please Start Adding ingredients ! </p>
        }
    return(
        <div className= {classes.Burger}>
            <BurgerIngredient type = "bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type = "bread-bottom" />
        </div>
    );
};

export default burger;