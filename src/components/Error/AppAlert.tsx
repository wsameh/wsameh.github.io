import { useState, useContext, useEffect, useMemo } from "react"
import { AlertType, AlertContext } from "../Context/AlertContext"
import { useLocation } from "react-router-dom"

import { Box, Slide, Alert } from '@mui/material'


export const AppAlert = () => {

    const [open, setOpen] = useState(false)
    const [topMargin, seTopMargin] = useState(100)

    // const observer = useMemo(() => new MutationObserver(() => {}), [])
    const location = useLocation()


    const alertContext = useContext(AlertContext)

    useEffect(() => {
        document.addEventListener('scroll', () => {
            if(window.scrollY >= 100)
                seTopMargin(60)
            else
                seTopMargin(100)
        })
      }, [])

    useEffect(() => {
        if(alertContext.alert?.open)
            setOpen(true)
        else
            setOpen(false)
    }, [alertContext])
    
    useEffect(() => setOpen(false), [location])

    const closeHandler = () => {
        alertContext.setAlert({} as AlertType)
    }

    return open ? (
        <Box
            sx={{
                width: '100%',
                marginTop: {xs: '60px', md: `${topMargin}px`},
                position: 'fixed',
                transition: 'margin-top 0.3s ease-out',
                zIndex: '5'
            }}

        >
            <Slide 
                direction={ open ? 'down' : 'up' } 
                in={open}
                timeout={{enter: 300, exit: 300, appear: 0}}
                easing={{'enter': 'cubic-bezier(0, 0.4, 0.8, 1)', 'exit': 'cubic-bezier(0, 0.4, 0.8, 1)'}}
            >
                <Alert 
                    severity={alertContext.alert.severity}
                    onClose={closeHandler}
                >
                    {alertContext.alert?.children}
                </Alert>
            </Slide>
        </Box>
    ) 
    : null
}


