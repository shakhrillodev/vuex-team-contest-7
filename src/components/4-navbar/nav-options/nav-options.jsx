import './nav-options.scss'

const NavOptions = () => {
  return (
    <ul className='nav-options'>
        <li>
            <button className='developerBtn'>
            For developers
            </button>
        </li>
        <li>
            <button style={{background: "#F7F7F7", color: "black" }}>Request demo</button>
        </li>
        <li>
            <button style={{background: "#068932", color: 'white'}}>Sign up</button>
        </li>
    </ul>
  )
}

export default NavOptions