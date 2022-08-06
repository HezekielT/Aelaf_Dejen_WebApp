import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import { Card, CardActions, CardContent,
    IconButton, Typography, Collapse, TextField } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Participant_Regist from './Participant-Registration';
import View_Participants from './View_Participants';
// we will pass the contents of the event as
// props to this function and will call it from
// dashboard screen
const axios = require('axios');

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));
function Events(props) {
    const val= props.admin
    const [expanded, setExpanded] = React.useState(false);
    const [conventions, setConventions] = useState('');
    const [admin, setAdmin] = useState(null)
    const [text, setText] = useState('')
    const config = {
        header: {
            "Content-Type": "application/json",
        },
    };
    // get a list of conventions from our database
    useEffect(async () => {
        await axios.post(
            "http://localhost:5000/getEvents",
            config
        )
        .then(function (response){
            setConventions(response);
        })
        .catch(function (error) {
            console.log(error);
        })
        
    }, [])

    useEffect(() => {
        if(val !== true) {
            setText("REGISTER")
            setAdmin(<Participant_Regist />)
        } else {
            setText("VIEW REGISTERED PARTICIPANTS")
            setAdmin(<View_Participants />)
        }
            
    },[])
    const handleExpandClick = () => {
        setExpanded(!expanded);
    }

    return ( 
        <Card>
            <CardContent>
            
                {conventions !== null ? (
                    conventions.map(convention => 
                        // add an image
                        <>
                        <Typography component="h1" variant="h5" sx={{ justifyContent: 'center'}}>
                            {convention.title}
                        </Typography>
                        <Typography paragraph>{convention.description}</Typography>
                        <Typography paragraph>Date and Time: {convention.dateTime}</Typography>
                        <Typography paragraph>Place: {convention.location}</Typography>
                        </>
                    )
                ): (
                    <Typography component="h1" variant="h5" sx={{ justifyContent: 'center'}}>
                        There is no upcoming convention!
                    </Typography>
                )}
                    </CardContent>
                <CardActions sx={{ border: 1, }}>
            <Typography component="h1" variant="h5">
                {text}
            </Typography>
            <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={text}
            >
            <ExpandMoreIcon />
            </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
                {admin}
            </CardContent>
        </Collapse>
            
        </Card>
                        
    );
}

export default Events;