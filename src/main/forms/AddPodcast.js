import React from 'react'
import { Link } from "react-router-dom"

const AddPodcast = (props)=>(
	<div className="simple-form">
		<h1>Add Podcast</h1>
		<Link to="podcast/iTunes">Import from iTunes</Link>
		<br/>
		<Link to="podcast/new">Create Podcast</Link>
	</div>
)

export default AddPodcast