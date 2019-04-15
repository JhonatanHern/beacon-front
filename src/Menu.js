import React, { Component } from 'react'
import { Link } from "react-router-dom"

const getX = el => {
  let left = el.offsetLeft
  let width = el.offsetWidth
  while(el.offsetParent) {
    el = el.offsetParent
    left += el.offsetLeft
  }
  return left + width / 2 
}

class Menu extends Component{
  render(){
    return (
      <header id="logged-header">
        <img alt="" src="/beacon.png"/>
        <div>
          <Link to="/">Home</Link>
          <button>My Podcast</button>
          <Link to="">Add Episode</Link>
        </div>
        <Link to="/profile">Profile</Link>
      </header>
    )
  }
}

export default Menu