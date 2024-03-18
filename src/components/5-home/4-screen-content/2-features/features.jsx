
import { screenContentFeatures } from '../../../../constants'
import FeaturesItem from './features-item/features-item'

const Features = () => {
  return (
    <section style={{background: "transparent"}}>
        {screenContentFeatures.map((item, idx)=>(<FeaturesItem key={idx} item={item} />))}
    </section>
  )
}

export default Features