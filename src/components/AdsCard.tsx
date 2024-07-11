import React from 'react';
import { Box, Button, Typography } from '@mui/material';

interface AdsCardProps {
    paragraph?: string;
    customButtonText?: React.ReactNode;
    buttonOnClick?: () => void;
    imageUrl?: string;
    customTitle?: React.ReactNode;
    customText?: React.ReactNode;
}

const AdsCard: React.FC<AdsCardProps> = ({
    paragraph,
    customButtonText,
    buttonOnClick,
    imageUrl,
    customTitle,
    customText
}) => {
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
                background: '#fff',
                boxShadow: '0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12)',
                textAlign: { xs: 'center', md: 'left' }
            }}
        >
            <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-start' }}>
                <img src={imageUrl} alt={paragraph} style={{ maxWidth: '100%', height: '350px' }} />
            </Box>
            <Box sx={{ flex: 2, m:0, display: 'flex', flexDirection: 'column', alignItems: { xs: 'flex-end', md: 'flex-end' }, textAlign: { xs: 'center', md: 'left' }, height: '100%' }}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 ,px:2,fontSize:{xs: '28px', md: '46px'}}}>
                    {customTitle}
                </Typography>
                <Typography variant="body1" paragraph>
                    {customText}
                </Typography>
                <Typography variant="body1" paragraph sx={{px:2}}>
                    {paragraph}
                </Typography>
                <Box className='AdBtnBox' sx={{ display: 'flex', position: 'sticky', alignItems: 'flex-end', justifyContent: 'flex-end', border: ' 1px double #c6ceff', background:'#c6ceff' , p:6, borderRadius: '20px 0 20px 0', mr: -2,mb:-2 }}>
                    <Button variant="contained" color="primary" onClick={buttonOnClick} sx={{ borderRadius: '20px', mt: 'auto' , px:4,py:2,background:'#fff', color:'#000'}}>
                        {customButtonText}
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default AdsCard;
