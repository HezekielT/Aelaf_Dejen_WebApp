import { Grid, Tabs, Tab, Card, 
    Container, Paper, Box } from '@mui/material';
import PropTypes from 'prop-types';
// import LogoutIcon from '@mui/icons-material/Logout';
import ResetPassword from '../Admin_Auth/ResetPassword';
import React from 'react';
import AddAdmin from './Add_Admin';
import { useLocation } from 'react-router-dom';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    
    return(
        <Paper sx={{  backgroundColor: '#f5f5f5', minHeight: '85vh' }}
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        {...other}
        >
            {value === index && (
                    <Box sx={{ p: 3}}>
                    {children}
                </Box>
            )}
        </Paper>
    )
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
}

function tabProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

function Manage_Account(props) {
    const location = useLocation();
    const [value, setValue ] = React.useState(0);
    const handleChange = (event, newValue ) => {
        setValue(newValue);
    }
    function getName() {
        const name = localStorage.getItem('pri');
        
        if( name !== null ) {
          if( name === undefined ) {
            return ''
          } else {
            return name
          }
        }
        return ''
      }
    
    const privilege = getName()
    
    return (
        <Container maxWidth="lg"
         sx={{
             pt: '8%',
             
            }}
        >
            <Grid container spacing={2}>
                <Grid item sx={{ height: '86vh', display: {xs: 'none', lg: 'flex'}}}>
                    <Card
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            backgroundColor: (theme) =>
                            theme.palette.mode === 'light'
                            ? theme.palette.grey[100]
                            : theme.palette.grey[900],
                            minHeight: '85vh',
                            mt: 2,
                            mb: 4, 
                            pl: 2
                        }}
                    >
                        <Tabs
                            orientation='vertical'
                            value={value}
                            onChange={handleChange}
                            scrollButtons="auto"
                            aria-label="Vertical Tabs"
                            sx={{px: 4, mt: 33,borderRight: 1, borderColor: 'divider', }}
                        >
                            <Tab label="Reset Password" {...tabProps(0)}/>
                            {(privilege !== '' && privilege  === 'super_admin') ? (
                                <Tab label="Add New Admin" {...tabProps(1)}/>
                            ) : ( 
                                <></>
                            )}
                        </Tabs>
                    </Card>
                </Grid>
                <Grid item xs={12} sx={{ display: {xs: 'flex', lg: 'none'}}}>
                    <Card
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            backgroundColor: (theme) =>
                            theme.palette.mode === 'light'
                            ? theme.palette.grey[100]
                            : theme.palette.grey[900],
                            py: 2,
                            px: 6,
                            width: '100%'
                        }}
                    >
                        <Tabs
                            orientation='horizontal'
                            value={value}
                            onChange={handleChange}
                            scrollButtons="auto"
                            variant="scrollable"
                        >
                            

                                <Tab label="Change Password" {...tabProps(0)}/> 
                                {(privilege !== '' && privilege  === 'super_admin') ? (
                                    <Tab label="Add New Admin" {...tabProps(1)}/>
                                  ) : ( 
                                     <></>
                                 )}
                        </Tabs>
                    </Card>
                </Grid>
                <Grid item xs={12} md={12} lg={9}
                    sx={{
                        minHeight: '80vh',
                        mb: 4
                    }}
                >
                    <Card
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            backgroundColor: (theme) =>
                            theme.palette.mode === 'light'
                            ? theme.palette.grey[100]
                            : theme.palette.grey[900],
                            minHeight: '77vh',
                            mt: 2,
                            mb: 4, 
                        }}
                    >
                        <TabPanel value={value} index={0}>
                            <ResetPassword />
                        </TabPanel>
                        {(privilege !== '' && privilege  === 'super_admin') ? (
                            <TabPanel value={value} index={1}>
                                <AddAdmin />
                            </TabPanel>
                         ) : ( 
                            <></>
                        )} 
                        
                    </Card> 
                </Grid>
            </Grid>
        </Container>
    );
}

export default Manage_Account;