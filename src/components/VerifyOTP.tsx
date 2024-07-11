import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setOtp } from '../store/slices/userSlice';
import { TextField, Button, Box, Typography, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../store/store';

const VerifyOTP: React.FC = () => {
    const [otp, setOtpState] = useState(Array(6).fill(''));
    const [error, setError] = useState('');
    const [timer, setTimer] = useState(30);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const mobileNumber = useSelector((state: RootState) => state.user.mobileNumber);

    useEffect(() => {
        if (timer > 0) {
            const countdown = setInterval(() => {
                setTimer(timer - 1);
            }, 1000);
            return () => clearInterval(countdown);
        }
    }, [timer]);

    const handleOtpChange = (index: number, value: string) => {
        if (/^\d?$/.test(value)) { // Only allow digits
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtpState(newOtp);

            // Automatically focus next field if value is entered
            if (value && index < 5) {
                const nextSibling = document.getElementById(`otp-${index + 1}`);
                if (nextSibling) {
                    nextSibling.focus();
                }
            }
        }
    };

    const handleVerifyOtp = () => {
        const otpString = otp.join('');
        if (otpString === '123456') {
            dispatch(setOtp(otpString));
            navigate('/profile-details');
        } else {
            setError('Invalid OTP');
        }
    };

    const handleResendOtp = () => {
        setTimer(30);
        // Logic to resend OTP goes here
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '70vh',
                p: { xs: 2, sm: 2 }
            }}
        >
            <Typography variant='h5' sx={{ fontWeight: 600 }}>Step 2: Verify OTP</Typography>
            <Box className="container" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', p: { xs: 1, sm: 2 }, gap: 2, mx: 4, border: '1px solid #c6ceff', my: 4, borderRadius: '20px', background: '#c6ceff' }}>
                <Typography variant="h6">Enter the OTP sent to +91 {mobileNumber}</Typography>

                <Box sx={{ display: 'flex', gap: 1 }}>
                    {otp.map((value, index) => (
                        <TextField
                            key={index}
                            id={`otp-${index}`}
                            value={value}
                            onChange={(e) => handleOtpChange(index, e.target.value)}
                            error={!!error}
                            inputProps={{ maxLength: 1, style: { textAlign: 'center' } }}
                            sx={{ width: 40, background:'#fff', borderRadius:'12px' }}
                        />
                    ))}
                </Box>

                {error && <Typography color="error">{error}</Typography>}

                <Button variant="contained" onClick={handleVerifyOtp} sx={{ borderRadius: 20, mt: 2, background: '#0047AB' }}>
                    Verify and Continue
                </Button>

                <Grid container justifyContent="space-between" alignItems="center" sx={{ mt: 2, width: '100%' }}>
                    <Grid item>
                        <Typography variant="body2">Didn't receive the OTP?</Typography>
                    </Grid>
                    <Grid item>
                        {timer > 0 ? (
                            <Typography variant="body2">Resend OTP  00:{timer} </Typography>
                        ) : (
                            <Button variant="text" onClick={handleResendOtp}>Resend OTP</Button>
                        )}
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default VerifyOTP;
