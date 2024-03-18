import ClientLogos from "../0-client-logos/client-logos"
import './intro.scss'

const Intro = () => {
  return (
    <div className="home-intro box">
        <p className="home-title">Skills speak louder than words</p>
        <div className="home-text">
            <p >We help companies develop the strongest tech teams around. We help candidates sharpen their tech skills and pursue job opportunities.</p>
            <div className="btn-group">
                <button>Sign up</button>
                <button style={{color: "#38414D", background: "white", border: "2px solid black"}}>Request demo</button>
            </div>
            <p>Over 40% of developers worldwide and 3,000 companies use HackerRan</p>
        </div>
        <ClientLogos />
    </div>
  )
}

export default Intro