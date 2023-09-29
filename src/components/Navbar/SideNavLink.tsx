// React Libraries
import React from 'react'

// Material UI Components
import {
    Button, ListItem, Typography,
} from '@mui/material'

// Data
import { INavLink } from '../../data/NavLinks'

// Props Interface
interface SideNavLinkProps {
    link: INavLink,
    linkHandler(link: INavLink): void
}

// App Functional Component
const SideNavLink: React.FC<SideNavLinkProps> = ({ link, linkHandler }) => {

    // JSX
    return (
        <Button variant='sideNavLink' onClick={() => linkHandler(link)}>
            <Typography fontSize='0.8rem' marginRight= 'auto'>
                {link.label}
            </Typography>
        </Button>
    )
}

// Exports
export default SideNavLink
