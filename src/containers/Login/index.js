import React from 'react'
import {
  Container,
  Grid,
  TextField,
  FormControl,
  FormLabel,
  FormGroup,
  FormHelperText,
  FormControlLabel,
  Checkbox,
  Button,
} from '@material-ui/core'
import { AccountCircle } from '@material-ui/icons';
import Nav from '../../components/NavBar.js';

const Profile = () => (
    
  <Container maxWidth="sm">
      <Nav></Nav>
    <Grid container direction="column" justify="center" alignItems="center" spacing={2}>
      <Grid item>
        <AccountCircle />
      </Grid>
      <Grid item>
        <TextField label="First Name" />
      </Grid>
      <Grid item>
        <TextField label="Last Name" />
      </Grid>
      <Grid item>
        <TextField label="Password" />
      </Grid>
      <Grid item>
        <TextField label="Confirm Password" />
      </Grid>
      <Grid item>
        <FormControl component="fieldset">
          <FormLabel component="legend">Choose your classes:</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox name="CS50" />}
              label="CS50"
            />
            <FormControlLabel
              control={<Checkbox name="Ec10a" />}
              label="Ec10a"
            />
            <FormControlLabel
              control={<Checkbox name="Math21a" />}
              label="Math21a"
            />
          </FormGroup>
          <FormHelperText>Don&apos;t see your class? Create it here</FormHelperText>
        </FormControl>
      </Grid>
      <Grid item>
        <Button variant="contained">Submit</Button>
      </Grid>
    </Grid>
  </Container>
)

export default Profile