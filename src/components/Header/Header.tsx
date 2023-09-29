// React Libraries
import React, { useEffect } from 'react';

// Material UI Compnents
import {
  AppBar,
  Box,
} from '@mui/material'

// App Components
import AppToolbar from './AppToolbar';
import SideNav from '../Navbar/SideNav';

// Data
import navLinks from '../../data/NavLinks'


// App Functional Component
const Header: React.FC = () => {

  // States
  const [mobileOpen, setMobileOpen] = React.useState<boolean>(false);
  const [reduced, setReduced] = React.useState<boolean>(false);

  // Hooks


  useEffect(() => {
    document.addEventListener('scroll', isReduced)
  }, [])

  // Functions
  const drawerToggleHandler = () => {
      setMobileOpen((prevState) => !prevState);
  };

  const isReduced = () => {
    if(window.scrollY >= 100)
      setReduced(true)
    else
      setReduced(false)
  }

  // JSX
  return (
    <Box>
      <AppBar
        sx={{
          backgroundColor: {xs: 'appPrimary.dark', md: reduced ? 'appPrimary.dark' : 'appTransPrimary.dark'},
          color: 'appPrimary.contrastText',
          transition: 'background-color 0.3s ease-out'
        }}
      >
        <AppToolbar navLinks={navLinks} reduced={reduced} drawerToggleHandler={drawerToggleHandler} />
      </AppBar>
      <SideNav 
        open={mobileOpen} 
        drawerToggleHandler={drawerToggleHandler}
        navLinks={navLinks} 
      />
    </Box>
  );
}

// Exports
export default Header
