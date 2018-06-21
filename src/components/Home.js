import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faHandPointLeft from '@fortawesome/fontawesome-free-solid/faHandPointLeft'

class Home extends Component {
  render() {
    return (
      <div className="home">
        <h1>Oldtime Tunebook</h1>
        <div>
          <div className="leftPointer">
            <FontAwesomeIcon icon={faHandPointLeft} size="2x" color="#999"/>
          </div>
          <span>Pick a tune from the menu at left.</span>
        </div>
      </div>
    )
  }
}

export default Home
