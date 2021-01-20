import React, { Fragment, useState, useEffect } from 'react';
import { Button, Toolbar } from '@material-ui/core'
import { FancyNavLink } from './styles';
import TextStyle from '../styles.js'
import theme from '../theme'
import { Grid } from '@material-ui/core'

function NavBar() {
  // The links that should be displayed if the user is authenticated

  const authlinks = (
    <>
      <Toolbar className="align-items-right">
        <Grid container direction="row" justify="flex-start" alignItems="center" spacing={2}>
          <Grid item>
            <FancyNavLink className="a" exact to="/">Meeting Dashboard</FancyNavLink>
          </Grid>
          <Grid item>
            <FancyNavLink className="a" exact to="/login">Log In (test)</FancyNavLink>
          </Grid>
          <Grid item>
            <Button id="logout-btn">Log Out</Button>
          </Grid>
        </Grid>
      </Toolbar>
    </>
  )

  // The links that should be displayed if the user is unauthenticated
  const unauthlinks = (
    <>
      <Toolbar className="align-items-right">
        <FancyNavLink className="a" exact to="/signup">
          <TextStyle>
                        Sign Up
          </TextStyle>
        </FancyNavLink>
        <FancyNavLink className="a" exact to="/login">
          <TextStyle>
                        Login
          </TextStyle>
        </FancyNavLink>
      </Toolbar>
    </>
  )
  return (
    <nav style={{ backgroundColor: theme.colors.primary.primary }}>
      <>
        { (1 === 1) ? authlinks : unauthlinks }
      </>
    </nav>
  )
}

export default NavBar
