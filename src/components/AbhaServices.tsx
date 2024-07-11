import React from 'react'
import { Box, Paper, Typography } from '@mui/material'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import UploadFileSharpIcon from '@mui/icons-material/UploadFileSharp';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import BrandingWatermarkIcon from '@mui/icons-material/BrandingWatermark';
import { useNavigate } from 'react-router-dom';

const AbhaServices: React.FC = () => {
    const navigate = useNavigate();
    return (
        <>
            <Typography sx={{
                m: 2,
                fontWeight: 600,
                fontSize: 18,
            }}>ABHA Services</Typography>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: { xs: 2, md: 2 },
                    '& > :not(style)': {
                        
                        width: '100%',
                        height: 200,
                        border: '1px solid  #c6ceff',
                        borderRadius: '20px',
                    },
                }}
            >

                <Paper elevation={3} sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                   
                }}>
                    <Card sx={{ maxWidth: 250, height: 150, mx:{xs:0, md:4},  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', boxShadow: 'none', cursor:'pointer' }}
                        onClick={() => navigate('/create-abha-address')}
                    >
                        <BrandingWatermarkIcon color="primary" sx={{ fontSize: 50, border: '1px solid #b0d8ff', p: 1, borderRadius: '7px' }} />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div" sx={{ textAlign: 'center', fontSize: '16px' }}>
                                Create ABHA
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ maxWidth: 250, height: 150, mx: { xs: 0, md: 4 }, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', boxShadow: 'none' }}>
                        <UploadFileSharpIcon color="primary" sx={{ fontSize: 50, border: '1px solid #b0d8ff', p: 1, borderRadius: '7px' }} />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div" sx={{ textAlign: 'center', fontSize: '16px' }}>
                                My Health Records
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ maxWidth: 250, height: 150, mx: { xs: 0, md: 4 },  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', boxShadow: 'none' }}>
                        <QrCodeScannerIcon color="primary" sx={{ fontSize: 50, border: '1px solid #b0d8ff', p: 1, borderRadius: '7px' }} />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div" sx={{ textAlign: 'center', fontSize:{xs:'14px', md: '16px'} }}>
                                Scan for OPD Booking
                            </Typography>
                        </CardContent>
                    </Card>
                </Paper>
            </Box>
        </>
    )
}

export default AbhaServices