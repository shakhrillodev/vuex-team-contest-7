import './nav-options.css'

const NavOptions = () => {
  return (
    <ul className='nav-options'>
        <li>
            <p style={{borderRight: "1px solid black", paddingRight: "10px"}}>
            For developers
            </p>
        </li>
        <li>
            <button style={{background: "#F7F7F7" }}>Request demo</button>
        </li>
        <li>
            <button style={{background: "#068932", color: 'white'}}>Sign up</button>
        </li>
    </ul>
  )
}

export default NavOptions