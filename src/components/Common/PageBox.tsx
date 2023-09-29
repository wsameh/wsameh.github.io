import React, { ReactNode, useRef, useEffect } from 'react'
import { useLocation } from 'react-router-dom'


// Material UI Components
import { Box } from '@mui/material'

// Props Interface
interface IPageBox {
  children: ReactNode
}

const PageBox: React.FC<IPageBox> = ({children}) => {

  // Refs
  const boxRef = useRef<HTMLDivElement>();

  // Navigation
  const location = useLocation()

  // Effects
  useEffect(() => {
   boxRef?.current?.scrollIntoView( { behavior: 'smooth' } )
  }, [location])

  return (
    <Box ref={boxRef}
      sx={{
        padding: {xs: '80px 20px 60px 20px', md: '120px 100px 60px 100px'},
        minHeight: '800px'
      }}
    >
      {children}
    </Box>
  )
}

export default PageBox
