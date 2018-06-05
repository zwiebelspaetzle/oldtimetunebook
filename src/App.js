import React, { Component } from 'react';
import './App.css';

import OsmdContainer from "./components/OsmdContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <OsmdContainer tune="Cherokee_Shuffle"/>
      </div>
    );
  }
}

export default App;
