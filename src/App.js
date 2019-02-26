import React, { Component , Fragment } from 'react'
import { BrowserRouter as Router , Route, Link } from "react-router-dom"
import './App.css'

/* static ( for not logged users ) */
import SignUp from './main/SignUp'
import Welcome from './main/Welcome'

/*forms*/
import AddEpisode from './main/forms/AddEpisode'
import AddPodcast from './main/forms/AddPodcast'
import AddPlaylist from './main/forms/AddPlaylist'

/*icons*/
import BurgerIcon from './utils/BurgerIcon'
import PersonIcon from './utils/PersonIcon'

/*extras*/
// import Error404 from './utils/Error404'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {}
    this.mainMenuToggle = this.mainMenuToggle.bind(this)
  }
  handleNavigation(e){
    console.log(e.target.getAttribute('target'))
  }
  mainMenuToggle( _ , open ){
    this.setState({mainMenu:!this.state.mainMenu})
  }
  render() {
    return (
      <Router>
        <Fragment>
          <header>
            <BurgerIcon onClick={ this.mainMenuToggle }/>
            <PersonIcon onClick={ e => this.setState( { secondMenu : ! this.state.secondMenu } ) } />
            <nav className={ "left-menu" + ( this.state.mainMenu ? ' menu-on' : '' )}>
              <Link to="/add/episode">Episode</Link>
              <Link to="/add/playlist">Reproduction List</Link>
              <Link to="/add/podcast">Podcast</Link>
            </nav>
            <nav className={"right-menu" + ( this.state.secondMenu ? ' menu-on' : '' )}>
              <Link to="/">Account</Link>
              <Link to="/">Profile</Link>
              <Link to="/">Settings</Link>
              <Link to="/">Log Out</Link>
            </nav>
            <Link id="signup" to="/signup" style={{display:'none'}}>sign up</Link>
          </header>
          <main>
            <Route exact path="/" render={
                (props) => <Welcome {...props} isAuthed={true} >START</Welcome>
                }
              />
            <Route exact path="/add/episode"  render={(props) => <AddEpisode  {...props} isAuthed={true} />}/>
            <Route exact path="/add/podcast"  render={(props) => <AddPodcast  {...props} isAuthed={true} />}/>
            <Route exact path="/add/playlist" render={(props) => <AddPlaylist {...props} isAuthed={true} />}/>
            <Route exact path="/signup" render={
                (props) => <SignUp {...props} isAuthed={true} />
                }
              />
          </main>
        </Fragment>
      </Router>
    );
  }
}

export default App;
