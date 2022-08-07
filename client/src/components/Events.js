import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import { Card, CardActions, CardContent,
    IconButton, Typography, Collapse, CardMedia, Container, alpha } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Participant_Regist from './Participant-Registration';
import View_Participants from './View_Participants';
import LogoutIcon from '@mui/icons-material/Logout';
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

function RenderComponent(props) {
    if(props.val !== true){
        return <Participant_Regist id={props.convention.id} event_name={props.convention.title}/>
    } else {
        return <View_Participants id={props.convention.id} event_name={props.convention.title}/>
    }
}

function RenderPoster(props) {
    if(props.image !== null){
        return (
            <CardMedia
                component="img"
                height="140"
                image={props.convention.image}
                alt="green iguana"
            />
        )
    }
}
function Events(props) {
    const val= props.admin
    const [expanded, setExpanded] = React.useState(false);
    const [conventions, setConventions] = useState('');
    const [text, setText] = useState('')
    
    const config = {
        header: {
            "Content-Type": "application/json",
        },
    };
    // get a list of conventions from our database
    useEffect(() => {
        const fetch = async () => {
            await axios.post(
                "http://localhost:5000/getEvents",
                config
            ).then(function (response){
                setConventions(response);
            })
            .catch(function (error) {
                console.log(error);
            })
        }
        fetch()
        
    }, [])

    useEffect(() => {
        if(val !== true) {
            setText("REGISTER")
        } else {
            setText("VIEW REGISTERED PARTICIPANTS")
        }
            
    },[])
    const handleExpandClick = () => {
        setExpanded(!expanded);
    }

    return ( 
        <Card>
            
            {conventions !== '' ? (
                conventions.map(convention => 
                    <>
                        {RenderPoster(convention.image)}
                        <CardContent>
                    {/* // add an image */}
                            <Typography component="h1" variant="h5" sx={{ justifyContent: 'center'}}>
                                {convention.title}
                            </Typography>
                            <Container 
                             sx={{transition: ".5s ease", opacity: 0, 
                                position: "absolue", top: "50%", left: "50%",
                                transform: "translate(-50%, -50%)", textAlign: 'center',
                                "&:hover": {
                                    opacity: 0.3
                                }
                            }}
                            >
                                <LogoutIcon sx={{ "&:hover": {opacity: 1}}}/>
                            </Container>
                            <Typography paragraph>{convention.description}</Typography>
                            <Typography paragraph>Date and Time: {convention.dateTime}</Typography>
                            <Typography paragraph>Place: {convention.location}</Typography>
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
                                {RenderComponent(val, convention.id, convention.title)}
                            </CardContent>
                        </Collapse>
                    </>
                )
            ): (
                <Typography component="h1" variant="h5" sx={{ justifyContent: 'center'}}>
                    There is no upcoming convention!
                </Typography>
            )}
                
        </Card>
                        
    );
}

export default Events;