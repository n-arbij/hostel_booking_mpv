import { Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import './App.css'

function App() {

  return (
    <Routes>
        <Route path="/" element={<Login/>}/>
        <Route element={<Layout/>}>
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Route>
    </Routes>
  )
}

export default App
