import './index.css'

const DestinationItem = props => {
  const {destination} = props
  return (
    <li className="destination-item">
      <img className="image" alt={destination.name} src={destination.imgUrl} />
      <p className="destination-name">{destination.name}</p>
    </li>
  )
}

export default DestinationItem
