import React from 'react'

const Slice = props => {
	return (
		<div>
			<label>{props.index}</label>
			<div>
				{props.children}
				<button>
					back
				</button>
				<button>
					next
				</button>
			</div>
		</div>
	)
}

class Acordeon extends React.Component{
	constructor(props){
		super(props)
		this.state = { current : 0 }
		this.goBack = this.goBack.bind( this )
		this.goNext = this.goNext.bind( this )
		this.setNumber = this.setNumber.bind( this )
	}
	setNumber(n){
		this.setState({current:n})
	}
	goBack(){
		if (this.state.current===0) {
			return console.log('error, count already in zero')
		}
		this.setState({current:this.state.current})
	}
	goNext(){
		if ( this.state.current === this.props.children.length - 1 ) {
			return console.log( 'error, count already in ' + this.state.current )
		}
		this.setState({current:(this.state.current+1)%this})
	}
	render(){
		return(
			<section className='acordeon'>
				{
					this.props.children.map((ch,i)=>
						<Slice  key={i} index={i} activate={()=>this.setNumber(i)} back={this.goBack} next={this.goNext}>
							{ch}
						</Slice>
					)
				}
			</section>
		)
	}
}

export default Acordeon