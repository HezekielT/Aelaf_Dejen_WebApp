import React, { useState } from 'react';
import { AppBar, ThemeProvider, Box, 
    CssBaseline, Container, Toolbar, 
    Typography, createTheme, IconButton, 
     Menu, MenuItem, Link } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'
import { useEffect } from 'react';
import { useReference } from '../context/refProvider';
import Home from '../components/Home'

const pages = ['Home', 'Conventions', 'About Us']
const theme = createTheme();
function NavBar() {
    const [isScrolled, setIsScrolled ] = useState('#1565c0');
    const { homeRef, eventRef, contactRef, scrollToRef } = useReference();
    const [anchorElPro, setAnchorElPro] = useState(null);
    // const open = Boolean(anchorElPro);

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

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled('#1976d2')
            } else {
                setIsScrolled('#1565c0')
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const cc = "#322162"
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{display: 'flex'}}>
                <CssBaseline />
                <AppBar style={{background: isScrolled}}>
                    <Container maxWidth="xl">
                        <Toolbar>
                            <Typography
                                variant='h6'
                                noWrap
                                component="div"
                                sx={{ flexGrow: 1, display: {xs: 'none', md: 'flex'} }}
                            >
                                <pre>
                                 አእላፍ-ደጀን 
                                AELAPH-DEJEN
                                </pre>
                            </Typography>
                            <Box sx={{ flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                                <IconButton
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
                                > 
                                    {pages.map((page) => (
                                        <MenuItem key={page} onClick={handleCloseNavMenu}>
                                            <Link sx={{textDecoration:"none"}}>{page}</Link>
                                        </MenuItem>
                                    ))}
                             </Menu>
                            </Box>
                            <Typography
                                variant='h6'
                                noWrap
                                component="div"
                                sx={{
                                    flexGrow: 1,
                                    display: { xs: 'flex', md: 'none'}
                                }}
                            >
                                AELAPH-DEJEN
                            </Typography>
                            <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
                                <Link 
                                    sx={{
                                        color: '#fff', 
                                        cursor: 'pointer', 
                                        textDecoration: 'none',
                                        px: 2,
                                    }} 
                                    onClick={() => scrollToRef(homeRef)}
                                >Home</Link>
                                <Link sx={{color: '#fff', cursor: 'pointer', textDecoration: 'none',px: 2,}} onClick={() => scrollToRef(eventRef)}>Conventions</Link>
                                <Link sx={{color: '#fff', cursor: 'pointer', textDecoration: 'none',px: 2,}} onClick={() => scrollToRef(contactRef)}>Contact Us</Link>
                            </Box>
                        </Toolbar>
                    </Container>
                </AppBar>
            </Box>
        </ThemeProvider>
    );
}

export default NavBar;