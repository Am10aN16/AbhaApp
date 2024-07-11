import React from 'react';
import { Box, Button, Typography } from '@mui/material';


interface TwoPartBoxProps {
    title: string;
    paragraph: string;
    buttonText: string;
    buttonOnClick: () => void;
    imageUrl: string;
}

const MultipleUseCard: React.FC<TwoPartBoxProps> = ({ title, paragraph, buttonText, buttonOnClick, imageUrl }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: 'center',
                justifyContent: 'space-between',
                p: 2,
                borderRadius: '20px',
                mx: 2,
                my: 2,
                background: ' #fff',
                boxShadow: ' 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12)'
            }}
        >
            <Box sx={{ flex: 1, p: 2 }}>
                <Typography variant="h4" gutterBottom sx={{fontWeight: 600}}>
                    {title}
                </Typography>
                <Typography variant="body1" paragraph>
                    {paragraph}
                </Typography>
                <Button variant="contained" color="primary" onClick={buttonOnClick} sx={{ borderRadius: '20px', background: '#0047AB' }}>
                    {buttonText}
                </Button>
            </Box>
            <Box sx={{ flex: 1, p: 2, display: 'flex', justifyContent: 'center' }}>
                <img src={imageUrl} alt={title} style={{ maxWidth: '100%', height: '250px' }} />
            </Box>
        </Box>
    );
};

export default MultipleUseCard;
