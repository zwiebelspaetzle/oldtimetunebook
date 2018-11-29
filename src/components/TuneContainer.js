import React, { Component } from 'react'
import styled from 'styled-components'

import OsmdContainer from './OsmdContainer'
import { tunesLib } from './../config.js';

const PdfContainer = styled.embed`
  width: 100%;
  height: 100%;
  position: absolute;
`

class TuneContainer extends Component {
  constructor() {
    super()
  }

  render() {
    console.log(this.props.fillScreen)
    return (
      <div>
        { this.props.fillScreen
          ? <OsmdContainer tune={this.props.match.params.tunefile} />
          : <PdfContainer src={tunesLib + this.props.match.params.tunefile + '.pdf'} />
        }
      </div>
    )
  }
}

export default TuneContainer
