import LinkItem from './link-item'
import './links.scss'

const Links = () => {
    return (
        <div className='home-links-container'>
            <div className="home-links box">
            <LinkItem title="Practice coding challenges & " span="prep for interviews" desc="Start practicing your skills now and land the job of your dreams." btnText="Join the community" />
            <LinkItem title="Get started " span="hiring with HackerRank" desc="More than 3,000 tech teams, representing all industries and from countries around the world, trust HackerRank" btnText="Request a demo" />
            </div>
        </div>
    )
}

export default Links