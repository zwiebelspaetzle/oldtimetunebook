import React, { Component } from 'react';
import { Link } from "react-router-dom";
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faChevronLeft from '@fortawesome/fontawesome-free-solid/faChevronLeft'
import styled from 'styled-components'

import ViewToggle from './ViewToggle'

const Menu = styled.div`
  width: 10rem;
`

const StyledSideNav = styled.div`
  background-color: #dde;
  left: ${props => props.collapsed ? "-10rem" : "0rem"};
  position: absolute;
  top: 0;
  transition: 0.5s;
  z-index: 100;
`

const SideNavLi = styled.li`
  border-bottom: 1px solid #aac;
  font-size: 0.8rem;
  list-style-type: none;
  margin: 0;
  padding: .75rem;

  :hover {
    background-color: #eef;
  }
`;

const StyledLink = styled(Link)`
  color: #000;
  opacity: 1;
  text-decoration: none;
  transition: 0.5s;
`;

const ToggleButton = styled.span`
  display: inline-block;
  transition: 0.5s;
  transform: ${props => props.collapsed ? "rotate(-180deg)" : null};
`;

const ToggleButtonContainer = styled.div`
  background-color: #dde;
  top: 0;
  left: 10rem;
  padding: 0.25rem 0.5rem;
  transition: 0.5s;
  position: absolute;
`;

const tunes = [
  'Big Sciota',
  'Cherokee Shuffle',
  'Clinch Mountain Backstep',
  'Coleman\'s March',
  'Golden Slippers',
  'Midnight On The Water',
  'Old Grey Cat',
  'Ook Pik Waltz',
  'Sailor\'s Hornpipe',
  'Sourgrass and Granite',
  'Tennessee Waltz',
  'Wabash Cannonball',
  'Whiskey Before Breakfast',
  'Wildwood Flower',
]

class SideNav extends Component {
  state = {collapsed: true}

  componentDidMount () {
    // show menu when loading to home page
    if (window.location.href.indexOf('tunes') === -1) {
      this.setState({collapsed: false})
    }
  }

  handleToggleClick = () => {
    this.setState({collapsed: !this.state.collapsed})
  }

  render() {
    let tuneList = tunes.map((tune, key) => {
      let tuneFile = tune.replace(/ /g, '_').replace(/'/g, '');
      return <StyledLink key={key} to={"/tunes/"+tuneFile}><SideNavLi>{tune}</SideNavLi></StyledLink>
    })
    return (
      <StyledSideNav collapsed={this.state.collapsed}>
        <Menu>
          <SideNavLi><ViewToggle fillScreen={this.props.fillScreen} handleFillScreenChange={this.props.handleFillScreenChange}/></SideNavLi>
          <StyledLink to="/"><SideNavLi>Home</SideNavLi></StyledLink>
          { tuneList }
        </Menu>
        <ToggleButtonContainer onClick={this.handleToggleClick}>
          <ToggleButton collapsed={this.state.collapsed}><FontAwesomeIcon icon={faChevronLeft} /></ToggleButton>
        </ToggleButtonContainer>
      </StyledSideNav>
    )
  }
}

export default SideNav
