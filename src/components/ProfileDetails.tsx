import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setProfileDetails } from '../store/slices/userSlice';
import { TextField, Button, Box, Typography, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ProfileDetails: React.FC = () => {
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [year, setYear] = useState('');
    const [month, setMonth] = useState('');
    const [date, setDate] = useState('');
    const [gender, setGender] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [pinCode, setPinCode] = useState('');
    const [state, setState] = useState('');
    const [district, setDistrict] = useState('');
    const [error, setError] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Dropdown options
    const years = Array.from({ length: 100 }, (_, i) => (new Date().getFullYear() - 99) + i).reverse(); // Last 100 years
    const months = Array.from({ length: 12 }, (_, i) => new Date(0, i).toLocaleString('default', { month: 'long' }));
    const dates = Array.from({ length: 31 }, (_, i) => i + 1); // Assuming 31 days for simplicity
    const states = [
        "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat",
        "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra",
        "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
        "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
    ];
    const districts = [
        "Delhi", "Gurgaon", "Noida", "Jaipur", "Lucknow", "Chandigarh",
         "Mumbai", "Ahmedabad", "Pune", "Surat", "Nagpur", "Indore",
          "Kolkata", "Patna", "Ranchi", "Guwahati", "Bhubaneswar",
           "Raipur", "Bangalore", "Chennai", "Hyderabad", "Kochi", 
           "Thiruvananthapuram", "Visakhapatnam", "Bhopal", "Nagpur", 
           "Gwalior", "Jabalpur", "Raipur", "Indore"
    ];

    const handleNext = () => {
        if (validateForm()) {
            const profileDetails = {
                name: {
                    firstName,
                    middleName,
                    lastName
                },
                dob: {
                    year,
                    month,
                    date
                },
                gender,
                contactDetails: {
                    phoneNumber,
                    email
                },
                addressDetails: {
                    address,
                    pinCode,
                    state,
                    district
                }
            };
            dispatch(setProfileDetails(profileDetails));
            navigate('/user-suggestions');
        } else {
            setError('Please fill in all mandatory fields');
        }
    };

    const validateForm = () => {
        return (
            firstName !== '' &&
            lastName !== '' &&
            year !== '' &&
            month !== '' &&
            date !== '' &&
            gender !== '' &&
            phoneNumber !== '' &&
            email !== '' &&
            address !== '' &&
            pinCode !== '' &&
            state !== '' &&
            district !== ''
        );
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
            <Typography variant='h5' sx={{ fontWeight: 600, marginBottom: '20px' }}>Step 4: Enter Profile Details</Typography>
            <Box className="container" sx={{ width: '100%', maxWidth: '600px', padding: '20px',  }}>
                <Box sx={{ width: '100%', marginBottom: '20px', p: 2, gap: 2, my: 2, border: '1px solid #c6ceff', borderRadius: '10px', background: '#c6ceff', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
                    <Typography variant="h6">Name</Typography>
                    <TextField
                        label="First Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        error={!!error}
                        helperText={error}
                        className="textField"
                        fullWidth
                        required
                        sx={{ mt: 2 , background:'#fff', borderRadius:'16px', border:'none'}}
                    />
                    <TextField
                        label="Middle Name"
                        value={middleName}
                        onChange={(e) => setMiddleName(e.target.value)}
                        className="textField"
                        fullWidth
                        sx={{ mt: 2, background: '#fff', borderRadius: '16px'}}
                    />
                    <TextField
                        label="Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        error={!!error}
                        helperText={error}
                        className="textField"
                        fullWidth
                        required
                        sx={{ mt: 2, background: '#fff', borderRadius: '16px'}}
                    />
                </Box>
                <Box sx={{ width: '100%', marginBottom: '20px', p: 2, gap: 2, my: 2, border: '1px solid #c6ceff', borderRadius: '10px', background: '#c6ceff', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
                    <Typography variant="h6">DOB</Typography>
                    <FormControl fullWidth required sx={{marginTop:'10px'}}>
                        <InputLabel>Year</InputLabel>
                        <Select
                            sx={{background: '#fff', borderRadius: '16px'}}
                            value={year}
                            onChange={(e) => setYear(e.target.value as string)}
                        >
                            {years.map((year) => (
                                <MenuItem key={year} value={year}>{year}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <FormControl fullWidth required sx={{ marginTop: '10px' }}>
                        <InputLabel>Month</InputLabel>
                        <Select
                            sx={{  background: '#fff', borderRadius: '16px'}}
                            value={month}
                            onChange={(e) => setMonth(e.target.value as string)}
                        >
                            {months.map((month, index) => (
                                <MenuItem key={index} value={month}>{month}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <FormControl fullWidth required sx={{ marginTop: '10px' }}>
                        <InputLabel>Date</InputLabel>
                        <Select
                            sx={{  background: '#fff', borderRadius: '16px'}}
                            value={date}
                            onChange={(e) => setDate(e.target.value as string)}
                        >
                            {dates.map((date) => (
                                <MenuItem key={date} value={date}>{date}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Box>
                <Box sx={{ width: '100%', marginBottom: '20px', p: 2, gap: 2, my: 2, border: '1px solid #c6ceff', borderRadius: '10px', background: '#c6ceff', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
                    <Typography variant="h6">Gender</Typography>
                    <FormControl fullWidth required sx={{ mt: 2 }}>
                        <InputLabel>Gender</InputLabel>
                        <Select
                            sx={{  background: '#fff', borderRadius: '16px'}}
                            value={gender}
                            onChange={(e) => setGender(e.target.value as string)}
                        >
                            <MenuItem value="male">Male</MenuItem>
                            <MenuItem value="female">Female</MenuItem>
                            <MenuItem value="other">Other</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Box sx={{ width: '100%', marginBottom: '20px', p: 2, gap: 2, my: 2, border: '1px solid #c6ceff', borderRadius: '10px', background: '#c6ceff', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
                    <Typography variant="h6">Contact Details</Typography>
                    <TextField
                        label="Phone Number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="textField"
                        fullWidth
                        required
                        sx={{ mt: 2, background: '#fff', borderRadius: '16px'}}
                    />
                    <TextField
                        label="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        error={!!error}
                        helperText={error}
                        className="textField"
                        fullWidth
                        required
                        sx={{ mt: 2, background: '#fff', borderRadius: '16px', }}
                    />
                </Box>
                <Box sx={{ width: '100%', marginBottom: '20px', p: 2, gap: 2, my: 2, border: '1px solid #c6ceff', borderRadius: '10px', background: '#c6ceff', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
                    <Typography variant="h6">Address Details</Typography>
                    <TextField
                        label="Address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="textField"
                        fullWidth
                        required
                        sx={{ mt: 2, background: '#fff', borderRadius: '16px'}}
                    />
                    <TextField
                        label="PIN Code"
                        value={pinCode}
                        onChange={(e) => setPinCode(e.target.value)}
                        className="textField"
                        fullWidth
                        required
                        sx={{ mt: 2, background: '#fff', borderRadius: '16px'}}
                    />
                    <FormControl fullWidth required sx={{ marginTop: '10px' }}>
                        <InputLabel>State</InputLabel>
                        <Select
                            sx={{  background: '#fff', borderRadius: '16px'}}
                            value={state}
                            onChange={(e) => setState(e.target.value as string)}
                        >
                            {states.map((state, index) => (
                                <MenuItem key={index} value={state}>{state}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <FormControl fullWidth required sx={{ marginTop: '10px' }}>
                        <InputLabel>District</InputLabel>
                        <Select
                            sx={{background: '#fff', borderRadius: '16px'}}
                            value={district}
                            onChange={(e) => setDistrict(e.target.value as string)}
                        >
                            {districts.map((district, index) => (
                                <MenuItem key={index} value={district}>{district}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Box>
                {error && <Typography color="error">{error}</Typography>}
                <Button variant="contained" onClick={handleNext} className="button" fullWidth sx={{ borderRadius: 20, background:'#0047AB'}}>
                   Continue
                </Button>
            </Box>
        </Box>
    );
};

export default ProfileDetails;
