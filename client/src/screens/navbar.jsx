import React, { useState } from 'react';
import { AppBar, ThemeProvider, Box, 
    CssBaseline, Container, Toolbar, 
    Typography, createTheme, IconButton, 
     Menu, MenuItem, Link, ListItemIcon, Avatar, Stack } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'
import { useEffect } from 'react';
import { useReference } from '../context/refProvider';
import { Logout } from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';
// import { LogoutIcon } from '@mui/icons-material/Logout'

const theme = createTheme();

function stringToColor(string) {
    let hash = 0;
    let i;
  
    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
  
    let color = '#';
  
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */
  
    return color;
  }
  
  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }

function NavBar() {
    const location = useLocation();
    const navigate = useNavigate();
    const [isScrolled, setIsScrolled ] = useState('#1565c0');
    const { homeRef, eventRef, contactRef, scrollToRef } = useReference();

    const [anchorElPro, setAnchorElPro] = useState(null);
    const [anchorEl, setAnchorEl] = useState(null)
    const [anchorElNav, setAnchorElNav] = useState(null);
    const open = Boolean(anchorEl);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleClick = (event) => {
        console.log("gag")
        setAnchorElPro(event.currentTarget);
        // console.log(anchorElPro)
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
    
    function AdminXsNavBar() {
        return (
            <>
            
                <ListItemIcon sx={{ mx :1 }} onClick={() => {console.log("JJJ")}}>
                    <Logout fontSize='small' sx={{ ml:1 }}/>
                    <Typography>Logout</Typography>
                </ListItemIcon>
            
            </>
        )
    }

    function AdminMdNavBar() {
        
        const fname = localStorage.getItem('fname');
        const lname = localStorage.getItem('lname');
        const full_name = fname + ' ' + lname;
        return (
            <React.Fragment>
            <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            >
                <Stack direction="row" spacing={2}>
                    {fname !== '' ? (
                        <Avatar  {...stringAvatar(full_name)} />
                    ) : (
                        <></>
                    )}
                </Stack>
            </IconButton>
            <Menu
                anchorEl={anchorElPro}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem
                    onClick={() => navigate('/logout')}
                >
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </Menu>
            </React.Fragment>
        )
    }

    function NormalXsNavBar() {
        return (
            <>
            <MenuItem key={0} onClick={handleCloseNavMenu}>
                <Link sx={{cursor: 'pointer', textDecoration: 'none',px: 2,}} onClick={() => scrollToRef(homeRef)}>Home</Link>
            </MenuItem>
            <MenuItem key={1} onClick={handleCloseNavMenu}>
                <Link sx={{cursor: 'pointer', textDecoration: 'none',px: 2,}} onClick={() => scrollToRef(eventRef)}>Conventions</Link>
            </MenuItem>
            <MenuItem key={2} onClick={handleCloseNavMenu}>
                <Link sx={{cursor: 'pointer', textDecoration: 'none',px: 2,}} onClick={() => scrollToRef(contactRef)}>Contact Us</Link>
            </MenuItem>
            </>
        )
    }
    
    function NormalMdNavBar() {
        return (
            <>
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
            </>
        )
    }
    
    function Content() {
        if(location.pathname === '/' || location.pathname === '/dashboard' 
        || location.pathname === '/dashboard/contents' || location.pathname === '/dashboard/transport' 
        || location.pathname === '/dashboard/accounts') {
            return(
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
                                                {location.pathname === '/' ? (
                                                    <NormalXsNavBar />
                                                ) : (
                                                    <AdminXsNavBar />
                                                )}
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
                                        {location.pathname === '/' ? (
                                            <NormalMdNavBar />
                                        ) : (
                                            <AdminMdNavBar />
                                        )}
                                    </Box>
                                </Toolbar>
                            </Container>
                        </AppBar>
                    </Box>
            )
             } else {
              return (<></>)
             }
    }

    useEffect(() => {
       <Content />
    },[location.pathname])

    return (
    	<ThemeProvider theme={theme}>
    		<Content />
    	</ThemeProvider>
    )
}

export default NavBar;