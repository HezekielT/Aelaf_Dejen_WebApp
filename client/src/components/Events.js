import React from 'react';
import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'

function Events(props) {
    return (
        <Grid>
            <Card
                sx={{
                    display: 'flex',
                    mt: 4, mb: 4,
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
            </Card>
        </Grid>
    );
}

export default Events;