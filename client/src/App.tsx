import { Link } from "react-router"

export default function App() {
  return (
    <div className="w-full h-screen bg-customRed">

      <nav className="w-full h-[20%] text-white p-4 flex justify-around items-center">
        <img src="/images/lg.png" alt="Logo for Geometrify" className="w-[12%]"/>
        <p className="font-sans text-customYellow text-6xl">Learn As you Go!</p>
      </nav>

      <div className="w-full h-[80%] flex">

      <div className="w-[60%] lg:w-1/2 h-full flex justify-center items-center">
          <img src="/images/stem.png" alt="This pic represents the theme of this application" className="w-[70%] max-w-lg rounded-xl shadow-xl transition-all duration-500 transform hover:scale-110"/>
        </div>



      <div className="w-[40%] h-full flex flex-col justify-center items-center gap-10 pr-10">
      <h1 className="text-4xl font-bold text-customYellow font-sans text-center">Your friendly companion for learning geometry!</h1>
      <p className="text-center text-lg font-sans text-white">Find geometry hard? No worries! Dive into the world of geometry with your geo buddy Geometrify and learn geometry in a fun interactive way, exploring the various concepts and things you find difficult.</p>
      <Link to="/dashboard" className="font-sans font-bold text-red-900 text-center rounded-lg bg-customYellow text-lg p-2 hover:bg-customBlue shadow-2xl">Let's Start</Link>
      </div>

      </div>



    </div>
  )
}
