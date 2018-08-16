import React, { Component } from 'react';
import { Link } from "react-router-dom";
// import FontAwesomeIcon from '@fortawesome/react-fontawesome'
// import faChevronLeft from '@fortawesome/fontawesome-free-solid/faChevronLeft'

const tunes = [
  'Big Sciota',
  'Cherokee Shuffle',
  'Coleman\'s March',
  'Golden Slippers',
  'Sourgrass and Granite',
  'Whiskey Before Breakfast',
]

class SideNav extends Component {
  render() {
    let tuneList = tunes.map((tune, key) => {
      let tuneFile = tune.replace(/ /g, '_').replace(/'/g, '');
      return <Link key={key} to={"/tunes/"+tuneFile}><li>{tune}</li></Link>
    })
    let sideNavClass = (this.props.collapsed) ? 'sideNav collapsed' : 'sideNav';
    return (
        <div className={sideNavClass}>
          <div className="menu">
            <Link to="/"><li>Home</li></Link>
            { tuneList }
          </div>
          {/* <div className="toggleButtonContainer">
            <span className="toggleButton" onClick={this.handleToggleClick}><FontAwesomeIcon icon={faChevronLeft} /></span>
          </div> */}
        </div>
    )
  }
}

export default SideNav
