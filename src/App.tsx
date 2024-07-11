import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { Container } from '@mui/material';
import { Provider } from 'react-redux';
import store from './store/store';
import './App.css'
import HomePage from './components/HomePage';
import HorizontalStepper from './components/Stepper';
import CreateAbhaAddress from './components/CreateAbhaAddress';
import VerifyOTP from './components/VerifyOTP';
import ProfileDetails from './components/ProfileDetails';
import UserSuggestions from './components/UserSuggestions';
import CreatePassword from './components/CreatePassword';
import Completion from './components/Completion';

const AppContent: React.FC = () => {
  const location = useLocation();

  const steps = [
    '/create-abha-address',
    '/verify-otp',
    '/profile-details',
    '/user-suggestions',
    '/create-password',
    '/completion',
  ];

  const activeStep = steps.indexOf(location.pathname);
  console.log();
  

  return (
    <Container>
      {location.pathname === '/' ? null : <HorizontalStepper activeStep={activeStep} />}
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/create-abha-address" Component={CreateAbhaAddress} />
        <Route path="/verify-otp" Component={VerifyOTP} />
        <Route path="/profile-details" Component={ProfileDetails} />
        <Route path="/user-suggestions" Component={UserSuggestions} />
        <Route path="/create-password" Component={CreatePassword} />
        <Route path="/completion" Component={Completion} />
      </Routes>
    </Container>
  );
};

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <AppContent />
      </Router>
    </Provider>
  );
};

export default App;
