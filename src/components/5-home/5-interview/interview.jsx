import { interview2 } from '../../../assets'
import './interview.scss'
import TextContent from './text-content/text-content'
import ToolsContainer from './tools-container/tools-container'

const Interview = () => {
  return (
    <section>
        <div className='box'>
            <TextContent />
            <ToolsContainer />
            <img className='interview-pic' src={interview2} alt="interview" />
        </div>
    </section>
  )
}

export default Interview