import React, { useEffect, useState } from 'react';
import { TableBody, Table, TableCell, 
  TableHead, TableRow, Typography, Paper } from '@mui/material';
import axios from 'axios';

function GenerateTable(title, data) {
  console.log("j", data)
  let headers
  if( Object.keys(data).length !== 0) {

    headers = Object.keys(data[0])
  }

  return (
    Object.keys(data).length !== 0 ? (
      <Paper>
      <Typography variant="h4" color="inherit">
        {title}
      </Typography>

      <hr />

      <Table>
        <TableHead>
          <TableRow>
            {headers.map(header => (
              <TableCell align="right">{header.toUpperCase()}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((emp, index) => (
            <TableRow key={index}>
              {headers.map(header => (
                <TableCell align='right'>{emp[header]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
    ) : (
        <Typography >
          No one has registered so far!
        </Typography>
    )
    
  );
}

GenerateTable.defaultProps = {
  title: ''
}

 function View_Participants(props) {
  
  const [participants, setParticipants] = useState([])

  const fetch = async () => {
    await axios.get(
      `http://localhost:5000/getParticipants/${props.id}`
    ).then(function(response) {
      console.log("res", typeof(response.data))
      setParticipants(response.data)
      console.log("parti", response.data)
    }).catch(function (error) {
      console.log(error)
    })
  }
  useEffect(() => {
    fetch();
    console.log("see", participants)
  },[])
  return (
    <GenerateTable title="Participants" data={participants} />
  );
}

export default View_Participants;