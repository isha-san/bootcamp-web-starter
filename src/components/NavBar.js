import React from 'react';
import { Fragment, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Toolbar } from "@material-ui/core";
import TextStyle from '../styles.js';

function NavBar() {
    
    //The links that should be displayed if the user is authenticated
    const authlinks = 
    <Fragment>
        <Toolbar className="align-items-right">
                <NavLink className="a" exact to="/">Meeting Dashboard</NavLink>
                <NavLink className="a" exact to="/login">Log In (test)</NavLink>
            <button id="logout-btn" >Log Out</button>
        </Toolbar>
    </Fragment>

    //The links that should be displayed if the user is unauthenticated
    const unauthlinks = 
    <Fragment>
        <Toolbar className="align-items-right">
                <NavLink className="a" exact to="/signup">
                    <TextStyle>
                        Sign Up
                    </TextStyle>
                </NavLink>
                <NavLink className="a" exact to="/login">
                    <TextStyle>
                        Login
                    </TextStyle>
                </NavLink>
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