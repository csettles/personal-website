import './App.css'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

export default function App() {
  return (
    <div className="app flex flex-row w-screen h-screen">
      <div className="navbar static flex w-32 h-full items-center space-y-12 text-3xl font-vollkorn">
        <Navbar />
      </div>
      <div className="flex flex-1 h-full justify-center overflow-y-auto">
        <Outlet />
      </div>
    </div>
  )
}
