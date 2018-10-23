import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled from 'styled-components'

import Home from './components/Home'
import OsmdContainer from './components/OsmdContainer'
import SideNav from './components/SideNav'

const Container = styled.div`
  display: flex;
`
const RightContainer = styled.div`
  flex-basis: auto;
  flex-grow: 1;
  flex-shrink: 1;
  max-width: 95vw;
`

class App extends Component {
  render () {
    return (
      <Router>
        <Container>
          <SideNav />
          <RightContainer>
            <Route path='/' exact={true} component={Home} />
            <Route path='/tunes/:tunefile' component={TuneContainer} />
          </RightContainer>
        </Container>
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
