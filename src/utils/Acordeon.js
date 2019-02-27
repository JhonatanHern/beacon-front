import React from 'react'

const Slice = props => (
	<div className={props.current===props.index?'active':null}>
		<label onClick={props.activate} >{props.index + 1}</label>
		<div>
			<section>
				{props.children}
				<br/>
				<div className="acordeon-buttons">
					{
						props.index > 0 &&
						<button onClick={props.back}>
							back
						</button>
					}
					{
						props.isLast?
							<button onClick={props.end}>
								finnish
							</button>
						:
							<button onClick={props.next}>
								next
							</button>
					}
				</div>
			</section>
		</div>
	</div>
	)

class Acordeon extends React.Component{
	constructor(props){
		super(props)
		this.state = { current : 0 }
		this.goBack = this.goBack.bind( this )
		this.goNext = this.goNext.bind( this )
		this.sendForm = this.sendForm.bind( this )
		this.setNumber = this.setNumber.bind( this )
	}
	sendForm(){
		console.log('SEND THE FORM')
	}
	setNumber(n){
		this.setState({current:n})
	}
	goBack(){
		if (this.state.current===0) {
			return console.log('error, count already in zero')
		}
		this.setState({current:this.state.current-1})
	}
	goNext(){
		if ( this.state.current === this.props.children.length - 1 ) {
			return console.log( 'error, count already in ' + this.state.current )
		}
		this.setState({current:(this.state.current+1)})
	}
	render(){
		return(
			<section className='acordeon'>
				{
					this.props.children.map((ch,i)=>
						<Slice 
							key={i}
							index={i}
							activate={()=>this.setNumber(i)}
							back={this.goBack}
							next={this.goNext}
							current={this.state.current}
							isLast={i===this.props.children.length-1}
							end={this.sendForm}
							>
							{ch}
						</Slice>
					)
				}
			</section>
		)
	}
}

export default Acordeon