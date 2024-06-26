import { createContext } from 'react'
import { useState } from 'react'
import { PropTypes } from 'prop-types'


export const modalContext = createContext()

export function ModalContextProvider({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const [theme, setTheme] = useState('light');
    const [taskId, setTaskId] = useState(4);
    const [user, setUser] = useState('');

    function handleTaskId(id) {
        setTaskId(id)
    }

    return (
            {children}
        </modalContext.Provider>
    )
}

ModalContextProvider.propTypes = {
    children: PropTypes.node.isRequired || PropTypes.arrayOf(PropTypes.node),
}
