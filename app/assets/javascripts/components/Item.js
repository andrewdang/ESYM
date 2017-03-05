import React, { Component } from 'react'

class Item extends Component {
  render() {
    const { item } = this.props

    return (
      <div className="tile is-parent is-4">
        <article className="tile is-child notification box">
          <figure className="image is-4by3">
            <img src="http://bulma.io/images/placeholders/640x480.png" />
          </figure>
          <p className="title">{item.name}</p>
          <p className="subtitle">{item.price}</p>
          <button className="button is-primary">
            Add to Cart
          </button>
        </article>
      </div>
    )
  }
}

export default Item
