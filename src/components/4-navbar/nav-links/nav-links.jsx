import './nav-links.css'
const NavLinks = () => {
  const navlinks = ["Products", "Solutions", "Resources", "Pricing"]
  return (
    <ul className="nav-links">{navlinks.map((link, idx) => {
        return (<li key={idx}>
            {link}
        </li>)
    })}</ul>
  )
}

export default NavLinks