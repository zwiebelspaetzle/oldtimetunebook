import React, { Component } from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faHandPointLeft from '@fortawesome/fontawesome-free-solid/faHandPointLeft'
import styled from 'styled-components'

const LeftPointer = styled.div`
  display: inline-block;
  margin: 0px 6px 0px -38px;
  position: relative;
  top: 3px;
`;

const StyledHome = styled.div`
  padding: 2rem 0 0 16rem;
`;

class Home extends Component {
  render () {
    return (
      <StyledHome>
        <h1>Oldtime Tunebook</h1>
        <div>
          <LeftPointer>
            <FontAwesomeIcon icon={faHandPointLeft} size='2x' color='#999' />
          </LeftPointer>
          <span>Pick a tune from the menu at left.</span>
        </div>
      </StyledHome>
    )
  }
}

export default Home
