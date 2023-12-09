import Typewriter from 'react-ts-typewriter'
import './Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
      <div>
        <Link to={'/'}>
          <span className="pt-2 text-6xl bg-black text-white">
            <Typewriter text="caitlin" />
          </span>
        </Link>
      </div>
      <div>
        <Link to={'/about'}>// about</Link>
      </div>
      <div>
        <Link to={'/gallery'}>// gallery</Link>
      </div>
      <div>
        <Link to={'/blog'}>// blog</Link>
      </div>
    </>
  )
}
