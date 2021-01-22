import React, {useState} from 'react'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { Fab, Container, Grid, Paper, InputBase } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import SearchIcon from '@material-ui/icons/Search'
import Nav from '../../components/NavBar'
import ButtonStyle from '../../styles.js'
import { FancyContainer, HeaderStyle } from './styles'
import SearchBar from '../../components/SearchBar'

var gapi = window.gapi;
var CLIENT_ID = '648024437076-t62n2asdin2loagbknaqv41avh470sr8.apps.googleusercontent.com';
var API_KEY = 'AIzaSyCYye1JWTCahCZ0b7nbFG76RR42rzQjaqE';
var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
var SCOPES = "https://www.googleapis.com/auth/calendar.readonly";

function Dashboard() {
  const [events, setEvents] = useState([]);
  const meetingData = [
    {
      privacy: 'public',
      class: 'CS50',
      startDate: '01-19-2021',
      startTime: '17:00',
      host: 'Isha',
    },
    {
      privacy: 'private',
      class: 'EC10a',
      startDate: '01-23-2021',
      startTime: '14:00',
      host: 'Lauren',
    },
  ]
  //Uses GCal API to pull calendar events into grid
  function getEvents() {
    var minHour = new Date(); 
    var maxHour = new Date();
    minHour.setHours(0);
    maxHour.setHours(23);
    //initializes the Google API client
    gapi.load('client:auth2', () => {
      gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES
      })
      gapi.client.load('calendar', 'v3');
      
      //Displays a pop-up for the user to sign in with Google
      gapi.auth2.getAuthInstance().signIn()
        .then(() => {
          //gets the calendar events with the API
          gapi.client.calendar.events.list({
            'calendarId': 'primary',
            'singleEvents': true,
            'timeMin': minHour.toISOString(),
            'timeMax': maxHour.toISOString(),
            'orderBy':'startTime'
          }).then(response =>{
            setEvents(response.result.items);
            console.log('EVENTS: ', events);
          });
        });
    });
  }

  const meetingsList = meetingData.map(meeting => (
    <FancyContainer>
    <ListItem>
      <ListItemText primary="Meeting   " />
      <ListItem>
        <br />
      </ListItem>
      <ListItemText primary={meeting.host} />
      <ListItem>
        <br />
      </ListItem>
      <ListItemText primary={`(${meeting.privacy})`} />
      <ListItem>
        <br />
      </ListItem>
      <ListItem>
        <Button>Join</Button>
      </ListItem>
    </ListItem>
    </FancyContainer>
  ))

  const AddMeetingButton = () => (
    <Container>
      <Fab>
        <AddIcon />
      </Fab>
    </Container>
  )
  const calendarEventList = events.map(event => {
    const s = event.start.dateTime; 
    const d = event.end.dateTime;
    return(
      <ListItem>
        <ListItemText 
            primary={`${event.start.dateTime}-${event.end.dateTime}`}
             />
      </ListItem>
    );
  })

  return (
    <div>
      <Nav />
      <SearchBar />
      <HeaderStyle>
        <h1>Your Calendar Events</h1>
      </HeaderStyle>
      <Button id="gcal-btn" onClick={getEvents}>Add calendar events</Button>
      <List>
        {calendarEventList}
      </List>
      <HeaderStyle>
        <h1>Available PSet Meetings</h1>
      </HeaderStyle>
      <List>
        {meetingsList}
      </List>
      <AddMeetingButton />
      
    </div>

  )
}

export default Dashboard;
