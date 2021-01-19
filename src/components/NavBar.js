import React from 'react';
import { Fragment, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Toolbar } from "@material-ui/core";

function NavBar() {
    
    //The links that should be displayed if the user is authenticated
    const authlinks = 
    <Fragment>
        <Toolbar className="align-items-right">
            <NavLink className="a" exact to="/dashboard">Meeting Dashboard</NavLink>
            <button id="logout-btn" >Log Out</button>
        </Toolbar>
    </Fragment>

    //The links that should be displayed if the user is unauthenticated
    const unauthlinks = 
    <Fragment>
        <Toolbar className="align-items-right">
            <NavLink className="a" exact to="/signup">Sign Up</NavLink>
            <NavLink className="a" exact to="/login">Log In</NavLink>
        </Toolbar>
    </Fragment>
    return (
        <nav style={{backgroundColor : "#263238"}}>
            <Fragment>
            { (1 === 1) ? authlinks : unauthlinks }
            </Fragment>
        </nav>
    );
}

export default NavBar; 