import React, { Component } from 'react';
import { OpenSheetMusicDisplay } from "opensheetmusicdisplay";

class OsmdContainer extends Component {
  componentDidMount() {
    let openSheetMusicDisplay = new OpenSheetMusicDisplay("mus", false, "canvas");
    openSheetMusicDisplay
    .load("library/Golden_Slippers.musicxml")
    .then(
      () => {
        openSheetMusicDisplay.zoom = 0.8;
        openSheetMusicDisplay.render();
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
      <div>
        <div id="mus"></div>
        <h4>Pros</h4>
        <ul>
          <li>Flows with page resize.  (For now resize window and then refresh.  Will make auto-refresh if we go this way.)</li>
          <li>Future version should support tablature.</li>
        </ul>

      </div>
    );
  }
}

export default OsmdContainer;
