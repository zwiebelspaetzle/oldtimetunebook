import React, { Component } from 'react'
import OsmdContainer from './OsmdContainer'
import { tunesLib } from '../config.js';

class TuneContainer extends Component {
  render() {
    return (
      <div>
        <OsmdContainer tune={this.props.match.params.tunefile} />
        {/* <embed type="audio/midi"
          src={tunesLib+this.props.tune+".mid"}
          // width="300"
          // height="200"
        /> */}
      </div>
    )
  }
}

export default TuneContainer
