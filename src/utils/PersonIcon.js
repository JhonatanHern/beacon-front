import React , { Component } from 'react'

class PersonIcon extends Component{
	constructor(props){
		super(props)
		this.state = {}
		this.handleClick = this.handleClick.bind(this)
	}
	handleClick( e ){
		if ( this.props.onClick ) {
			this.props.onClick( e , ! this.state.open )
		} else if ( ! this.props.noWarn ){
			console.warn( 'Event not handled' )
			console.trace()
		}
	}
	render(){
		return (
			<div onClick={this.handleClick} style={{display:'flex',alignItems:'center'}}>
				My Channel
				<img alt="" src="defaultUser.png" className="header-like"/>
			</div>
			)
	}
}

export default PersonIcon