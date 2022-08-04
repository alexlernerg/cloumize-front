import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { UserProvider } from './context/userContext';
import Landing from './Pages/Landing/LandingPage';
import Auth from './Pages/AuthPage/AuthPage';
import Error from './Pages/ErrorPage/ErrorPage';
import SavingsFinder from './components/Profile/SavingsFinder/SavingsFinder';
import ComputeFinder from './components/Profile/ComputeFinder/ComputeFinder';
import ExistingPlans from './components/Profile/ExistingPlans/ExistingPlans';
import SavingsPlans from './components/Profile/SavingsPlans/SavingsPlans';
import Account from './components/Profile/Account/Account';
import User from './components/Profile/User/User';
import Dashboard from './components/Profile/Dashboard/Dashboard';
import AuthCover from "./components/Auth/Cover/Cover";
import './App.scss';

export default function App() {
  return (
    <div className='App'>
      <UserProvider>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/auth' element={<AuthCover/>}/>
          <Route path='/signin' element={<Auth />} />
          <Route path='/signup' element={<Auth />} />
          <Route path='/user' element={<Dashboard />} />
          <Route path='/user/savingsFinder' element={<SavingsFinder />} />
          <Route path='/user/computeFinder' element={<ComputeFinder />} />
          <Route path='/user/existingPlans' element={<ExistingPlans />} />
          <Route path='/user/savingsPlans' element={<SavingsPlans />} />
          <Route path='/user/account' element={<Account />} />
          <Route path='/user/:id' element={<User />} />
          {/* <Route path='/*' element={<Error />} /> */}
        </Routes>
      </UserProvider>
    </div>
  );
}
