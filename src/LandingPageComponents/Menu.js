import React, { Component } from 'react'
import { Link } from "react-router-dom"


class Menu extends Component{
  render(){
    return (
      <header>
        <img alt="" src="beacon.png"/>
        <nav>
          <Link to="/signup">Sign up</Link>
          <Link to="/login">Log in</Link>
        </nav>
      </header>
    )
  }
}

export default Menu