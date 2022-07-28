import React, { useState } from 'react';
import { AppBar, ThemeProvider, Box, 
    CssBaseline, Container, Toolbar, 
    Typography, createTheme, IconButton, 
     Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'

const theme = createTheme();
function NavBar() {

    const [anchorElPro, setAnchorElPro] = useState(null);
    const open = Boolean(anchorElPro);

    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
      };
      
    const handleClick = (event) => {
        console.log("gag")
        setAnchorElPro(event.currentTarget);
        console.log(anchorElPro)
    }
    const handleClose = () => {
        setAnchorElPro(null);
    }

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{display: 'flex'}}>
                <CssBaseline />
                <AppBar position='static'>
                    <Container maxWidth="xl">
                        <Toolbar>
                            <Typography
                                variant='h6'
                                noWrap
                                component="div"
                                sx={{ justifyContent: 'center',flexGrow: 1, display: {xs: 'none', md: 'flex'} }}
                            >
                                {/* አእላፍደጀን */}
                                AELAPH DEJEN
                            </Typography>
                            <Box sx={{ flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                                {/* <IconButton
                                    size="large"
                                    aria-label='drivers option'
                                    aria-controls='menu-appbar'
                                    aria-haspopup="true"
                                    onClick={handleOpenNavMenu}
                                >
                                    <MenuIcon />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorElNav}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'left',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                    }}
                                    open={Boolean(anchorElNav)}
                                    onClose={handleCloseNavMenu}
                                    sx={{
                                        display: { xs: 'block', md: 'none' },
                                    }}
                                > */}
                                    {/* {pages.map((page) => (
                                        <MenuItem key={page} onClick={handleCloseNavMenu}>
                                            <Typography textAlign="center">{page}</Typography>
                                        </MenuItem>
                                    ))} */}
                                {/* </Menu> */}
                            </Box>
                        </Toolbar>
                    </Container>
                </AppBar>
            </Box>
        </ThemeProvider>
    );
}

export default NavBar;