import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './components/Home'
import OsmdContainer from './components/OsmdContainer'
import SideNav from './components/SideNav'

class App extends Component {
  constructor() {
    super()
    this.state = { fillScreen: true };
  }

  handleFillScreenChange = (checked) => {
    this.setState({fillScreen: checked})
  }

  render () {
    return (
      <Router>
        <div>
          <SideNav fillScreen={this.state.fillScreen} handleFillScreenChange={this.handleFillScreenChange} />
          <Route path='/' exact={true} component={Home} />
          <Route path='/tunes/:tunefile' component={TuneContainer} />
        </div>
      </Router>
    )
  }
}

const TuneContainer = ({match}) => {
  return (
    <div>
      <OsmdContainer tune={match.params.tunefile} />
    </div>
  )
}

export default App
