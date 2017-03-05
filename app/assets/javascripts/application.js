import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router'

// Components
import Home from './components/Home'
import NavBar from './components/Navbar'
import Hero from './components/Hero'

// Containers
import Container from './containers/Container'

class App extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Container}>
          <IndexRoute component={Home} />
          <Route path='/cart' component={Cart} />
          <Route path='/payment' component={PaymentForm} />
          <Route path='*' component={NotFound} />
        </Route>
      </Router>
    )
  }
}

const NotFound = () => (<h2>404 Not found!</h2>)
const Cart = () => <h1>Cart</h1>

ReactDOM.render(<App />, document.getElementById('app'))
