import React, { Component } from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faHome from '@fortawesome/fontawesome-free-solid/faHome'
import { Link } from "react-router-dom";
import styled from 'styled-components'
import Switch from 'react-switch'

import {checkedIcon, uncheckedIcon} from '../svg/switchIcons'

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
        <Link to="/"><FontAwesomeIcon icon={faHome} color='#999' size='2x'/></Link>
        <Switch
          onChange      = {this.props.handleFillScreenChange}
          checked       = {this.props.fillScreen}
          checkedIcon   = {checkedIcon}
          id            = 'view-toggle'
          offColor      = '#ccd'
          onColor       = '#ccd'
          uncheckedIcon = {uncheckedIcon}
        />
      </Container>
    )
  }
}

export default ViewToggle
