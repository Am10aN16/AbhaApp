import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Logo from '../assets/logoAmbula.png'
import Tooltip from '@mui/material/Tooltip';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';

function Navbar() {  

    return (
        <AppBar position="static" sx={{ background:'#e1e5ff', boxShadow: 'none'}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{
                    display: { md: 'flex' },
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}>
                    <img src={Logo} alt="Logo" style={{
                        width: '150px',
                        height: '40px',
                        display: 'block',
                    }} />

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open Notifications">
                            <NotificationsActiveOutlinedIcon color='primary' />
                        </Tooltip>

                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Navbar;
