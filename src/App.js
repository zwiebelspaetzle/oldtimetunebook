import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './components/Home'
import SideNav from './components/SideNav'
import TuneContainer from './components/TuneContainer'

class App extends Component {
  constructor() {
    super()
    this.state = { fillScreen: true }
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
          <Route path='/tunes/:tunefile' render={(props) => <TuneContainer {...props} fillScreen={this.state.fillScreen} />} />
        </div>
      </Router>
    )
  }
}

export default App
