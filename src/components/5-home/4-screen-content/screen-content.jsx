import './screen-content.scss'
import Comparison from "./1-comparison/comparison"
import Features from './2-features/features'
import { screenArt } from '../../../assets'

const ScreenContent = () => {
  return (
    <section className="screen-content">
        <div className="content-box box">
            <img src={screenArt} alt="screenart" className='screen-art' />
            <p className='small-t'>::Coding tests::</p>
            <p className='big-title cherry'>
                <span className='colourful-text'>Join the movement.</span><br />
                Screen on skills.
            </p>
            <Comparison />
            <Features />
        </div>
    </section>
  )
}

export default ScreenContent