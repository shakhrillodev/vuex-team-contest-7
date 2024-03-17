// eslint-disable-next-line react/prop-types
const Button = ({params, children}) => {
    // eslint-disable-next-line react/prop-types
    const {color = "black", background = "white", padding = "10px 15px", border = "none"} = params
    return (
        <button style={{color, background: background, padding: padding, border, outline: "none"}}>{children}</button>
    )
}

export default Button