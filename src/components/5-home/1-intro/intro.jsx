import Button from "../../../UI/button"
import { clients } from "../../../constants"
import './intro.css'

const Intro = () => {
  return (
    <div className="home-intro box">
        <p className="home-title">Skills speak louder than words</p>
        <div className="home-text">
            <p >We help companies develop the strongest tech teams around. We help candidates sharpen their tech skills and pursue job opportunities.</p>
            <div className="btn-group">
                <Button params={{background: "#068932", color: "white"}}></Button>
            </div>
            <p>Over 40% of developers worldwide and 3,000 companies use HackerRan</p>
        </div>
        <div className="client-logos">
            {clients.map((pic, idx)=>(<img src={pic} key={idx} />))}
        </div>
    </div>
  )
}

export default Intro