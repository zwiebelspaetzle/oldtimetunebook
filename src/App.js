import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faChevronLeft from '@fortawesome/fontawesome-free-solid/faChevronLeft'

import Home from './components/Home'
import SideNav from './components/SideNav'
import TuneContainer from './components/TuneContainer'
import './App.css'


class App extends Component {
  state = {sideNavCollapsed: true}

  componentDidMount () {
    // show menu when loading to home page
    if (window.location.href.indexOf('tunes') === -1) {
      this.setState({sideNavCollapsed: false})
    }
  }

  handleSideNavToggleClick = () => {
    this.setState({sideNavCollapsed: !this.state.sideNavCollapsed})
  }

  render () {
    let sideNavToggleButtonClass = (this.state.sideNavCollapsed) ? 'sideNavToggleButton collapsed' : 'sideNavToggleButton';
    return (
      <Router>
        <div className="wrapper">
          <SideNav collapsed={this.state.sideNavCollapsed}/>
          <div className="sideNavToggleButtonContainer">
            <span className={sideNavToggleButtonClass} onClick={this.handleSideNavToggleClick}><FontAwesomeIcon icon={faChevronLeft} /></span>
          </div>
          <Route path='/' exact={true} component={Home} />
          <Route path='/tunes/:tunefile' component={TuneContainer} />
        </div>
      </Router>
    )
  }
}

export default App
