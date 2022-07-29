import { Grid, Card, CardContent, Typography } from '@mui/material';
import React from 'react';
import Events from '../Events';

function Manage_Contents(props) {
    return (
        <>
            <Grid maxWidth="lg" container spacing={3}>
            <Grid item>
            <Events />
            </Grid>
            <Grid item>
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
                        jgorAnnual Meeting starting from Aug. 3
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
            </Grid>
            
        </>
    );
}

export default Manage_Contents;