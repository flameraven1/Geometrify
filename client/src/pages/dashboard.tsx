import { useState } from "react"
import Visualizer from "../components/Visualizer";

export default function Dashboard() {
    const [openVisualizer , setOpenVisualizer] = useState(false);
  
    return (
    <div className="w-full h-screen">
         <nav className="bg-customRed w-full h-[15%] text-white p-1 flex justify-around items-center border-b-customYellow border-b-4">
        <img src="/images/lg.png" alt="Logo for Geometrify" className="w-[9%]"/>
        <p className="font-sans text-customYellow text-4xl">Learn As you Go!</p>
      </nav>

      <div className="w-full h-[85%] flex">


        <div className="bg-customBlue w-1/5 h-full rounded-xl">
        <ul className="w-full h-full flex flex-col justify-center gap-5">
            <li onClick={()=>setOpenVisualizer(!openVisualizer)} className="hover:cursor-pointer font-sans font-extrabold text-lg text-white text-center">Visualizer</li>
            <li className="hover:cursor-pointer font-sans font-extrabold text-lg text-white text-center">Geometric Calculator</li>
            <li className="hover:cursor-pointer font-sans font-extrabold text-lg text-white text-center">Reference Library</li>
        </ul>
        </div>


        <div>
            {openVisualizer ?
            <Visualizer />: null}
        </div>

      </div>


    </div>
  )
}
