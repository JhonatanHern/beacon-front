import React, { Component , Fragment } from 'react'
import { BrowserRouter as Router , Route , Switch } from "react-router-dom"
import './css/app.scss'

import Menu from './Menu'

import LandingPage from './LandingPage'

/* static ( for not logged users ) */
import SignUp from './main/SignUp'
import Welcome from './main/Welcome'
import MyPodcast from './main/MyPodcast'

/* main components */
import Settings from './main/Settings'
import Profile from './main/Profile'

/*forms*/
import AddEpisode from './main/forms/AddEpisode'
import AddPodcast from './main/forms/AddPodcast'
import AddPlaylist from './main/forms/AddPlaylist'
/**
 * the difference between AddPodcast and CreatePodcast
 * is that while AddPodcast "adds" a podcast (from iTunes or a new one)
 * CreatePodcast creates a podcast from scratch
 */
import CreatePodcast from './main/forms/CreatePodcast'
import ImportFromiTunes from './main/forms/ImportFromiTunes'

/*extras*/
// import Error404 from './utils/Error404'

class App extends Component {
  state = { logged : true }
  changeState = e => {

  }
  render() {
    if(!this.state.logged){
      return <LandingPage/>
    }
    return (
      <Router>
        <Fragment>
          <Menu/>
          <main>
            <Switch>
              <Route exact path="/" render={(props) => <Welcome {...props} isAuthed={true} >START</Welcome>}/>
              <Route exact path="/signup" render={(props) => <SignUp {...props} isAuthed={true} />}/>

              <Route exact path="/settings"  component={Settings}/>
              <Route exact path="/profile"  component={Profile}/>
              <Route path="/my/podcast/"  component={MyPodcast}/>

              <Route exact path="/add/episode"  render={(props) => <AddEpisode  {...props} isAuthed={true} />}/>
              <Route exact path="/add/podcast"  render={(props) => <AddPodcast  {...props} isAuthed={true} />}/>
              <Route exact path="/add/playlist" render={(props) => <AddPlaylist {...props} isAuthed={true} />}/>
              
              <Route exact path="/add/podcast/new"  render={(props) => <CreatePodcast  {...props} isAuthed={true} />}/>
              <Route exact path="/add/podcast/iTunes"  render={(props) => <ImportFromiTunes  {...props} isAuthed={true} />}/>
            </Switch>
          </main>
        </Fragment>
      </Router>
    );
  }
}

// Settings.initColors()

export default App;
