import React, { Component } from 'react';
import { OpenSheetMusicDisplay } from "opensheetmusicdisplay"
import styled from 'styled-components'

import { tunesLib } from '../config.js';

const Container = styled.div`
  flex-basis: auto;
  flex-grow: 1;
  flex-shrink: 1;
`

class OsmdContainer extends Component {
  opensheetmusicdisplay = null

  componentDidMount() {
    this.loadTune();
  }

  componentDidUpdate() {
    this.openSheetMusicDisplay.reset()
    this.loadTune()
  }

  createOsmd = () => {
    if (!this.openSheetMusicDisplay) {
      this.openSheetMusicDisplay = new OpenSheetMusicDisplay("mus", false, "canvas");
    }
  }

  loadTune() {
    this.createOsmd()
    this.openSheetMusicDisplay
    .load(tunesLib+this.props.tune+".musicxml")
    .then(
      () => {
        this.openSheetMusicDisplay.zoom = 0.8;
        this.openSheetMusicDisplay.render();
        window.addEventListener("resize", () => {
          this.openSheetMusicDisplay.render();
        });
      },
      (err) => console.err(err)
    )
    .then(
      (err) => console.err(err)
    );
  }

  render() {
    return (
      <Container>
        <div id="mus"></div>
      </Container>
    );
  }
}

export default OsmdContainer;
