// React Libraries
import React, { useEffect, useState } from 'react'

// Material UI Components
import { 
  Toolbar, 
  Box,
  IconButton,
  Typography,
  Stack,
} from '@mui/material'

// Material Icons
import MenuIcon from '@mui/icons-material/Menu';

// App Components
import HeaderNav from './HeaderNav'
import SearchBar from './SearchBar';

// Data
import { INavLink } from '../../data/NavLinks'

// Props Interfaces
interface IAppToolbarProps {
  reduced: boolean,
  drawerToggleHandler(): void
  navLinks: INavLink[]
}

// App Funcational Component
const AppToolbar: React.FC<IAppToolbarProps> = ({ navLinks, reduced, drawerToggleHandler}: IAppToolbarProps) => {

  // States
  const [toolbarHeight, setToolbarHeight] = useState<'100px' | '60px'>('100px')
  const [isVisible, setIsVisible] = useState<boolean>(true)

  // Hooks
  useEffect(() => {
    if (reduced){
      setToolbarHeight('60px')
      setIsVisible(false)
    }
    else {
      setToolbarHeight('100px')
      setIsVisible(true)
    }
  }, [reduced])
  
  // JSX
  return (
    <Toolbar variant='auto'>
      <Box 
        id='toolbar'
        height={toolbarHeight}
        width='100%' 
        display='flex' 
        sx={{
          height: { xs: '60px', md: toolbarHeight },
          transition: 'height 0.3s ease-out'
        }}
      >
        <IconButton
          color='inherit'
          aria-label='open drawer'
          onClick={drawerToggleHandler}
          sx={{ 
            margin: 'auto', 
            display: { md: 'none' },
            '&:hover': {
              backgroundColor: 'appPrimary.light'
            }
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" marginY='auto' marginX='10px'>
          WAEL SAMEH
        </Typography>
        <Box flexGrow={1} />
        <Stack direction='column' marginTop='auto' spacing={2}>
          <SearchBar isVisible={isVisible}/>
          <Box
            justifyContent='end'
            sx={{
              marginTop: 'auto',
              marginLeft: 'auto',
              display: { xs: 'none', md: 'flex' } 
            }}
          >
            {navLinks.map(item => <HeaderNav link={item}/>)}
          </Box>
        </Stack>
      </Box>
    </Toolbar>
  )
}

// Exports
export default AppToolbar
