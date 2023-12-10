import Typewriter from 'react-ts-typewriter'

export default function Home() {
  return (
    <div className="absolute z-1 left-0 flex flex-col w-full h-screen text-center align-middle justify-center bg-[url('/public/gallery/Scan113931.jpg')] bg-blend-overlay">
      <div className="text-stone-200/80 text-6xl sm:text-9xl font-semi-bold font-space">
        <Typewriter text={'welcome'} loop={true} speed={200} delay={1000} />
      </div>
      <div className="text-stone-200 font-bold overline">
        Seattle, WA | Digital & Analog Mediums
      </div>
    </div>
  )
}
