/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const FooterItem = ({head, body}) => {
  return (
    <li>
        <a href="#" className="sub-menu-title">{head}</a>
        <ul className="sub-menu">
            {body.map((li, idx)=>(<li key={idx}><a href="#" className="sub-menu-item">{li}</a></li>))}
        </ul>
    </li>
  )
}

export default FooterItem