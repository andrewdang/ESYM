import React from 'react'
import NavBar from '../components/Navbar'
import Footer from '../components/Footer'

const Container = (props) => {
  return (
    <div>
      <NavBar />
      {props.children}
      <Footer />
    </div>
  )
}

export default Container