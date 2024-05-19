import { Navigate, Route, Routes } from 'react-router-dom'
import { Sidebar } from './components/Sidebar'
import { AdminView } from './pages/AdminView'
import { Home } from './pages/Home'
import { TaskPage } from './pages/TaskPage'
import { StatisticsPage } from './pages/StatisticsPage'
import { ConfigurationPage } from './pages/ConfigurationPage'
import { Resume } from './components/Resume.jsx'

function App() {
    return (
        <>
            <Sidebar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/task" element={<TaskPage />} />
                <Route path="/statistics" element={<StatisticsPage />} />
                <Route path="/AdminView" element={<AdminView />} />
                <Route path="/configuration" element={<ConfigurationPage />} />
                <Route path="/*" element={<Navigate to="/" />} />

            </Routes>
            <Resume/>

        
        </> 
    )
}

export default App
