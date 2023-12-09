import Typewriter from "react-ts-typewriter";

export default function About() {
  return (
    <>
        <div className="text-7xl font-semi-bold font-vollkorn">
            <Typewriter text="about me" loop={true} speed={200} delay={1000}/>
        </div>
    </>
  )
}
