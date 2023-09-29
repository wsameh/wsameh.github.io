// React Libraries
import React from 'react'

// Material UI Components
import { Button } from '@mui/material'

// Material Icons
import DownArrowIcon from '@mui/icons-material/KeyboardArrowDown'

// Data
import { INavLink } from '../../data/NavLinks'

// Props Interface
interface IHeaderLinkProps {
  link: INavLink,
  linkHandler(event: React.MouseEvent<HTMLElement>, link: INavLink): void,
  menuOpen: boolean
}

// App Functional Component
const HeaderLink: React.FC<IHeaderLinkProps> = ( { link, linkHandler, menuOpen }: IHeaderLinkProps) => {

  // JSX
  return (
    <Button
      variant='headerNavLink'
      onClick={(event) => linkHandler(event, link)}
      endIcon={ link.children !== null && <DownArrowIcon />}
      sx={{
        paddingX: '16px',
        paddingY: '8px',
        '& .MuiButton-endIcon' : {
          transform: menuOpen ? 'rotate(180deg)' : 'none',
          transition: 'transform 0.2s ease'
        }
      }}
    >
      {link.label}
    </Button>
  )
}

// Exports
export default HeaderLink
