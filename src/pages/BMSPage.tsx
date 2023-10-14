// App Components
import PageBox from '../components/Common/PageBox'

// Data
import RefProjects from '../data/RefProjects'
import RefProject from '../components/RefProjects/RefProject'
import Title from '../components/Common/Title'
import PageContent from '../components/Common/PageContent'
import { useTextContent } from '../hooks/useTextContent'

// App Functional Component Page
const BMSPage = () => {

  const introTextContent = useTextContent({page: 'bms', block: 'intro'})

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
