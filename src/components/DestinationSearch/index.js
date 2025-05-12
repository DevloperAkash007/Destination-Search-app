import './index.css'
import {Component} from 'react'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {
    searchInputValue: '',
  }

  onChangeSearchInput = event => {
    this.setState({searchInputValue: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {searchInputValue} = this.state
    const requiredDestinationsList = destinationsList.filter(place =>
      place.name.toLowerCase().includes(searchInputValue.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <div className="destination-search-item">
          <h1 className="heading">Destination Search</h1>
          <div className="input-container">
            <input
              placeholder="Search"
              className="search-bar"
              value={this.searchInputValue}
              type="Search"
              onChange={this.onChangeSearchInput}
            />
            <img
              alt="search icon"
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png "
            />
          </div>
        </div>
        <ul className="destination-container">
          {requiredDestinationsList.map(place => (
            <DestinationItem destination={place} key={place.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
