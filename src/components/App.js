import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

export default function App() {
  return (
    <div className="sm:flex sm:flex-row relative">
      <Navbar />
      <div className="flex w-full flex-col sm:flex-initial sm:mx-40 overflow-y-scroll">
        <Outlet />
      </div>
    </div>
  )
}
