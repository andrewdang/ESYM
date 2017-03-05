import React, { Component } from 'react'
import Hero from './Hero'
import Item from './Item'

let items = [
  { item_id: 1, name: 'E-reader 1', price: 100 },
  { item_id: 2, name: 'E-reader 2', price: 200 },
  { item_id: 3, name: 'E-reader 3', price: 300 }
]

class Home extends Component {
  render() {
    return (
      <div>
        <Hero />

        <div className="container is-fluid">
          <div className="tile is-ancestor">
            {items.map((item) => {
              return (
                <Item item={item} key={item.item_id} />
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default Home
