import React, { Component } from 'react'

class BurgerIcon extends Component{
	constructor(props){
		super(props)
		this.state = {
			open : false
		}
		this.handleClick = this.handleClick.bind(this)
	}
	handleClick( e ){
		if ( this.props.onClick ) {
			this.props.onClick( e , ! this.state.open )
			this.setState( { open : ! this.state.open } )
		} else if ( ! this.props.noWarn ){
			console.warn( 'Event not handled' )
			console.trace()
		}
	}
	render(){
		return (
			<div onClick={this.handleClick} style={{display:'flex',alignItems:'center'}}>
				Add
				<div className={ "burger-icon" + ( this.state.open ? ' burger-icon-open' : '' ) }>
					<span></span>
					<span></span>
				</div>
			</div>
			)
	}
}

export default BurgerIcon