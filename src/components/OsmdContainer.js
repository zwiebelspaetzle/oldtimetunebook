import React, { Component } from 'react';
import { OpenSheetMusicDisplay } from "opensheetmusicdisplay";

class OsmdContainer extends Component {

  state = {
    tune: this.props.tune
  };

  componentDidMount() {
    this.loadTune();
  }

  loadTune() {
    let openSheetMusicDisplay = new OpenSheetMusicDisplay("mus", false, "canvas");
    openSheetMusicDisplay
    .load("../library/"+this.state.tune+".musicxml")
    .then(
      () => {
        openSheetMusicDisplay.zoom = 0.8;
        openSheetMusicDisplay.render();
        window.addEventListener("resize", () => {
          openSheetMusicDisplay.render();
        });
      },
      (err) => console.err(err)
    )
    .then(
      () => console.log("Sheet music displayed."),
      (err) => console.err(err)
    );
  }

  static getDerivedStateFromProps(props, state) {
    if (props.tune !== state.tune) {
      return {
        tune: props.tune
      };
    }
    return null;
  }

  render() {
    // this.loadTune();
    return (
      <div>
        <div id="mus"></div>
      </div>
    );
  }
}

export default OsmdContainer;
