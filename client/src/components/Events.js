import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import { Card, CardActions, CardContent, Box,
    IconButton, Typography, Collapse, CardMedia, Container, alpha } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Participant_Regist from './Participant-Registration';
import View_Participants from './View_Participants';
import LogoutIcon from '@mui/icons-material/Logout';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import EventsForm from './EventsForm';

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
        return <Participant_Regist id={props.id} event_name={props.title} drivers={props.drivers}/>
    } else {
        return <View_Participants id={props.id} event_name={props.title}/>
    }
}

function RenderPoster(props) {
    if(props.image !== undefined){
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
    const [conventions, setConventions] = useState([]);
    const [text, setText] = useState('')
    const [enableEdit, setEnableEdit] = useState(false);
    const [conventionItem, setConventionItem] = useState([]);
    const [drivers, setDrivers] = useState([]);
    const config = {
        header: {
            "Content-Type": "application/json",
        },
    };
    // get a list of conventions from our database
    useEffect(() => {
        if(val !== true) {
            setText("REGISTER")
        } else {
            setText("VIEW REGISTERED PARTICIPANTS")
        }
        const fetch = async () => {
            await axios.all(
                ["http://localhost:5000/getEvents","http://localhost:5000/getDrivers"],
                config
            ).then(axios.spread((...responses) => {
                setConventions(responses[0].data)
                setDrivers(responses[1].data)
            }))
            // .then(function (response){
            //     setConventions(response.data);
            // })
            .catch(function (error) {
                console.log(error);
            })
        }
        fetch()
        
    }, [])

    async function DeleteConvention(id) {
        await axios.delete(
            `http://localhost:5000/deleteEvent/${id}`,
            config
        ).then(function(response) {
            console.log(response)
            window.location.reload(true);
        }).catch(function (error) {
            console.log(error)
        })
    }

    async function EditConvention(convention) {
        setEnableEdit(true)
        setConventionItem(convention)
    }
    function MainComponent(){
        if(conventions === []){
            
            return (
                    <Typography component="h1" variant="h5" sx={{ py: 5, justifyContent: 'center'}}>
                        There is no upcoming convention!
                    </Typography>
            )
        } else {
            if(enableEdit === false) {
                return(
                    conventions.map(convention => 
                        <Card key={convention.id} sx={{ display: 'flex'}}>
                            {RenderPoster(convention.image)}
                            <CardContent>
                                <Typography component="h1" variant="h5" sx={{ textAlign: 'center'}}>
                                    {convention.title}
                                </Typography>
                                (if(val === true) {
                                    <Box sx={{ justifyItems: 'flex-end'}}>
                                        <EditIcon onClick={() => EditConvention(convention)}/>
                                        <DeleteIcon onClick={() => DeleteConvention(convention.id)}/>
                                    </Box>
                                })
                                {val === true ? (
                                    <Container 
                                        sx={{transition: ".5s ease", opacity: 0, 
                                        position: "absolue", top: "50%", left: "50%",
                                        transform: "translate(-50%, -50%)", textAlign: 'center',
                                        "&:hover": {
                                            opacity: 0.3,
                                        }
                                        }}
                                    >
                                    <Box  sx={{ "&:hover": {opacity: 1}, justifyContent: 'space-evenly'}}>
                                        
                                    </Box>
                                </Container>
                                ) : (<></>)}
                                
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
                                    <RenderComponent val={val} id={convention.id} title={convention.title} drivers={drivers}/>
                                </CardContent>
                            </Collapse>
                        </Card>
                    )
                )
            } else {
                return <EventsForm convention={conventionItem} setEnableEdit={setEnableEdit}/>
            }
        }
    }
    const handleExpandClick = () => {
        setExpanded(!expanded);
    }

    return ( 
        // useEffect(() => {

            // if(enableEdit == true) {
                <MainComponent />
            //  } else {
                // <MainComponent /> 
        //      }
        // }, [enableEdit])
                    
    );
}

export default Events;