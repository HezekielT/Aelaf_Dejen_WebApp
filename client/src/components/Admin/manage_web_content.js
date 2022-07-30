import { Grid, Card, CardContent, Typography, CardActions } from '@mui/material';
import React, { useState } from 'react';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import Events from '../Events';

function Manage_Contents(props) {
    const [test, setTest] = useState("Hello")
    return (
        <div>
            <Grid maxWidth="lg" container spacing={3}>
                <Grid item>
                    <Events />
                </Grid>
                <Grid item>
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
                            <ControlPointIcon />
                            {/* {test} */}
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
            
        </div>
    );
}

export default Manage_Contents;