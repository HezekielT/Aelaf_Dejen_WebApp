import React, { useEffect } from 'react';
import { TableBody, Table, TableCell, 
  TableHead, TableRow, Typography, Paper } from '@mui/material';

function GenerateTable(props) {
  let headers;
  if( props.data.data.length !==0 && Object.keys(props.data.data[0]).length !== 0) {
    headers = Object.keys(props.data.data[0].user).slice(0,4).concat(Object.keys(props.data.data[0]).slice(4,5))
  }

  return (
    props.data.data.length !==0 && Object.keys(props.data).length !== 0 ? (
      <Paper sx={{overflowX: 'auto'}}>

        <hr />

        <Table>
          <TableHead>
            <TableRow>
              {headers.map(header => (
                
                <TableCell>{header.toUpperCase()}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {props.data.data.map((data, i) => 
              <TableRow key={i}>
                {Object.values(data.user).slice(0,4).concat(Object.values(props.data.data[0]).slice(4,5)).map(emp => 
                  <TableCell>{emp}</TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Paper>
    ) : (
      <Paper sx={{ m: 3, p: 2}}>
        <Typography variant="h6">
          No one has registered so far!
        </Typography>
      </Paper>
    )
    
  );
}

GenerateTable.defaultProps = {
  title: ''
}

 function View_Participants(props) {
  let vid;
  if(props.participantList.allData[props.index].data.length === 0){
    vid = '0'
  } else {
    vid = props.participantList.allData[props.index].data[0].id;
  }
  useEffect(() => {
    // console.log("List: ", props.participantList.allData[props.index].data[0].id)
    // console.log("TYPE ", Object.keys(props.participantList.allData[props.index].data[0]))
    // console.log("index", props.index)
  },[])
  console.log(vid,'-')
  return (
    <GenerateTable key={vid} title="Participants" data={props.participantList.allData[props.index] } />
    // <div key={props.id}>Hello</div>
  );
}

export default View_Participants;