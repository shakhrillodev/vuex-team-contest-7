import './screen-content.scss'
import Comparison from "./1-comparison/comparison"
import Features from './2-features/features'

const ScreenContent = () => {
  return (
    <section className="screen-content">
        <div className="content-box box">
            <p>::Coding tests::</p>
            <h3 className='big-title'>
                <span className='colourful-text'>Join the movement.</span><br />
                Screen on skills.
            </h3>
            <Comparison />
            <Features />
        </div>
    </section>
  )
}

export default ScreenContent