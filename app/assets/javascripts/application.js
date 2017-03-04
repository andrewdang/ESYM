import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'

// Components
import NavBar from './components/Navbar'
import Hero from './components/Hero'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Hero />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
