import ClientLogos from '../0-client-logos/client-logos'
import './about.scss'
import Slider from './swiper/swiper'
const About = () => {
  return (
    <div className='about'>
        <div className="box">
            <div className="content">
                <div className="text-content">
                    <h3 className='big-title' style={{fontSize: "36px", marginBottom: "20px"}}>
                        Every company is a tech company. <br />
                        <span className='colourful-text'>
                            We’re here to help ‘em all.
                        </span>
                    </h3>
                    <p className='description' style={{marginBottom: "10px"}}>
                        More than 3,000 tech teams, representing all industries and from countries around the world, trust HackerRank to connect with developers and add cutting-edge skills to their teams.
                    </p>
                    <p className='description'>
                        That includes 25% of the Fortune 100 — and that moonshot startup that just came out of stealth.
                    </p>
                </div>
                <Slider />
            </div>
            <ClientLogos />
        </div>
    </div>
  )
}

export default About