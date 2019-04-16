import React, { Component } from 'react'

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
		return (
			<React.Fragment>
				<img alt="Click or tap to upload a new one" onClick={this.click} src='/upload.jpg'/>
				<span>Select an image</span>
			</React.Fragment>
		)
	}
}

export default PictureInput