import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import { Sidebar } from './Sidebar.jsx'
import { Tasks } from './Tasks.jsx'

function App() {

  return (
    <>
      <Sidebar/>
      <Tasks/>
    </>
  )
}

export default App
