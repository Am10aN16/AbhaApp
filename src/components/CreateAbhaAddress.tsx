import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setMobileNumber } from '../store/slices/userSlice';
import { TextField, Button, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const CreateAbhaAddress: React.FC = () => {
    const [mobile, setMobile] = useState('');
    const [error, setError] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const validateMobile = (mobile: string) => {
        const isValid = /^\d{10}$/.test(mobile);
        setError(isValid ? '' : 'Invalid mobile number');
        return isValid;
    };

    const handleSubmit = () => {
        if (validateMobile(mobile)) {
            dispatch(setMobileNumber(mobile));
            navigate('/verify-otp');
        }
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '70vh',
                p: {xs: 2,sm: 2}
            }}
        >
            <Typography variant='h5' sx={{ fontWeight: 600 , color:'blue' }}>Welcome! <br /><p style={{color:'#000'}}>You are about to create your ABHA number</p> </Typography> 
        <Box className="container" 
        sx={{ display: 'flex',
         flexDirection: 'column',
          alignItems: 'center', 
          justifyContent: 'center', 
          p:4,
          gap:2,
          mx:4, 
          background:'#fff',
          border:'1px solid #1976d2',
          my:4, 
          borderRadius:'20px',
            width: { xs: '100%', sm: '80%', md: '60%', lg: '50%' }, 
            maxWidth: '400px', 
          }}>
            <TextField
                label="Enter Mobile Number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                error={!!error}
                helperText={error}
                className="textField"
            />
                <Button variant="contained" onClick={handleSubmit} className="button" sx={{ borderRadius: 20, background: '#0047AB' }}>
                Continue
            </Button>
        </Box>
            <Typography  sx={{ fontWeight: 500 }}>Already Have ABHA number? <Button sx={{ fontWeight: 600 }}>Click here</Button></Typography> 
        </Box>
    );
};

export default CreateAbhaAddress;
