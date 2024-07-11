import React from 'react';
import { Box, Typography } from '@mui/material';
import Logo1 from '../assets/nhaLogo.png';  // Import your first logo image here
import Logo2 from '../assets/abdmLogo.png';  // Import your second logo image here
import BackgroundImage from '../assets/footer.png';  // Import your background image here

const Footer: React.FC = () => {
    return (
        <Box
            sx={{
                width: '100%',
                textAlign: 'center',
                backgroundColor: '#f8f8f8',
                py: 4
            }}
        >
            <Box
                component="img"
                src={BackgroundImage}
                alt="Background"
                sx={{
                    maxWidth: '500px',
                    minWidth: '200px',
                    height: { xs: '200px', md: '500px' },  // Adjust height for mobile and desktop
                    objectFit: 'cover'
                }}
            />
            <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
                APPROVED BY
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2, mb: 2 }}>
                <Box component="img" src={Logo1} alt="Logo 1" sx={{ maxHeight: '200px', maxWidth: '100px' }} />
                <Box component="img" src={Logo2} alt="Logo 2" sx={{ maxHeight: '200px', maxWidth: '100px' }} />
            </Box>
            <Typography variant="body2" sx={{ maxWidth: '600px', mx: 'auto', px: 2 }}>
                Your personal health data is 100% safe and secure.<br />View <span style={{ color: '#ab1919', fontWeight: 600 }}>Terms & Conditions</span> and <span style={{ color: '#ab1919', fontWeight: 600 }}>Privacy Policy</span>
            </Typography>
        </Box>
    );
};


export default Footer;
