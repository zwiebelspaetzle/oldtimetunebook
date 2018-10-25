import React, { Component } from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
// import faPrint from '@fortawesome/fontawesome-free-solid/faPrint'
// import faTabletAlt from '@fortawesome/fontawesome-free-solid/faTabletAlt'
import faExpand from '@fortawesome/fontawesome-free-solid/faExpand'
import styled from 'styled-components'
import Switch from 'react-switch'

const Container = styled.div`
  // right: 0;
  // position: absolute;
  // top: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

class ViewToggle extends Component {
  constructor() {
    super()
    this.state = { fillScreen: true };
  }

  handleChange = (checked) => {
    this.setState({fillScreen: checked})
  }

  render () {
    return (
      <Container>
        <FontAwesomeIcon icon={faExpand} color='#999' size='2x'/>
        <Switch
          onChange = {this.handleChange}
          checked  = {this.state.fillScreen}
          id       = 'view-toggle'
          onColor  = '#ccd'
          offColor = '#ccd'
          // checkedIcon = {<FontAwesomeIcon icon={faPrint} color='#999' />}
          // uncheckedIcon = {<FontAwesomeIcon icon={faTabletAlt} color='#999' />}
        />
      </Container>
    )
  }
}

export default ViewToggle
