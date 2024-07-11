import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const CreatePassword: React.FC = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleContinue = () => {
        if (validatePassword(password) && password === confirmPassword) {
            navigate('/completion');
        } else {
            setError('Passwords do not match or do not meet criteria');
        }
    };

    const validatePassword = (password: string) => {
        // Regex for password validation: at least one digit, one uppercase, one lowercase, one special character
        const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;
        return regex.test(password);
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
            
            <Box className="container" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#fff', mx: 6, p: 4, gap: 2, border: '1px solid #c6ceff', my: 4, borderRadius: '20px', maxWidth: '400px' }}>
                <Typography variant='h5' sx={{ fontWeight: 600 }}>Create Password</Typography>
                <TextField
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    error={!!error}
                    helperText={error}
                    className="textField"
                    sx={{ borderColor:'#c6ceff'}}
                />
                <TextField
                    label="Confirm Password"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    error={!!error}
                    helperText={error}
                    className="textField"
                />
                <Box sx={{ textAlign: 'left', width: '100%', marginTop: '10px' }}>
                    <Typography variant="body2" sx={{ color: error ? '#f44336' : '#1976d2' }}>
                        Password must contain:
                    </Typography>
                    <Typography variant="body2" sx={{ color: validatePassword(password) ? '#4caf50' : '#f44336' }}>
                        - At least one number (0-9)
                    </Typography>
                    <Typography variant="body2" sx={{ color: validatePassword(password) ? '#4caf50' : '#f44336' }}>
                        - At least one uppercase letter (A-Z)
                    </Typography>
                    <Typography variant="body2" sx={{ color: validatePassword(password) ? '#4caf50' : '#f44336' }}>
                        - At least one lowercase letter (a-z)
                    </Typography>
                    <Typography variant="body2" sx={{ color: validatePassword(password) ? '#4caf50' : '#f44336' }}>
                        - At least one special character (!@#$%^&*)
                    </Typography>
                </Box>
                <Button variant="contained"  onClick={handleContinue} className="button" sx={{ borderRadius: 20, background: '#0047AB' }}>
                    Continue
                </Button>
                <Button variant="outlined" onClick={() => alert('Functionality under Construction')} className="button" sx={{ borderRadius: 20, color: '#0047AB', borderColor:'#0047AB'}}>
                    Skip for now
                </Button>
            </Box>
        </Box>
    );
};

export default CreatePassword;
