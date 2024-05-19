import { createContext } from 'react'
import { useState } from 'react'
import { PropTypes } from 'prop-types'

export const modalContext = createContext()

export function ModalContextProvider({ children }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <modalContext.Provider value={{ isOpen, setIsOpen }}>
            {children}
        </modalContext.Provider>
    )
}

ModalContextProvider.propTypes = {
    children: PropTypes.node.isRequired || PropTypes.arrayOf(PropTypes.node),
}
