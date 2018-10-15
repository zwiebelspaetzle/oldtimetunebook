import React, { Component } from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faPrint from '@fortawesome/fontawesome-free-solid/faPrint'
import faTabletAlt from '@fortawesome/fontawesome-free-solid/faTabletAlt'
import styled from 'styled-components'
import Switch from 'react-switch'

const Container = styled.div`
  right: 0;
  position: absolute;
  top: 0;
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
        <label htmlFor="view-toggle">
          <span>fill screen</span>
          <Switch
            onChange = {this.handleChange}
            checked  = {this.state.fillScreen}
            id       = 'view-toggle'
            onColor  = '#dde'
            offColor = '#dde'
            checkedIcon = {<FontAwesomeIcon icon={faPrint} size='10px' color='#999' />}
            uncheckedIcon = {<FontAwesomeIcon icon={faTabletAlt} size='10px' color='#999' />}
          />
        </label>
      </Container>
    )
  }
}

export default ViewToggle
