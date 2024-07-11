import React from 'react';
import { Box, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import DifferenceOutlinedIcon from '@mui/icons-material/DifferenceOutlined';
import LocalTaxiOutlinedIcon from '@mui/icons-material/LocalTaxiOutlined';
import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import VolunteerActivismOutlinedIcon from '@mui/icons-material/VolunteerActivismOutlined';

const OurServices: React.FC = () => {
    return (
        <>
            <Typography sx={{
                m: 2,
                fontWeight: 600,
                fontSize: 18,
            }}>Our Services</Typography>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    border: '1px solid  #c6ceff',
                    borderRadius: '20px',
                    mx: 2,
                    my: 2,
                    p: 2,
                    background:' #fff',
                    boxShadow: ' 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12)'
                }}
            >
                <Card sx={{ width: '30%', m: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <AddBoxOutlinedIcon color="primary" sx={{ fontSize: 50, p: 1, borderRadius: '7px' }} />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div" sx={{ textAlign: 'center', fontSize: '16px' }}>
                            Doctor Appointment
                        </Typography>
                    </CardContent>
                </Card>
                <Card sx={{ width: '30%', m: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <ScienceOutlinedIcon color="primary" sx={{ fontSize: 50, p: 1, borderRadius: '7px' }} />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div" sx={{ textAlign: 'center', fontSize: '16px' }}>
                            Book Lab Test
                        </Typography>
                    </CardContent>
                </Card>
                <Card sx={{ width: '30%', m: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <DifferenceOutlinedIcon color="primary" sx={{ fontSize: 50, p: 1, borderRadius: '7px' }} />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div" sx={{ textAlign: 'center', fontSize: '16px' }}>
                            Health Insaurance
                        </Typography>
                    </CardContent>
                </Card>
                <Card sx={{ width: '30%', m: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <ReceiptLongOutlinedIcon color="primary" sx={{ fontSize: 50, p: 1, borderRadius: '7px' }} />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div" sx={{ textAlign: 'center', fontSize: '16px' }}>
                            Scan for OPD Booking
                        </Typography>
                    </CardContent>
                </Card>
                <Card sx={{ width: '30%', m: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <VolunteerActivismOutlinedIcon color="primary" sx={{ fontSize: 50, p: 1, borderRadius: '7px' }} />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div" sx={{ textAlign: 'center', fontSize: '16px' }}>
                           Book Home Care
                        </Typography>
                    </CardContent>
                </Card>
                <Card sx={{ width: '30%', m: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <LocalTaxiOutlinedIcon color="primary" sx={{ fontSize: 50, p: 1, borderRadius: '7px' }} />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div" sx={{ textAlign: 'center', fontSize: '16px' }}>
                            Book Ambulance
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
        </>
    );
};

export default OurServices;
