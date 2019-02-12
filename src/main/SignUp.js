import React, { Component } from 'react'

import PictureInput from '../utils/PictureInput'

const Field = props => {
	if(!window.idCounter){
		window.idCounter = 0
	}
	window.idCounter++
	return (
		<div className="simple-input">
			<label htmlFor={"inp"+window.idCounter}>{props.name}</label>
			<input id={"inp"+window.idCounter} placeholder={props.pl||""} name={props.name.split(' ').join('-').toLowerCase()}/>
		</div>
		)
}
const SocialInput = props => {
	if(!window.idCounter){
		window.idCounter = 0
	}
	window.idCounter++
	return (
		<div className="social-input">
			<input id={"inp"+window.idCounter} placeholder={`https://${props.name}.com/you`} name={props.name.split(' ').join('-').toLowerCase()}/>
			<label htmlFor={"inp"+window.idCounter}>{ props.name[0].toUpperCase() + props.name.substr(1) }</label>
		</div>
		)
}


class SignUp extends Component{
    render(){
        return (
        	<form>
	        	<h2>Create Account</h2>
	        	<div className='b6 s12' style={{padding:'0 10%',marginBottom:'1em',position:'relative'}}>
	        		<PictureInput />
	        	</div>
	        	<div className='b6 s12 full-fields'>
		        	<Field name="First Name" pl="John"/>
		        	<Field name="Last Name" pl="Doe"/>
		        	<Field name="Email" pl="admin@example.com"/>
		        	<Field name="Display Name" pl="John_Doe17"/>
		        </div>
	        	<div className="big-input">
					<label htmlFor="inpn">About you</label>
					<br/>
					<textarea id="inpn" name="" placeholder="I like pizza"/>
				</div>
	        	<Field name="Password" pl="********"/>
	        	<Field name="Password Confirmation" pl="********"/>
	        	<h2 style={{marginTop:'1em'}}>Social Networks</h2>
	        	<SocialInput aside="true" name="facebook"/>
	        	<SocialInput aside="true" name="instagram"/>
	        	<SocialInput aside="true" name="twitter"/>
	        	<SocialInput aside="true" name="youtube"/>
	        	<SocialInput aside="true" name="quora"/>
	        	<button className='send-button'>Create Account</button>
	        </form>
	        )
    }
}

export default SignUp