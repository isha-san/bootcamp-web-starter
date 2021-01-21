import React from 'react'
import { AppBar, Grid, Toolbar, InputBase } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import { FancyContainer } from '../containers/Dashboard/styles'

const SearchBar = () => {
    return (
        <AppBar position="static">
        <Toolbar>
            <FancyContainer>
            <Grid container direction="row" justify="flex-start" alignItems="center">
            <Grid item>
                <SearchIcon />
            </Grid>
            <Grid item>
                <InputBase placeholder='Search by class...' />
            </Grid>
            </Grid>
            </FancyContainer>
        </Toolbar>
        </AppBar>
    )
}

export default SearchBar