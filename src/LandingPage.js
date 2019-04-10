import React from 'react'
import { BrowserRouter as Router , Route } from "react-router-dom"

import Menu from './LandingPageComponents/Menu'
import LandingMain from './LandingPageComponents/LandingMain'

import './css/landing.scss'

const LandingPage = (props)=>(
	<Router>
		<div id="landing">
			<Menu/>
			<Route exact path="/" component={LandingMain}/>
		</div>
	</Router>
)

export default LandingPage