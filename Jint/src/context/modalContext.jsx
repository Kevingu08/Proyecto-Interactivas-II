import { createContext } from 'react'
import { useState, useEffect } from 'react'
import { PropTypes } from 'prop-types'
import { useLocalStorage } from '../hooks/useLocalStorage'

export const modalContext = createContext()

export function ModalContextProvider({ children }) {
    const [isOpen, setIsOpen] = useState(false)
    const [taskId, setTaskId] = useState(4)
    const [user, setUser] = useState('')
    const [theme, setTheme] = useState('')
    const [isLoadingTheme, setIsLoadingTheme] = useState(true)

    function handleTaskId(id) {
        setTaskId(id)
    }


    useEffect(() => {
        const preferTheme = window.localStorage.getItem('theme')
        if (preferTheme) {
            setTheme(preferTheme)
        }
        setIsLoadingTheme(false)
    }, [])

    if (isLoadingTheme) {
        return <div>Loading...</div>
    }

    return (
        <modalContext.Provider
            value={{
                isOpen,
                setIsOpen,
                theme,
                setTheme,
                setTaskId,
                taskId,
                handleTaskId,
                user,
                setUser,
            }}
        >
            {children}
        </modalContext.Provider>
    )
}

ModalContextProvider.propTypes = {
    children: PropTypes.node.isRequired || PropTypes.arrayOf(PropTypes.node),
}
