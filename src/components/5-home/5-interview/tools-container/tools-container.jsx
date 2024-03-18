import { tools } from "../../../../constants"
import './tools-container.scss'
const ToolsContainer = () => {
  return (
    <div className="box tools-container">
        {tools.map((tool, idx)=>( <img key={idx} src={tool} alt={`tool-${idx}`} /> ))}
    </div>
  )
}

export default ToolsContainer