// React
import React, { useRef, useEffect, useState, useContext } from 'react'

// Material UI Components
import { Box, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'

// App Context
import { MainContainerHeight } from '../../App'

// Props Interface
interface AboutMeContainerProps {
    container: React.MutableRefObject<HTMLDivElement | undefined>
    children: React.ReactNode
    itemsAlign: 'left' | 'right'
    text: string
    imageMargin: number
}


// App Functional Component
const AboutMeContainer: React.FC<AboutMeContainerProps> = ({
  container,
  children, 
  itemsAlign, 
  imageMargin, 
  text
}) => {

  // States
  const [imageSize, setImageSize] = useState<number>(0)
  const [containerHeight, setContainerHeight] = useState<number>(500)
  const [anchorPoint, setAnchorPoint] = useState<number>(0)
  const [marginY, setMarginY] = useState<number>(0)

  // Refs
  const aboutMeContainerRef = useRef<HTMLDivElement>()
  const typographyRef = useRef<HTMLSpanElement>(null)

  // App Context
  const mainContainerHeight = useContext(MainContainerHeight)

  // Theme
  const theme = useTheme()

  // Side Effects
  useEffect(() => {
    anchorPointHandler()
    marginYHandler()

    window.addEventListener('resize', windowResizeHandler)
  }, [container.current?.offsetHeight, containerHeight])

  const windowResizeHandler = () => { 
    anchorPointHandler()
    marginYHandler()
  }

  console.log(window.outerWidth)
  console.log(imageSize)


  // Functions


  const anchorPointHandler = () => {

    let imageWidth: number = 0

    if(window.innerWidth > theme.breakpoints.values.xl)
      imageWidth = 300

    else if(window.innerWidth > theme.breakpoints.values.lg)
      imageWidth = 250

    else if(window.innerWidth > theme.breakpoints.values.md)
      imageWidth = 220

    setImageSize(imageWidth)

    if(aboutMeContainerRef.current?.offsetWidth != undefined){
      if(itemsAlign == 'right')
        setAnchorPoint(aboutMeContainerRef.current?.offsetWidth - imageWidth/2 - imageMargin)
      else 
        setAnchorPoint(imageWidth/2 + imageMargin)
    }
  }

  const marginYHandler = () => {

    if(container.current?.offsetHeight !== undefined){
      setContainerHeight(container.current?.offsetHeight)

      if(typographyRef.current?.offsetHeight !== undefined)
        setMarginY((container.current?.offsetHeight - typographyRef.current?.offsetHeight)/2)
    }
  }

  console.log(container.current?.offsetHeight)
  console.log(imageSize)

  // JSX
  return (
    <Box
      ref={aboutMeContainerRef}
      sx={{
        width:'60%',
        position: 'absolute',
        transform: `translateX(-${anchorPoint}px) translateY(-50%)`,
        top: '50%',
        left: '50%',
        borderRadius: '50%',
        '& .aboutMeCenter': {
          position: 'relative',
          width: `${imageSize}px`,
          height: `${imageSize}px`,
          borderRadius: '50%',
          shapeOutside: `circle(at 50% 50%)`,
          marginY: `${(containerHeight - imageSize)/2}px`,
          marginX: `${imageMargin}px`,
          float: `${itemsAlign}`
        }
      }}
    >
      {children}
      <Typography
        ref={typographyRef}
        variant='aboutMe' 
        textAlign={itemsAlign}
        sx={{
          marginX: '20px',
          marginY: `${marginY}px`,
        }}
      >
        {text}
      </Typography>
    </Box>
  )
}

// Exports
export default AboutMeContainer



