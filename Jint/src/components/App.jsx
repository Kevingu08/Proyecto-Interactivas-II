import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import { Sidebar } from './Sidebar.jsx'
import { Tasks } from './Tasks.jsx'

export function App() {
  const task = [
    { "id":1, "image": "https://unavatar.io/Kevingu08", "title":"Task 1", "description": "Description 1", "time": "23:59", "status":"../../src/assets/imgs/finished.png"},
    { "id": 2,  "image": "https://unavatar.io/Kevingu08", "title": "Task 2", "description": "Description 2", "time": "23:59", "status":"../../src/assets/imgs/finished.png"},
    { "id":3, "image": "https://unavatar.io/Kevingu08", "title": "Task 3", "description": "Description 3", "time": "23:59", "status":"../../src/assets/imgs/finished.png"}
]
  return (
    <>
      <Sidebar/>
      <Tasks/>
    </>
  )
}

export default App
