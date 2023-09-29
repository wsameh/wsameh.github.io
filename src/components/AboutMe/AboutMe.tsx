import { useMemo, useRef } from 'react'

// Material UI Components
import { Box } from '@mui/material'

// App Components
import AboutMeContainer from './AboutMeContainer'

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

// App Functional Component
const AboutMe = () => {

    // Refs
    const containerRef = useRef<HTMLDivElement>()

    // Hooks
    const filteredTextBlocks = useMemo<ITextContentBlock[]>(() => {
        return filterTextContent()
    }, [])

    // JSX
    return (
        <Box 
            ref={containerRef}
            sx={{
                display: {xs: 'none', md: 'block'},
                position: 'relative',
                top: '20',
                left: '0',
                width: '100%',
                height: {md: '450px', lg: '350px', xl: '400px'},
                paddingTop: '30px',
                paddingBottom: {xs: '0', lg: '30px'},
                paddingX: '0',
                boxSizing: 'content-box',
            }}
        >
                <AboutMeContainer
                    container={containerRef}
                    itemsAlign={'right'} 
                    text={filteredTextBlocks[0].text} 
                    imageMargin={imageMargin}
                >
                    <Box
                        className='aboutMeCenter'
                        component='img'
                        src={aboutMeImage}
                    />
                </AboutMeContainer>
                <AboutMeContainer
                    container={containerRef}
                    itemsAlign={'left'} 
                    text={filteredTextBlocks[1].text} 
                    imageMargin={imageMargin}
                >
                    <Box
                        className='aboutMeCenter'
                        component='img'
                        src={aboutMeImage}
                    />
                </AboutMeContainer>
        </Box>
    )
}

export default AboutMe
