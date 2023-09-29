// React Libraries
import React from 'react'

// Material UI Components
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Button
} from '@mui/material'

// Material Icons
import DownArrowIcon from '@mui/icons-material/KeyboardArrowDown'

// Data
import { INavLink } from '../../data/NavLinks'

// Props Interface
interface SideNavLinkMenuProps {
  expanded: string | boolean,
  expandHandler(expanded: boolean, label: string): void,
  link: INavLink,
  linkHandler(link: INavLink): void
}

// App Functional Component
const SideNavLinkMenu: React.FC<SideNavLinkMenuProps> = ({ expanded, expandHandler, link, linkHandler }) => {
  return (
    <Accordion
      key={link.label}
      expanded={expanded === link.label}
      onChange={(event, isExpanded) => expandHandler(isExpanded, link.label)}
      disableGutters
      sx={{
        boxShadow: 'none',
        '& .MuiSvgIcon-root' : {
          color: (theme) => theme.palette.appPrimary.contrastText
        },
        '&:before' : {
          display: 'none'
        }
      }}
    >
      <AccordionSummary
        id={link.label}
        aria-controls={link.label}
        expandIcon={<DownArrowIcon />}
        sx={{
          minHeight: '32px',
          height: '32px',
          color: (theme) => theme.palette.appPrimary.contrastText,
          backgroundColor: (theme) => theme.palette.appPrimary.dark,
        }}
      >
        <Typography fontSize='0.8rem' textTransform='uppercase'>{link.label}</Typography>
      </AccordionSummary>
      <AccordionDetails
        sx={{
          paddingX: '2px',
          paddingY: '8px',
          color: (theme) => theme.palette.appPrimary.main,
          backgroundColor: (theme) => theme.palette.appPrimary.contrastText,
          boxShadow: (theme) => `inset 0px 0px 2px 1px ${theme.palette.appPrimary.light}`
        }}
      >
        {link.children?.map((item) => 
          <Button 
            variant='sideNavLink' 
            onClick={() => linkHandler(item)}
          >
            <Typography textTransform= 'none' fontSize='0.8rem' >
              {item.label}
            </Typography>
          </Button>
        )}
      </AccordionDetails>
  </Accordion>
  )
}

// Exports
export default SideNavLinkMenu
