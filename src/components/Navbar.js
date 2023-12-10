import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
      <div className="z-10 bg-stone-300 sticky top-0 left-0 flex flex-col sm:flex-nowrap font-ibm w-full sm:h-full sm:w-auto sm:writing-vertical">
        <Link to={'/'}>
          <div className="hover:bg-stone-800 w-full bg-black text-center">
            <span className="font-unna text-8xl text-stone-300">caitlin</span>
          </div>
        </Link>

        <div className="flex w-full sm:w-auto sm:h-screen sm:pt-10 justify-around items-center font-ibm text-2xl font-bold">
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
