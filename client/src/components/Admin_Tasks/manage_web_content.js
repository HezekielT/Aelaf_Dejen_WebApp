import { Grid, Card, CardContent, Box, Paper, Container, IconButton, 
    Typography, Collapse, CardActions } from '@mui/material';
import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import Events from '../convention/Events';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useReference } from '../../context/refProvider';
import EventsForm from '../convention/EventsForm';

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

function Manage_Contents(props) {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    }
    const { eventRef } = useReference();
    return (
        <Box
            ref={eventRef}
            component="main"
            sx={{
                backgroundColor: (theme) =>
                theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
                flexGrow: 1,
                minHeight: '80.6vh',
                overflow: 'auto',
            }}
        >
        {/* <Container maxWidth="xl" sx={{ mt:4, mb: 4, }}> */}
            <Grid container spacing={2}>
                <Grid item xs={12} md={12} lg={12} sx={{ mt: 2}}>
                    <Paper
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            mt:5, mb: 4,
                        }}
                    >
                        <Typography component="h1" variant="h5" sx={{ mt: 4,mb: 4,textAlign: 'center'}}>
                            Upcoming Conventions
                        </Typography>  
                    </Paper>
                    {/* Here we want the ff container
                    to be in a for loop */}
                    <Container>
                        <Grid item xs={12} md={12} lg={12} sx={{ my: 3, justifyContent: 'center' }}>
                    <Events admin={true}/>
                {/* </Grid> */}
                {/* <Grid item> */}
                    <Card
                        sx={{
                            cursor: 'pointer',
                            display: 'flex',
                            flexDirection: 'column',
                            mt: 4, mb: 4,
                        }}
                    >
                        {/* <CardMedia 
                            component="img"
                        /> */}
                        <CardContent sx={{ flex:1 }}>
                            <Typography component="h1" variant="h5">
                                Add New Convention
                            </Typography>
                            
                        </CardContent>
                        <CardActions  sx={{ justifyContent: 'center'}}>
                        <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded="Register"
                        >
                            <ControlPointIcon />
                        </ExpandMore>
                            {/* {test} */}
                        </CardActions>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                            <CardContent>
                                <EventsForm />
                            </CardContent>
                        </Collapse>
                    </Card>
                    </Grid>
                                            </Container>
                    {/* </Grid> */}
                </Grid>
            </Grid>
        {/* </Container> */}
    </Box>
            
    );
}

export default Manage_Contents;