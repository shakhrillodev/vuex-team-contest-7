import './nav-links.scss'
const NavLinks = () => {
  const navlinks = ["Products", "Solutions", "Resources", "Pricing"]
  return (
    <ul className="nav-links">{navlinks.map((link, idx) => {
        return (<li key={idx}>
            <a href="#">{link}</a>
        </li>)
    })}</ul>
  )
}

export default NavLinks