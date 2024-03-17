// eslint-disable-next-line react/prop-types
const Button = ({params, children}) => {
    // eslint-disable-next-line react/prop-types
    const {color = "black", background = "white", padding = "10px 15px", border = "none", borderRadius = "5px"} = params
    return (
        <button style={{color, background, padding, border, borderRadius, outline: "none"}}>{children}</button>
    )
}

export default Button