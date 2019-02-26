import React, { Component } from 'react'

const PictureInputStyle = {
	transform:'translate(-50%,-50%)',
	border:'2px dashed #424242',
	position:'relative',
	cursor:'pointer',
	width:'100%',
	left:'50%',
	top:'50%'
}

class PictureInput extends Component{
	constructor(props){
		super(props)
		this.state = {
			data:null
		}
	}
	click(e){
		console.log('clicked')
	}
	render(){
		return <img alt="Click or tap to upload" onClick={this.click} src='/upload.jpg' style={PictureInputStyle}/>
	}
}

export default PictureInput