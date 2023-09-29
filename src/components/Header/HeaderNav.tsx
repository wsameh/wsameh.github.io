// React
import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

// Material UI Components
import { Stack, Box, } from '@mui/material'

// Data
import { INavLink } from '../../data/NavLinks'

// App Components
import HeaderLink from './HeaderLink'
import HeaderLinkMenu from './HeaderLinkMenu'

// Props Interfaces
interface IHeaderNavProps {
    link: INavLink,
}


// App Functional Component
const HeaderNav: React.FC<IHeaderNavProps> = ({ link }) => {

    // States
    const [selected, setSelected] = useState(false)
    const [isHovering, setIsHovering] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

    // Navigation
    const navigate = useNavigate()
    const location = useLocation()

    console.log(location.pathname)

    // Effects
    useEffect(() => {
        if(location.pathname == `/${link.route}`){
            setSelected(true)
            navLinkHoverHandler(false)
        } else {
            setSelected(false)
            navLinkHoverHandler(false)
        }
    }, [location])

    // Funcations
    const navLinkHoverHandler = (hover: true | false) => {
      setIsHovering(hover)
    }

    const linkHandler = (event: React.MouseEvent<HTMLElement>, navLink: INavLink) => {
        if(navLink.children === null) {
            if(navLink.type === 'pageRoute'){
                navigate(navLink.route)
                menuCloseHandler()
            } else if (navLink.type === 'sectionRoute') {
                navigate(`${link.route}/${navLink.route}`)
                menuCloseHandler()
            }
        } else {
            setAnchorEl(event.currentTarget)
            setMenuOpen(prevState => !prevState)
        }
    }

    const menuCloseHandler = () => {
        if(location.pathname.includes(link.route)){
            setSelected(true)
        } else {
            setSelected(false)
        }
        navLinkHoverHandler(false)
        setMenuOpen(false)
        setAnchorEl(null)
    }

    // JSX
    return (
        <Stack
            onMouseEnter={() => navLinkHoverHandler(true)}
            onMouseLeave={() => navLinkHoverHandler(false)}
        >
            <HeaderLink link={link} linkHandler={linkHandler} menuOpen={menuOpen}/>
            <Box
                height='2px'
                margin='auto'
                width={selected ? '100%' : isHovering ? '100%' : '0%'}
                bgcolor='appPrimary.contrastText'
                sx={{transition: 'width 0.3s ease'}}
            />
            {
                link.children !== null && <HeaderLinkMenu
                    link={link}
                    open={menuOpen}
                    anchorEl={anchorEl}
                    menuCloseHandler={menuCloseHandler}
                    linkHandler={linkHandler}
                />
            }
        </Stack>
    )
}

export default HeaderNav
