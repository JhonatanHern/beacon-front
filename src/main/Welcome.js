import React, { Component , Fragment } from 'react'
// import { Link } from "react-router-dom"

const centerCSS = {
	width:'70%',
	marginLeft:'15%'
}

const pCSS = {
	textAlign : 'center',
	fontWeight : 'bold' ,
	fontSize:'1.4em' ,
	color : '#ccc',
	...centerCSS ,
}

const buttCSS = {
	transform:'translateX(-50%)',
	position:'relative',
	backgroundColor:'rgba(255,255,255,.8)',
	left:'50%',
	fontSize:'1.4em' ,
	border:'none',
	cursor:'pointer',
	// border:'2px solid gray',
	borderRadius:'.4em',
	minWidth:'30%',
	padding:'.4em'

}

class Welcome extends Component{
	render(){
		console.log('children ',this.props.children)
		return (
			<Fragment>
				<img alt="beacon" src="/beacon.png" style={centerCSS}/>
				<p style={pCSS}>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat.
				</p>
				<button className="hover" style={buttCSS}>
					{this.props.children}
				</button>
			</Fragment>
		)
	}
}

export default Welcome