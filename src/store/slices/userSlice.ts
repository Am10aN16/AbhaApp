// userSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProfileDetails {
    name: {
        firstName: string;
        middleName?: string;
        lastName: string;
    };
    dob: {
        year: string;
        month: string;
        date: string;
    };
    gender: string;
    contactDetails: {
        phoneNumber: string;
        email: string;
    };
    addressDetails: {
        address: string;
        pinCode: string;
        state: string;
        district: string;
    };
}

interface UserState {
    mobileNumber: string;
    otp: string;
    profileDetails: ProfileDetails;
    userID: string;
}



const initialState: UserState = {
    mobileNumber: '',
    otp: '',
    profileDetails: {
        name: {
            firstName: '',
            middleName: '',
            lastName: ''
        },
        dob: {
            year: '',
            month: '',
            date: ''
        },
        gender: '',
        contactDetails: {
            phoneNumber: '',
            email: ''
        },
        addressDetails: {
            address: '',
            pinCode: '',
            state: '',
            district: ''
        }
    },
    userID: ''
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setMobileNumber(state, action: PayloadAction<string>) {
            state.mobileNumber = action.payload;
        },
        setOtp(state, action: PayloadAction<string>) {
            state.otp = action.payload;
        },
        setProfileDetails(state, action: PayloadAction<ProfileDetails>) {
            state.profileDetails = action.payload;
        },
        setUserId(state, action: PayloadAction<string>) {
            state.userID = action.payload;
        },
        resetUserState(state) {
            state.mobileNumber = '';
            state.otp = '';
            state.profileDetails = initialState.profileDetails;
            state.userID = '';
        }
    }
});

export const { setMobileNumber, setOtp, setProfileDetails, setUserId, resetUserState } = userSlice.actions;

export default userSlice.reducer;
