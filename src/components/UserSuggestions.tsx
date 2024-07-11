import React, { useState } from 'react';
import { Button, Box, Typography, TextField, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUserId } from '../store/slices/userSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const UserSuggestions: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState('');
    const userInput = useSelector((state: RootState) => state.user.userID);

    const handleContinue = () => {
        dispatch(setUserId(inputValue));
        navigate('/create-password');
    };

    const handleInputChange = (value: string) => {
        setInputValue(value);
    };

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
            <Typography variant='h5' sx={{ fontWeight: 600, color: 'blue' }}>Congratulations! <br /><p style={{ color: '#000' }}>You have successfully created your ABHA number</p> </Typography> 
            <Box className="container" sx={{ width: '100%', maxWidth: '600px', padding: '20px', border: '1px solid #c6ceff', background:'#c6ceff', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', my: 2 }}>
                <TextField
                    label="Username"
                    value={inputValue}
                    onChange={(e) => handleInputChange(e.target.value)}
                    InputProps={{
                        endAdornment: <Typography variant="subtitle1">@abdm</Typography>,
                    }}
                    fullWidth
                    sx={{ marginBottom: '20px', background:'#fff', borderRadius: '12px' }}
                />
                <Grid container spacing={2} justifyContent="center">
                    <Grid item>
                        <Button variant="outlined" sx={{ background: '#fff', color: '#c6ceff' }} onClick={() => handleInputChange('User 1')}>User 1</Button>
                    </Grid>
                    <Grid item>
                        <Button variant="outlined" sx={{ background: '#fff', color: '#c6ceff' }} onClick={() => handleInputChange('User 2')}>User 2</Button>
                    </Grid>
                    <Grid item>
                        <Button variant="outlined" sx={{ background: '#fff', color: '#c6ceff' }} onClick={() => handleInputChange('User 3')}>User 3</Button>
                    </Grid>
                </Grid>
                <Button variant="contained" onClick={handleContinue} fullWidth sx={{ marginTop: '20px', borderRadius: 20, background: '#0047AB' }}>
                    Continue
                </Button>
            </Box>
        </Box>
    );
};

export default UserSuggestions;
