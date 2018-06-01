import React, { Component } from 'react';
import './App.css';

import OsmdContainer from "./components/OsmdContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <OsmdContainer />
      </div>
    );
  }
}

export default App;
