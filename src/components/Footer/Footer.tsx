// React Libraries
import { useNavigate } from 'react-router-dom'


// Material UI Components
import { Box, 
  Stack,
  Button,
  BottomNavigation, 
  BottomNavigationAction 
} from '@mui/material'

// Material UI Icons
import MessageIcon from '@mui/icons-material/EmailOutlined'

// Data
import navLinks, { INavLink } from '../../data/NavLinks'

// App Funcational Component
const Footer = () => {

  // Navigation
  const navigate = useNavigate();

  // Handlers
  const linkHandler = (event: React.MouseEvent<HTMLElement>, link: INavLink) => {
    navigate(link.route)
  }
  
  // JSX
  return (
    <>
      <Box
        justifyContent='center'
        sx={{
          display: {xs: 'none', sm: 'flex'},
          width: '100%',
          paddingTop: '20px',
          paddingBottom: '30px',
          backgroundColor: 'appPrimary.dark',
        }}
      >
        {navLinks.map((item, index) => {
          return (
            <Box
              display='flex'
              alignContent='flex-start'
            >
              <Stack 
                direction='column' 
                sx={{
                  marginX: '20px'
                }}
              >
                <Button 
                  variant='footerLabel' 
                  disableRipple
                  onClick={(event) => linkHandler(event, item)}
                  sx={{ textAlign: 'center' }}
                >
                  {item.label}
                </Button>
                {item.children?.map(link =>{
                  return (
                    <Button 
                      variant='footerLink'
                      disableRipple
                      onClick={(event) => linkHandler(event, link)}
                    >
                      {link.label}
                    </Button>
                  )
                })}
              </Stack>
              {/* Vertical Divider */}
                {
                  index !== navLinks.length - 1 ? 
                  <Box
                    bgcolor='appPrimary.contrastText'
                    sx={{
                      height: '100%',
                      borderWidth: '0px',
                      borderStyle: 'solid',
                      borderRightWidth: 'thin',
                      borderColor: 'appPrimary.contrastText'
                    }}
                  /> : null
                }
            </Box>
          )
        })}
      </Box>
      <BottomNavigation sx={{ backgroundColor: 'appPrimary.dark' }}>
        <BottomNavigationAction 
          label="Archive" 
          icon={<MessageIcon />}
          sx={{ color: 'appPrimary.contrastText' }}
          onClick={() => navigate("contactme")}
        />
      </BottomNavigation>
    </>
  )
}

// Exports
export default Footer