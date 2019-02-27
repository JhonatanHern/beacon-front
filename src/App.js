import React, { Component , Fragment } from 'react'
import { BrowserRouter as Router , Route } from "react-router-dom"
import './App.css'

import Menu from './Menu'

/* static ( for not logged users ) */
import SignUp from './main/SignUp'
import Welcome from './main/Welcome'

/* main components */
import Settings from './main/Settings'
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
  render() {
    return (
      <Router>
        <Fragment>
          <Menu/>
          <main>
            <Route exact path="/" render={(props) => <Welcome {...props} isAuthed={true} >START</Welcome>}/>
            <Route exact path="/signup" render={(props) => <SignUp {...props} isAuthed={true} />}/>

            <Route exact path="/settings"  component={Settings}/>

            <Route exact path="/add/episode"  render={(props) => <AddEpisode  {...props} isAuthed={true} />}/>
            <Route exact path="/add/podcast"  render={(props) => <AddPodcast  {...props} isAuthed={true} />}/>
            <Route exact path="/add/playlist" render={(props) => <AddPlaylist {...props} isAuthed={true} />}/>
            
            <Route exact path="/add/podcast/new"  render={(props) => <CreatePodcast  {...props} isAuthed={true} />}/>
            <Route exact path="/add/podcast/iTunes"  render={(props) => <ImportFromiTunes  {...props} isAuthed={true} />}/>
          </main>
        </Fragment>
      </Router>
    );
  }
}

Settings.initColors()

export default App;
