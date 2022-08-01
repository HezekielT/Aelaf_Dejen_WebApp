import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Container, Paper, Card, CardActions, CardContent, 
    CardMedia, Grid, IconButton, Typography, Collapse } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Participant_Regist from './Participant-Registration';
// we will pass the contents of the event as
// props to this function and will call it from
// dashboard screen

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
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    }
    return (
        <Box
        component="main"
        sx={{
            backgroundColor: (theme) =>
            theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[900],
            flexGrow: 1,
            minHeight: '83.6vh',
            overflow: 'auto'
        }}
    >
        <Container maxWidth="lg" sx={{ mt:4, mb: 4, }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={12} lg={12} sx={{ mt: 4}}>
                    <Paper
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            mt:-1, mb: 4,
                        }}
                    >
                        <Typography component="h1" variant="h5" sx={{ mt: 4,mb: 4,textAlign: 'center'}}>
                            Upcoming Conventions
                        </Typography>  
                    </Paper>
                    {/* <Grid container spacing={2}> */}
                        <Grid item xs={12} md={12} lg={12} sx={{  justifyContent: 'center' }}>
                            {/* <Participant_Regist /> */}
                            <Grid>
                                <Card
                                    sx={{
                                        // display: 'flex',
                                        // mt: 4, mb: 4,
                                        // maxWidth: 345
                                        mx: 5
                                    }}
                                >
                                    {/* <CardMedia 
                                        component="img"
                                    /> */}
                                    <CardContent sx={{ flex:1 }}>
                                        <Typography component="h1" variant="h5">
                                            Annual Meeting starting from Aug. 3
                                        </Typography>
                                    </CardContent>
                                    <CardActions disableSpacing>
                                        <Typography component="h1" variant="h5">
                                            Register
                                        </Typography>
                                        <ExpandMore
                                            expand={expanded}
                                            onClick={handleExpandClick}
                                            aria-expanded="Register"
                                        >
                                            <ExpandMoreIcon />
                                        </ExpandMore>
                                    </CardActions>
                                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                                        <CardContent>
                                            <Participant_Regist />
                                        </CardContent>
                                    </Collapse>
                                </Card>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={12} lg={12} sx={{ mt: 3, justifyContent: 'center' }}>
                            {/* <Participant_Regist /> */}
                            <Grid>
                                <Card
                                    sx={{
                                        // display: 'flex',
                                        // mt: 4, mb: 4,
                                        // maxWidth: 345
                                        mx: 5
                                    }}
                                >
                                    {/* <CardMedia 
                                        component="img"
                                    /> */}
                                    <CardContent sx={{ flex:1 }}>
                                        <Typography component="h1" variant="h5">
                                            Annual Meeting starting from Aug. 3
                                        </Typography>
                                    </CardContent>
                                    <CardActions disableSpacing>
                                        <Typography component="h1" variant="h5">
                                            Register
                                        </Typography>
                                        <ExpandMore
                                            expand={expanded}
                                            onClick={handleExpandClick}
                                            aria-expanded="Register"
                                        >
                                            <ExpandMoreIcon />
                                        </ExpandMore>
                                    </CardActions>
                                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                                        <CardContent>
                                            <Participant_Regist />
                                        </CardContent>
                                    </Collapse>
                                </Card>
                            </Grid>
                        </Grid>
                    {/* </Grid> */}
                </Grid>
            </Grid>
        </Container>
    </Box>
    );
}

export default Events;