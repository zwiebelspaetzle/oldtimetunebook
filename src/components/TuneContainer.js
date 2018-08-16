import React, { Component } from 'react'
import OsmdContainer from './OsmdContainer'
import { tunesLib } from '../config.js';

class TuneContainer extends Component {
  render() {
    return (
      <div className="tuneContainer">
        <OsmdContainer tune={this.props.match.params.tunefile} />
      </div>
    )
  }
}

export default TuneContainer
