import React, { Component } from 'react'

class NavBar extends Component {
  render() {
    return (
      <nav className="nav has-shadow">
        <div className="container">
          <div className="nav-left">
            <a className="nav-item">
              <img src="http://bulma.io/images/bulma-logo.png" alt="logo" />
            </a>
            <a className="nav-item is-tab is-hidden-mobile is-active">Menu</a>
          </div>
          <span className="nav-toggle">
            <span></span>
            <span></span>
            <span></span>
          </span>
          <div className="nav-right nav-menu">
            <a className="nav-item is-tab">
              <figure className="image is-16x16">
                <img src="http://bulma.io/images/jgthms.png" />
              </figure>
            </a>
            <a className="nav-item is-tab">Log out</a>
          </div>
        </div>
      </nav>
    )
  }
}

export default NavBar