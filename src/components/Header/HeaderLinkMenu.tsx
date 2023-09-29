
// React Libraris
import React from 'react'

// Material UI Components
import { 
    Menu, 
    List, 
    ListItem, 
    ListItemButton, 
    ListItemText
} from '@mui/material'

// Data
import { INavLink } from '../../data/NavLinks'

// Props Interfaces
interface IHeaderLinkMenupProps {
    link: INavLink,
    open: boolean,
    anchorEl: Element | null,
    menuCloseHandler(): void,
    linkHandler(event: React.MouseEvent<HTMLElement>, link: INavLink): void
}


// App Funcational Component
const HeaderLinkMenu: React.FC<IHeaderLinkMenupProps> = ({ link, open, anchorEl, menuCloseHandler, linkHandler}) => {

    // JSX
    return (
        <Menu
            open={open}
            anchorEl={anchorEl}
            onClose={menuCloseHandler}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right'
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right'

            }}
            sx={{
                '& .MuiMenu-paper': {
                    minWidth: '200px',
                    padding: '0px',
                    backgroundColor: 'appPrimary.contrastText',
                    color: 'appPrimary.main',
                    borderRadius: '0px',
                }
            }}
        >
            <List>
                {link.children?.map((item) => {
                    return (
                        <ListItem
                            key={link.label} 
                            disablePadding
                            color='appPrimary'
                        >
                            <ListItemButton 
                                onClick={(event) => linkHandler(event, item)}
                                sx={{ 
                                    textAlign: 'left',
                                    '&:hover': {
                                        backgroundColor: 'rgba(109, 93, 110, 0.1)'
                                    }
                                }}
                            >
                                <ListItemText 
                                    primary={item.label} 
                                    sx={{ 
                                        marginRight: '64px',
                                        '& .MuiTypography-root': { 
                                            fontSize: '0.8rem'
                                    }}}
                                />
                            </ListItemButton>
                        </ListItem>
                    )
                })}
            </List>

        </Menu>
    )
}

// Exports
export default HeaderLinkMenu


// {link.children?.map(item => {
//     return (
//         <Button
//             onClick={(event) => linkHandler(event, item)}
//             color='appPrimary'
//             sx={{
//                 borderRadius: '0px',
//                 fontSize: '0.8rem',
//                 textAlign: 'left',
//                 textTransform: 'none',
//             }}
//         >
//             {item.label}
//         </Button>
//     )
// })}