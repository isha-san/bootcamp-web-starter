import React from 'react';
import { Grid, InputLabel, KeyboardDatePicker, Select, FormControl, Button, TextField } from '@material-ui/core'
import { FancyContainer } from './styles'
import Nav from '../../components/NavBar'
import { FancyNavLink } from '../../components/styles'

function Popup() {
  const classes = ['CS50', 'EC10a', 'EXPOS20'];
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const classSelector = classes.map(c => {
    return(
        <option value={c}>{c}</option>
    );
  });
  return (
    <div className='popup'>
      <div className='popup_inner'>
        <Nav />
        <FancyContainer>
          <h1>New Meeting</h1>
        </FancyContainer>
        <Grid container justify='flex-start' direction='row' alignItems='center' spacing = {2}>
          <Grid item >
            <Grid container justify='flex-start' direction='row' alignItems='center' >
              <InputLabel>Class </InputLabel>
              <FormControl>
                <Select name="classes" id="classes" name='Class' required>
                  {classSelector}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid item >
            <Grid container justify='flex-start' direction='row' alignItems='center' >
              <InputLabel>Meeting date </InputLabel>
              <FormControl>
                <TextField 
                    required
                    type="date" 
                    value={selectedDate}
                    onChange={handleDateChange}
                ></TextField>       
              </FormControl>  
            </Grid> 
          </Grid>
          <Grid item >
            <Grid container justify='flex-start' direction='row' alignItems='center' >
              <InputLabel>Meeting time </InputLabel>
              <FormControl>
                <TextField type="time"
                    required
                    value={selectedDate}
                    onChange={handleDateChange} />
              </FormControl>
            </Grid>
          </Grid>
          <Grid item >
          <FancyNavLink className="a" exact to="/">
            <Button value="submit">Create Meeting!</Button>
          </FancyNavLink>
            </Grid>
        </Grid>
      </div>
    </div>
  );
  
}

export default Popup;