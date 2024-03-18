import { footerIcons, footerLinks } from '../../constants'
import FooterItem from './footer-item'
import './footer.scss'

const Footer = () => {
  return (
    <footer>
        <div className="box">
            <ul className='footer-menu'>
                {footerLinks.map((item, idx)=>(<FooterItem key={idx} head={item.head} body={item.body} />))}
            </ul>
            <div className="credentials">
                <ul>
                    {footerIcons.map((icon, idx)=>(<li key={idx}><a href='#'><img className='icon' src={icon} alt={idx} /></a></li>))}
                </ul>
                <p className='description' style={{color: '#576871', fontWeight: '350'}}>Copyright © 2024 HackerRank DBA INTERVIEW STREET TECHNOLOGIES PRIVATE LIMITED</p>
                <a href='#' style={{color: '#637681', fontSize: '13px'}}>
                    Privacy Policy
                </a>
            </div>
        </div>
    </footer>
  )
}

export default Footer