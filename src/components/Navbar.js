import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
      <div className="hover:blur-lg sticky top-0 left-0 sm:fixed flex flex-wrap sm:flex-nowrap font-ibm w-full sm:h-full sm:w-auto sm:writing-vertical bg-stone-300/95">
        <Link to={'/'}>
          <span className="font-zilla text-8xl hover:animate-bounce">
            caitlin
          </span>
        </Link>

        <div className="flex w-full sm:w-auto sm:h-screen sm:pt-10 justify-around items-center text-2xl font-bold">
          <div className="hover:line-through">
            <Link to={'/about'}>// about</Link>
          </div>
          <div className="hover:line-through">
            <Link to={'/gallery'}>// gallery</Link>
          </div>
          <div className="hover:line-through">
            <Link to={'/misc'}>// misc</Link>
          </div>
        </div>
      </div>
    </>
  )
}
