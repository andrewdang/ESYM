import React, { Component } from 'react'

class NavBar extends Component {
  render() {
    return (
      <nav className="level">
        <p className="level-item has-text-centered">
          <a className="link is-info">MENU</a>
        </p>
        <p className="level-item has-text-centered">
          <a className="link is-info">SEARCH</a>
        </p>
        <p className="level-item has-text-centered">
          <a className="link is-info">CART</a>
        </p>
      </nav>
    )
  }
}

export default NavBar