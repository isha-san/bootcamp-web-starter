import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Nav from '../../components/NavBar.js';
import ButtonStyle from '../../styles.js';
import Popup from './Popup.js';

function Dashboard() {
    
    const meetingData = [
        {   privacy: "public", 
            class: "CS50", 
            startDate: "01-19-2021",
            startTime: "17:00",
            host: "Isha"
        },
        {   privacy: "private", 
            class: "EC10a", 
            startDate: "01-23-2021",
            startTime: "14:00",
            host: "Lauren"
        },
    ]

    const meetingsList = meetingData.map(meeting => {
        return(
            <ListItem>
                <ListItemText primary="Meeting   "></ListItemText>
                <ListItem>
                    <br/>
                </ListItem>
                <ListItemText primary={meeting.host}></ListItemText>
                <ListItem>
                    <br/>
                </ListItem>
                <ListItemText primary={`(${meeting.privacy})`}></ListItemText>
                <ListItem>
                    <br/>
                </ListItem>
                <ListItem>
                    <Button>Join</Button>
                </ListItem>
            </ListItem>
        );
    });
    return(
        <div>
            <Nav></Nav>
            <List>
                {meetingsList}
            </List>
            <Button id="new-meeting" >+</Button>
            
        </div>
        
    );
}

export default Dashboard;
