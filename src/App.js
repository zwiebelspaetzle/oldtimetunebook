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
          <SideNav />
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

const SideNav = () => {
  const tuneList = tunes.map((tune, key) => {
    let tuneFile = tune.replace(/ /g, '_').replace(/'/g, '');
    return <Link key={key} to={"/tunes/"+tuneFile}><li>{tune}</li></Link>
  })
  return (
    <div className="sideNav">
        <Link to="/"><li>Home</li></Link>
        { tuneList }
    </div>
  )
}

const Home = () => (
  <div></div>
)


export default App;
