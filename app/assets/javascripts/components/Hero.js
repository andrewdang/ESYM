import React, { Component } from 'react'

class Hero extends Component {
  render() {
    return (
      <section className="hero is-info is-medium has-text-centered">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              Buy Something
            </h1>
            <br/>
            <h2 className="subtitle">
              <button className="button is-primary is-large">Shop</button>
            </h2>
          </div>
        </div>
      </section>
    )
  }
}

export default Hero