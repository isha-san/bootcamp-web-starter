import React from 'react'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { Fab, Container, Grid, Paper } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import Nav from '../../components/NavBar'
import ButtonStyle from '../../styles.js'
import { FancyContainer } from './styles'


function Dashboard() {
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
  return (
    <div>
      <Nav />
      <List>
        {meetingsList}
      </List>
      <AddMeetingButton />
    </div>

  )
}

export default Dashboard
