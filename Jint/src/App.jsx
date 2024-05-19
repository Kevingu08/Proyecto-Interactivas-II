import { Navigate, Route, Routes } from 'react-router-dom'
import { Sidebar } from './components/Sidebar'
import { AdminView } from './pages/AdminView'
import { Home } from './pages/Home'
import { TaskPage } from './pages/TaskPage'
import { StatisticsPage } from './pages/StatisticsPage'
import { ConfigurationPage } from './pages/ConfigurationPage'
import { ModalContextProvider } from './context/modalContext'
import { CardModal } from './components/CardModal'
import { Login } from './pages/Login';
import { SingUp } from './pages/SingUp';

function App() {
    return (
        <ModalContextProvider>
            <CardModal />
            <Sidebar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/task" element={<TaskPage />} />
                <Route path="/statistics" element={<StatisticsPage />} />
                <Route path="/AdminView" element={<AdminView />} />
                <Route path="/configuration" element={<ConfigurationPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/singUp" element={<SingUp />} />
                <Route path="/*" element={<Navigate to="/" />} />
            </Routes>
        </ModalContextProvider>
    )
}

export default App
