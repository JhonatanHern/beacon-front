import React from 'react'

const CreatePodcast = (props)=>(
	<div class="simple-form">
		<h1>New Podcast</h1>
		<label>name:</label>
		<input />
		<br/>
		<label>Category:</label>
		<select>
			<option value="">Category #1</option>
			<option value="">Category #2</option>
			<option value="">Category #3</option>
			<option value="">Category #4</option>
			<option value="">Category #5</option>
			<option value="">Category #6</option>
		</select>
		<label>Description:</label>
		<textarea />
		<br/>
		<label>Image:</label>
		<div className="white-container">
			<div className="upload-zone">
				<div></div>
				<br/>
				Click here to add picture
			</div>
		</div>
		<label>Tags:</label>
		<input placeholder="cars,trucks,bikes,boats"/>
		<br/>
		<label>Other authors:</label>
		<input placeholder="Address1,Address2,Address3,Address4"/>
		<br/>
		<br/>
		<button>Create Podcast</button>
	</div>
)

export default CreatePodcast