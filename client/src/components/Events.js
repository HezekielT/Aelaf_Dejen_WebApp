import React from 'react';
import { styled } from '@mui/material/styles';
import { Card, CardActions, CardContent,
    IconButton, Typography, Collapse, TextField } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Participant_Regist from './Participant-Registration';
import View_Participants from './View_Participants';
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
    const val= props.admin
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    }
    return ( 
        <Card>
            <CardContent sx={{ flex:1 }}>
                <Typography component="h1" variant="h5">
                    Annual Meeting starting from Aug. 3
                </Typography>
                <TextField variant="outlined" disabled label="Annual Meeting starting from Aug. 3">
                </TextField>
            </CardContent>
            {val !== true ? (
                <React.Fragment>
                    
            <CardActions sx={{ border: 1, }}>
                <Typography component="h1" variant="h5">
                    REGISTER
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
                </React.Fragment>
            ): (
                <React.Fragment>
                    
                <CardActions sx={{ border: 1 }}>
                    <Typography component="h1" variant="h5">
                        View Participants
                    </Typography>
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded="participant"
                    >
                    <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <View_Participants />
                    </CardContent>
                </Collapse>
                    </React.Fragment>
            )}
        </Card>
                        
    );
}

export default Events;