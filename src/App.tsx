// React Libraries
import React from 'react'
import { Outlet } from 'react-router-dom'

// Styles
import './App.css';

// App Components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'

// Material UI Components
import { Stack, } from '@mui/material'
import { AppAlert } from './components/Error/AppAlert';
import { AlertContextProvider } from './components/Context/AlertContext';

// Context Hooks
export const MainContainerHeight = React.createContext<number>(0)

// App Functional Component
function App() {

  // JSX
  return (
    <Stack sx={{postion: 'relative'}}>
      <Header/>
      <AlertContextProvider>
        <AppAlert/>
        <Outlet/>
      </AlertContextProvider>
      <Footer/>
    </Stack>
  );
}

// Exports
export default App;
