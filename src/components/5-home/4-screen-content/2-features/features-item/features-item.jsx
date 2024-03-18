/* eslint-disable react/prop-types */
import './features-item.scss'
const FeaturesItem = ({item}) => {
    const {title, text, linkText, pic} = item
    return (
        <div className="features box">
            <div className="content">
                <h4 className="title">{title}</h4>
                <p className='description'>{text}</p>
                <p><a href="#">{linkText}</a></p>
            </div>
            <img src={pic} alt="img" />
        </div>
    )
}

export default FeaturesItem