import React from 'react';
import { Stepper, Step, StepLabel, Box ,useMediaQuery, useTheme } from '@mui/material';

const steps = [
    'Create Abha Address',
    'Verify OTP',
    'Profile Details',
    'User Suggestions',
    'Create Password',
    'Completion',
];

const HorizontalStepper: React.FC<{ activeStep: number }> = ({ activeStep }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <Box sx={{
            width: '100%',
            marginTop: 2,
            marginBottom: 2,
            display: 'flex',
            flexDirection: isMobile ? 'row' : 'row',
            alignItems: 'center',
            justifyContent: 'center',
            overflowX:'auto'
        }}>
            <Stepper activeStep={activeStep} alternativeLabel orientation={isMobile ? 'horizontal' : 'horizontal'}>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
        </Box>
    );
};

export default HorizontalStepper;
