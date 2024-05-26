import { Sidebar } from './components/Sidebar'
import { ModalContextProvider } from './context/modalContext'
import { CardModal } from './components/CardModal'
import { Routes } from './routes/Routes'
import { ROUTE_PATHS } from './routes'

function App() {
    return (
        <ModalContextProvider>
            {![ROUTE_PATHS.LOGIN, ROUTE_PATHS.SIGN_UP, ROUTE_PATHS.WELCOME].some((path) =>
                window.location.href.includes(path)
            ) && (
                <>
                    <CardModal />
                    <Sidebar />
                </>
            )}

            <Routes />
        </ModalContextProvider>
    )
}

export default App
