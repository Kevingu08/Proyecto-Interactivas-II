import { createContext } from 'react'
import { useState, useEffect } from 'react'
import { PropTypes } from 'prop-types'
import { useLocalStorage } from '../hooks/useLocalStorage'

export const modalContext = createContext()

export function ModalContextProvider({ children }) {
    const [isOpen, setIsOpen] = useState(false)
    const [taskId, setTaskId] = useState(4)
    const [user, setUser] = useState('')
    const [theme, setTheme] = useLocalStorage('theme', 'light')

    // if (
    //     window.matchMedia &&
    //     window.matchMedia('(prefers-color-scheme: light)').matches
    // ) {
    //     setTheme('light')
    //     // console.log('light');
    // } else {
    //     console.log('dark')
    //     setTheme('dark')
    // }

    // useEffect(() => {
    //     if (theme === 'light') {
    //         document.querySelector('html').classList.remove('dark')
    //     } else {
    //         document.querySelector('html').classList.add('dark')
    //     }
    // }, [theme])

    function handleTaskId(id) {
        setTaskId(id)
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
