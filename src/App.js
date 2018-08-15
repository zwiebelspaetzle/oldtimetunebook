import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './components/Home'
import OsmdContainer from './components/OsmdContainer'
import SideNav from './components/SideNav'
import TuneContainer from './components/TuneContainer'
import './App.css'

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <SideNav />
          <Route path='/' exact={true} component={Home} />
          <Route path='/tunes/:tunefile' component={TuneContainer} />
        </div>
      </Router>
    )
  }
}

// const TuneContainer = ({match}) => {
//   return (
//     <div>
//       <OsmdContainer tune={match.params.tunefile} />
//     </div>
//   )
// }

export default App
