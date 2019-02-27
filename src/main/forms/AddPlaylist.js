import React, { Fragment } from 'react'

const AddPlaylist = (props)=>(
	<div class="simple-form">
		<h1>New Playlist</h1>
		name:
		<br/>
		<input />
		<br/>
		Description:
		<br/>
		<textarea />
		<br/>
		<button>Create Playlist</button>
	</div>
)

export default AddPlaylist