import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'

// Components
import NavBar from './components/navbar'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
