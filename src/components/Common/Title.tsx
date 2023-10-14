import React, { useEffect, useState, useRef, ReactNode} from 'react'

// Material UI Components
import { Box, Typography } from '@mui/material'

// Helper Functions
const isInViewport = (element: React.MutableRefObject<HTMLDivElement | undefined>) => {
    const rect = element.current?.getBoundingClientRect();
    if(rect !== undefined){
      return (
        rect.top >= 0 &&
        rect.top <= 450 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
    return false
  }

// Types
type TitleProps = {
    children: ReactNode
}

// App Functional Component
const Title: React.FC<TitleProps> = ({children}) => {

    // States
    const [inViewPort, setInViewPort] = useState<boolean>(false)

    // Refs
    const ref = useRef<HTMLDivElement>();

    // Hooks
    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)
        setInViewPort(isInViewport(ref))
    }, [])

    // Event Handlers
    const scrollHandler = () => {
        setInViewPort(isInViewport(ref))
    }

    return (
        <Box>
            <Typography variant='appHeading'>
                {children}
            </Typography>
            <Box
                ref={ref}
                sx={{
                    width: inViewPort ? `60%` : '0',
                    height: '0',
                    marginY: 'auto',
                    borderBottom: (theme) => `2px solid ${theme.palette.appPrimaryLight.dark}`,
                    marginBottom: '15px',
                    transition: inViewPort ? 'width 3s' : ''
                }}
            />
        </Box>
    )
}

export default Title
