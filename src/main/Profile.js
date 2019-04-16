import React from 'react'

import PictureInput from '../utils/PictureInput'

const Field = props => {
	if(!window.idCounter){
		window.idCounter = 0
	}
	window.idCounter++
	return (
		<div className={"simple-input"+(props.className?(' '+props.className):'')}>
			<label htmlFor={"inp"+window.idCounter}>{props.name}</label>
			<input id={"inp"+window.idCounter} placeholder={ props.pl || "" } name={props.name.split(' ').join('-').toLowerCase()}/>
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

class Profile extends React.Component{
	state = {
		countries : null,
		cities : new Map(),
		currentCities : null
	}
	updateCountries = async () => {
		this.setState({countries:(await (await fetch('/countries/countries.json')).json())})
	}
	getCities = async e => {
		const code = e.target.value
		console.log(code)
		if(!code){
			this.setState({ currentCities : null })
			return
		}
		const mapResult = this.state.cities.get(code)
		if(mapResult){
			this.setState({ currentCities : mapResult })
			return
		}
		let data = (await (await fetch(`/countries/${code}.json`)).json())
		this.state.cities.set(code,data)
		this.setState({ currentCities : data })
	}
	render(props) {
		if ( !this.state.countries ) {
			this.updateCountries()
		}
		return(
			<form id="edit-profile-form">
				<h2>Edit Profile</h2>
				<section className="profile-basic">
					<div className="pic-holder">
						<h3>Basic Information</h3>
						<PictureInput />
					</div>
					<div className="basic-fields">
						<Field name="First Name" pl="John"/>
						<Field name="Last Name" pl="Doe"/>
						<Field name="Email" pl="admin@example.com"/>
						<Field name="Display Name" pl="John_Doe17"/>
						<Field name="Ocupation" pl="John_Doe17" className="wide"/>
						<div className="big-banner">Location</div>
						{
							this.state.countries?
								<select name="country" onChange={this.getCities} defaultValue="">
									<option disabled={true} value="">Select Country</option>
									{
										this.state.countries.map((c,i)=>(
											<option value={c.code} key={i}>{c.name}</option>
										))
									}
								</select>
							:
								<span>Loading...</span>
						}
						{
							this.state.currentCities?
								<select name="city"  defaultValue="">
									<option disabled={true} value="">Select City</option>
									{
										this.state.currentCities.map((c,i)=>(
											<option value={c} key={i}>{c}</option>
										))
									}
								</select>
							:
							<select name="city"></select>
						}
					</div>
				</section>
				<section className="profile-about">
					<h3>About me</h3>
					<label htmlFor="inpn">Section title</label>
					<br/>
					<input id="inpn" name="" placeholder="I like pizza"/>
					<br/>
					<label htmlFor="inpn">Description</label>
					<br/>
					<textarea id="inpn" name="" placeholder="I like pizza"/>
				</section>
				<section className="profile-social">
					<h2 style={{marginTop:'1em'}}>Social Networks</h2>
					<SocialInput aside="true" name="facebook"/>
					<SocialInput aside="true" name="instagram"/>
					<SocialInput aside="true" name="twitter"/>
					<SocialInput aside="true" name="youtube"/>
					<SocialInput aside="true" name="quora"/>
				</section>
				<button className='send-button'>Save</button>
			</form>
		)
	}
}

export default Profile