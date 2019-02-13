import React, { Component , Fragment } from 'react'
import { BrowserRouter as Router, Redirect , Route, Link } from "react-router-dom"
import './App.css'

import SignUp from './main/SignUp'
import Welcome from './main/Welcome'

let startFlag

class App extends Component {
  render() {
    if (startFlag) {
      startFlag = false
      return <Redirect to="/signup"/>
    }
    return (
      <Router>
        <Fragment>
          <header>
            <Link to="/">start</Link>
            <Link to="/signup">sign up</Link>
          </header>
          <main>
            <Route
              exact
              path="/"
              render={
                (props) => <Welcome {...props} isAuthed={true} ><code onClick={startFlag=true}  >START</code></Welcome>
                }
                />
            <Route
              exact
              path="/signup"
              render={(props) => <SignUp {...props} isAuthed={true} />}
                />
            <Link to="/signup">sign up</Link>
          </main>
        </Fragment>
      </Router>
    );
  }
}

export default App;
