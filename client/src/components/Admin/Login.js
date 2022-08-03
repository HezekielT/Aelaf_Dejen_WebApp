import React from 'react';
import { Box, Paper, TextField,
    Button, Grid, Link,
   Avatar, Typography, Container } from '@mui/material';

function Login(props) {
    return (
      <Container maxWidth="sm" sx={{pt: '8%'}}>
                    
        <Paper
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}
            >
            <Typography comoponent="h1" variant='h5' sx={{p: 3}}>
                AELAPH-DEJEN ADMIN
            </Typography>
            <Typography component="h3" variant="h5">
                Login
            </Typography>
            <Box component="form" sx={{ mt: 1, px: 7, pb: 7 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                //   value={form.email}
                //   onChange={(e) => updateForm({ email: e.target.value})}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                //   value={form.password}
                //   onChange={(e) => updateForm({ password: e.target.value})}
                />
                
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs sx={{textAlign:"center", pb: 2}}>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                </Grid>
              </Box>
          </Paper>
      </Container>
    );
}

export default Login;