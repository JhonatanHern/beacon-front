import React, { Component } from 'react'

class LandingMain extends Component{
  render(){
    return (
      <div id="landing-main">
        <img className="big-logo" alt="" src="landingIcons/whitelogo.png"/>
        <h1>The best way to make your podcast</h1>
        <h4>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore
        </h4>
        <section>
          <img style={{transform:'translateY(-66%)'}} className="waves" alt="" src="landingIcons/waves.svg"/>
          <img style={{transform:'translateY(-40%)'}} className="waves" alt="" src="landingIcons/solidwaves.svg"/>
          <h2>
            Best features
          </h2>
          <div className="main-features">
            <div>
              <div>
                <h4>Lorem ipsum</h4>
                <p>
                  Lorem ipsum dolor sit amet, consecte adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat
                </p>
              </div>
              <img alt="" src="/landingIcons/iconos-05.svg"/>
            </div>
            <div>
              <div>
                <h4>Lorem ipsum</h4>
                <p>
                  Lorem ipsum dolor sit amet, consecte adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat
                </p>
              </div>
              <img alt="" src="/landingIcons/iconos-06.svg"/>
            </div>
            <div>
              <div>
                <h4>Lorem ipsum</h4>
                <p>
                  Lorem ipsum dolor sit amet, consecte adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat
                </p>
              </div>
              <img alt="" src="/landingIcons/iconos-04.svg"/>
            </div>
            <div>
              <div>
                <h4>Lorem ipsum</h4>
                <p>
                  Lorem ipsum dolor sit amet, consecte adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat
                </p>
              </div>
              <img alt="" src="/landingIcons/iconos-03.svg"/>
            </div>
            <div>
              <div>
                <h4>Lorem ipsum</h4>
                <p>
                  Lorem ipsum dolor sit amet, consecte adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat
                </p>
              </div>
              <img alt="" src="/landingIcons/iconos-01.svg"/>
            </div>
            <div>
              <div>
                <h4>Lorem ipsum</h4>
                <p>
                  Lorem ipsum dolor sit amet, consecte adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat
                </p>
              </div>
              <img alt="" src="/landingIcons/iconos-02.svg"/>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default LandingMain