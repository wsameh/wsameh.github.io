import { useMemo } from 'react'

// App Components
import PageBox from '../components/Common/PageBox'

// Data
import textContent, { ITextContentBlock } from '../../src/data/TextContent'
import RefProjects from '../data/RefProjects'
import RefProject from '../components/RefProjects/RefProject'
import Title from '../components/Common/Title'
import PageContent from '../components/Common/PageContent'

// Functions
const filterTextContent = (block: string): ITextContentBlock[] => {
  let blocks: ITextContentBlock[] = []
  textContent.forEach((content) => {
    if(content.page == 'bms'){
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
const BMSPage = () => {

  const introTextContent = useMemo<ITextContentBlock[]>(() => {
    return filterTextContent('intro')
  }, [])

  // JSX
  return (
    <PageBox>
      <Title>
        Building Managemenet System Design and Supervision Services
      </Title>
      <PageContent blocks={introTextContent}/>

      <Title>
        Refereneced Projects
      </Title>

      {RefProjects.map((item, index) => {
        if(item.page == 'bms')
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
export default BMSPage
