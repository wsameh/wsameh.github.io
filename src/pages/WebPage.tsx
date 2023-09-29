// React
import { useRef, useEffect, useMemo } from "react";
import { useLocation, useParams } from "react-router-dom";

// Material UI Components
import { Box, Typography, ListItem, ListItemIcon } from "@mui/material"

// Material Icons
import CircleIcon from '@mui/icons-material/CircleOutlined'

// App Components
import PageBox from "../components/Common/PageBox"
import Title from '../components/Common/Title'
import PageContent from "../components/Common/PageContent";
import RefProject from "../components/RefProjects/RefProject";

// Data
import textContent, { ITextContentBlock } from '../../src/data/TextContent'
import RefProjects from '../data/RefProjects'

// Functions
const filterTextContent = (page: string, block: string): ITextContentBlock[] => {
  let blocks: ITextContentBlock[] = []
  textContent.forEach((content) => {
    if(content.page == page){
      content.sections.forEach((section) => {
          if(section.name == block){
            blocks = section.blocks
          }
      })
    }
  })
  return blocks
}

// App Functional Component Page
const WebPage = () => {

    const reactIntroTextContent = useMemo<ITextContentBlock[]>(() => {
      return filterTextContent('web/react', 'intro')
    }, [])

    const blazorIntroTextContent = useMemo<ITextContentBlock[]>(() => {
      return filterTextContent('web/blazor', 'intro')
    }, [])

    // Refs
    const secOneRef = useRef<HTMLDivElement>();
    const secTwoRef = useRef<HTMLDivElement>();

    // Navigation
    const location = useLocation()
    const { section } = useParams()
  
    // Effects
    useEffect(() => {

      if(section === 'react')
        secOneRef?.current?.scrollIntoView( { behavior: 'smooth' } )

      else if (section === 'blazor')
        secTwoRef?.current?.scrollIntoView( { behavior: 'smooth' } )

    }, [location])

  // JSX
  return (
    <PageBox>
      <Box ref={secOneRef} >
        <Title>
          React Web Apps Development Services
        </Title>
        <PageContent blocks={reactIntroTextContent}/>

        <Title>
          Demo Projects
        </Title>
        {RefProjects.map((item, index) => {
          if(item.page == 'web/react')
            if(index % 2){
              return (<RefProject project={item} align='right'/>)
            }
            else{
              return (<RefProject project={item} align='left'/>)
            }
        })}
      </Box>
      <Box ref={secTwoRef} >
        <Title>
          Blazor Web Apps Development Services
        </Title>
        <PageContent blocks={blazorIntroTextContent}/>

        <Title>
          Demo Projects
        </Title>
        {RefProjects.map((item, index) => {
          if(item.page == 'web/blazor')
            if(index % 2){
              return (<RefProject project={item} align='right'/>)
            }
            else{
              return (<RefProject project={item} align='left'/>)
            }
        })}
      </Box>
    </PageBox>
  )
}

// Exports
export default WebPage
