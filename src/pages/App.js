import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

export default function App() {
  return (
    // flex-col sm:flex-row w-screen h-screen
    <div className="sm:flex sm:flex-row relative place-content-center">
      <Navbar />
      <div className="flex flex-1 flex-col sm:flex-initial sm:w-2/3 overflow-y-scroll">
        <Outlet />
      </div>
    </div>
  )
}
