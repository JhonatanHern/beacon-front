import React, { Component } from 'react'
import { Link } from "react-router-dom"

/*icons*/
import BurgerIcon from './utils/BurgerIcon'
import PersonIcon from './utils/PersonIcon'
//🎙

function getX(el) {
  let left = el.offsetLeft
  let width = el.offsetWidth
  while(el.offsetParent) {
    el = el.offsetParent
    left += el.offsetLeft
  }
  return left + width / 2 
}

const SearchBar = props => (
  <div className="search-bar">
    <input placeholder="search"/>
    <button style={{filter:'grayscale(100%)'}}><span role='img' aria-label="search">🔍</span></button>
  </div>
)

class Menu extends Component{
  constructor(props){
    super(props)
    this.state = {
      podcastSelectorX : 0
    }
    this.myRef = React.createRef();
    this.mainMenuToggle = this.mainMenuToggle.bind(this)
    this.togglePodcastSelector = this.togglePodcastSelector.bind(this)
  }
  mainMenuToggle( _ , open ){
    this.setState({mainMenu:!this.state.mainMenu})
  }
  togglePodcastSelector(e){
    e.preventDefault()
    const node = this.myRef.current
    const x = getX(node)
    this.setState({podcastSelectorX:x,displayPodcastSelector:!this.state.displayPodcastSelector})
  }
  render(){
    return (
      <header id="logged-header">
        <BurgerIcon onClick={ this.mainMenuToggle } open={this.state.mainMenu}/>
        <SearchBar />
        <div style={{display:'flex',alignItems:'center',position:'relative'}}>
          <div className='podcast-selector' ref={this.myRef} onClick={this.togglePodcastSelector}>My Podcasts️<span role='img' aria-label="open menu">🔻</span></div>
          <PersonIcon onClick={ e => this.setState( { secondMenu : ! this.state.secondMenu } ) } />
        </div>

        <nav className={ "left-menu" + ( this.state.mainMenu ? ' menu-on' : '' )}>
          <Link to="/add/episode"  onClick={this.mainMenuToggle}>Episode</Link>
          <Link to="/add/podcast"  onClick={this.mainMenuToggle}>Podcast</Link>
          <Link to="/add/playlist" onClick={this.mainMenuToggle}>Reproduction List</Link>
        </nav>
        
        <nav className={"right-menu" + ( this.state.secondMenu ? ' menu-on' : '' )}>
          <Link to="/profile">Profile</Link>
          <Link to="/settings">Settings</Link>
          <Link to="/statistics">Statistics</Link>
        </nav>
        <nav className="podcast-selector-menu" style={{display:this.state.displayPodcastSelector?'block':'none',left:this.state.podcastSelectorX+'px'}}>
          <Link to="/my/podcast/1">Podcast #1</Link>
          <Link to="/my/podcast/2">Podcast #2</Link>
          <Link to="/my/podcast/3">Podcast #3</Link>
          <Link to="/my/podcast/4">Podcast #4</Link>
        </nav>
        
        <Link id="signup" to="/signup" style={{display:'none'}}>sign up</Link>
      </header>
    )
  }
}

export default Menu