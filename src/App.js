import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav';
// import SvgIcon from 'react-icons-kit';
// import { ic_aspect_ratio } from 'react-icons-kit/md/ic_aspect_ratio';
// import { ic_business } from 'react-icons-kit/md/ic_business';

import OsmdContainer from "./components/OsmdContainer";
import './App.css';

const MySideNav = () => (
  <div style={{background: '#2c3e50', color: '#FFF', width: 220}}>
      <SideNav highlightColor='#E91E63' highlightBgColor='#00bcd4' defaultSelected='sales'>
          <Nav id='dashboard'>
              <NavIcon><SvgIcon size={20} icon={ic_aspect_ratio}/></NavIcon>
              <NavText> Dashboard </NavText>
          </Nav>
          <Nav id='sales'>
              <NavIcon><SvgIcon size={20} icon={ic_business}/></NavIcon>
              <NavText> Sales </NavText>
          </Nav>
      </SideNav>
  </div>
)

class App extends Component {
  render() {
    return (
      <div className="App">
<<<<<<< HEAD
        <MySideNav />

        <OsmdContainer />
=======
        <OsmdContainer tune="Cherokee_Shuffle"/>
>>>>>>> master
      </div>
    );
  }
}

export default App;
