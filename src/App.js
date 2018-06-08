import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { SideNav, Chevron, Icon } from 'react-side-nav';
import '../node_modules/react-side-nav/dist/themes.css';

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

const menuItems = [{
    id: 'tunes',
    label: 'Tunes',
    icon: 'fas fa-book',
    items: []
  }
];

tunes.forEach((tune) => {
  let tuneFile = tune.replace(/ /g, '_').replace(/'/g, '');
  menuItems[0].items.push({
    id: tuneFile,
    label: tune,
    icon: 'fas fa-music',
    link: '/tunes/'+tuneFile,
  });
})

const NavLink = props => (<Link to={props.to} {...props}><i className={`fa ${props.icon}`} />{props.label}</Link>);

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <SideNav
            items={menuItems}
            linkComponent={NavLink}
            chevronComponent={Chevron}
            iconComponent={Icon}
          />
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
