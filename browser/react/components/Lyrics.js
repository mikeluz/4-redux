import React from 'react';

export default function (props) {

	const artistChange = function (event) {
		props.setArtist(event.target.value);
	};

	const songChange = function (event) {
		props.setSong(event.target.value);
	};

	return (
		<div id="lyrics">
			<form onSubmit="">
			<div>
				<input type="text" value={props.artistQuery} placeholder="artist" onChange={artistChange}>Artist Search</input>
				<input type="text" value={props.songQuery} placeholder="song" onChange={songChange}>Song Search</input>
			</div>
				<pre>{props.text || 'Search Above!'}</pre>
				<button type='submit'>Submit</button>
			</form>
		</div>

	)

}