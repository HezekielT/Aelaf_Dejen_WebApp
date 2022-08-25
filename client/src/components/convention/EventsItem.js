import React, { useEffect, useState } from 'react';
import { Card, CardActions, CardContent, Box,
  IconButton, Typography, Collapse, CardMedia, Container, alpha } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Participant_Regist from './Participant-Registration';
import View_Participants from './View_Participants';
import ConfirmRegistration from '../DialogComponent';


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

function RenderPoster(value) {
  if(value === undefined){
      return;
  }
  if(value !== '' ){
      return (
          <CardMedia
              component="img"
              height="140"
              image={value}
              alt="poster"
          />
      )
  }
}

function EventsItem(props) {

  const [expanded, setExpanded] = React.useState(false);
  const msg = "Registered Participants, Drivers will also be deleted! This action can't be undo";
  const title = "Are you sure you want to delete?";
  const [id, setId] = useState('');
  const [deleteConfirmation, setDeleteConfirmation] = useState(false)

  const confirm = true;
  const handleExpandClick = () => {
    setExpanded(!expanded)
  }
  // const []
  function DelConv(id) {
    setId(id)
    props.setOpen(true)
  }
  useEffect(() => {

      console.log(deleteConfirmation, 'here is deleteCom')
      if(deleteConfirmation){
        console.log("MOrning")
        props.DeleteConvention(id)
      } else {
        console.log("Evening")
      }
      
  },[props.open])
    // props.setDeleteConfirmation(true)
  return (
    <Card key={props.convention.id} sx={{mb: 2}}>
      {RenderPoster(props.convention.image)}
      <CardContent>
          <Typography component="h1" variant="h5" sx={{ textAlign: 'center'}}>
              {props.convention.title}
          </Typography>
          {(props.val === true) ? (
              <Box sx={{ textAlign: 'right', px: 2}}>
                  <EditIcon sx={{mx: 2,cursor: 'pointer',}} onClick={() => props.EditConvention(props.convention)}/>
                  <DeleteIcon sx={{mx: 2,cursor: 'pointer',}} onClick={() => DelConv(props.convention.id)}/>
              </Box>
          ) : (<></>)
          }
          
          <Typography paragraph>{props.convention.description}</Typography>
          <Typography paragraph>Date and Time: {props.convention.dateTime}</Typography>
          <Typography paragraph>Place: {props.convention.location}</Typography>
          <ConfirmRegistration 
            open={props.open} 
            setOpen={props.setOpen} 
            title={title} 
            message={msg} 
            confirm={confirm} 
            setDeleteConfirmation={setDeleteConfirmation}
          />

      </CardContent>
      <CardActions sx={{ border: 1, }}>
          <Typography component="h1" variant="h5">
              {props.text}
          </Typography>
          <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={props.text}
          >
            <ExpandMoreIcon />
          </ExpandMore>
          
      </CardActions>
        {/* <CardContent> */}
          <Collapse in={expanded} timeout="auto" unmountOnExit>
          {props.val !== true ? (
              <Participant_Regist 
               key={props.convention.id} 
               id={props.convention.id} 
               event_name={props.convention.title} 
               drivers={props.drivers}
               setExpanded={setExpanded}
              />
          ) : (
              <View_Participants 
               id={props.convention.id} 
               index={props.index} 
               participantList={props.getList}
              />
          )}
          </Collapse>
      {/* </CardContent> */}
    </Card>
  );
}

export default EventsItem;