import { createContext } from 'react'
import { useState } from 'react'
import { PropTypes } from 'prop-types'

export const modalContext = createContext()

export function ModalContextProvider({ children }) {
    const [isOpen, setIsOpen] = useState(false)
    const [theme, setTheme] = useState('light')

    return (
        <modalContext.Provider value={{ isOpen, setIsOpen, theme, setTheme }}>
            {children}
        </modalContext.Provider>
    )
}

ModalContextProvider.propTypes = {
    children: PropTypes.node.isRequired || PropTypes.arrayOf(PropTypes.node),
}
