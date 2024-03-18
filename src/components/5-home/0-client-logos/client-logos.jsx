import { clients } from "../../../constants"
import './client-logos.scss'

const ClientLogos = () => {
  return (
    <div className="client-logos">
        {clients.map((pic, idx)=>(<img src={pic} key={idx} />))}
    </div>
  )
}

export default ClientLogos