import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import OsmdContainer from "./components/OsmdContainer";
import './App.css';

const tunes = [
  'Golden Slippers',
  'Cherokee Shuffle',
  'Coleman\'s March',
  'Sourgrass and Granite',
  'Whiskey Before Breakfast',
  'Big Sciota'
]

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/tunes/:tunefile" component={TuneContainer}/>
        </div>
      </Router>
    )
  }
}

const TuneContainer = ({match}) => {
  console.log(match.params.tunefile);
  return (
  <OsmdContainer tune={match.params.tunefile}/>
)}

const Home = () => {
  const tuneList = tunes.map((tune, key) => {
    let tuneFile = tune.replace(/ /g, '_').replace(/'/g, '');
    return <li key={key}><Link to={"/tunes/"+tuneFile}>{tune}</Link></li>
  })
  return (
    <ul>
      <li><Link to="/">Home</Link></li>
      { tuneList }
    </ul>
  )
}

export default App;
