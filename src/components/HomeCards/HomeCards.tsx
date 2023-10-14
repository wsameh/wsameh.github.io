// React
import { useState, useEffect } from 'react'

// Data
import navCards from '../../data/NavCards'

// Material UI Components
import { Box } from '@mui/material'

// App Components
import NavCard from './NavCard'

// App Functional Component
const HomeCards = () => {

  // States
  const [windowWidth, setWindowWidth] = useState<number>(0)

  // Hooks
  useEffect(() => {
    window.addEventListener('resize', windowSizeHandler);

    return () => {
      window.removeEventListener('resize', windowSizeHandler);
    };
  }, [])

  // Event Handlers
  const windowSizeHandler = () => {
    setWindowWidth(window.innerWidth)
  }

  // JSX
  return (
    <Box 
      width='100%' 
      display='flex' 
      flexWrap='wrap' 
      justifyContent='center'
    >
      {navCards.map(item => <NavCard content={item}/> )}
    </Box>
  )
}

export default HomeCards
