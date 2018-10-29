import React, { Component } from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faExpand from '@fortawesome/fontawesome-free-solid/faExpand'
import styled from 'styled-components'
import Switch from 'react-switch'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

class ViewToggle extends Component {
  handleChange = (checked) => {
    this.setState({fillScreen: checked})
  }

  render () {
    return (
      <Container>
        <FontAwesomeIcon icon={faExpand} color='#999' size='2x'/>
        <Switch
          onChange = {this.props.handleFillScreenChange}
          checked  = {this.props.fillScreen}
          id       = 'view-toggle'
          onColor  = '#ccd'
          offColor = '#ccd'
        />
      </Container>
    )
  }
}

export default ViewToggle
