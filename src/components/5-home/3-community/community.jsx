import { community } from '../../../assets'
import './community.scss'
const Community = () => {
  return (
    <section style={{background: "white"}}>
        <div className="box community">
            <div className="content">
                <p className='small-t cherry'>::Coding practice::</p>
                <h3 style={{fontSize: "24px"}}>
                    Explore and expand your skills.
                </h3>
                <div className="desc">
                    <p style={{fontSize: "18px", fontWeight: 'lighter'}}>
                    Every idea has a first line of code. Prep for jobs and sharpen your skills alongside a global community of developers. Access the content you need to develop new skills – and land the job you’ve dreamed of.
                    </p>
                    <button style={{border: "1px solid white", color: "white", background: "transparent"}}>
                        <p style={{fontWeight: "bold"}}>Sign up and practice</p>
                    </button>
                </div>
            </div>
            <img src={community} alt="community" />
        </div>
    </section>
  )
}

export default Community