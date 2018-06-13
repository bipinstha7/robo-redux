import React, { Component } from 'react'

class Header extends Component {
  // once page is loaded, header is not needed to load again or with every search. return false prevent header to load every time
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }
  render() {
    return <h1 className="f2">RoboFriends</h1>
  }
}

export default Header;