
// React Libraries
import React, { useState, useEffect } from 'react'

// Material UI Components
import { Box } from "@mui/material"

// App Components
import CarouselOverlay from './CarouselOverlay'

// Data
import carouselData from '../../data/CarouselData'
import CarouselSlide from './CarouselSlide'

// Props Interface
interface AppCarouselProps {

}

// Variables
var inViewPortTest: boolean = true


// App Functional Component Page
const Carousel: React.FC<AppCarouselProps> = () => {

    // States
    const [ enterSlideIndex, setEnterSlideIndex ] = useState<number>(0)
    const [inViewPort, setInViewPort] = React.useState<boolean>(true);

    // Refs
    const containerRef = React.createRef<Element>()

    // Hooks
    useEffect(() => {
        setInterval(() => {
            if(window.scrollY >= 128)
                setInViewPort(true)
            else
                setInViewPort(false)
        }, 5000)
        document.addEventListener('scroll', isInViewport)
      })

    // Event Handlers
    const transitionEndHandler = async () => {
        // if(inViewPort){
            await timeout(5000);
            if(enterSlideIndex == carouselData.length - 1)
                setEnterSlideIndex(0)
            else
                setEnterSlideIndex(prev => prev + 1)
        // }

    }

    const isInViewport = () => {
        if(window.scrollY >= 128)
        {
            setInViewPort(true)
            console.log(inViewPort)
        }
        else
          setInViewPort(false)
          console.log(inViewPort)
      }

    // Functions
    function timeout(ms: number): Promise<NodeJS.Timeout> {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // JSX
    return (
        <Box 
            ref={containerRef}
            width='100%'
            height='650px'
            overflow='clip'
            position='relative'
            sx={{ 
                backgroundColor: (theme) => theme.palette.appPrimary.dark,
                boxShadow: (theme) => `0px 0px 2px 1px ${theme.palette.appPrimary.dark}`,
                display: {xs: 'none', lg: 'block'}
            }}
        >
            {
                carouselData.map((item, index) => {
                    if(index == enterSlideIndex || index == (enterSlideIndex == 0 ? carouselData.length - 1 : enterSlideIndex - 1))
                    {
                        item.index = index
                        return (
                            <>
                                <CarouselSlide
                                    item={item}
                                    enterSlideIndex={enterSlideIndex}
                                    container={containerRef.current}
                                    transitionEndHandler={transitionEndHandler}
                                />
                                <CarouselOverlay item={item} enterSlideIndex={enterSlideIndex} />
                            </>
                        )
                    } else return <></>
                })
            }
            <Box
                bgcolor='rgba(0, 0, 0, 0.5)'
                sx={{
                    position: 'absolute',
                    left: '0px',
                    top: '0px',
                    width: '100%',
                    height: '100%',
                    zIndex: '5'
                }}
            >
            </Box>
        </Box>
    )
}

// Exports
export default Carousel


