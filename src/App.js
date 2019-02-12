import React, { Component , Fragment } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import './App.css'

import SignUp from './main/SignUp'
import Welcome from './main/Welcome'

class App extends Component {
  constructor(props){
    super(props)
  }
  render() {
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
                (props) => <Welcome {...props} isAuthed={true} />
                }
                />
            <Route
              exact
              path="/signup"
              render={
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
