// React Libraries 
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

// Material UI Components
import { 
    Typography,
    Divider,
    Drawer,
    Stack

} from '@mui/material'

// App Components
import SideNavLink from './SideNavLink';
import SideNavLinkMenu from './SideNavLinkMenu';

// Data
import { INavLink } from '../../data/NavLinks';

// Props interfaces
interface AppSideNavbarProps {
    open: boolean,
    navLinks: INavLink[],
    drawerToggleHandler(): void
}

// App Funcational Component
const SideNav: React.FC<AppSideNavbarProps> = ({ open, drawerToggleHandler, navLinks }: AppSideNavbarProps) => {

    // States
    const [expanded, setExpanded] = useState<string | false>('')

    // Navigation
    const navigate = useNavigate()

    // Functions
    const linkHandler = (link: INavLink) => {
        setExpanded(false)
        console.log(link)
        if(link.type === 'pageRoute'){
            navigate(link.route)
        } else if (link.type === 'sectionRoute') {
            if(link.parentRoute !== undefined)
                navigate(`${link.parentRoute}/${link.route}`)
        }
        drawerToggleHandler()
    }

    const expandHandler = (isExpanded: boolean, label: string) => isExpanded ? setExpanded(label) : setExpanded('')

    // JSX
    return (
        <Drawer
            variant="temporary"
            open={open}
            onClose={drawerToggleHandler}
            ModalProps={{
                keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
                display: { xs: 'block', md: 'none' },
                '& .MuiDrawer-paper': { 
                    boxSizing: 'border-box', 
                    width: '60%',
                    backgroundColor: (theme) => theme.palette.appPrimary.dark,
                    color: (theme) => theme.palette.appPrimary.contrastText  
                },
            }}
        >
            <Stack spacing={1}>
                <Typography variant="h6" color='inherit' textAlign='center' sx={{ my: 2 }} >
                    WS
                </Typography>
                <Divider sx={{ backgroundColor: (theme) => theme.palette.appPrimary.contrastText}}/>
                {navLinks.map((link) => {
                    return (
                        link.children === null ?
                        <SideNavLink link={link} linkHandler={linkHandler}/> :
                        <SideNavLinkMenu 
                            link={link} 
                            expanded={expanded} 
                            expandHandler={expandHandler}
                            linkHandler={linkHandler}
                        />
                    )
                })}
            </Stack>
        </Drawer>
    );
}

// Exports
export default SideNav
