// React Libraries
import React from 'react'

// Material UI Components
import { Box, Typography, Fade } from '@mui/material'

// Data
import { ICarouselData } from '../../data/CarouselData'

// Props Interface
interface CarouselOverlayProps {
    item: ICarouselData
    enterSlideIndex: number
  }

// App Functional Component
const CarouselOverlay: React.FC<CarouselOverlayProps> = ({ item, enterSlideIndex }) => {
    
    // JSX
    return (
        <Fade 
            in={ item.index == enterSlideIndex } 
            easing={{'enter': 'cubic-bezier(0, 0.4, 0.6, 1)', 'exit': 'cubic-bezier(0, 0.4, 0.6, 1)'}}
        >
            <Box
                sx={{
                    position: 'absolute',
                    width: '60%',
                    left: '5%',
                    top: '80%',
                    zIndex: '10'
                }}
            >
                <Typography variant='carouselHeading'>
                    {item.discription1}
                </Typography>
                <Typography variant='carouselHeading'>
                    {item.discription2}
                </Typography>
            </Box>
        </Fade>
    )
}

// Exports
export default CarouselOverlay
