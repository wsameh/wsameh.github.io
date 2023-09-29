// React Libraries
import React, { useState, useEffect } from 'react'

// Material UI Components
import { Slide, Box } from '@mui/material'

// Data
import { ICarouselData } from '../../data/CarouselData'

// Props Interface
interface CarouselSlideProps {
  item: ICarouselData
  enterSlideIndex: number
  container: Element | null
  transitionEndHandler(): void
}

// App Functional Component
const CarouselSlide: React.FC<CarouselSlideProps> = ({ item, enterSlideIndex, container, transitionEndHandler }) => {

  // States
  const [appear, setAppear] = useState<boolean>(true)

  // Side Effects
  useEffect(() => setAppear(false), [])

  // JSX
  return (
    <>
      <Slide 
        direction={ item.index === enterSlideIndex ? 'left' : 'right' } 
        in={ item.index === enterSlideIndex }
        appear={appear}
        timeout={{enter: 900, exit: 900, appear: 0}}
        container={container}
        onEntered={transitionEndHandler}
        easing={{'enter': 'cubic-bezier(0, 0.4, 0.8, 1)', 'exit': 'cubic-bezier(0, 0.4, 0.8, 1)'}}
      >
        <Box  
          sx={{
            position: 'absolute',
            zIndex: '2'
          }}
        >
          <img className='carouselImage' src={item.path} />
        </Box>
      </Slide>
      
    </>
  )
}

// Exports
export default CarouselSlide

