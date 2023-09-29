import { useMemo, useRef } from 'react'

// Material UI Components
import { Box, Typography } from '@mui/material'

// Data
import textContent, { ITextContentBlock } from '../../data/TextContent'

// Images
import aboutMeImage from '../../assets/images/Profile/about-me.jpg'

// Constants
const imageMargin: number = 20

// Functions
const filterTextContent = (): ITextContentBlock[] => {
    let blocks: ITextContentBlock[] = []
    textContent.forEach((content) => {
        if(content.page == 'home'){
            content.sections.forEach((section) => {
                if(section.name == 'aboutMe'){
                    blocks = section.blocks
                }
            })
        }
    })
    return blocks
}

const MobileAboutMe = () => {

   // Hooks
   const filteredTextBlocks = useMemo<ITextContentBlock[]>(() => {
       return filterTextContent()
   }, [])

   // JSX
   return (
       <Box 
           sx={{
                width: '80%',
                marginX: 'auto',
                marginTop: '100px',
                display: {xs: 'block', md: 'none'},
                boxSizing: 'content-box',
           }}
       >
            <Typography
                variant='aboutMe' 
                textAlign='center'
                paragraph
            >
                {filteredTextBlocks[0].text}
            </Typography>
            <Box
                component='img'
                src={aboutMeImage}
                sx={{
                    display: 'block',
                    width: '200px',
                    borderRadius: '50%',
                    margin: '10px auto 10px auto',
                }}
            >

            </Box>

            <Typography
                variant='aboutMe' 
                textAlign='center'
                paragraph
            >
                {filteredTextBlocks[1].text}
            </Typography>
       </Box>
   )
}

export default MobileAboutMe
