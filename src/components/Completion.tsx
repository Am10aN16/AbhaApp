import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Completion: React.FC = () => {
    const navigate = useNavigate();
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                padding: '20px',
            }}
        >
        <Box className="container" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', p: 4, mx: 6, gap: 2, border: '1px solid #1976d2', my: 4, borderRadius: '20px' }}>
            <Typography variant="h4">Congratulations!</Typography>
            <Typography variant="body1">You have completed the process.</Typography>
                <Button variant="contained" onClick={() => navigate('/')} className="button" sx={{ borderRadius: 20, background: '#0047AB' }}>
                Go to Home
            </Button>
        </Box>
        </Box>
    );
};

export default Completion;
