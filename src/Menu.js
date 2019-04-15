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
  state = {
    x:0,
    showMyPodcasts : false,
  }
  buttonRef =  React.createRef()
  toggleNavAndUpdateX = display => {
    this.setState({
      showMyPodcasts : display,
      x : getX(this.buttonRef.current)
    })
  }
  render(){
    return (
      <header id="logged-header" onMouseLeave={e=>this.toggleNavAndUpdateX(false)}>
        <img alt="" src="/beacon.png"/>
        <div>
          <Link to="/">Home</Link>
          <button ref={this.buttonRef} onMouseEnter={e=>this.toggleNavAndUpdateX(true)}>My Podcast</button>
          <Link to="">Add Episode</Link>
        </div>
        <Link to="/profile">Profile</Link>
        <nav className="my-podcasts" style={{left:this.state.x,maxHeight:this.state.showMyPodcasts?"20em":'0'}}>
          <Link to="/my-podcast/1">My podcast #1</Link>
          <Link to="/my-podcast/1">My podcast #2</Link>
          <Link to="/my-podcast/1">My podcast #3</Link>
          <Link to="/my-podcast/1">My podcast #4</Link>
        </nav>
      </header>
    )
  }
}

export default Menu