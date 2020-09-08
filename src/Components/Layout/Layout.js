import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

//these layout allows us to use it as a wrapper around the core componenets 
//that we want to render on our scrren

//Using Aux: due to <div>: json, JSX elements
//in div: we're going to display these 3 components
        //in main area, want tooutput of components which are wrapped these above 3 components 
const layout = (props) => (     
    <Aux>
        <Toolbar />
        <main className = {classes.Content}> 
            {props.children}
        </main>        
    </Aux> 
);

export default layout;