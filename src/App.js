import React, { Component } from 'react';
import './App.css';
import { Notation } from "react-abc";
import { OpenSheetMusicDisplay } from "opensheetmusicdisplay";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const notes = `
X:1
T:Golden Slippers
C:Traditional
%%scale 0.83
%%pagewidth 21.59cm
%%leftmargin 1.00cm
%%rightmargin 1.00cm
L:1/4
Q:1/4=120
M:4/4
K:G
V:1
 ((G/A/)) |:"G" B ((B/c/)) B/A/G/A/ | B ((B/c/)) B/A/G/A/ | B B c B |"D7" B A A ((F/G/)) |
 |A ((A/B/)) A/G/F/G/ | A ((A/B/)) A/G/F/G/ | A c B A |1"G" A G G ((G/A/)) :|2"G" A G G z ||
|:"G" D3 G | B A G F |"C" E3 A |"Am" c B A G |"D7" F3/2 F/ F G |
 |1 A3/2 A/ A A |"G" G3/2 F/ G A | B G F E :|2"G" A2 c2 | B3/2 c/ B A | G3 z |]

`;



class App extends Component {
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
      <div className="App">
        <Tabs>
          <TabList>
            <Tab>OpenSheetMusicDisplay</Tab>
            <Tab>React Abc</Tab>
            <Tab>MuseScore.com</Tab>
          </TabList>

          <TabPanel>
            <div id="mus"></div>
          </TabPanel>
          <TabPanel>
            <Notation notation={notes} />
          </TabPanel>
          <TabPanel>
            <iframe width="100%" height="700px" src="https://musescore.com/user/28587737/scores/5108258/embed" frameborder="0" allowfullscreen></iframe>
            <span><a href="https%3A%2F%2Fmusescore.com%2Fuser%2F28587737%2Fscores%2F5108258">Golden Slippers</a></span>
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

export default App;
