
// Material UI Components
import { Box, } from '@mui/material'

// App Components
import Carousel from '../components/Carousel/Carousel'
import AboutMe from '../components/AboutMe/AboutMe'
import HomeCards from '../components/HomeCards/HomeCards'
import MobileAboutMe from '../components/AboutMe/MobileAboutMe'

// App Functional Component Page
const HomePage = () => {
  // const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth)

  // useEffect(() => {
    
  //   window.addEventListener('resize', windowSizeHandler);

  //   return () => {
  //     window.removeEventListener('resize', windowSizeHandler);
  //   };
  // }, [])

  // const windowSizeHandler = () => {
  //   setWindowWidth(window.innerWidth)
  // }


  // JSX
  return (
    <Box>
      <Carousel />
      <MobileAboutMe />
      <AboutMe />
      <HomeCards />
    </Box>
  )
}

// Exports
export default HomePage


