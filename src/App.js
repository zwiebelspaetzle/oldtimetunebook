import React, { Component } from 'react';
import './App.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import OsmdContainer from "./components/OsmdContainer";
import ReactAbcContainer from "./components/ReactAbcContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Tabs>
          <TabList>
            <Tab>MusicXML</Tab>
            <Tab>Abc</Tab>
            <Tab>MuseScore.com</Tab>
          </TabList>

          <TabPanel>
            <OsmdContainer />
          </TabPanel>
          <TabPanel>
            <ReactAbcContainer />
          </TabPanel>
          <TabPanel>
            <iframe width="100%" height="700px" src="https://musescore.com/user/28587737/scores/5108258/embed" frameborder="0" allowfullscreen></iframe>
            <span><a href="https%3A%2F%2Fmusescore.com%2Fuser%2F28587737%2Fscores%2F5108258">Golden Slippers</a></span>
            <h4>Pros</h4>
            <ul>
              <li>Player highlights current measure.</li>
              <li>No conversion from MuseScore format needed.</li>
            </ul>
            <h4>Cons</h4>
            <ul>
              <li>$50 per year -- perhaps we could qualify for a non-profit discount</li>
              <li>Depends on external resource</li>
              <li>Load time</li>
            </ul>
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

export default App;
