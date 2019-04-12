import React from 'react'
import { BrowserRouter as Router , Route , Switch } from "react-router-dom"

import Menu from './LandingPageComponents/Menu'
import LandingMain from './LandingPageComponents/LandingMain'
import Footer from './LandingPageComponents/Footer'

import Form from './LandingPageComponents/Form'

import './css/landing.scss'

const LandingPage = (props)=>(
	<Router>
		<div id="landing">
			<Menu/>
			<Switch>
				<Route exact path="/" component={LandingMain}/>
				<Route exact path="/auth/login"  render={props=><Form {...props} path="login"  />}/>
				<Route exact path="/auth/signup" render={props=><Form {...props} path="signup" />}/>
				<Route exact component={LandingMain}/>
			</Switch>
			<Footer/>
		</div>
	</Router>
)

export default LandingPage