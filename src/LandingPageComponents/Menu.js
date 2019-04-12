import React, { Component } from 'react'
import { Link } from "react-router-dom"

const Filler = ()=><b style={{color:'transparent'}}>_</b>

class Menu extends Component{
  render(){
    return (
      <header>
        <img alt="" src="/beacon.png"/>
        <Filler/>
        <Filler/>
        <nav>
          <Link to="/auth/signup">Sign up</Link>
          <Filler/>
          <Filler/>
          <Filler/>
          <Filler/>
          <Link to="/auth/login">Log in</Link>
        </nav>
      </header>
    )
  }
}

export default Menu