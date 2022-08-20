import React, { useState } from 'react';
import { AppBar, ThemeProvider, Box, 
    CssBaseline, Container, Toolbar, 
    Typography, createTheme, IconButton, Button,
     Menu, MenuItem, Link, ListItemIcon, Avatar, Stack } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'
import { useEffect } from 'react';
import { useReference } from '../context/refProvider';
import { Logout } from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';
// import { LogoutIcon } from '@mui/icons-material/Logout'

const theme = createTheme()

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


function NavBar(props) {
    const location = useLocation();
    const navigate = useNavigate();

    const fname = localStorage.getItem('fname');
    const lname = localStorage.getItem('lname');
    const full_name = fname + ' ' + lname;


    const [isScrolled, setIsScrolled] = useState(null)
    const [anchorElPro, setAnchorElPro] = useState(null)
    const { homeRef, eventRef, contactRef, scrollToRef } = useReference();

    const open = Boolean(anchorElPro);
    const [anchorElProMd, setAnchorElProMd] = useState(null)

    const openMd = Boolean(anchorElProMd);

    const handleClick = (event) => {
        console.log("gag")
        setAnchorElPro(event.currentTarget);
        // console.log(anchorElPro)
    }
    const handleClose = () => {
        setAnchorElPro(null);
    }
    const handleClickMd = (event) => {
        console.log("gag")
        setAnchorElProMd(event.currentTarget);
        // console.log(anchorElPro)
    }
    const handleCloseMd = () => {
        setAnchorElProMd(null);
    }
    const handleLogout = () => {
        localStorage.removeItem('UserInfo')
        localStorage.removeItem('fname')
        localStorage.removeItem('lname')
        localStorage.removeItem('pri')
        localStorage.removeItem('id')
        navigate('/admin')
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

    function Content() {
        // if(location.pathname === '/' || location.pathname === '/dashboard' 
        //         || location.pathname === '/dashboard/contents' || location.pathname === '/dashboard/transport' 
        //         || location.pathname === '/dashboard/accounts') {
        //     return (
        //         <Box sx={{ display: 'flex' }}>
        //         <CssBaseline />
        //         <AppBar style={{ background: isScrolled }}>
        //             <Container maxWidth='xl'>
        //                 <Toolbar>
        //                     <Typography
        //                         variant='h6'
        //                         noWrap
        //                         component="div"
        //                         sx={{ flexGrow: 1, display: {xs: 'none', md: 'flex'}}}
        //                     >
        //                         <pre>
        //                             አእላፍ-ደጀን 
        //                             AELAPH-DEJEN
        //                         </pre>
        //                     </Typography>
        //                     <Box sx={{flexGrow: 1, display: { xs: 'flex', md: 'none' }}}>
        //                         <IconButton
        //                             id='profile-button'
        //                             onClick={handleClick}
        //                             aria-controls={open ? 'profile-menu' : undefined}
        //                             aria-haspopup='true'
        //                             aria-expanded={open ? 'true' : undefined}
        //                         >
        //                             <Stack>
        //                                 <Avatar  {...stringAvatar("Hezekiel Name")} />
        //                             </Stack>
        //                         </IconButton>
        //                         <Menu
        //                         id='profile-menu'
        //                         anchorEl={anchorElPro}
        //                         open={open}
        //                         onClose={handleClose}
        //                         >
        //                             <MenuItem>cmo</MenuItem>
        //                         </Menu>
        //                     </Box>

        //                     <Box sx={{flexGrow: 0, display: { md: 'flex', xs: 'none' }}}>
        //                         <IconButton
        //                             id='profile-button'
        //                             onClick={handleClickMd}
        //                             aria-controls={openMd ? 'profile-menuMd' : undefined}
        //                             aria-haspopup='true'
        //                             aria-expanded={openMd ? 'true' : undefined}
        //                         >
        //                             <Stack>
        //                             <Avatar  {...stringAvatar("full Name")} />
        //                             </Stack>
        //                         </IconButton>
        //                         <Menu
        //                         id='profile-menuMd'
        //                         anchorEl={anchorElProMd}
        //                         open={openMd}
        //                         onClose={handleCloseMd}
        //                         >
        //                             <MenuItem>cmo</MenuItem>
        //                         </Menu>
        //                     </Box>

        //                     <Typography
        //                         variant='h6'
        //                         noWrap
        //                         component="div"
        //                         sx={{
        //                             flexGrow: 1,
        //                             display: { xs: 'flex', md: 'none'}
        //                         }}
        //                     >
        //                         AELAPH-DEJEN
        //                     </Typography>
        //                 </Toolbar>
        //             </Container>
        //         </AppBar>
        //     </Box>
        //     )
        // } else {
        //     return (<></>)
        // }
    }
    
    if(location.pathname === '/' || location.pathname === '/dashboard' 
                || location.pathname === '/dashboard/contents' || location.pathname === '/dashboard/transport' 
                || location.pathname === '/dashboard/accounts') {
            return (
                <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar style={{ background: isScrolled }}>
                    <Container maxWidth='xl'>
                        <Toolbar>
                            <Typography
                                variant='h6'
                                noWrap
                                component="div"
                                sx={{ flexGrow: 1, display: {xs: 'none', md: 'flex'}}}
                            >
                                <pre>
                                    አእላፍ-ደጀን 
                                    AELAPH-DEJEN CONVENTION
                                </pre>
                            </Typography>
                            <Box sx={{flexGrow: 1, display: { xs: 'flex', md: 'none' }}}>
                                {location.pathname === '/' ? (
                                    <>
                                        <IconButton
                                            id='profile-button'
                                            onClick={handleClick}
                                            aria-controls={open ? 'profile-menu' : undefined}
                                            aria-haspopup='true'
                                            aria-expanded={open ? 'true' : undefined}
                                        >
                                            <MenuIcon />
                                        </IconButton>
                                        <Menu
                                        id='profile-menu'
                                        anchorEl={anchorElPro}
                                        open={open}
                                        onClose={handleClose}
                                        >

                                            <MenuItem key={0} onClick={handleClose}>
                                                <Link sx={{cursor: 'pointer', textDecoration: 'none',px: 2,}} onClick={() => scrollToRef(homeRef)}>Home</Link>
                                            </MenuItem>
                                            <MenuItem key={1} onClick={handleClose}>
                                                <Link sx={{cursor: 'pointer', textDecoration: 'none',px: 2,}} onClick={() => scrollToRef(eventRef)}>Conventions</Link>
                                            </MenuItem>
                                            <MenuItem key={2} onClick={handleClose}>
                                                <Link sx={{cursor: 'pointer', textDecoration: 'none',px: 2,}} onClick={() => scrollToRef(contactRef)}>Contact Us</Link>
                                            </MenuItem>
                                        </Menu>
                                    </>
                                ) : (
                                    <>
                                        <IconButton
                                            id='profile-button'
                                            onClick={handleClick}
                                            aria-controls={open ? 'profile-menu' : undefined}
                                            aria-haspopup='true'
                                            aria-expanded={open ? 'true' : undefined}
                                        >
                                            <MenuIcon />
                                        </IconButton>
                                        <Menu
                                        id='profile-menu'
                                        anchorEl={anchorElPro}
                                        open={open}
                                        onClose={handleClose}
                                        >
                                            <MenuItem key={0} onClick={handleClose}>
                                                <Link sx={{cursor: 'pointer', textDecoration: 'none', }} onClick={() => {navigate('/dashboard/contents')}}>
                                                    Manage Web Contents
                                                </Link>
                                            </MenuItem>
                                            <MenuItem key={1} onClick={handleClose}>
                                                <Link sx={{cursor: 'pointer', textDecoration: 'none', }} onClick={() => {navigate('/dashboard/transport')}}>
                                                    Register Drivers
                                                </Link>
                                            </MenuItem>
                                            <MenuItem key={2} onClick={handleClose}>
                                                <Link sx={{cursor: 'pointer', textDecoration: 'none', }} onClick={() => {navigate('/dashboard/accounts')}}>
                                                    Manage Account
                                                </Link>
                                            </MenuItem>
                                            <MenuItem key={3} onClick={handleClose}>
                                                <Link sx={{cursor: 'pointer', textDecoration: 'none', display: 'inline-flex'}} onClick={() => {handleLogout()}}>
                                                    <Logout fontSize='small' sx={{ mr: 1,}}/>
                                                    <Typography>Logout</Typography>
                                                </Link>
                                            </MenuItem>
                                        </Menu>
                                    </>
                                )}
                            </Box>

                            <Box sx={{flexGrow: 0, display: { md: 'flex', xs: 'none' }}}>
                            {location.pathname === '/' ? (
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
                            ) : (
                                <>
                                    <IconButton
                                        id='profile-button'
                                        onClick={handleClickMd}
                                        aria-controls={openMd ? 'profile-menuMd' : undefined}
                                        aria-haspopup='true'
                                        aria-expanded={openMd ? 'true' : undefined}
                                    >
                                        <Stack>
                                        <Avatar  {...stringAvatar(full_name)} />
                                        </Stack>
                                    </IconButton>
                                    <Menu
                                        id='profile-menuMd'
                                        anchorEl={anchorElProMd}
                                        open={openMd}
                                        onClick={handleCloseMd}
                                    >
                                        <MenuItem key={0} onClick={handleClose}>
                                            <Link sx={{cursor: 'pointer', textDecoration: 'none', }} onClick={() => {navigate('/dashboard/contents')}}>
                                                Manage Web Contents
                                            </Link>
                                        </MenuItem>
                                        <MenuItem key={1} onClick={handleClose}>
                                            <Link sx={{cursor: 'pointer', textDecoration: 'none', }} onClick={() => {navigate('/dashboard/transport')}}>
                                                Register Drivers
                                            </Link>
                                        </MenuItem>
                                        <MenuItem key={2} onClick={handleClose}>
                                            <Link sx={{cursor: 'pointer', textDecoration: 'none', }} onClick={() => {navigate('/dashboard/accounts')}}>
                                                Manage Account
                                            </Link>
                                        </MenuItem>
                                        <MenuItem key={3} onClick={handleClose}>
                                            <Link sx={{cursor: 'pointer', textDecoration: 'none', display: 'inline-flex'}} onClick={() => {handleLogout()}}>
                                                <Logout fontSize='small' sx={{ mr: 1,}}/>
                                                <Typography>Logout</Typography>
                                            </Link>
                                        </MenuItem>
                                        {/* <ListItemIcon >
                                            <Logout fontSize='small'/>
                                            <Typography>Logout</Typography>
                                        </ListItemIcon> */}
                                    </Menu>
                                </>
                            )}
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
                                AELAPH-DEJEN CONVENTION
                            </Typography>
                        </Toolbar>
                    </Container>
                </AppBar>
            </Box>
            )
        } else {
            return (<></>)
        }
}

export default NavBar;