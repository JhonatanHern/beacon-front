import React, { Fragment } from 'react'

import Acordeon from '../../utils/Acordeon'

const AddEpisode = (props)=>(
	<Fragment>
		<h1>Add Episode</h1>
		<Acordeon>
			<div className="upload-section">
				<span className="upload-button"></span> Select File
			</div>
			<div className="form-section">
				title
				<br/>
				<input/>
				<br/>
				<br/>
				description
				<br/>
				<textarea/>
			</div>
			<div>
				<h2>Select an image</h2>
				<div className="upload-zone">
					<div></div>
					<br/>
					Click here to add picture
				</div>
			</div>
			<div>
				<h2>Choose a quality level</h2>
				<select>
					<option value="low">low</option>
					<option value="medium">medium</option>
					<option value="high">high</option>
				</select>
			</div>
			<div>
				<h2>Select a Price</h2>
				<div className="centered-text">
					HOT: <input type="number"></input>
				</div>
			</div>
			<div>
				<h2>Select Category</h2>
				<div className="centered-text">
					<select>
						<option value="">Category #1</option>
						<option value="">Category #2</option>
						<option value="">Category #3</option>
						<option value="">Category #4</option>
						<option value="">Category #5</option>
						<option value="">Category #6</option>
					</select>
				</div>
			</div>
			<div>
				<h2>Insert Tags</h2>
				<div className="centered-text">
					<p>separate the tags using commas</p>
					<input style={{padding:'.3em'}} placeholder="Churchill,England,Greece,Red Cross"></input>
				</div>
			</div>
			<div>
				<h2>Add to reproduction list?</h2>
				
				<select>
					<option value="">Playlist #1</option>
					<option value="">Playlist #2</option>
					<option value="">Playlist #3</option>
				</select>
				<button className="centered-button">
					New Playlist
				</button>
			</div>
		</Acordeon>
	</Fragment>
)

export default AddEpisode