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
        <div style={{display: "flex", alignItems: "stretch"}}>
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
    <div style={{flexGrow: 1, flexShrink: 1}}>
      {/* <div style={{backgroundColor: '#ded'}}>Cities used to grow by accident. Sure, the location usually made sense—someplace defensible, on a hill or an island, or somewhere near an extractable resource or the confluence of two transport routes. But what happened next was ad hoc. The people who worked in the fort or the mines or the port or the warehouses needed places to eat, to sleep, to worship. Infrastructure threaded through the hustle and bustle—water, sewage, roads, trolleys, gas, electricity—in vast networks of improvisation. You can find planned exceptions: Alexandria, Roman colonial towns, certain districts in major Chinese cities, Haussmann’s Paris. But for the most part it was happenstance, luck, and layering the new on top of the old.</div> */}
      <OsmdContainer tune={match.params.tunefile}/>
    </div>
)}

const SideNav = () => {
  const tuneList = tunes.map((tune, key) => {
    let tuneFile = tune.replace(/ /g, '_').replace(/'/g, '');
    return <Link key={key} to={"/tunes/"+tuneFile}><li>{tune}</li></Link>
  })
  return (
    <div className="sideNav" style={{flexBasis: "200px"}}>
        <Link to="/"><li>Home</li></Link>
        { tuneList }
    </div>
  )
}

const Home = () => (
  <div></div>
)


export default App;
