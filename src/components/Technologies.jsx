import { RiBootstrapLine, RiCss3Line, RiHtml5Line, RiJavascriptLine, RiNodejsLine, RiReactjsLine, RiTailwindCssLine } from "react-icons/ri"
import { SiExpress, SiMongodb } from "react-icons/si"

const Technologies = () => {
  return (
    <div className="pb-24">
        <h2 className="my-20 text-center text-4xl">Technologies</h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <div>
                <RiHtml5Line className="text-7xl text-red-700"/>
            </div>
            <div className="p-4">
                <RiCss3Line className="text-7xl text-blue-700"/>
            </div>
            <div className="p-4">
                <RiJavascriptLine className="text-7xl text-yellow-600"/>
            </div>
            <div className="p-4">
                <RiReactjsLine className="text-7xl text-cyan-400"/>
            </div>
            <div className="p-4">
                <RiTailwindCssLine className="text-7xl text-blue-700"/>
            </div>
            <div className="p-4">
                <RiBootstrapLine className="text-7xl text-violet-600"/>
            </div>
            <div className="p-4">
                <SiExpress className="text-7xl text-yellow-600"/>
            </div>
            <div className="p-4">
                <RiNodejsLine className="text-7xl text-green-700"/>
            </div>
            <div className="p-4">
                <SiMongodb className="text-7xl text-green-700"/>
            </div>

        </div>
      
    </div>
  )
}

export default Technologies
