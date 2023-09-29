import { createContext, useEffect, useState } from "react"

type AlertContextProviderProps = {
    children: React.ReactNode
}

type AlertContextType = {
    alert: AlertType
    setAlert: React.Dispatch<React.SetStateAction<AlertType>>
}

export type AlertType = {
    severity: 'error' | 'info' | 'success' | 'warning'
    children: React.ReactNode
    open: boolean
}

export const AlertContext = createContext({} as AlertContextType)

export const AlertContextProvider = ({children}: AlertContextProviderProps) => {
    const [alert, setAlert] = useState({} as AlertType)



    return (
        <AlertContext.Provider value={{ alert, setAlert }}>
            {children}
        </AlertContext.Provider>
    )
}   