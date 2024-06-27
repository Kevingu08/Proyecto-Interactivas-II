import { Navigate, Route, Routes as ReactRoutes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { TaskPage } from '../pages/TaskPage'
import { StatisticsPage } from '../pages/StatisticsPage'
import { AdminView } from '../pages/AdminView'
import { ConfigurationPage } from '../pages/ConfigurationPage'
import { Login } from '../pages/Login'
import { SignUp } from '../pages/SignUp'
import { WelcomePage } from '../pages/WelcomePage'
import EmailConfirmation from '../pages/EmailConfirmation'
import ChangePassword from '../pages/ChangePassword'
import { ROUTE_PATHS } from '.'
import { modalContext } from '../context/modalContext'
import { useContext, useEffect, useState } from 'react'

export function Routes() {
    const { user, setUser, setTheme, theme } = useContext(modalContext)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const userLogged = window.localStorage.getItem('userLogged')
        const preferTheme = window.localStorage.getItem('theme')
        if (userLogged) {
            setUser(JSON.parse(userLogged))
        }
        if (preferTheme) {
            setTheme(preferTheme)
            if (theme === 'light') {
                document.querySelector('html').classList.remove('dark')
                window.localStorage.setItem('theme', 'light')
                setTheme('light');
            } else {
                document.querySelector('html').classList.add('dark')
                window.localStorage.setItem('theme', 'dark')
                setTheme('dark');
            }
        }
        setIsLoading(false)
    }, [])

    //esperar mientras se carga el tema y el usuario
    if (isLoading) {
        return <div>Loading...</div> 
    }

    return (
        <ReactRoutes>
            <Route path={ROUTE_PATHS.WELCOME} element={<WelcomePage />} />
            <Route
                path={user ? ROUTE_PATHS.HOME : ROUTE_PATHS.WELCOME}
                element={<Home />}
            />
            <Route
                path={user ? ROUTE_PATHS.TASK : ROUTE_PATHS.WELCOME}
                element={<TaskPage />}
            />
            <Route
                path={user ? ROUTE_PATHS.STATISTICS : ROUTE_PATHS.WELCOME}
                element={<StatisticsPage />}
            />
            <Route
                path={ROUTE_PATHS.EMAIL_CONFIRMATION}
                element={<EmailConfirmation />}
            />
            <Route
                path={`${ROUTE_PATHS.RESET_PASSWORD}/:userId`}
                element={<ChangePassword />}
            />
            <Route
                path={user ? ROUTE_PATHS.CONFIGURATION : ROUTE_PATHS.WELCOME}
                element={<ConfigurationPage />}
            />
            <Route path={ROUTE_PATHS.LOGIN} element={<Login />} />
            <Route path={ROUTE_PATHS.SIGN_UP} element={<SignUp />} />
            <Route
                path={ROUTE_PATHS.NOT_FOUND}
                element={
                    <Navigate
                        to={user ? ROUTE_PATHS.HOME : ROUTE_PATHS.WELCOME}
                    />
                }
            />
        </ReactRoutes>
    )
}
