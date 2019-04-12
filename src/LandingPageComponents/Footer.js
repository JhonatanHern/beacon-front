import React, { Component } from 'react'

const Filler = ()=><b style={{color:'transparent'}}>_</b>

class Footer extends Component{
  render(){
    return (
      <footer>
        <img alt="" src="/beacon.png"/>
        <Filler/>
        <div>
          <div>
            <h5>Social</h5>
            <a href='/'>TWITTER</a>
            <a href='/'>FACEBOOK</a>
            <a href='/'>INSTAGRAM</a>
            <a href='/'>YOUTUBE</a>
          </div>
          <Filler/>
          <Filler/>
          <Filler/>
          <div>
            <h5>Legal</h5>
            <a href='/'>TERMS</a>
            <a href='/'>PRIVACY POLICY</a>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer