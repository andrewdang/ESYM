import React, { Component } from 'react'
import { Link } from 'react-router'


class NavBar extends Component {
  render() {
    return (
      <nav className="level">
        <p className="level-item has-text-centered">
          <a className="link is-info">MENU</a>
        </p>

        <p className="level-item has-text-centered">
          <Link to='/' className="link is-info">HOME</Link>
        </p>

        <p className="level-item has-text-centered">
          <Link to='/cart' className="link is-info">CART</Link>
        </p>
      </nav>
    )
  }
}

export default NavBar