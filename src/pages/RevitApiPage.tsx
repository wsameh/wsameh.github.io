import React, { useEffect, useRef, useState, useMemo } from 'react'

// Material Ui Components
import { Typography, ListItem, ListItemIcon, } from '@mui/material'

// App Components
import PageBox from '../components/Common/PageBox'

// Material Icons
import CircleIcon from '@mui/icons-material/CircleOutlined'
import PageContent from '../components/Common/PageContent'

// Data
import textContent, { ITextContentBlock } from '../../src/data/TextContent'
import RefProjects from '../data/RefProjects'
import RefProject from '../components/RefProjects/RefProject'
import Title from '../components/Common/Title'

// Functions
const filterTextContent = (block: string): ITextContentBlock[] => {
  let blocks: ITextContentBlock[] = []
  textContent.forEach((content) => {
    if(content.page == 'revit'){
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
const RevitApiPage = () => {

  const introTextContent = useMemo<ITextContentBlock[]>(() => {
    return filterTextContent('intro')
  }, [])


  // JSX
  return (
    <PageBox>
      <Title>
        Revit Addins Development Services
      </Title>
      <PageContent blocks={introTextContent}/>

      <Title>
        Refereneced Projects
      </Title>

      {RefProjects.map((item, index) => {
        if(item.page == 'revit')
          if(index % 2){
            return (<RefProject project={item} align='right'/>)
          }
          else{
            return (<RefProject project={item} align='left'/>)
          }
      })}
    </PageBox>
  )
}

// Exports
export default RevitApiPage
