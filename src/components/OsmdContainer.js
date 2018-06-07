import React, { Component } from 'react';
import { OpenSheetMusicDisplay } from "opensheetmusicdisplay";

class OsmdContainer extends Component {
  componentDidMount() {
    let openSheetMusicDisplay = new OpenSheetMusicDisplay("mus", false, "canvas");
    openSheetMusicDisplay
    .load("../library/"+this.props.tune+".musicxml")
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

  render() {
    return (
      <div id="mus"></div>
    );
  }
}

export default OsmdContainer;
