// eslint-disable-next-line react/prop-types
const LinkItem = ({title, span, desc, btnText}) => {
  return (
    <div className="link-item">
        <h3 className="big-title" style={{fontSize: "36px"}}>
            {title}
            <span className="colourful-text">
                {span}
            </span>
        </h3>
        <p className="description">
            {desc}
        </p>
        <button>{btnText}</button>
    </div>
  )
}

export default LinkItem